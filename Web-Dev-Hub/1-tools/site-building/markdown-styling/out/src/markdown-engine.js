"use strict";
// tslint:disable no-var-requires member-ordering
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownEngine = void 0;
const cheerio = require("cheerio");
const child_process_1 = require("child_process");
const fs = require("fs");
const path = require("path");
const request = require("request");
const slash = require("slash");
const YAML = require("yamljs");
const ebook_convert_1 = require("./ebook-convert");
const heading_id_generator_1 = require("./heading-id-generator");
const markdown_convert_1 = require("./markdown-convert");
const markdown_engine_config_1 = require("./markdown-engine-config");
const pandoc_convert_1 = require("./pandoc-convert");
const prince_convert_1 = require("./prince-convert");
const toc_1 = require("./toc");
const transformer_1 = require("./transformer");
const utility = require("./utility");
const code_fences_1 = require("./custom-markdown-it-features/code-fences");
const critic_markup_1 = require("./custom-markdown-it-features/critic-markup");
const emoji_1 = require("./custom-markdown-it-features/emoji");
const html5_embed_1 = require("./custom-markdown-it-features/html5-embed");
const math_1 = require("./custom-markdown-it-features/math");
const wikilink_1 = require("./custom-markdown-it-features/wikilink");
const code_block_styling_1 = require("./render-enhancers/code-block-styling");
const embedded_local_images_1 = require("./render-enhancers/embedded-local-images");
const embedded_svgs_1 = require("./render-enhancers/embedded-svgs");
// import enhanceWithEmojiToSvg from "./render-enhancers/emoji-to-svg";
const extended_table_syntax_1 = require("./render-enhancers/extended-table-syntax");
const fenced_code_chunks_1 = require("./render-enhancers/fenced-code-chunks");
const fenced_diagrams_1 = require("./render-enhancers/fenced-diagrams");
const fenced_math_1 = require("./render-enhancers/fenced-math");
const resolved_image_paths_1 = require("./render-enhancers/resolved-image-paths");
const attributes_1 = require("./lib/attributes");
const block_info_1 = require("./lib/block-info");
const utility_1 = require("./utility");
const extensionDirectoryPath = utility.extensionDirectoryPath;
const MarkdownIt = require(path.resolve(extensionDirectoryPath, "./dependencies/markdown-it/markdown-it.min.js"));
const CryptoJS = require(path.resolve(extensionDirectoryPath, "./dependencies/crypto-js/crypto-js.js"));
const defaults = {
    html: true,
    xhtmlOut: false,
    breaks: true,
    langPrefix: "language-",
    linkify: true,
    linkTarget: "",
    typographer: true,
};
let MODIFY_SOURCE = null;
const dependentLibraryMaterials = [
    {
        key: "vega",
        version: "5.4.0",
    },
    {
        key: "vega-lite",
        version: "3.3.0",
    },
    {
        key: "vega-embed",
        version: "4.2.0",
    },
];
/**
 * The markdown engine that can be used to parse markdown and export files
 */
let MarkdownEngine = /** @class */ (() => {
    class MarkdownEngine {
        constructor(args) {
            // caches
            this.graphsCache = {};
            // code chunks
            this.codeChunksData = {};
            // files cache
            this.filesCache = {};
            /**
             * cachedHTML is the cache of html generated from the markdown file.
             */
            // private cachedHTML:string = '';
            /**
             * Check whether the preview is in presentation mode.
             */
            this.isPreviewInPresentationMode = false;
            this.filePath = args.filePath;
            this.fileDirectoryPath = path.dirname(this.filePath);
            this.projectDirectoryPath =
                args.projectDirectoryPath || this.fileDirectoryPath;
            this.originalConfig = args.config;
            this.resetConfig();
            this.headings = [];
            this.tocHTML = "";
            this.md = new MarkdownIt(Object.assign(Object.assign({}, defaults), { typographer: this.enableTypographer, breaks: this.breakOnSingleNewLine, linkify: this.enableLinkify }));
            // markdown-it extensions
            const extensions = [
                "./dependencies/markdown-it/extensions/markdown-it-footnote.min.js",
                "./dependencies/markdown-it/extensions/markdown-it-sub.min.js",
                "./dependencies/markdown-it/extensions/markdown-it-sup.min.js",
                "./dependencies/markdown-it/extensions/markdown-it-deflist.min.js",
                "./dependencies/markdown-it/extensions/markdown-it-abbr.min.js",
                "./dependencies/markdown-it/extensions/markdown-it-mark.min.js",
            ];
            for (const js of extensions) {
                const fullPath = path.resolve(extensionDirectoryPath, js);
                const plugin = require(fullPath);
                this.md.use(plugin);
            }
            code_fences_1.default(this.md, this.config);
            critic_markup_1.default(this.md, this.config);
            emoji_1.default(this.md, this.config);
            html5_embed_1.default(this.md, this.config);
            math_1.default(this.md, this.config);
            wikilink_1.default(this.md, this.config);
        }
        /**
         * Modify markdown source, append `result` after corresponding code chunk.
         * @param codeChunkData
         * @param result
         */
        static modifySource(codeChunkData, result, filePath) {
            return __awaiter(this, void 0, void 0, function* () {
                if (MODIFY_SOURCE) {
                    yield MODIFY_SOURCE(codeChunkData, result, filePath);
                }
                else {
                    // TODO: directly modify the local file.
                }
                codeChunkData.running = false;
                return result;
            });
        }
        /**
         * Bind cb to MODIFY_SOURCE
         * @param cb
         */
        static onModifySource(cb) {
            MODIFY_SOURCE = cb;
        }
        /**
         * Reset config
         */
        resetConfig() {
            // Please notice that ~/.mume/config.json has the highest priority.
            this.config = Object.assign(Object.assign(Object.assign({}, markdown_engine_config_1.defaultMarkdownEngineConfig), (this.originalConfig || {})), (utility.configs.config || {}));
            this.initConfig();
        }
        /**
         * Set default values
         */
        initConfig() {
            this.interpolateConfig(this.config, this.projectDirectoryPath);
            // break on single newline
            this.breakOnSingleNewLine = this.config.breakOnSingleNewLine;
            // enable typographer
            this.enableTypographer = this.config.enableTypographer;
            // enable linkify
            this.enableLinkify = this.config.enableLinkify;
            // protocal whitelist
            const protocolsWhiteList = (this.config.protocolsWhiteList ||
                markdown_engine_config_1.defaultMarkdownEngineConfig.protocolsWhiteList)
                .split(",")
                .map((x) => x.trim());
            this.protocolsWhiteListRegExp = new RegExp("^(" + protocolsWhiteList.join("|") + ")"); // eg /^(http:\/\/|https:\/\/|atom:\/\/|file:\/\/|mailto:|tel:)/
        }
        interpolateConfig(config, projectDirectoryPath) {
            var _a, _b, _c, _d;
            const pattern = /\${\s*(\w+?)\s*}/g; // Replace ${property}
            const replacements = {
                projectDir: projectDirectoryPath,
                workspaceFolder: projectDirectoryPath,
            };
            // Replace certains paths
            config.configPath = (_a = config.configPath) === null || _a === void 0 ? void 0 : _a.replace(pattern, (match, token) => replacements[token] || match);
            config.imageFolderPath = (_b = config.imageFolderPath) === null || _b === void 0 ? void 0 : _b.replace(pattern, (match, token) => replacements[token] || match);
            config.imageMagickPath = (_c = config.imageMagickPath) === null || _c === void 0 ? void 0 : _c.replace(pattern, (match, token) => replacements[token] || match);
            config.chromePath = (_d = config.chromePath) === null || _d === void 0 ? void 0 : _d.replace(pattern, (match, token) => replacements[token] || match);
        }
        updateConfiguration(config) {
            this.config = Object.assign(Object.assign({}, this.config), config);
            this.initConfig();
            this.md.set({
                breaks: this.breakOnSingleNewLine,
                typographer: this.enableTypographer,
                linkify: this.enableLinkify,
            });
        }
        /*
        public cacheSVG(code:string, svg:string) {
          svg = CryptoJS.AES.decrypt(svg, 'markdown-preview-enhanced').toString(CryptoJS.enc.Utf8)
          // const base64 = new Buffer(svg).toString('base64')
          // const img = `<img src="data:image/svg+xml;charset=utf-8;base64,${base64}">`
          this.graphsCache[md5(code)] = svg
        }
        */
        cacheCodeChunkResult(id, result) {
            const codeChunkData = this.codeChunksData[id];
            if (!codeChunkData) {
                return;
            }
            codeChunkData.result = CryptoJS.AES.decrypt(result, "mume").toString(CryptoJS.enc.Utf8);
        }
        /**
         * Generate scripts string for preview usage.
         */
        generateScriptsForPreview(isForPresentation = false, yamlConfig = {}, vscodePreviewPanel = null) {
            let scripts = "";
            // prevent `id="exports"` element from linked to `window` object.
            scripts += `<script>var exports = undefined</script>`;
            // jquery
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/jquery/jquery.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            // jquery contextmenu
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/jquery-contextmenu/jquery.ui.position.min.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/jquery-contextmenu/jquery.contextMenu.min.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            // jquery modal
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/jquery-modal/jquery.modal.min.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            // crpto-js
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/crypto-js/crypto-js.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            // mermaid
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./dependencies/mermaid/mermaid.min.js`), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            // zenuml
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/sequence-diagram/vue.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/sequence-diagram/sequence-diagram.min.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            // wavedrome
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/wavedrom/default.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            scripts += `<script type="text/javascript" src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/wavedrom/wavedrom.min.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            // math
            if (this.config.mathRenderingOption === "MathJax" ||
                this.config.usePandocParser) {
                const mathJaxConfig = utility.configs.mathjaxConfig;
                mathJaxConfig["tex2jax"] = mathJaxConfig["tex2jax"] || {};
                mathJaxConfig["tex2jax"]["inlineMath"] = this.config.mathInlineDelimiters;
                mathJaxConfig["tex2jax"]["displayMath"] = this.config.mathBlockDelimiters;
                mathJaxConfig["HTML-CSS"]["imageFont"] = null; // Disable image font, otherwise the preview will only display black color image.
                mathJaxConfig["root"] = utility.addFileProtocol(slash(path.resolve(utility.extensionDirectoryPath, "./dependencies/mathjax")), vscodePreviewPanel);
                scripts += `<script type="text/javascript" async src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/mathjax/MathJax.js"), vscodePreviewPanel)}" charset="UTF-8"></script>`;
                scripts += `<script type="text/x-mathjax-config"> MathJax.Hub.Config(${JSON.stringify(mathJaxConfig)}); </script>`;
            }
            // reveal.js
            if (isForPresentation) {
                scripts += `<script src='${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/reveal/lib/js/head.min.js"), vscodePreviewPanel)}'></script>`;
                scripts += `<script src='${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/reveal/js/reveal.js"), vscodePreviewPanel)}'></script>`;
                let presentationConfig = yamlConfig["presentation"] || {};
                if (typeof presentationConfig !== "object") {
                    presentationConfig = {};
                }
                let dependencies = presentationConfig["dependencies"] || [];
                if (!(dependencies instanceof Array)) {
                    dependencies = [];
                }
                presentationConfig["dependencies"] = dependencies;
                scripts += `
      <script>
        Reveal.initialize(${JSON.stringify(Object.assign({ margin: 0.1 }, presentationConfig))})
      </script>
      `;
            }
            // mermaid init
            scripts += `<script>
${utility.configs.mermaidConfig}
if (window['MERMAID_CONFIG']) {
  window['MERMAID_CONFIG'].startOnLoad = false
  window['MERMAID_CONFIG'].cloneCssStyles = false
  window['MERMAID_CONFIG'].theme = "${this.config.mermaidTheme}"
}
mermaid.initialize(window['MERMAID_CONFIG'] || {})
if (typeof(window['Reveal']) !== 'undefined') {
  function mermaidRevealHelper(event) {
    var currentSlide = event.currentSlide
    var diagrams = currentSlide.querySelectorAll('.mermaid')
    for (var i = 0; i < diagrams.length; i++) {
      var diagram = diagrams[i]
      if (!diagram.hasAttribute('data-processed')) {
        mermaid.init(null, diagram, ()=> {
          Reveal.slide(event.indexh, event.indexv)
        })
      }
    }
  }
  Reveal.addEventListener('slidechanged', mermaidRevealHelper)
  Reveal.addEventListener('ready', mermaidRevealHelper)
} else {
  // The line below will cause mermaid bug in preview.
  // mermaid.init(null, document.getElementsByClassName('mermaid'))
}
</script>`;
            // wavedrom init script
            if (isForPresentation) {
                scripts += `<script>
  WaveDrom.ProcessAll()
      </script>`;
            }
            // flowchart.js
            scripts += `<script src='${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/raphael/raphael.js"), vscodePreviewPanel)}'></script>`;
            scripts += `<script src='${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/flowchart/flowchart.min.js"), vscodePreviewPanel)}'></script>`;
            // flowchart init script
            if (isForPresentation) {
                scripts += `<script>
      var flowcharts = document.getElementsByClassName('flow')
      for (var i = 0; i < flowcharts.length; i++) {
        var flow = flowcharts[i]
        try {
          var diagram = flowchart.parse(flow.textContent)
          flow.id = 'flow_' + i
          flow.innerHTML = ''
          diagram.drawSVG(flow.id)
        } catch (error) {
          flow.innerHTML = '<pre class="language-text">' + error.toString() + '</pre>'
        }
      }
      </script>`;
            }
            dependentLibraryMaterials.forEach(({ key }) => {
                scripts += `<script src="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./dependencies/${key}/${key}.min.js`), vscodePreviewPanel)}" charset="UTF-8"></script>`;
            });
            if (isForPresentation) {
                scripts += `<script>
      var vegaEls = document.querySelectorAll('.vega, .vega-lite');
      function reportVegaError(el, error) {
        el.innerHTML = '<pre class="language-text">' + error.toString() + '</pre>'
      }
      for (var i = 0; i < vegaEls.length; i++) {
        const vegaEl = vegaEls[i]
        try {
          var spec = JSON.parse(vegaEl.textContent);
          vegaEmbed(vegaEl, spec, { actions: false, renderer: 'svg' })
          .catch(function(error) {
            reportVegaError(vegaEl, error);
          })
        } catch (error) {
          reportVegaError(vegaEl, error);
        }
      }
      </script>`;
            }
            // sequence diagram
            scripts += `<script src='${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/webfont/webfontloader.js"), vscodePreviewPanel)}'></script>`;
            scripts += `<script src='${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/underscore/underscore.js"), vscodePreviewPanel)}'></script>`;
            scripts += `<script src='${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/js-sequence-diagrams/sequence-diagram-min.js"), vscodePreviewPanel)}'></script>`;
            // sequence diagram init script
            if (isForPresentation) {
                scripts += `<script>
      var sequenceDiagrams = document.getElementsByClassName('sequence')
      for (var i = 0; i < sequenceDiagrams.length; i++) {
        var sequence = sequenceDiagrams[i]
        try {
          var diagram = Diagram.parse(sequence.textContent)
          var theme = sequence.getAttribute('theme') || 'simple'
          sequence.id = 'sequence_' + i
          sequence.innerHTML = ''
          diagram.drawSVG(sequence.id, {theme: theme})
        } catch (error) {
          sequence.innerHTML = '<pre class="language-text">' + error.toString() + '</pre>'
        }
      }
      </script>`;
            }
            return scripts;
        }
        /**
         * Automatically pick code block theme for preview.
         */
        getPrismTheme(isPresentationMode = false, yamlConfig = {}) {
            if (this.config.codeBlockTheme === "auto.css") {
                /**
                 * Automatically pick code block theme for preview.
                 */
                if (isPresentationMode) {
                    const presentationTheme = yamlConfig["presentation"] &&
                        typeof yamlConfig["presentation"] === "object" &&
                        yamlConfig["presentation"]["theme"]
                        ? yamlConfig["presentation"]["theme"]
                        : this.config.revealjsTheme;
                    return (MarkdownEngine.AutoPrismThemeMapForPresentation[presentationTheme] ||
                        "default.css");
                }
                else {
                    return (MarkdownEngine.AutoPrismThemeMap[this.config.previewTheme] ||
                        "default.css");
                }
            }
            else {
                return this.config.codeBlockTheme;
            }
        }
        /**
         * Generate styles string for preview usage.
         */
        generateStylesForPreview(isPresentationMode = false, yamlConfig = {}, vscodePreviewPanel = null) {
            let styles = "";
            // loading.css
            styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./styles/loading.css"), vscodePreviewPanel)}">`;
            // jquery-contextmenu
            styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./dependencies/jquery-contextmenu/jquery.contextMenu.min.css`), vscodePreviewPanel)}">`;
            // jquery-modal
            styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./dependencies/jquery-modal/jquery.modal.min.css`), vscodePreviewPanel)}">`;
            // check math
            if (this.config.mathRenderingOption === "KaTeX" &&
                !this.config.usePandocParser) {
                styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./dependencies/katex/katex.min.css"), vscodePreviewPanel)}">`;
            }
            // check sequence diagram
            styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./dependencies/js-sequence-diagrams/sequence-diagram-min.css`), vscodePreviewPanel)}">`;
            // check font-awesome
            styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./dependencies/font-awesome/css/font-awesome.min.css`), vscodePreviewPanel)}">`;
            // check preview theme and revealjs theme
            if (!isPresentationMode) {
                styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./styles/preview_theme/${this.config.previewTheme}`), vscodePreviewPanel)}">`;
            }
            else {
                styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(extensionDirectoryPath, "./dependencies/reveal/css/reveal.css"), vscodePreviewPanel)}" >`;
                styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(extensionDirectoryPath, `./dependencies/reveal/css/theme/${yamlConfig["presentation"] &&
                    typeof yamlConfig["presentation"] === "object" &&
                    yamlConfig["presentation"]["theme"]
                    ? yamlConfig["presentation"]["theme"]
                    : this.config.revealjsTheme}`), vscodePreviewPanel)}" >`;
            }
            // check prism
            styles += `<link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, `./styles/prism_theme/${this.getPrismTheme(isPresentationMode, yamlConfig)}`), vscodePreviewPanel)}">`;
            // style template
            styles += `<link rel="stylesheet" media="screen" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./styles/style-template.css"), vscodePreviewPanel)}">`;
            // global styles
            styles += `<style>${utility.configs.globalStyle}</style>`;
            return styles;
        }
        /**
         * Generate <style> and <link> string from an array of file paths.
         * @param JSAndCssFiles
         */
        generateJSAndCssFilesForPreview(JSAndCssFiles = [], vscodePreviewPanel = null) {
            let output = "";
            JSAndCssFiles.forEach((sourcePath) => {
                let absoluteFilePath = sourcePath;
                if (sourcePath[0] === "/") {
                    absoluteFilePath = utility.addFileProtocol(path.resolve(this.projectDirectoryPath, "." + sourcePath), vscodePreviewPanel);
                }
                else if (sourcePath.match(/^file:\/\//) ||
                    sourcePath.match(/^https?\:\/\//)) {
                    // do nothing
                }
                else {
                    absoluteFilePath = utility.addFileProtocol(path.resolve(this.fileDirectoryPath, sourcePath), vscodePreviewPanel);
                }
                if (absoluteFilePath.endsWith(".js")) {
                    output += `<script type="text/javascript" src="${absoluteFilePath}"></script>`;
                }
                else {
                    // css
                    output += `<link rel="stylesheet" href="${absoluteFilePath}">`;
                }
            });
            return output;
        }
        /**
         * Generate html template for preview.
         */
        generateHTMLTemplateForPreview({ inputString = "", body = "", webviewScript = "", scripts = "", styles = "", head = `<base href="${this.filePath}">`, config = {}, vscodePreviewPanel = null, contentSecurityPolicy = "", }) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!inputString) {
                    inputString = fs.readFileSync(this.filePath, { encoding: "utf-8" });
                }
                if (!webviewScript) {
                    webviewScript = utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./out/src/webview.js"), vscodePreviewPanel);
                }
                if (!body) {
                    // default body
                    body = `
        <div class="refreshing-icon"></div>
        <div id="md-toolbar">
          <div class="back-to-top-btn btn"><span>⬆︎</span></div>
          <div class="refresh-btn btn"><span>⟳︎</span></div>
          <div class="sidebar-toc-btn btn"><span>§</span></div>
        </div>
        <div id="image-helper-view">
          <h4>Image Helper</h4>
          <div class="upload-div">
            <label>Link</label>
            <input type="text" class="url-editor" placeholder="enter image URL here, then press \'Enter\' to insert.">
            <div class="splitter"></div>
            <label class="copy-label">Copy image to root /assets folder</label>
            <div class="drop-area paster">
              <p class="paster"> Click me to browse image file </p>
              <input class="file-uploader paster" type="file" style="display:none;" multiple="multiple" >
            </div>
            <div class="splitter"></div>
            <label>Upload</label>
            <div class="drop-area uploader">
              <p class="uploader">Click me to browse image file</p>
              <input class="file-uploader uploader" type="file" style="display:none;" multiple="multiple" >
            </div>
            <div class="uploader-choice">
              <span>use</span>
              <select class="uploader-select">
                <option>imgur</option>
                <option>sm.ms</option>
                <option>qiniu</option>
              </select>
              <span> to upload images</span>
            </div>
            <a href="#" id="show-uploaded-image-history">Show history</a>
          </div>
        </div>
        <!-- <div class="markdown-spinner"> Loading Markdown\u2026 </div> -->
    `;
                }
                const { yamlConfig, JSAndCssFiles, html } = yield this.parseMD(inputString, {
                    isForPreview: true,
                    useRelativeFilePath: false,
                    hideFrontMatter: false,
                    vscodePreviewPanel,
                });
                const isPresentationMode = yamlConfig["isPresentationMode"];
                const htmlTemplate = `<!DOCTYPE html>
      <html>
      <head>
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
        <meta id="mume-data" data-config="${utility.escapeString(JSON.stringify(Object.assign(Object.assign({}, this.config), config)))}" data-time="${Date.now()}">
        <meta charset="UTF-8">
        ${contentSecurityPolicy
                    ? `<meta
          http-equiv="Content-Security-Policy"
          content="${contentSecurityPolicy}"
        />`
                    : ""}
        ${this.generateStylesForPreview(isPresentationMode, yamlConfig, vscodePreviewPanel)}
        ${styles}
        <link rel="stylesheet" href="${utility.addFileProtocol(path.resolve(utility.extensionDirectoryPath, "./styles/preview.css"), vscodePreviewPanel)}">
        ${this.generateJSAndCssFilesForPreview(JSAndCssFiles, vscodePreviewPanel)}
        ${head}
      </head>
      <body class="preview-container">
        <div class="mume markdown-preview" for="preview" ${isPresentationMode ? "data-presentation-mode" : ""}>
          ${html}
        </div>
        ${body}
      </body>
      ${this.generateScriptsForPreview(isPresentationMode, yamlConfig, vscodePreviewPanel)}
      ${scripts}
      <script src="${webviewScript}"></script>
      </html>`;
                return htmlTemplate;
            });
        }
        /**
         * Generate HTML content
         * @param html: this is the final content you want to put.
         * @param yamlConfig: this is the front matter.
         * @param option: HTMLTemplateOption
         */
        generateHTMLTemplateForExport(html, yamlConfig = {}, options) {
            return __awaiter(this, void 0, void 0, function* () {
                // get `id` and `class`
                const elementId = yamlConfig["id"] || "";
                let elementClass = yamlConfig["class"] || [];
                if (typeof elementClass === "string") {
                    elementClass = [elementClass];
                }
                elementClass = elementClass.join(" ");
                // math style and script
                let mathStyle = "";
                if (this.config.mathRenderingOption === "MathJax" ||
                    this.config.usePandocParser) {
                    // TODO
                    const mathJaxConfig = yield utility.getMathJaxConfig(this.config.configPath);
                    mathJaxConfig["tex2jax"]["inlineMath"] = this.config.mathInlineDelimiters;
                    mathJaxConfig["tex2jax"]["displayMath"] = this.config.mathBlockDelimiters;
                    if (options.offline) {
                        mathStyle = `
        <script type="text/x-mathjax-config">
          MathJax.Hub.Config(${JSON.stringify(mathJaxConfig)});
        </script>
        <script type="text/javascript" async src="file:///${path.resolve(extensionDirectoryPath, "./dependencies/mathjax/MathJax.js")}" charset="UTF-8"></script>
        `;
                    }
                    else {
                        mathStyle = `
        <script type="text/x-mathjax-config">
          MathJax.Hub.Config(${JSON.stringify(mathJaxConfig)});
        </script>
        <script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js"></script>
        `;
                    }
                }
                else if (this.config.mathRenderingOption === "KaTeX") {
                    if (options.offline) {
                        mathStyle = `<link rel="stylesheet" href="file:///${path.resolve(extensionDirectoryPath, "./dependencies/katex/katex.min.css")}">`;
                    }
                    else {
                        mathStyle = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css">`;
                    }
                }
                else {
                    mathStyle = "";
                }
                // font-awesome
                let fontAwesomeStyle = "";
                if (html.indexOf('<i class="fa ') >= 0) {
                    if (options.offline) {
                        fontAwesomeStyle = `<link rel="stylesheet" href="file:///${path.resolve(extensionDirectoryPath, `./dependencies/font-awesome/css/font-awesome.min.css`)}">`;
                    }
                    else {
                        fontAwesomeStyle = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`;
                    }
                }
                // mermaid
                let mermaidScript = "";
                let mermaidInitScript = "";
                if (html.indexOf(' class="mermaid') >= 0) {
                    if (options.offline) {
                        mermaidScript = `<script type="text/javascript" src="file:///${path.resolve(extensionDirectoryPath, "./dependencies/mermaid/mermaid.min.js")}" charset="UTF-8"></script>`;
                    }
                    else {
                        mermaidScript = `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/mermaid@8.8.4/dist/mermaid.min.js"></script>`;
                    }
                    const mermaidConfig = yield utility.getMermaidConfig(this.config.configPath);
                    mermaidInitScript += `<script>
${mermaidConfig}
if (window['MERMAID_CONFIG']) {
  window['MERMAID_CONFIG'].startOnLoad = false
  window['MERMAID_CONFIG'].cloneCssStyles = false
  window['MERMAID_CONFIG'].theme = "${this.config.mermaidTheme}"
}
mermaid.initialize(window['MERMAID_CONFIG'] || {})
if (typeof(window['Reveal']) !== 'undefined') {
  function mermaidRevealHelper(event) {
    var currentSlide = event.currentSlide
    var diagrams = currentSlide.querySelectorAll('.mermaid')
    for (var i = 0; i < diagrams.length; i++) {
      var diagram = diagrams[i]
      if (!diagram.hasAttribute('data-processed')) {
        mermaid.init(null, diagram, ()=> {
          Reveal.slide(event.indexh, event.indexv)
        })
      }
    }
  }
  Reveal.addEventListener('slidechanged', mermaidRevealHelper)
  Reveal.addEventListener('ready', mermaidRevealHelper)
} else {
  mermaid.init(null, document.getElementsByClassName('mermaid'))
}
</script>`;
                }
                // zenuml
                let zenumlScript = ``;
                if (html.indexOf(' class="zenuml') >= 0) {
                    if (options.offline) {
                        zenumlScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/sequence-diagram/vue.js")}" charset="UTF-8"></script>`;
                        zenumlScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/sequence-diagram/sequence-diagram.min.js")}" charset="UTF-8"></script>`;
                    }
                    else {
                        zenumlScript += `<script type="text/javascript" src="https://unpkg.com/vue"></script>`;
                        zenumlScript += `<script type="text/javascript" src="https://unpkg.com/sequence-diagram"></script>`;
                    }
                }
                // wavedrom
                let wavedromScript = ``;
                let wavedromInitScript = ``;
                if (html.indexOf(' class="wavedrom') >= 0) {
                    if (options.offline) {
                        wavedromScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/wavedrom/default.js")}" charset="UTF-8"></script>`;
                        wavedromScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/wavedrom/wavedrom.min.js")}" charset="UTF-8"></script>`;
                    }
                    else {
                        wavedromScript += `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/wavedrom/1.4.1/skins/default.js"></script>`;
                        wavedromScript += `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/wavedrom/1.4.1/wavedrom.min.js"></script>`;
                    }
                    wavedromInitScript = `<script>WaveDrom.ProcessAll()</script>`;
                }
                // vega and vega-lite with vega-embed
                // https://vega.github.io/vega/usage/#embed
                let vegaScript = ``;
                let vegaInitScript = ``;
                if (html.indexOf(' class="vega') >= 0 ||
                    html.indexOf(' class="vega-lite') >= 0) {
                    dependentLibraryMaterials.forEach(({ key, version }) => {
                        vegaScript += options.offline
                            ? `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, `./dependencies/${key}/${key}.min.js`)}" charset="UTF-8"></script>`
                            : `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/${key}@${version}/build/${name}.js"></script>`;
                    });
                    vegaInitScript += `<script>
      var vegaEls = document.querySelectorAll('.vega, .vega-lite');
      function reportVegaError(el, error) {
        el.innerHTML = '<pre class="language-text">' + error.toString() + '</pre>'
      }
      for (var i = 0; i < vegaEls.length; i++) {
        const vegaEl = vegaEls[i]
        try {
          var spec = JSON.parse(vegaEl.textContent);
          vegaEmbed(vegaEl, spec, { actions: false, renderer: 'svg' })
          .catch(function(error) {
            reportVegaError(vegaEl, error);
          })
        } catch (error) {
          reportVegaError(vegaEl, error);
        }
      }
      </script>`;
                }
                // flowchart
                let flowchartScript = ``;
                let flowchartInitScript = ``;
                if (html.indexOf(' class="flow') >= 0) {
                    if (options.offline) {
                        flowchartScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/raphael/raphael.js")}" charset="UTF-8"></script>`;
                        flowchartScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/flowchart/flowchart.min.js")}" charset="UTF-8"></script>`;
                    }
                    else {
                        flowchartScript += `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js"></script>`;
                        flowchartScript += `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/flowchart/1.7.0/flowchart.min.js"></script>`;
                    }
                    flowchartInitScript = `<script>
var flowcharts = document.getElementsByClassName('flow')
for (var i = 0; i < flowcharts.length; i++) {
  var flow = flowcharts[i]
  try {
    var diagram = flowchart.parse(flow.textContent)
    flow.id = 'flow_' + i
    flow.innerHTML = ''
    diagram.drawSVG(flow.id)
  } catch (error) {
    flow.innerHTML = '<pre class="language-text">' + error.toString() + '</pre>'
  }
}
</script>`;
                }
                // sequence diagrams
                let sequenceDiagramScript = ``;
                let sequenceDiagramStyle = ``;
                let sequenceDiagramInitScript = ``;
                if (html.indexOf(' class="sequence') >= 0) {
                    if (options.offline) {
                        sequenceDiagramScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/webfont/webfontloader.js")}" charset="UTF-8"></script>`;
                        sequenceDiagramScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/raphael/raphael.js")}" charset="UTF-8"></script>`;
                        sequenceDiagramScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/underscore/underscore.js")}" charset="UTF-8"></script>`;
                        sequenceDiagramScript += `<script type="text/javascript" src="file:///${path.resolve(utility.extensionDirectoryPath, "./dependencies/js-sequence-diagrams/sequence-diagram-min.js")}" charset="UTF-8"></script>`;
                        sequenceDiagramStyle = `<link rel="stylesheet" href="file:///${path.resolve(extensionDirectoryPath, `./dependencies/js-sequence-diagrams/sequence-diagram-min.css`)}">`;
                    }
                    else {
                        sequenceDiagramScript += `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/webfont/1.6.28/webfontloader.js"></script>`;
                        sequenceDiagramScript += `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js"></script>`;
                        sequenceDiagramScript += `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>`;
                        sequenceDiagramScript += `<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/js-sequence-diagram@2.0.1/dist/sequence-diagram-min.js"></script>`;
                        sequenceDiagramStyle = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/js-sequence-diagram@2.0.1/dist/sequence-diagram-min.css">`;
                    }
                    sequenceDiagramInitScript = `<script>
      var sequenceDiagrams = document.getElementsByClassName('sequence')
      for (var i = 0; i < sequenceDiagrams.length; i++) {
        var sequence = sequenceDiagrams[i]
        try {
          var diagram = Diagram.parse(sequence.textContent)
          var theme = sequence.getAttribute('theme') || 'simple'
          sequence.id = 'sequence_' + i
          sequence.innerHTML = ''
          diagram.drawSVG(sequence.id, {theme: theme})
        } catch (error) {
          sequence.innerHTML = '<pre class="language-text">' + error.toString() + '</pre>'
        }
      }
      </script>`;
                }
                // presentation
                let presentationScript = "";
                let presentationStyle = "";
                let presentationInitScript = "";
                if (yamlConfig["isPresentationMode"]) {
                    if (options.offline) {
                        presentationScript = `
        <script src='file:///${path.resolve(extensionDirectoryPath, "./dependencies/reveal/lib/js/head.min.js")}'></script>
        <script src='file:///${path.resolve(extensionDirectoryPath, "./dependencies/reveal/js/reveal.js")}'></script>`;
                    }
                    else {
                        presentationScript = `
        <script src='https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/lib/js/head.min.js'></script>
        <script src='https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/js/reveal.js'></script>`;
                    }
                    const presentationConfig = yamlConfig["presentation"] || {};
                    const dependencies = presentationConfig["dependencies"] || [];
                    if (presentationConfig["enableSpeakerNotes"]) {
                        if (options.offline) {
                            dependencies.push({
                                src: path.resolve(extensionDirectoryPath, "./dependencies/reveal/plugin/notes/notes.js"),
                                async: true,
                            });
                        }
                        else {
                            dependencies.push({ src: "revealjs_deps/notes.js", async: true }); // TODO: copy notes.js file to corresponding folder
                        }
                    }
                    presentationConfig["dependencies"] = dependencies;
                    presentationStyle = `
      <style>
      ${fs.readFileSync(path.resolve(extensionDirectoryPath, "./dependencies/reveal/css/reveal.css"))}
      ${options.isForPrint
                        ? fs.readFileSync(path.resolve(extensionDirectoryPath, "./dependencies/reveal/css/print/pdf.css"))
                        : ""}
      </style>
      `;
                    presentationInitScript = `
      <script>
        Reveal.initialize(${JSON.stringify(Object.assign({ margin: 0.1 }, presentationConfig))})
      </script>
      `;
                }
                // prince
                let princeClass = "";
                if (options.isForPrince) {
                    princeClass = "prince";
                }
                let title = path.basename(this.filePath);
                title = title.slice(0, title.length - path.extname(title).length); // remove '.md'
                if (yamlConfig["title"]) {
                    title = yamlConfig["title"];
                }
                // prism and preview theme
                let styleCSS = "";
                try {
                    // prism *.css
                    styleCSS +=
                        !this.config.printBackground &&
                            !yamlConfig["print_background"] &&
                            !yamlConfig["isPresentationMode"]
                            ? yield utility.readFile(path.resolve(extensionDirectoryPath, `./styles/prism_theme/github.css`), { encoding: "utf-8" })
                            : yield utility.readFile(path.resolve(extensionDirectoryPath, `./styles/prism_theme/${this.getPrismTheme(yamlConfig["isPresentationMode"], yamlConfig)}`), { encoding: "utf-8" });
                    if (yamlConfig["isPresentationMode"]) {
                        const theme = yamlConfig["presentation"] &&
                            typeof yamlConfig["presentation"] === "object" &&
                            yamlConfig["presentation"]["theme"]
                            ? yamlConfig["presentation"]["theme"]
                            : this.config.revealjsTheme;
                        if (options.offline) {
                            presentationStyle += `<link rel="stylesheet" href="file:///${path.resolve(extensionDirectoryPath, `./dependencies/reveal/css/theme/${theme}`)}">`;
                        }
                        else {
                            presentationStyle += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reveal.js@3.7.0/css/theme/${theme}">`;
                        }
                    }
                    else {
                        // preview theme
                        styleCSS +=
                            !this.config.printBackground && !yamlConfig["print_background"]
                                ? yield utility.readFile(path.resolve(extensionDirectoryPath, `./styles/preview_theme/github-light.css`), { encoding: "utf-8" })
                                : yield utility.readFile(path.resolve(extensionDirectoryPath, `./styles/preview_theme/${this.config.previewTheme}`), { encoding: "utf-8" });
                    }
                    // style template
                    styleCSS += yield utility.readFile(path.resolve(extensionDirectoryPath, "./styles/style-template.css"), { encoding: "utf-8" });
                }
                catch (e) {
                    styleCSS = "";
                }
                // global styles
                let globalStyles = "";
                try {
                    globalStyles = yield utility.getGlobalStyles(this.config.configPath);
                }
                catch (error) {
                    // ignore it
                }
                // sidebar toc
                let sidebarTOC = "";
                let sidebarTOCScript = "";
                let sidebarTOCBtn = "";
                if (this.config.enableScriptExecution &&
                    !yamlConfig["isPresentationMode"] &&
                    !options.isForPrint &&
                    (!("html" in yamlConfig) ||
                        (yamlConfig["html"] && yamlConfig["html"]["toc"] !== false))) {
                    // enable sidebar toc by default
                    sidebarTOC = `<div class="md-sidebar-toc">${this.tocHTML}</div>`;
                    sidebarTOCBtn = '<a id="sidebar-toc-btn">≡</a>';
                    // toggle sidebar toc
                    // If yamlConfig['html']['toc'], then display sidebar TOC on startup.
                    sidebarTOCScript = `
<script>
${yamlConfig["html"] && yamlConfig["html"]["toc"]
                        ? `document.body.setAttribute('html-show-sidebar-toc', true)`
                        : ""}
var sidebarTOCBtn = document.getElementById('sidebar-toc-btn')
sidebarTOCBtn.addEventListener('click', function(event) {
  event.stopPropagation()
  if (document.body.hasAttribute('html-show-sidebar-toc')) {
    document.body.removeAttribute('html-show-sidebar-toc')
  } else {
    document.body.setAttribute('html-show-sidebar-toc', true)
  }
})
</script>
      `;
                }
                // task list script
                if (html.indexOf("task-list-item-checkbox") >= 0) {
                    const $ = cheerio.load("<div>" + html + "</div>");
                    $(".task-list-item-checkbox").each((index, elem) => {
                        const $elem = $(elem);
                        let $li = $elem.parent();
                        if (!$li[0].name.match(/^li$/i)) {
                            $li = $li.parent();
                        }
                        if ($li[0].name.match(/^li$/i)) {
                            $li.addClass("task-list-item");
                        }
                    });
                    html = $.html();
                }
                // process styles
                // move @import ''; to the very start.
                let styles = styleCSS + "\n" + globalStyles;
                let imports = "";
                styles = styles.replace(/\@import\s+url\(([^)]+)\)\s*;/g, (whole, url) => {
                    imports += whole + "\n";
                    return "";
                });
                styles = imports + styles;
                html = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${presentationStyle}
      ${mathStyle}
      ${sequenceDiagramStyle}
      ${fontAwesomeStyle}
      ${presentationScript}
      ${mermaidScript}
      ${zenumlScript}
      ${wavedromScript}
      ${vegaScript}
      ${flowchartScript}
      ${sequenceDiagramScript}
      <style>
      ${styles}
      </style>
    </head>
    <body ${options.isForPrint ? "" : 'for="html-export"'} ${yamlConfig["isPresentationMode"] ? "data-presentation-mode" : ""}>
      <div class="mume markdown-preview ${princeClass} ${elementClass}" ${yamlConfig["isPresentationMode"] ? "data-presentation-mode" : ""} ${elementId ? `id="${elementId}"` : ""}>
      ${html}
      </div>
      ${sidebarTOC}
      ${sidebarTOCBtn}
    </body>
    ${presentationInitScript}
    ${mermaidInitScript}
    ${wavedromInitScript}
    ${vegaInitScript}
    ${flowchartInitScript}
    ${sequenceDiagramInitScript}
    ${sidebarTOCScript}
  </html>
    `;
                if (options.embedLocalImages || options.embedSVG) {
                    const $ = cheerio.load(html);
                    if (options.embedLocalImages) {
                        yield embedded_local_images_1.default($, this.config, this.resolveFilePath.bind(this));
                    }
                    if (options.embedSVG) {
                        yield embedded_svgs_1.default($, this.config, this.resolveFilePath.bind(this));
                    }
                    html = $.html();
                }
                return html.trim();
            });
        }
        /**
         * generate HTML file and open it in browser
         */
        openInBrowser({ runAllCodeChunks = false }) {
            return __awaiter(this, void 0, void 0, function* () {
                const inputString = yield utility.readFile(this.filePath, {
                    encoding: "utf-8",
                });
                let html;
                let yamlConfig;
                ({ html, yamlConfig } = yield this.parseMD(inputString, {
                    useRelativeFilePath: false,
                    hideFrontMatter: true,
                    isForPreview: false,
                    runAllCodeChunks,
                }));
                html = yield this.generateHTMLTemplateForExport(html, yamlConfig, {
                    isForPrint: false,
                    isForPrince: false,
                    offline: true,
                    embedLocalImages: false,
                });
                // create temp file
                const info = yield utility.tempOpen({
                    prefix: "mume",
                    suffix: ".html",
                });
                yield utility.write(info.fd, html);
                // open in browser
                utility.openFile(info.path);
                return;
            });
        }
        /**
         *
         * @param filePath
         * @return dest if success, error if failure
         */
        htmlExport({ offline = false, runAllCodeChunks = false, }) {
            return __awaiter(this, void 0, void 0, function* () {
                const inputString = yield utility.readFile(this.filePath, {
                    encoding: "utf-8",
                });
                let html;
                let yamlConfig;
                ({ html, yamlConfig } = yield this.parseMD(inputString, {
                    useRelativeFilePath: true,
                    hideFrontMatter: true,
                    isForPreview: false,
                    runAllCodeChunks,
                }));
                const htmlConfig = yamlConfig["html"] || {};
                if ("offline" in htmlConfig) {
                    offline = htmlConfig["offline"];
                }
                const embedLocalImages = htmlConfig["embed_local_images"]; // <= embedLocalImages is disabled by default.
                let embedSVG = true; // <= embedSvg is enabled by default.
                if ("embed_svg" in htmlConfig) {
                    embedSVG = htmlConfig["embed_svg"];
                }
                let dest = this.filePath;
                const extname = path.extname(dest);
                dest = dest.replace(new RegExp(extname + "$"), ".html");
                html = yield this.generateHTMLTemplateForExport(html, yamlConfig, {
                    isForPrint: false,
                    isForPrince: false,
                    embedLocalImages,
                    offline,
                    embedSVG,
                });
                // presentation speaker notes
                // copy dependency files
                if (!offline &&
                    html.indexOf('[{"src":"revealjs_deps/notes.js","async":true}]') >= 0) {
                    const depsDirName = path.resolve(path.dirname(dest), "revealjs_deps");
                    if (!fs.existsSync(depsDirName)) {
                        fs.mkdirSync(depsDirName);
                    }
                    fs.createReadStream(path.resolve(extensionDirectoryPath, "./dependencies/reveal/plugin/notes/notes.js")).pipe(fs.createWriteStream(path.resolve(depsDirName, "notes.js")));
                    fs.createReadStream(path.resolve(extensionDirectoryPath, "./dependencies/reveal/plugin/notes/notes.html")).pipe(fs.createWriteStream(path.resolve(depsDirName, "notes.html")));
                }
                yield utility.writeFile(dest, html);
                return dest;
            });
        }
        /**
         * Chrome (puppeteer) file export
         */
        chromeExport({ fileType = "pdf", runAllCodeChunks = false, openFileAfterGeneration = false, }) {
            return __awaiter(this, void 0, void 0, function* () {
                const inputString = yield utility.readFile(this.filePath, {
                    encoding: "utf-8",
                });
                let html;
                let yamlConfig;
                ({ html, yamlConfig } = yield this.parseMD(inputString, {
                    useRelativeFilePath: false,
                    hideFrontMatter: true,
                    isForPreview: false,
                    runAllCodeChunks,
                }));
                let dest = this.filePath;
                const extname = path.extname(dest);
                dest = dest.replace(new RegExp(extname + "$"), "." + fileType);
                html = yield this.generateHTMLTemplateForExport(html, yamlConfig, {
                    isForPrint: true,
                    isForPrince: false,
                    embedLocalImages: false,
                    offline: true,
                });
                let browser = null;
                let puppeteer = null;
                if (this.config.usePuppeteerCore) {
                    puppeteer = require("puppeteer-core");
                    browser = yield puppeteer.launch({
                        args: this.config.puppeteerArgs || [],
                        executablePath: this.config.chromePath || require("chrome-location"),
                        headless: true,
                    });
                }
                else {
                    const globalNodeModulesPath = (yield utility.execFile(process.platform === "win32" ? "npm.cmd" : "npm", ["root", "-g"]))
                        .trim()
                        .split("\n")[0]
                        .trim();
                    puppeteer = require(path.resolve(globalNodeModulesPath, "./puppeteer")); // trim() function here is very necessary.
                    browser = yield puppeteer.launch({
                        args: this.config.puppeteerArgs || [],
                        headless: true,
                    });
                }
                const info = yield utility.tempOpen({ prefix: "mume", suffix: ".html" });
                yield utility.writeFile(info.fd, html);
                const page = yield browser.newPage();
                const loadPath = "file:///" +
                    info.path +
                    (yamlConfig["isPresentationMode"] ? "?print-pdf" : "");
                yield page.goto(loadPath);
                const puppeteerConfig = Object.assign(Object.assign(Object.assign({ path: dest }, (yamlConfig["isPresentationMode"]
                    ? {}
                    : {
                        margin: {
                            top: "1cm",
                            bottom: "1cm",
                            left: "1cm",
                            right: "1cm",
                        },
                    })), { printBackground: this.config.printBackground }), (yamlConfig["chrome"] || yamlConfig["puppeteer"] || {}));
                // wait for timeout
                let timeout = 0;
                if (yamlConfig["chrome"] && yamlConfig["chrome"]["timeout"]) {
                    timeout = yamlConfig["chrome"]["timeout"];
                }
                else if (yamlConfig["puppeteer"] && yamlConfig["puppeteer"]["timeout"]) {
                    timeout = yamlConfig["puppeteer"]["timeout"];
                }
                if (timeout && typeof timeout === "number") {
                    yield page.waitFor(timeout);
                }
                else if (this.config.puppeteerWaitForTimeout &&
                    this.config.puppeteerWaitForTimeout > 0) {
                    yield page.waitFor(this.config.puppeteerWaitForTimeout);
                }
                if (fileType === "pdf") {
                    yield page.pdf(puppeteerConfig);
                }
                else {
                    puppeteerConfig["fullPage"] = true; // <= set to fullPage by default
                    yield page.screenshot(puppeteerConfig);
                }
                browser.close();
                if (openFileAfterGeneration) {
                    utility.openFile(dest);
                }
                return dest;
            });
        }
        /**
         * prince pdf file export
         * @return dest if success, error if failure
         */
        princeExport({ runAllCodeChunks = false, openFileAfterGeneration = false, }) {
            return __awaiter(this, void 0, void 0, function* () {
                const inputString = yield utility.readFile(this.filePath, {
                    encoding: "utf-8",
                });
                let html;
                let yamlConfig;
                ({ html, yamlConfig } = yield this.parseMD(inputString, {
                    useRelativeFilePath: false,
                    hideFrontMatter: true,
                    isForPreview: false,
                    runAllCodeChunks,
                }));
                let dest = this.filePath;
                const extname = path.extname(dest);
                dest = dest.replace(new RegExp(extname + "$"), ".pdf");
                html = yield this.generateHTMLTemplateForExport(html, yamlConfig, {
                    isForPrint: true,
                    isForPrince: true,
                    embedLocalImages: false,
                    offline: true,
                });
                const info = yield utility.tempOpen({ prefix: "mume", suffix: ".html" });
                yield utility.writeFile(info.fd, html);
                if (yamlConfig["isPresentationMode"]) {
                    const url = "file:///" + info.path + "?print-pdf";
                    return url;
                }
                else {
                    yield prince_convert_1.princeConvert(info.path, dest);
                    //  open pdf
                    if (openFileAfterGeneration) {
                        utility.openFile(dest);
                    }
                    return dest;
                }
            });
        }
        eBookDownloadImages($, dest) {
            return __awaiter(this, void 0, void 0, function* () {
                const imagesToDownload = [];
                if (path.extname(dest) === ".epub" || path.extname("dest") === ".mobi") {
                    $("img").each((offset, img) => {
                        const $img = $(img);
                        const src = $img.attr("src") || "";
                        if (src.match(/^https?\:\/\//)) {
                            imagesToDownload.push($img);
                        }
                    });
                }
                const asyncFunctions = imagesToDownload.map(($img) => {
                    return new Promise((resolve, reject) => {
                        const httpSrc = $img.attr("src");
                        let savePath = Math.random()
                            .toString(36)
                            .substr(2, 9) +
                            "_" +
                            path.basename(httpSrc);
                        savePath = path.resolve(this.fileDirectoryPath, savePath);
                        const stream = request(httpSrc).pipe(fs.createWriteStream(savePath));
                        stream.on("finish", () => {
                            $img.attr("src", "file:///" + savePath);
                            return resolve(savePath);
                        });
                    });
                });
                return Promise.all(asyncFunctions);
            });
        }
        /**
         *
         *
         * @return dest if success, error if failure
         */
        eBookExport({ fileType = "epub", runAllCodeChunks = false, }) {
            return __awaiter(this, void 0, void 0, function* () {
                const inputString = yield utility.readFile(this.filePath, {
                    encoding: "utf-8",
                });
                const emojiToSvg = fileType === "pdf";
                let html;
                let yamlConfig;
                ({ html, yamlConfig } = yield this.parseMD(inputString, {
                    useRelativeFilePath: false,
                    hideFrontMatter: true,
                    isForPreview: false,
                    runAllCodeChunks,
                    emojiToSvg,
                }));
                let dest = this.filePath;
                const extname = path.extname(dest);
                dest = dest.replace(new RegExp(extname + "$"), "." + fileType.toLowerCase());
                const ebookConfig = yamlConfig["ebook"] || {};
                if (!ebookConfig) {
                    throw new Error("eBook config not found. Please insert ebook front-matter to your markdown file.");
                }
                if (ebookConfig["cover"]) {
                    // change cover to absolute path if necessary
                    const cover = ebookConfig["cover"];
                    ebookConfig["cover"] = utility.removeFileProtocol(this.resolveFilePath(cover, false));
                }
                let $ = cheerio.load(`<div>${html}</div>`);
                const tocStructure = [];
                const headingIdGenerator = new heading_id_generator_1.default();
                const $toc = $("div > ul").last();
                if ($toc.length) {
                    if (ebookConfig["include_toc"] === false) {
                        // remove itself and the heading ahead
                        const $prev = $toc.prev();
                        if ($prev.length && $prev[0].name.match(/^h\d$/i)) {
                            $prev.remove();
                        }
                    }
                    $("h1, h2, h3, h4, h5, h6").each((offset, h) => {
                        const $h = $(h);
                        const level = parseInt($h[0].name.slice(1), 10) - 1;
                        // $h.attr('id', id)
                        $h.attr("ebook-toc-level-" + (level + 1), "");
                        $h.attr("heading", $h.html());
                    });
                    getStructure($toc, 0); // analyze TOC
                    if (ebookConfig["include_toc"] === false) {
                        // remove itself and the heading ahead
                        $toc.remove();
                    }
                }
                // load the last ul as TOC, analyze toc links
                function getStructure($ul, level) {
                    $ul.children("li").each((offset, li) => {
                        const $li = $(li);
                        const $a = $li.children("a").first();
                        if (!$a.length) {
                            return;
                        }
                        const filePath = decodeURIComponent($a.attr("href")); // markdown file path
                        const heading = $a.html();
                        const id = headingIdGenerator.generateId(heading); // "ebook-heading-id-" + headingOffset;
                        tocStructure.push({ level, filePath, heading, id });
                        $a.attr("href", "#" + id); // change id
                        if ($li.children().length > 1) {
                            getStructure($li.children().last(), level + 1);
                        }
                    });
                }
                // load each markdown files according to `tocStructure`
                const asyncFunctions = tocStructure.map(({ heading, id, level, filePath }, offset) => {
                    return new Promise((resolve, reject) => {
                        filePath = utility.removeFileProtocol(filePath);
                        fs.readFile(filePath, { encoding: "utf-8" }, (error, text) => {
                            if (error) {
                                return reject(error.toString());
                            }
                            // Fix image paths that are relative to the child documents
                            const rootPath = path.dirname(this.filePath);
                            text = text.replace(/(!\[[^\]]*\]\()(\.[^\)\s]*)/g, (whole, openTag, imageLink) => {
                                const fullPath = path.resolve(path.dirname(filePath), imageLink);
                                const relativePath = path.relative(rootPath, fullPath);
                                return openTag + relativePath;
                            });
                            this.parseMD(text, {
                                useRelativeFilePath: false,
                                isForPreview: false,
                                hideFrontMatter: true,
                                emojiToSvg,
                            }).then(({ html }) => {
                                return resolve({ heading, id, level, filePath, html, offset });
                            });
                        });
                    });
                });
                let outputHTML = $.html().replace(/^<div>(.+)<\/div>$/, "$1");
                let results = yield Promise.all(asyncFunctions);
                results = results.sort((a, b) => a["offset"] - b["offset"]);
                /* tslint:disable-next-line:no-shadowed-variable */
                results.forEach(({ heading, id, level, filePath, html }) => {
                    /* tslint:disable-next-line:no-shadowed-variable */
                    outputHTML += `<div id="${id}" ebook-toc-level-${level +
                        1} heading="${heading}">${html}</div>`; // append new content
                });
                $ = cheerio.load(outputHTML);
                const downloadedImagePaths = yield this.eBookDownloadImages($, dest);
                // convert image to base64 if output html
                if (path.extname(dest) === ".html") {
                    // check cover
                    if (ebookConfig["cover"]) {
                        const cover = ebookConfig["cover"][0] === "/"
                            ? "file:///" + ebookConfig["cover"]
                            : ebookConfig["cover"];
                        $(":root")
                            .children()
                            .first()
                            .prepend(`<img style="display:block; margin-bottom: 24px;" src="${cover}">`);
                    }
                    yield embedded_local_images_1.default($, this.config, this.resolveFilePath.bind(this));
                }
                // retrieve html
                outputHTML = $.html();
                const title = ebookConfig["title"] || "no title";
                // math
                let mathStyle = "";
                if (outputHTML.indexOf('class="katex"') > 0) {
                    if (path.extname(dest) === ".html" &&
                        ebookConfig["html"] &&
                        ebookConfig["html"].cdn) {
                        mathStyle = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css">`;
                    }
                    else {
                        mathStyle = `<link rel="stylesheet" href="file:///${path.resolve(extensionDirectoryPath, "./dependencies/katex/katex.min.css")}">`;
                    }
                }
                // prism and preview theme
                let styleCSS = "";
                try {
                    const styles = yield Promise.all([
                        // style template
                        utility.readFile(path.resolve(extensionDirectoryPath, "./styles/style-template.css"), { encoding: "utf-8" }),
                        // prism *.css
                        utility.readFile(path.resolve(extensionDirectoryPath, `./styles/prism_theme/${
                        /*this.getPrismTheme(false)*/ MarkdownEngine.AutoPrismThemeMap[ebookConfig["theme"] || this.config.previewTheme]}`), { encoding: "utf-8" }),
                        // twemoji css style
                        utility.readFile(path.resolve(extensionDirectoryPath, "./styles/twemoji.css"), { encoding: "utf-8" }),
                        // preview theme
                        utility.readFile(path.resolve(extensionDirectoryPath, `./styles/preview_theme/${ebookConfig["theme"] ||
                            this.config.previewTheme}`), { encoding: "utf-8" }),
                    ]);
                    styleCSS = styles.join("");
                }
                catch (e) {
                    styleCSS = "";
                }
                // global styles
                let globalStyles = "";
                try {
                    globalStyles = yield utility.getGlobalStyles(this.config.configPath);
                }
                catch (error) {
                    // ignore it
                }
                // only use github-light style for ebook
                html = `
<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
    <meta charset=\"utf-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <style>
    ${styleCSS}
    ${globalStyles}
    </style>
    ${mathStyle}
  </head>
  <body ${path.extname(dest) === ".html" ? 'for="html-export"' : ""}>
    <div class="mume markdown-preview">
    ${outputHTML}
    </div>
  </body>
</html>
`;
                // save as html
                if (path.extname(dest) === ".html") {
                    yield utility.writeFile(dest, html);
                    return dest;
                }
                // this function will be called later
                function deleteDownloadedImages() {
                    downloadedImagePaths.forEach((imagePath) => {
                        fs.unlink(imagePath, (error) => {
                            return;
                        });
                    });
                }
                try {
                    const info = yield utility.tempOpen({ prefix: "mume", suffix: ".html" });
                    yield utility.write(info.fd, html);
                    yield ebook_convert_1.ebookConvert(info.path, dest, ebookConfig);
                    deleteDownloadedImages();
                    return dest;
                }
                catch (error) {
                    deleteDownloadedImages();
                    throw error;
                }
            });
        }
        /**
         * pandoc export
         */
        pandocExport({ runAllCodeChunks = false, openFileAfterGeneration = false, }) {
            return __awaiter(this, void 0, void 0, function* () {
                let inputString = yield utility.readFile(this.filePath, {
                    encoding: "utf-8",
                });
                if (utility.configs.parserConfig["onWillParseMarkdown"]) {
                    inputString = yield utility.configs.parserConfig["onWillParseMarkdown"](inputString);
                }
                if (runAllCodeChunks) {
                    // this line of code is only used to get this.codeChunksData
                    yield this.parseMD(inputString, {
                        useRelativeFilePath: true,
                        isForPreview: false,
                        hideFrontMatter: false,
                        runAllCodeChunks,
                    });
                }
                let config = {};
                if (inputString.startsWith("---")) {
                    const endFrontMatterOffset = inputString.indexOf("\n---");
                    if (endFrontMatterOffset > 0) {
                        const frontMatterString = inputString.slice(0, endFrontMatterOffset + 4);
                        config = this.processFrontMatter(frontMatterString, false).data;
                    }
                }
                const outputFilePath = yield pandoc_convert_1.pandocConvert(inputString, {
                    fileDirectoryPath: this.fileDirectoryPath,
                    projectDirectoryPath: this.projectDirectoryPath,
                    sourceFilePath: this.filePath,
                    protocolsWhiteListRegExp: this.protocolsWhiteListRegExp,
                    // deleteImages: true,
                    filesCache: this.filesCache,
                    codeChunksData: this.codeChunksData,
                    graphsCache: this.graphsCache,
                    imageDirectoryPath: this.config.imageFolderPath,
                    pandocMarkdownFlavor: this.config.pandocMarkdownFlavor,
                    pandocPath: this.config.pandocPath,
                    latexEngine: this.config.latexEngine,
                    imageMagickPath: this.config.imageMagickPath,
                    mermaidTheme: this.config.mermaidTheme,
                    onWillTransformMarkdown: utility.configs.parserConfig["onWillTransformMarkdown"],
                    onDidTransformMarkdown: utility.configs.parserConfig["onDidTransformMarkdown"],
                }, config);
                if (openFileAfterGeneration) {
                    utility.openFile(outputFilePath);
                }
                return outputFilePath;
            });
        }
        /**
         * markdown(gfm) export
         */
        markdownExport({ runAllCodeChunks = false }) {
            return __awaiter(this, void 0, void 0, function* () {
                let inputString = yield utility.readFile(this.filePath, {
                    encoding: "utf-8",
                });
                if (runAllCodeChunks) {
                    // this line of code is only used to get this.codeChunksData
                    yield this.parseMD(inputString, {
                        useRelativeFilePath: true,
                        isForPreview: false,
                        hideFrontMatter: false,
                        runAllCodeChunks,
                    });
                }
                let config = {};
                if (inputString.startsWith("---")) {
                    const endFrontMatterOffset = inputString.indexOf("\n---");
                    if (endFrontMatterOffset > 0) {
                        const frontMatterString = inputString.slice(0, endFrontMatterOffset + 4);
                        inputString = inputString.replace(frontMatterString, ""); // remove front matter
                        config = this.processFrontMatter(frontMatterString, false).data;
                    }
                }
                /**
                 * markdownConfig has the following properties:
                 *     path:                        destination of the output file
                 *     image_dir:                   where to save the image file
                 *     use_absolute_image_path:      as the name shows.
                 *     ignore_from_front_matter:    default is true.
                 */
                let markdownConfig = {};
                if (config["markdown"]) {
                    markdownConfig = Object.assign({}, config["markdown"]);
                }
                if (!markdownConfig["image_dir"]) {
                    markdownConfig["image_dir"] = this.config.imageFolderPath;
                }
                if (!markdownConfig["path"]) {
                    if (this.filePath.match(/\.src\./)) {
                        markdownConfig["path"] = this.filePath.replace(/\.src\./, ".");
                    }
                    else {
                        markdownConfig["path"] = this.filePath.replace(new RegExp(path.extname(this.filePath)), "_" + path.extname(this.filePath));
                    }
                    markdownConfig["path"] = path.basename(markdownConfig["path"]);
                }
                // ignore_from_front_matter is `true` by default
                if (markdownConfig["ignore_from_front_matter"] ||
                    !("ignore_from_front_matter" in markdownConfig)) {
                    // delete markdown config front-matter from the top front matter
                    delete config["markdown"];
                }
                if (config["export_on_save"]) {
                    delete config["export_on_save"];
                }
                // put front-matter back
                if (Object.keys(config).length) {
                    inputString = "---\n" + YAML.stringify(config) + "---\n" + inputString;
                }
                return yield markdown_convert_1.markdownConvert(inputString, {
                    projectDirectoryPath: this.projectDirectoryPath,
                    fileDirectoryPath: this.fileDirectoryPath,
                    protocolsWhiteListRegExp: this.protocolsWhiteListRegExp,
                    filesCache: this.filesCache,
                    mathRenderingOption: this.config.mathRenderingOption,
                    mathInlineDelimiters: this.config.mathInlineDelimiters,
                    mathBlockDelimiters: this.config.mathBlockDelimiters,
                    mathRenderingOnlineService: this.config.mathRenderingOnlineService,
                    codeChunksData: this.codeChunksData,
                    graphsCache: this.graphsCache,
                    usePandocParser: this.config.usePandocParser,
                    imageMagickPath: this.config.imageMagickPath,
                    mermaidTheme: this.config.mermaidTheme,
                    onWillTransformMarkdown: utility.configs.parserConfig["onWillTransformMarkdown"],
                    onDidTransformMarkdown: utility.configs.parserConfig["onDidTransformMarkdown"],
                }, markdownConfig);
            });
        }
        /**
         * Eg
         * ---
         * export_on_save:
         *    html: true
         *    prince: true
         *    puppeteer | chrome: true  // or pdf | jpeg | png
         *    pandoc: true
         *    ebook: true      // or epub | pdf | html | mobi
         *    markdown: true
         * ---
         * @param data
         */
        exportOnSave(data) {
            for (const exporter in data) {
                if (exporter === "markdown") {
                    this.markdownExport({});
                }
                else if (exporter === "html") {
                    this.htmlExport({});
                }
                else if (exporter === "prince") {
                    this.princeExport({ openFileAfterGeneration: false });
                }
                else if (exporter === "puppeteer" || exporter === "chrome") {
                    const fileTypes = data[exporter];
                    let func = this.chromeExport;
                    func = func.bind(this);
                    if (fileTypes === true) {
                        func({ fileType: "pdf", openFileAfterGeneration: false });
                    }
                    else if (typeof fileTypes === "string") {
                        func({ fileType: fileTypes, openFileAfterGeneration: false });
                    }
                    else if (fileTypes instanceof Array) {
                        fileTypes.forEach((fileType) => {
                            func({ fileType, openFileAfterGeneration: false });
                        });
                    }
                }
                else if (exporter === "pandoc") {
                    this.pandocExport({ openFileAfterGeneration: false });
                }
                else if (exporter === "ebook") {
                    const fileTypes = data[exporter];
                    if (fileTypes === true) {
                        this.eBookExport({ fileType: "epub" });
                    }
                    else if (typeof fileTypes === "string") {
                        this.eBookExport({ fileType: fileTypes });
                    }
                    else if (fileTypes instanceof Array) {
                        fileTypes.forEach((fileType) => {
                            this.eBookExport({ fileType });
                        });
                    }
                }
            }
        }
        /**
         *
         * @param filePath
         * @param relative: whether to use the path relative to filePath or not.
         */
        resolveFilePath(filePath = "", relative) {
            if (filePath.match(this.protocolsWhiteListRegExp) ||
                filePath.startsWith("data:image/") ||
                filePath[0] === "#") {
                return filePath;
            }
            else if (filePath[0] === "/") {
                if (relative) {
                    return path.relative(this.fileDirectoryPath, path.resolve(this.projectDirectoryPath, "." + filePath));
                }
                else {
                    return utility.addFileProtocol(path.resolve(this.projectDirectoryPath, "." + filePath), this.vscodePreviewPanel);
                }
            }
            else {
                if (relative) {
                    return filePath;
                }
                else {
                    return utility.addFileProtocol(path.resolve(this.fileDirectoryPath, filePath), this.vscodePreviewPanel);
                }
            }
        }
        /**
         * return this.cachedHTML
         */
        /*
        public getCachedHTML() {
          return this.cachedHTML
        }
        */
        /**
         * clearCaches will clear filesCache, codeChunksData, graphsCache
         */
        clearCaches() {
            this.filesCache = {};
            this.codeChunksData = {};
            this.graphsCache = {};
        }
        frontMatterToTable(arg) {
            if (arg instanceof Array) {
                let tbody = "<tbody><tr>";
                arg.forEach((item) => (tbody += `<td>${this.frontMatterToTable(item)}</td>`));
                tbody += "</tr></tbody>";
                return `<table>${tbody}</table>`;
            }
            else if (typeof arg === "object") {
                let thead = "<thead><tr>";
                let tbody = "<tbody><tr>";
                for (const key in arg) {
                    if (arg.hasOwnProperty(key)) {
                        thead += `<th>${key}</th>`;
                        tbody += `<td>${this.frontMatterToTable(arg[key])}</td>`;
                    }
                }
                thead += "</tr></thead>";
                tbody += "</tr></tbody>";
                return `<table>${thead}${tbody}</table>`;
            }
            else {
                return arg;
            }
        }
        /**
         * process input string, skip front-matter
         * if usePandocParser. return {
         *      content: frontMatterString
         * }
         * else if display table. return {
         *      table: string of <table>...</table> generated from data
         *      content: ''
         * }
         * else return {
         *      content: replace ---\n with ```yaml
         * }
         *
         */
        processFrontMatter(frontMatterString, hideFrontMatter = false) {
            if (frontMatterString) {
                const data = utility.parseYAML(frontMatterString);
                if (this.config.usePandocParser) {
                    // use pandoc parser, so don't change inputString
                    return { content: frontMatterString, table: "", data: data || {} };
                }
                else if (hideFrontMatter ||
                    this.config.frontMatterRenderingOption[0] === "n") {
                    // hide
                    return { content: "", table: "", data };
                }
                else if (this.config.frontMatterRenderingOption[0] === "t") {
                    // table
                    // to table
                    let table;
                    if (typeof data === "object") {
                        table = this.frontMatterToTable(data);
                    }
                    else {
                        table = "<pre>Failed to parse YAML.</pre>";
                    }
                    return { content: "", table, data };
                }
                else {
                    // # if frontMatterRenderingOption[0] == 'c' # code block
                    const content = frontMatterString
                        .replace(/^---/, "```yaml")
                        .replace(/\n---$/, "\n```\n");
                    return { content, table: "", data };
                }
            }
            else {
                return { content: frontMatterString, table: "", data: {} };
            }
        }
        /**
         * Parse `html` to generate slides
         */
        parseSlides(html, slideConfigs, useRelativeFilePath) {
            let slides = html.split("<p>[MUMESLIDE]</p>");
            const before = slides[0];
            slides = slides.slice(1);
            let output = "";
            let i = 0;
            let h = -1; // horizontal
            let v = 0; // vertical
            while (i < slides.length) {
                const slide = slides[i];
                const slideConfig = slideConfigs[i];
                // resolve paths in slideConfig
                if ("data-background-image" in slideConfig) {
                    slideConfig["data-background-image"] = this.resolveFilePath(slideConfig["data-background-image"], useRelativeFilePath);
                }
                if ("data-background-video" in slideConfig) {
                    slideConfig["data-background-video"] = this.resolveFilePath(slideConfig["data-background-video"], useRelativeFilePath);
                }
                if ("data-background-iframe" in slideConfig) {
                    slideConfig["data-background-iframe"] = this.resolveFilePath(slideConfig["data-background-iframe"], useRelativeFilePath);
                }
                const attrString = attributes_1.stringifyAttributes(slideConfig, false); // parseAttrString(slideConfig)
                const classString = slideConfig["class"] || "";
                const idString = slideConfig["id"] ? `id="${slideConfig["id"]}"` : "";
                if (!slideConfig["vertical"]) {
                    h += 1;
                    if (i > 0 && slideConfigs[i - 1]["vertical"]) {
                        // end of vertical slides
                        output += "</section>";
                        v = 0;
                    }
                    if (i < slides.length - 1 && slideConfigs[i + 1]["vertical"]) {
                        // start of vertical slides
                        output += "<section>";
                    }
                }
                else {
                    // vertical slide
                    v += 1;
                }
                output += `<section ${attrString} ${idString}  class=\"slide ${classString}\" data-line="${slideConfig["lineNo"]}" data-h=\"${h}\" data-v="${v}">${slide}</section>`;
                i += 1;
            }
            if (i > 0 && slideConfigs[i - 1]["vertical"]) {
                // end of vertical slides
                output += "</section>";
            }
            // check list item attribtues
            // issue: https://github.com/shd101wyy/markdown-preview-enhanced/issues/559
            const $ = cheerio.load(output);
            $("li").each((j, elem) => {
                const $elem = $(elem);
                const html2 = $elem
                    .html()
                    .trim()
                    .split("\n")[0];
                const attributeMatch = html2.match(/<!--(.+?)-->/);
                if (attributeMatch) {
                    const attributes = attributeMatch[1].replace(/\.element\:/, "").trim();
                    const attrObj = attributes_1.parseAttributes(attributes);
                    for (const key in attrObj) {
                        if (attrObj.hasOwnProperty(key)) {
                            $elem.attr(key, attrObj[key]);
                        }
                    }
                }
            });
            return `
    <div style="display:none;">${before}</div>
    <div class="reveal">
      <div class="slides">
        ${$.html()}
      </div>
    </div>
    `;
        }
        pandocRender(text = "", args) {
            return __awaiter(this, void 0, void 0, function* () {
                let mathRenderer;
                switch (this.config.mathRenderingOption) {
                    case "MathJax":
                        mathRenderer = "--mathjax";
                        break;
                    case "KaTeX":
                        mathRenderer = "--katex";
                        break;
                    default:
                        mathRenderer = "";
                }
                args = args || [];
                args = [
                    "--from=" + this.config.pandocMarkdownFlavor,
                    "--to=html",
                    mathRenderer,
                ]
                    .concat(args)
                    .filter((arg) => arg.length);
                /*
                  convert pandoc code block to markdown-it code block
                */
                let outputString = "";
                const lines = text.split("\n");
                let i = 0;
                let inCodeBlock = false;
                let codeBlockSpacesAhead = 0;
                while (i < lines.length) {
                    let line = lines[i];
                    const match = line.match(/(^\s*)```/);
                    if (match) {
                        inCodeBlock = !inCodeBlock;
                        if (inCodeBlock) {
                            let info = line.slice(match[0].length).trim();
                            if (!info) {
                                info = "text";
                            }
                            const parsedInfo = block_info_1.parseBlockInfo(info);
                            const normalizedInfo = block_info_1.normalizeBlockInfo(parsedInfo);
                            codeBlockSpacesAhead = match[1].length;
                            outputString += `${match[1]}\`\`\`{.text data-role="codeBlock" data-info="${utility.escapeString(info)}" data-parsed-info="${utility.escapeString(JSON.stringify(parsedInfo))}" data-normalized-info="${utility.escapeString(JSON.stringify(normalizedInfo))}"}\n`;
                        }
                        else if (match[1].length === codeBlockSpacesAhead) {
                            outputString += `${match[1]}\`\`\`\n`;
                        }
                        else {
                            inCodeBlock = !inCodeBlock;
                            outputString += line + "\n";
                        }
                        i += 1;
                        continue;
                    }
                    if (line.match(/^\[toc\]/i) && !inCodeBlock) {
                        line = "[MUMETOC]";
                    }
                    outputString += line + "\n";
                    i += 1;
                }
                const pandocPath = this.config.pandocPath;
                return yield new Promise((resolve, reject) => {
                    try {
                        const program = child_process_1.execFile(pandocPath, args, { cwd: this.fileDirectoryPath, maxBuffer: Infinity }, (error, stdout, stderr) => {
                            if (error) {
                                return reject(error);
                            }
                            else if (stderr) {
                                return resolve("<pre>" + stderr + "</pre>" + stdout);
                            }
                            else {
                                return resolve(stdout);
                            }
                        });
                        program.stdin.end(outputString, "utf-8");
                    }
                    catch (error) {
                        let errorMessage = error.toString();
                        if (errorMessage.indexOf("Error: write EPIPE") >= 0) {
                            errorMessage = `"pandoc" is required to be installed.\nCheck "http://pandoc.org/installing.html" website.`;
                        }
                        return reject(errorMessage);
                    }
                });
            });
        }
        parseMD(inputString, options) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!inputString) {
                    inputString = yield utility.readFile(this.filePath, {
                        encoding: "utf-8",
                    });
                }
                this.vscodePreviewPanel = options.vscodePreviewPanel;
                if (utility.configs.parserConfig["onWillParseMarkdown"]) {
                    inputString = yield utility.configs.parserConfig["onWillParseMarkdown"](inputString);
                }
                if (utility.configs.parserConfig["onWillTransformMarkdown"]) {
                    inputString = yield utility.configs.parserConfig["onWillTransformMarkdown"](inputString);
                }
                // import external files and insert anchors if necessary
                let outputString;
                let slideConfigs;
                let tocBracketEnabled;
                let JSAndCssFiles;
                let headings;
                let frontMatterString;
                ({
                    outputString,
                    slideConfigs,
                    tocBracketEnabled,
                    JSAndCssFiles,
                    headings,
                    frontMatterString,
                } = yield transformer_1.transformMarkdown(inputString, {
                    fileDirectoryPath: this.fileDirectoryPath,
                    projectDirectoryPath: this.projectDirectoryPath,
                    forPreview: options.isForPreview,
                    protocolsWhiteListRegExp: this.protocolsWhiteListRegExp,
                    useRelativeFilePath: options.useRelativeFilePath,
                    filesCache: this.filesCache,
                    usePandocParser: this.config.usePandocParser,
                    onWillTransformMarkdown: utility.configs.parserConfig["onWillTransformMarkdown"],
                    onDidTransformMarkdown: utility.configs.parserConfig["onDidTransformMarkdown"],
                }));
                if (utility.configs.parserConfig["onDidTransformMarkdown"]) {
                    outputString = yield utility.configs.parserConfig["onDidTransformMarkdown"](outputString);
                }
                // process front-matter
                const fm = this.processFrontMatter(frontMatterString, options.hideFrontMatter);
                const frontMatterTable = fm.table;
                let yamlConfig = fm.data || {};
                if (typeof yamlConfig !== "object") {
                    yamlConfig = {};
                }
                outputString = fm.content + outputString;
                /**
                 * render markdown to html
                 */
                let html;
                if (this.config.usePandocParser) {
                    // pandoc
                    try {
                        let args = yamlConfig["pandoc_args"] || [];
                        if (!(args instanceof Array)) {
                            args = [];
                        }
                        // check bibliography
                        const noDefaultsOrCiteProc = args.find((el) => {
                            return el.includes("pandoc-citeproc") || el.includes("--defaults");
                        }) === undefined;
                        if (noDefaultsOrCiteProc &&
                            (yamlConfig["bibliography"] || yamlConfig["references"])) {
                            args.push("--citeproc");
                        }
                        args = this.config.pandocArguments.concat(args);
                        html = yield this.pandocRender(outputString, args);
                    }
                    catch (error) {
                        html = `<pre>${error}</pre>`;
                    }
                }
                else {
                    // markdown-it
                    html = this.md.render(outputString);
                }
                /**
                 * render tocHTML for [TOC] and sidebar TOC
                 */
                // if (!utility.isArrayEqual(headings, this.headings)) { // <== this code is wrong, as it will always be true...
                const tocConfig = yamlConfig["toc"] || {};
                const depthFrom = tocConfig["depth_from"] || 1;
                const depthTo = tocConfig["depth_to"] || 6;
                const ordered = tocConfig["ordered"];
                const tocObject = toc_1.toc(headings, { ordered, depthFrom, depthTo, tab: "  " });
                this.tocHTML = this.md.render(tocObject.content);
                // }
                this.headings = headings; // reset headings information
                if (tocBracketEnabled) {
                    // [TOC]
                    html = html.replace(/^\s*<p>\[MUMETOC\]<\/p>\s*/gm, this.tocHTML);
                }
                /**
                 * resolve image paths and render code block.
                 */
                const $ = cheerio.load(html);
                yield fenced_math_1.default($, this.config.mathRenderingOption, this.config.mathBlockDelimiters);
                yield fenced_diagrams_1.default($, this.graphsCache, this.fileDirectoryPath, utility_1.removeFileProtocol(this.resolveFilePath(this.config.imageFolderPath, false)));
                yield fenced_code_chunks_1.default($, this.codeChunksData, options, this.generateRunOptions());
                yield code_block_styling_1.default($);
                yield resolved_image_paths_1.default($, options, this.resolveFilePath.bind(this), this.config.usePandocParser);
                if (this.config.enableExtendedTableSyntax) {
                    // extend table
                    yield extended_table_syntax_1.default($);
                }
                // Disable this function because of issue:
                // https://github.com/shd101wyy/markdown-preview-enhanced/issues/1287
                // if (options.emojiToSvg) {
                //   enhanceWithEmojiToSvg($);
                // }
                html = frontMatterTable + $("head").html() + $("body").html(); // cheerio $.html() will add <html><head></head><body>$html</body></html>, so we hack it by select body first.
                /**
                 * check slides
                 */
                if (slideConfigs.length) {
                    html = this.parseSlides(html, slideConfigs, options.useRelativeFilePath);
                    if (yamlConfig) {
                        yamlConfig["isPresentationMode"] = true; // mark as presentation mode
                    }
                }
                if (utility.configs.parserConfig["onDidParseMarkdown"]) {
                    html = yield utility.configs.parserConfig["onDidParseMarkdown"](html, {
                        cheerio,
                    });
                }
                if (options.runAllCodeChunks) {
                    yield fenced_code_chunks_1.runCodeChunks(this.codeChunksData, this.generateRunOptions());
                    options.runAllCodeChunks = false;
                    return this.parseMD(inputString, options);
                }
                if (options.isForPreview) {
                    // this.cachedHTML = html // save to cache
                    this.isPreviewInPresentationMode = !!slideConfigs.length; // check presentation mode
                }
                if (options.triggeredBySave && yamlConfig["export_on_save"]) {
                    // export files
                    this.exportOnSave(yamlConfig["export_on_save"]);
                }
                if (!this.config.enableScriptExecution) {
                    // disable importing js and css files.
                    JSAndCssFiles = [];
                }
                return {
                    html,
                    markdown: inputString,
                    tocHTML: this.tocHTML,
                    yamlConfig,
                    JSAndCssFiles,
                };
            });
        }
        /**
         * legacy method to support backwards compatibility
         */
        runCodeChunks() {
            return fenced_code_chunks_1.runCodeChunks(this.codeChunksData, this.generateRunOptions());
        }
        /**
         * legacy method to support backwards compatibility
         */
        runCodeChunk(id) {
            return fenced_code_chunks_1.runCodeChunk(id, this.codeChunksData, this.generateRunOptions());
        }
        generateRunOptions() {
            return {
                enableScriptExecution: this.config.enableScriptExecution,
                fileDirectoryPath: this.fileDirectoryPath,
                filePath: this.filePath,
                imageFolderPath: this.config.imageFolderPath,
                latexEngine: this.config.latexEngine,
                modifySource: MarkdownEngine.modifySource.bind(this),
                parseMD: this.parseMD.bind(this),
                headings: this.headings,
                resolveFilePath: this.resolveFilePath.bind(this),
            };
        }
    }
    /**
     * Map preview theme to prism theme.
     */
    MarkdownEngine.AutoPrismThemeMap = {
        "atom-dark.css": "atom-dark.css",
        "atom-light.css": "atom-light.css",
        "atom-material.css": "atom-material.css",
        "github-dark.css": "atom-dark.css",
        "github-light.css": "github.css",
        "gothic.css": "github.css",
        "medium.css": "github.css",
        "monokai.css": "monokai.css",
        "newsprint.css": "pen-paper-coffee.css",
        "night.css": "darcula.css",
        "one-dark.css": "one-dark.css",
        "one-light.css": "one-light.css",
        "solarized-light.css": "solarized-light.css",
        "solarized-dark.css": "solarized-dark.css",
        "vue.css": "vue.css",
    };
    MarkdownEngine.AutoPrismThemeMapForPresentation = {
        "beige.css": "pen-paper-coffee.css",
        "black.css": "one-dark.css",
        "blood.css": "monokai.css",
        "league.css": "okaidia.css",
        "moon.css": "funky.css",
        "night.css": "atom-dark.css",
        "serif.css": "github.css",
        "simple.css": "github.css",
        "sky.css": "default.css",
        "solarized.css": "solarized-light.css",
        "white.css": "default.css",
    };
    return MarkdownEngine;
})();
exports.MarkdownEngine = MarkdownEngine;
//# sourceMappingURL=markdown-engine.js.map