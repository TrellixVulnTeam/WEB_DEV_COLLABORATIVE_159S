- [Official](#official)
- [Packages](#packages)
  - [Mad science](#mad-science)
  - [Command-line apps](#command-line-apps)
  - [Functional programming](#functional-programming)
  - [HTTP](#http)
  - [Debugging / Profiling](#debugging--profiling)
  - [Logging](#logging)
  - [Command-line utilities](#command-line-utilities)
  - [Build tools](#build-tools)
  - [Hardware](#hardware)
  - [Templating](#templating)
  - [Web frameworks](#web-frameworks)
  - [Documentation](#documentation)
  - [Filesystem](#filesystem)
  - [Control flow](#control-flow)
  - [Streams](#streams)
  - [Real-time](#real-time)
  - [Image](#image)
  - [Text](#text)
  - [Number](#number)
  - [Math](#math)
  - [Date](#date)
  - [URL](#url)
  - [Data validation](#data-validation)
  - [Parsing](#parsing)
  - [Humanize](#humanize)
  - [Compression](#compression)
  - [Network](#network)
  - [Database](#database)
  - [Testing](#testing)
  - [Security](#security)
  - [Benchmarking](#benchmarking)
  - [Minifiers](#minifiers)
  - [Authentication](#authentication)
  - [Authorization](#authorization)
  - [Email](#email)
  - [Job queues](#job-queues)
  - [Node.js management](#nodejs-management)
  - [Natural language processing](#natural-language-processing)
  - [Process management](#process-management)
  - [Automation](#automation)
  - [AST](#ast)
  - [Static site generators](#static-site-generators)
  - [Content management systems](#content-management-systems)
  - [Forum](#forum)
  - [Blogging](#blogging)
  - [Weird](#weird)
  - [Serialization](#serialization)
  - [Miscellaneous](#miscellaneous)
- [Resources](#resources)
  - [Tutorials](#tutorials)
  - [Discovery](#discovery)
  - [Articles](#articles)
  - [Newsletters](#newsletters)
  - [Videos](#videos)
  - [Books](#books)
  - [Blogs](#blogs)
  - [Courses](#courses)
  - [Cheatsheets](#cheatsheets)
  - [Tools](#tools)
  - [Community](#community)
  - [Miscellaneous](#miscellaneous-1)
- [Related lists](#related-lists)

## Official

- [Website](https://nodejs.org)
- [Documentation](https://nodejs.org/dist/latest/docs/api/)
- [Repository](https://github.com/nodejs/node)

## Packages

### Mad science

- [webtorrent](https://github.com/feross/webtorrent) - Streaming torrent client for Node.js and the browser.
- [peerflix](https://github.com/mafintosh/peerflix) - Streaming torrent client.
- [dat](https://github.com/datproject/dat-node) - Real-time replication and versioning for data sets.
- [ipfs](https://github.com/ipfs/js-ipfs) - Distributed file system that seeks to connect all computing devices with the same system of files.
- [stackgl](https://github.com/stackgl) - Open software ecosystem for WebGL, built on top of browserify and npm.
- [peerwiki](https://github.com/mafintosh/peerwiki) - All of Wikipedia on BitTorrent.
- [peercast](https://github.com/mafintosh/peercast) - Stream a torrent video to Chromecast.
- [BitcoinJS](https://github.com/bitcoinjs/bitcoinjs-lib) - Clean, readable, proven Bitcoin library.
- [Bitcore](https://github.com/bitpay/bitcore) - Pure and powerful Bitcoin library.
- [PDFKit](https://github.com/devongovett/pdfkit) - PDF generation library.
- [turf](https://github.com/Turfjs/turf) - Modular geospatial processing and analysis engine.
- [webcat](https://github.com/mafintosh/webcat) - p2p pipe across the web using WebRTC that uses your GitHub private/public key for authentication.
- [NodeOS](https://github.com/NodeOS/NodeOS) - The first operating system powered by npm.
- [YodaOS](https://github.com/yodaos-project/yodaos) - AI operating system.
- [Brain.js](https://github.com/BrainJS/brain.js) - Machine-learning framework.
- [Pipcook](https://github.com/alibaba/pipcook) - Front-end algorithm framework to create a machine learning pipeline.
- [Cytoscape.js](https://github.com/cytoscape/cytoscape.js) - Graph theory (a.k.a. network) modeling and analysis.
- [Kadence](https://gitlab.com/deadcanaries/kadence) - Kademlia distributed hash table.
- [seedshot](https://github.com/twobucks/seedshot) - Temporary P2P screenshot sharing from your browser.
- [js-git](https://github.com/creationix/js-git) - JavaScript implementation of Git.
- [skale](https://github.com/skale-me/skale-engine) - High performance distributed data processing engine.
- [xlsx](https://github.com/sheetjs/js-xlsx) - Pure JS Excel spreadsheet reader and writer.
- [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git) - Pure JavaScript implementation of Git.

### Command-line apps

- [np](https://github.com/sindresorhus/np) - Better `npm publish`.
- [npm-name](https://github.com/sindresorhus/npm-name) - Check a package name’s availability on npm.
- [gh-home](https://github.com/sindresorhus/gh-home) - Open the GitHub page of the repo in the current directory.
- [npm-home](https://github.com/sindresorhus/npm-home) - Open the npm page of a package.
- [trash](https://github.com/sindresorhus/trash) - Safer alternative to `rm`.
- [speed-test](https://github.com/sindresorhus/speed-test) - Test your internet connection speed and ping.
- [emoj](https://github.com/sindresorhus/emoj) - Find relevant emoji from text on the command-line.
- [pageres](https://github.com/sindresorhus/pageres) - Capture website screenshots.
- [cpy](https://github.com/sindresorhus/cpy) - Copy files.
- [vtop](https://github.com/MrRio/vtop) - More better top, with nice charts.
- [empty-trash](https://github.com/sindresorhus/empty-trash) - Empty the trash.
- [is-up](https://github.com/sindresorhus/is-up) - Check whether a website is up or down.
- [is-online](https://github.com/sindresorhus/is-online) - Check if the internet connection is up.
- [public-ip](https://github.com/sindresorhus/public-ip) - Get your public IP address.
- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - Copy & paste on the terminal.
- [XO](https://github.com/xojs/xo) - Enforce strict code style using the JavaScript happiness style.
- [Standard](https://github.com/feross/standard) - JavaScript Standard Style — One style to rule them all.
- [ESLint](https://github.com/eslint/eslint) - The pluggable linting utility for JavaScript.
- [dev-time](https://github.com/samverschueren/dev-time-cli) - Get the current local time of a GitHub user.
- [David](https://github.com/alanshaw/david) - Tells you when your package npm dependencies are out of date.
- [http-server](https://github.com/indexzero/http-server) - Simple, zero-config command-line HTTP server.
- [Live Server](https://github.com/tapio/live-server) - Development HTTP-server with livereload capability.
- [bcat](https://github.com/kessler/node-bcat) - Pipe command output to web browsers.
- [normit](https://github.com/pawurb/normit) - Google Translate with speech synthesis in your terminal.
- [fkill](https://github.com/sindresorhus/fkill-cli) - Fabulously kill processes. Cross-platform.
- [pjs](https://github.com/danielstjules/pjs) - Pipeable JavaScript. Quickly filter, map, and reduce from the terminal.
- [license-checker](https://github.com/davglass/license-checker) - Check licenses of your app’s dependencies.
- [browser-run](https://github.com/juliangruber/browser-run) - Easily run code in a browser environment.
- [tmpin](https://github.com/sindresorhus/tmpin) - Adds stdin support to any CLI app that accepts file input.
- [wifi-password](https://github.com/kevva/wifi-password-cli) - Get the current wifi password.
- [wallpaper](https://github.com/sindresorhus/wallpaper) - Change the desktop wallpaper.
- [brightness](https://github.com/kevva/brightness-cli) - Change the screen brightness.
- [torrent](https://github.com/maxogden/torrent) - Download torrents.
- [kill-tabs](https://github.com/sindresorhus/kill-tabs) - Kill all Chrome tabs to improve performance, decrease battery usage, and save memory.
- [alex](https://github.com/wooorm/alex) - Catch insensitive, inconsiderate writing.
- [pen](https://github.com/noraesae/pen) - Live Markdown preview in the browser from your favorite editor.
- [subdownloader](https://github.com/beatfreaker/subdownloader) - Subtitle downloader for movies and TV series.
- [dark-mode](https://github.com/sindresorhus/dark-mode) - Toggle the macOS Dark Mode.
- [iponmap](https://github.com/nogizhopaboroda/iponmap) - IP location finder.
- [Jsome](https://github.com/Javascipt/Jsome) - Pretty prints JSON with configurable colors and indentation.
- [itunes-remote](https://github.com/mischah/itunes-remote) - Interactively control iTunes.
- [mobicon](https://github.com/samverschueren/mobicon-cli) - Mobile app icon generator.
- [mobisplash](https://github.com/samverschueren/mobisplash-cli) - Mobile app splash screen generator.
- [diff2html-cli](https://github.com/rtfpessoa/diff2html-cli) - Pretty git diff to HTML generator.
- [Cash](https://github.com/dthree/cash) - Cross-platform Unix shell commands in pure JavaScript.
- [trymodule](https://github.com/VictorBjelkholm/trymodule) - Try out npm packages in the terminal.
- [jscpd](https://github.com/kucherenko/jscpd) - Copy/paste detector for source code.
- [atmo](https://github.com/Raathigesh/Atmo) - Server-side API mocking.
- [auto-install](https://github.com/siddharthkp/auto-install) - Auto installs dependencies as you code.
- [lessmd](https://github.com/linuxenko/lessmd) - Markdown in the terminal.
- [cost-of-modules](https://github.com/siddharthkp/cost-of-modules) - Find out which dependencies are slowing you down.
- [localtunnel](https://github.com/localtunnel/localtunnel) - Expose your localhost to the world.
- [svg-term-cli](https://github.com/marionebl/svg-term-cli) - Share terminal sessions via SVG.
- [gtop](https://github.com/aksakalli/gtop) - System monitoring dashboard for the terminal.
- [themer](https://github.com/mjswensen/themer) - Generate themes for your editor, terminal, wallpaper, Slack, and more.
- [carbon-now-cli](https://github.com/mixn/carbon-now-cli) - Beautiful images of your code — from right inside your terminal.
- [cash-cli](https://github.com/xxczaki/cash-cli) - Convert between 170 currencies.
- [taskbook](https://github.com/klauscfhq/taskbook) - Tasks, boards & notes for the command-line habitat.
- [discharge](https://github.com/brandonweiss/discharge) - Easily deploy static websites to Amazon S3.
- [npkill](https://github.com/voidcosmos/npkill) - Easily find and remove old and heavy node_modules folders.

### Functional programming

- [lodash](https://github.com/lodash/lodash) - Utility library delivering consistency, customization, performance, & extras. A better and faster Underscore.js.
- [immutable](https://github.com/facebook/immutable-js) - Immutable data collections.
- [Ramda](https://github.com/ramda/ramda) - Utility library with a focus on flexible functional composition enabled by automatic currying and reversed argument order. Avoids mutating data.
- [Folktale](https://github.com/origamitower/folktale) - Suite of libraries for generic functional programming in JavaScript that allows you to write elegant, modular applications with fewer bugs, and more reuse.
- [Mout](https://github.com/mout/mout) - Utility library with the biggest difference between other existing solutions is that you can choose to load only the modules/functions that you need, no extra overhead.
- [Bacon.js](https://github.com/baconjs/bacon.js) - Functional reactive programming.
- [RxJS](https://github.com/reactivex/rxjs) - Functional reactive library for transforming, composing, and querying various kinds of data.
- [Lazy.js](https://github.com/dtao/lazy.js) - Utility library similar to lodash/Underscore but with lazy evaluation, which can translate to superior performance in many cases.
- [Kefir.js](https://github.com/kefirjs/kefir) - Reactive library with focus on high performance and low memory usage.

### HTTP

- [got](https://github.com/sindresorhus/got) - Nicer interface to the built-in `http` module.
- [gh-got](https://github.com/sindresorhus/gh-got) - Convenience wrapper for `got` to interact with the GitHub API.
- [axios](https://github.com/mzabriskie/axios) - Promise based HTTP client (works in the browser too).
- [wreck](https://github.com/hapijs/wreck) - HTTP Client Utilities.
- [download](https://github.com/kevva/download) - Download and extract files effortlessly.
- [http-proxy](https://github.com/nodejitsu/node-http-proxy) - HTTP proxy.
- [superagent](https://github.com/visionmedia/superagent) - HTTP request library.
- [node-fetch](https://github.com/bitinn/node-fetch) - `window.fetch` for Node.js.
- [flashheart](https://github.com/bbc/flashheart) - REST client.
- [http-fake-backend](https://github.com/micromata/http-fake-backend) - Build a fake backend by providing the content of JSON files or JavaScript objects through configurable routes.
- [cacheable-request](https://github.com/lukechilds/cacheable-request) - Wrap native HTTP requests with RFC compliant cache support.
- [gotql](https://github.com/khaosdoctor/gotql) - GraphQL request library built on [got](https://github.com/sindresorhus/got).
- [global-agent](https://github.com/gajus/global-agent) - Global HTTP/HTTPS proxy agent that is configurable using environment variables.
- [smoke](https://github.com/sinedied/smoke) - File-based HTTP mock server with recording abilities.

### Debugging / Profiling

- [ndb](https://github.com/GoogleChromeLabs/ndb) - Improved debugging experience, enabled by Chrome DevTools.
- [ironNode](https://github.com/s-a/iron-node) - Node.js debugger supporting ES2015 out of the box.
- [node-inspector](https://github.com/node-inspector/node-inspector) - Debugger based on Blink Developer Tools.
- [debug](https://github.com/visionmedia/debug) - Tiny debugging utility.
- [why-is-node-running](https://github.com/mafintosh/why-is-node-running) - Node.js is running but you don’t know why?
- [njsTrace](https://github.com/valyouw/njstrace) - Instrument and trace your code, see all function calls, arguments, return values, as well as the time spent in each function.
- [vstream](https://github.com/joyent/node-vstream) - Instrumentable streams mix-ins to inspect a pipeline of streams.
- [stackman](https://github.com/watson/stackman) - Enhance an error stacktrace with code excerpts and other goodies.
- [locus](https://github.com/alidavut/locus) - Starts a REPL at runtime that has access to all variables.
- [0x](https://github.com/davidmarkclements/0x) - Flamegraph profiling.
- [ctrace](https://github.com/automation-stack/ctrace) - Well-formatted and improved trace system calls and signals.
- [leakage](https://github.com/andywer/leakage) - Write memory leak tests.
- [llnode](https://github.com/nodejs/llnode) - Post-mortem analysis tool which allows you to inspect objects and get insights from a crashed Node.js process.
- [thetool](https://github.com/sfninja/thetool) - Capture different CPU, memory, and other profiles for your app in Chrome DevTools friendly format.
- [swagger-stats](https://github.com/slanatech/swagger-stats) - Trace API calls and monitor API performance, health, and usage metrics.
- [NiM](https://github.com/june07/nim) - Manages DevTools debugging workflow.

### Logging

- [pino](https://github.com/pinojs/pino) - Extremely fast logger inspired by Bunyan.
- [winston](https://github.com/winstonjs/winston) - Multi-transport async logging library.
- [console-log-level](https://github.com/watson/console-log-level) - The most simple logger imaginable with support for log levels and custom prefixes.
- [storyboard](https://github.com/guigrpa/storyboard) - End-to-end, hierarchical, real-time, colorful logs and stories.
- [signale](https://github.com/klauscfhq/signale) - Console logger.
- [consola](https://github.com/nuxt/consola) - Console logger.

### Command-line utilities

- [chalk](https://github.com/chalk/chalk) - Terminal string styling done right.
- [meow](https://github.com/sindresorhus/meow) - CLI app helper.
- [yargs](https://github.com/yargs/yargs) - Command-line parser that automatically generates an elegant user-interface.
- [ora](https://github.com/sindresorhus/ora) - Elegant terminal spinner.
- [get-stdin](https://github.com/sindresorhus/get-stdin) - Easier stdin.
- [log-update](https://github.com/sindresorhus/log-update) - Log by overwriting the previous output in the terminal. Useful for rendering progress bars, animations, etc.
- [Ink](https://github.com/vadimdemedes/ink) - React for interactive command-line apps.
- [listr](https://github.com/samverschueren/listr) - Terminal task list.
- [conf](https://github.com/sindresorhus/conf) - Simple config handling for your app or module.
- [ansi-escapes](https://github.com/sindresorhus/ansi-escapes) - ANSI escape codes for manipulating the terminal.
- [log-symbols](https://github.com/sindresorhus/log-symbols) - Colored symbols for various log levels.
- [figures](https://github.com/sindresorhus/figures) - Unicode symbols with Windows CMD fallbacks.
- [boxen](https://github.com/sindresorhus/boxen) - Create boxes in the terminal.
- [terminal-link](https://github.com/sindresorhus/terminal-link) - Create clickable links in the terminal.
- [terminal-image](https://github.com/sindresorhus/terminal-image) - Display images in the terminal.
- [string-width](https://github.com/sindresorhus/string-width) - Get the visual width of a string - the number of columns required to display it.
- [cli-truncate](https://github.com/sindresorhus/cli-truncate) - Truncate a string to a specific width in the terminal.
- [first-run](https://github.com/sindresorhus/first-run) - Check if it’s the first time the process is run.
- [blessed](https://github.com/chjj/blessed) - Curses-like library.
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) - Interactive command-line prompt.
- [yn](https://github.com/sindresorhus/yn) - Parse yes/no like values.
- [cli-table3](https://github.com/cli-table/cli-table3) - Pretty unicode tables.
- [drawille](https://github.com/madbence/node-drawille) - Draw on the terminal with unicode braille characters.
- [update-notifier](https://github.com/yeoman/update-notifier) - Update notifications for your CLI app.
- [ascii-charts](https://github.com/jstrace/chart) - ASCII bar chart in the terminal.
- [progress](https://github.com/tj/node-progress) - Flexible ascii progress bar.
- [insight](https://github.com/yeoman/insight) - Helps you understand how your tool is being used by anonymously reporting usage metrics to Google Analytics.
- [cli-cursor](https://github.com/sindresorhus/cli-cursor) - Toggle the CLI cursor.
- [columnify](https://github.com/timoxley/columnify) - Create text-based columns suitable for console output. Supports cell wrapping.
- [cli-columns](https://github.com/shannonmoeller/cli-columns) - Columnated unicode and ansi-safe text lists.
- [cfonts](https://github.com/dominikwilkowski/cfonts) - Sexy ASCII fonts for the console.
- [multispinner](https://github.com/codekirei/node-multispinner) - Multiple, simultaneous, individually controllable CLI spinners.
- [omelette](https://github.com/f/omelette) - Shell autocompletion helper.
- [cross-env](https://github.com/kentcdodds/cross-env) - Set environment variables cross-platform.
- [shelljs](https://github.com/shelljs/shelljs) - Portable Unix shell commands.
- [sudo-block](https://github.com/sindresorhus/sudo-block) - Block users from running your app with root permissions.
- [loud-rejection](https://github.com/sindresorhus/loud-rejection) - Make unhandled promise rejections fail loudly instead of the default silent fail.
- [sparkly](https://github.com/sindresorhus/sparkly) - Generate sparklines `▁▂▃▅▂▇`.
- [Bit](https://github.com/teambit/bit) - Create, maintain, find and use small modules and components across repositories.
- [gradient-string](https://github.com/bokub/gradient-string) - Beautiful color gradients in terminal output.
- [oclif](https://github.com/oclif/oclif) - CLI framework complete with parser, automatic documentation, testing, and plugins.
- [term-size](https://github.com/sindresorhus/term-size) - Reliably get the terminal window size.
- [Cliffy](https://github.com/drew-y/cliffy) - Framework for interactive CLIs.

### Build tools

- [parcel](https://github.com/parcel-bundler/parcel) - Blazing fast, zero config web app bundler.
- [webpack](https://github.com/webpack/webpack) - Packs modules and assets for the browser.
- [rollup](https://github.com/rollup/rollup) - Next-generation ES2015 module bundler.
- [gulp](https://github.com/gulpjs/gulp) - Streaming and fast build system that favors code over config.
- [Broccoli](https://github.com/broccolijs/broccoli) - Fast, reliable asset pipeline, supporting constant-time rebuilds and compact build definitions.
- [Brunch](https://github.com/brunch/brunch) - Front-end web app build tool with simple declarative config, fast incremental compilation, and an opinionated workflow.
- [Start](https://github.com/deepsweet/start) - Functional task runner with shareable presets.
- [ygor](https://github.com/shannonmoeller/ygor) - Promising task runner for when `npm run` isn’t enough and everything else is too much.
- [FuseBox](https://github.com/fuse-box/fuse-box) - Fast build system that combines the power of webpack, JSPM and SystemJS, with first-class TypeScript support.
- [pkg](https://github.com/zeit/pkg) - Package your Node.js project into an executable.

### Hardware

- [johnny-five](https://github.com/rwaldron/johnny-five) - Firmata based Arduino Framework.
- [serialport](https://github.com/voodootikigod/node-serialport) - Access serial ports for reading and writing.
- [usb](https://github.com/nonolith/node-usb) - USB library.
- [i2c-bus](https://github.com/fivdi/i2c-bus) - I2C serial bus access.
- [onoff](https://github.com/fivdi/onoff) - GPIO access and interrupt detection.
- [spi-device](https://github.com/fivdi/spi-device) - SPI serial bus access.
- [pigpio](https://github.com/fivdi/pigpio) - Fast GPIO, PWM, servo control, state change notification, and interrupt handling on the Raspberry Pi.
- [gps](https://github.com/infusion/GPS.js) - NMEA parser for handling GPS receivers.

### Templating

- [marko](https://github.com/marko-js/marko) - HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering and custom tags.
- [nunjucks](https://github.com/mozilla/nunjucks) - Templating engine with inheritance, asynchronous control, and more (jinja2 inspired).
- [handlebars.js](https://github.com/wycats/handlebars.js) - Superset of Mustache templates which adds powerful features like helpers and more advanced blocks.
- [EJS](https://github.com/mde/ejs) - Simple unopinionated templating language.
- [Pug](https://github.com/pugjs/pug) - High-performance template engine heavily influenced by Haml.

### Web frameworks

- [Hapi](https://github.com/hapijs/hapi) - Framework for building applications and services.
- [Koa](https://github.com/koajs/koa) - Framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.
- [Express](https://github.com/expressjs/express) - Web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.
- [Feathers](https://github.com/feathersjs/feathers) - Microservice framework built in the spirit of Express.
- [LoopBack](https://github.com/strongloop/loopback-next) - Powerful framework for creating REST APIs and easily connecting to backend data sources.
- [Meteor](https://github.com/meteor/meteor) - An ultra-simple, database-everywhere, data-on-the-wire, pure-Javascript web framework. _(You might like [awesome-meteor](https://github.com/Urigo/awesome-meteor))_
- [Restify](https://github.com/restify/node-restify) - Enables you to build correct REST web services.
- [ThinkJS](https://github.com/thinkjs/thinkjs) - Framework with ES2015+ support, WebSockets, REST API.
- [ActionHero](https://github.com/actionhero/actionhero) - Framework for making reusable & scalable APIs for TCP sockets, WebSockets, and HTTP clients.
- [Next.js](https://github.com/zeit/next.js) - Minimalistic framework for server-rendered universal JavaScript web apps.
- [Nuxt.js](https://github.com/nuxt/nuxt.js) - Minimalistic framework for server-rendered Vue.js apps.
- [seneca](https://github.com/senecajs/seneca) - Toolkit for writing microservices.
- [AdonisJs](http://adonisjs.com) - A true MVC framework for Node.js built on solid foundations of Dependency Injection and IoC container.
- [Hemera](https://github.com/hemerajs/hemera) - Write reliable and fault-tolerant microservices with [NATS](https://nats.io).
- [Micro](https://github.com/zeit/micro) - Minimalistic microservice framework with an async approach.
- [Moleculer](https://moleculer.services) - Fast & powerful microservices framework.
- [Fastify](https://github.com/fastify/fastify) - Fast and low overhead web framework.
- [Nest](https://github.com/nestjs/nest) - Angular-inspired framework for building efficient and scalable server-side apps.
- [Zeronode](https://github.com/sfast/zeronode) - Minimal building block for reliable and fault-tolerant microservices.
- [TypeGraphQL](https://github.com/19majkel94/type-graphql) - Modern framework for creating GraphQL APIs with TypeScript, using classes and decorators.
- [Tinyhttp](https://github.com/talentlessguy/tinyhttp) - Modern and fast Express-like web framework.
- [Marble.js](https://github.com/marblejs/marble) - Functional reactive framework for building server-side apps, based on TypeScript and RxJS.

### Documentation

- [documentation.js](https://github.com/documentationjs/documentation) - API documentation generator with support for ES2015+ and flow annotation.
- [ESDoc](https://github.com/esdoc/esdoc) - Documentation generator targeting ES2015, attaching test code and measuring documentation coverage.
- [Docco](https://github.com/jashkenas/docco) - Documentation generator which produces an HTML document that displays your comments intermingled with your code.
- [JSDoc](https://github.com/jsdoc3/jsdoc) - API documentation generator similar to JavaDoc or PHPDoc.
- [Docusaurus](https://github.com/facebook/docusaurus) - Documentation website generator that leverages React and Markdown, and comes with translation and versioning features.

### Filesystem

- [del](https://github.com/sindresorhus/del) - Delete files/folders using globs.
- [globby](https://github.com/sindresorhus/globby) - Glob files with support for multiple patterns.
- [cpy](https://github.com/sindresorhus/cpy) - Copy files.
- [rimraf](https://github.com/isaacs/rimraf) - Recursively delete files like `rm -rf`.
- [make-dir](https://github.com/sindresorhus/make-dir) - Recursively create directories like `mkdir -p`.
- [graceful-fs](https://github.com/isaacs/node-graceful-fs) - Drop-in replacement for the `fs` module with various improvements.
- [chokidar](https://github.com/paulmillr/chokidar) - Filesystem watcher which stabilizes events from `fs.watch` and `fs.watchFile` as well as using native `fsevents` on macOS.
- [find-up](https://github.com/sindresorhus/find-up) - Find a file by walking up parent directories.
- [proper-lockfile](https://github.com/IndigoUnited/node-proper-lockfile) - Inter-process and inter-machine lockfile utility.
- [load-json-file](https://github.com/sindresorhus/load-json-file) - Read and parse a JSON file.
- [write-json-file](https://github.com/sindresorhus/write-json-file) - Stringify and write JSON to a file atomically.
- [fs-write-stream-atomic](https://github.com/npm/fs-write-stream-atomic) - Like `fs.createWriteStream()`, but atomic.
- [filenamify](https://github.com/sindresorhus/filenamify) - Convert a string to a valid filename.
- [lnfs](https://github.com/kevva/lnfs) - Force create symlinks like `ln -fs`.
- [istextorbinary](https://github.com/bevry/istextorbinary) - Check if a file is text or binary.
- [fs-jetpack](https://github.com/szwacz/fs-jetpack) - Completely redesigned file system API for convenience in everyday use.
- [fs-extra](https://github.com/jprichardson/node-fs-extra) - Extra methods for the `fs` module.
- [pkg-dir](https://github.com/sindresorhus/pkg-dir) - Find the root directory of an npm package.
- [filehound](https://github.com/nspragg/filehound) - Flexible and fluent interface for searching the file system.
- [move-file](https://github.com/sindresorhus/move-file) - Move a file, even works across devices.
- [tempy](https://github.com/sindresorhus/tempy) - Get a random temporary file or directory path.

### Control flow

- Promises
  - [Bluebird](https://github.com/petkaantonov/bluebird) - Promise library with focus on innovative features and performance.
  - [pify](https://github.com/sindresorhus/pify) - Promisify a callback-style function.
  - [delay](https://github.com/sindresorhus/delay) - Delay a promise a specified amount of time.
  - [promise-memoize](https://github.com/nodeca/promise-memoize) - Memoize promise-returning functions, with expire and prefetch.
  - [valvelet](https://github.com/lpinca/valvelet) - Limit the execution rate of a promise-returning function.
  - [p-map](https://github.com/sindresorhus/p-map) - Map over promises concurrently.
  - [More…](https://github.com/sindresorhus/promise-fun)
- Observables
  - [zen-observable](https://github.com/zenparsing/zen-observable) - Implementation of Observables.
  - [RxJS](https://github.com/ReactiveX/RxJS) - Reactive programming.
  - [observable-to-promise](https://github.com/sindresorhus/awesome-observables) - Convert an Observable to a Promise.
  - [More…](https://github.com/sindresorhus/awesome-observables)
- Streams
  - [Highland.js](https://github.com/caolan/highland) - Manages synchronous and asynchronous code easily, using nothing more than standard JavaScript and Node-like Streams.
- Callbacks
  - [each-async](https://github.com/sindresorhus/each-async) - Async concurrent iterator like forEach.
  - [async](https://github.com/caolan/async) - Provides straight-forward, powerful functions for working with asynchronicity.
- Channels
  - [js-csp](https://github.com/ubolonton/js-csp) - Communicating sequential processes for JavaScript (like Clojurescript core.async, or Go).

### Streams

- [through2](https://github.com/rvagg/through2) - Tiny wrapper around streams2 Transform to avoid explicit subclassing noise.
- [from2](https://github.com/hughsk/from2) - Convenience wrapper for ReadableStream, inspired by `through2`.
- [get-stream](https://github.com/sindresorhus/get-stream) - Get a stream as a string or buffer.
- [into-stream](https://github.com/sindresorhus/into-stream) - Convert a buffer/string/array/object into a stream.
- [duplexify](https://github.com/mafintosh/duplexify) - Turn a writeable and readable stream into a single streams2 duplex stream.
- [pumpify](https://github.com/mafintosh/pumpify) - Combine an array of streams into a single duplex stream.
- [peek-stream](https://github.com/mafintosh/peek-stream) - Transform stream that lets you peek the first line before deciding how to parse it.
- [binary-split](https://github.com/maxogden/binary-split) - Newline (or any delimiter) splitter stream.
- [byline](https://github.com/jahewson/node-byline) - Super-simple line-by-line Stream reader.
- [first-chunk-stream](https://github.com/sindresorhus/first-chunk-stream) - Transform the first chunk in a stream.
- [pad-stream](https://github.com/sindresorhus/pad-stream) - Pad each line in a stream.
- [multistream](https://github.com/feross/multistream) - Combine multiple streams into a single stream.
- [stream-combiner2](https://github.com/substack/stream-combiner2) - Turn a pipeline into a single stream.
- [readable-stream](https://github.com/nodejs/readable-stream) - Mirror of Streams2 and Streams3 implementations in core.
- [through2-concurrent](https://github.com/almost/through2-concurrent) - Transform object streams concurrently.

### Real-time

- [µWebSockets](https://github.com/uWebSockets/uWebSockets) - Highly scalable WebSocket server & client library.
- [Socket.io](https://github.com/socketio/socket.io) - Enables real-time bidirectional event-based communication.
- [Faye](https://github.com/faye/faye) - Real-time client-server message bus, based on Bayeux protocol.
- [SocketCluster](https://github.com/SocketCluster/socketcluster) - Scalable HTTP + WebSocket engine which can run on multiple CPU cores.
- [Primus](https://github.com/primus/primus) - An abstraction layer for real-time frameworks to prevent module lock-in.
- [deepstream.io](https://github.com/deepstreamIO/deepstream.io-client-js) - Scalable real-time microservice framework.
- [Kalm](https://github.com/kalm/kalm.js) - Low-level socket router and middleware framework.
- [MQTT.js](https://github.com/mqttjs/MQTT.js) - Client for MQTT - Pub-sub based messaging protocol for use on top of TCP/IP.
- [rpc-websockets](https://github.com/elpheria/rpc-websockets) - JSON-RPC 2.0 implementation over WebSockets.
- [Aedes](https://github.com/mcollina/aedes) - Barebone MQTT server that can run on any stream server.

### Image

- [sharp](https://github.com/lovell/sharp) - The fastest module for resizing JPEG, PNG, WebP and TIFF images.
- [image-type](https://github.com/sindresorhus/image-type) - Detect the image type of a Buffer/Uint8Array.
- [gm](https://github.com/aheckmann/gm) - GraphicsMagick and ImageMagick wrapper.
- [lwip](https://github.com/EyalAr/lwip) - Lightweight image processor which does not require ImageMagick.
- [pica](https://github.com/nodeca/pica) - High quality & fast resize (lanczos3) in pure JS. Alternative to canvas drawImage(), when no pixelation allowed.
- [jimp](https://github.com/oliver-moran/jimp) - Image processing in pure JavaScript.
- [probe-image-size](https://github.com/nodeca/probe-image-size) - Get the size of most image formats without a full download.
- [qrcode](https://github.com/soldair/node-qrcode) - QR code and bar code generator.

### Text

- [iconv-lite](https://github.com/ashtuchkin/iconv-lite) - Convert character encodings.
- [string-length](https://github.com/sindresorhus/string-length) - Get the real length of a string - by correctly counting astral symbols and ignoring ansi escape codes.
- [camelcase](https://github.com/sindresorhus/camelcase) - Convert a dash/dot/underscore/space separated string to camelCase: foo-bar → fooBar.
- [escape-string-regexp](https://github.com/sindresorhus/escape-string-regexp) - Escape RegExp special characters.
- [execall](https://github.com/sindresorhus/execall) - Find multiple RegExp matches in a string.
- [splice-string](https://github.com/sindresorhus/splice-string) - Remove or replace part of a string like `Array#splice`.
- [indent-string](https://github.com/sindresorhus/indent-string) - Indent each line in a string.
- [strip-indent](https://github.com/sindresorhus/strip-indent) - Strip leading whitespace from every line in a string.
- [detect-indent](https://github.com/sindresorhus/detect-indent) - Detect the indentation of code.
- [he](https://github.com/mathiasbynens/he) - HTML entity encoder/decoder.
- [i18n-node](https://github.com/mashpie/i18n-node) - Simple translation module with dynamic JSON storage.
- [babelfish](https://github.com/nodeca/babelfish) - i18n with very easy syntax for plurals.
- [matcher](https://github.com/sindresorhus/matcher) - Simple wildcard matching.
- [unhomoglyph](https://github.com/nodeca/unhomoglyph) - Normalize visually similar unicode characters.
- [i18next](https://github.com/i18next/i18next) - Internationalization framework.
- [nanoid](https://github.com/ai/nanoid) - Tiny, secure, URL-friendly, unique string ID generator.
- [StegCloak](https://github.com/kurolabs/stegcloak) - Conceal secrets within strings, in plain sight.

### Number

- [random-int](https://github.com/sindresorhus/random-int) - Generate a random integer.
- [random-float](https://github.com/sindresorhus/random-float) - Generate a random float.
- [unique-random](https://github.com/sindresorhus/unique-random) - Generate random numbers that are consecutively unique.
- [round-to](https://github.com/sindresorhus/round-to) - Round a number to a specific number of decimal places: `1.234` → `1.2`.

### Math

- [ndarray](https://github.com/scijs/ndarray) - Multidimensional arrays.
- [mathjs](https://github.com/josdejong/mathjs) - An extensive math library.
- [math-clamp](https://github.com/sindresorhus/math-clamp) - Clamp a number.
- [algebra](https://github.com/fibo/algebra) - Algebraic structures.
- [multimath](https://github.com/nodeca/multimath) - Core to create fast image math in WebAssembly and JS.

### Date

- [Luxon](https://github.com/moment/luxon) - Library for working with dates and times.
- [date-fns](https://github.com/date-fns/date-fns) - Modern date utility.
- [Moment.js](http://momentjs.com) - Parse, validate, manipulate, and display dates.
- [Day.js](https://github.com/iamkun/dayjs) - Immutable date library alternative to Moment.js.
- [dateformat](https://github.com/felixge/node-dateformat) - Date formatting.
- [tz-format](https://github.com/samverschueren/tz-format) - Format a date with timezone: `2015-11-30T10:40:35+01:00`.
- [cctz](https://github.com/floatdrop/node-cctz) - Fast parsing, formatting, and timezone conversation for dates.

### URL

- [normalize-url](https://github.com/sindresorhus/normalize-url) - Normalize a URL.
- [humanize-url](https://github.com/sindresorhus/humanize-url) - Humanize a URL: http://sindresorhus.com → sindresorhus.com.
- [url-unshort](https://github.com/nodeca/url-unshort) - Expand shortened URLs.
- [speakingurl](https://github.com/pid/speakingurl) - Generate a slug from a string with transliteration.
- [linkify-it](https://github.com/markdown-it/linkify-it) - Link patterns detector with full unicode support.
- [url-pattern](https://github.com/snd/url-pattern) - Easier than regex string matching patterns for URLs and other strings.
- [embedza](https://github.com/nodeca/embedza) - Create HTML snippets/embeds from URLs using info from oEmbed, Open Graph, meta tags.

### Data validation

- [joi](https://github.com/hapijs/joi) - Object schema description language and validator for JavaScript objects.
- [is-my-json-valid](https://github.com/mafintosh/is-my-json-valid) - JSON Schema validator that uses code generation to be extremely fast.
- [property-validator](https://github.com/nettofarah/property-validator) - Easy property validation for Express.
- [schema-inspector](https://github.com/Atinux/schema-inspector) - JSON API sanitization and validation.
- [ajv](https://github.com/epoberezkin/ajv) - The fastest JSON Schema validator. Supports v5, v6 and v7 proposals.
- [Superstruct](https://github.com/ianstormtaylor/superstruct) - Simple and composable way to validate data in JavaScript (and TypeScript).

### Parsing

- [remark](https://github.com/wooorm/remark) - Markdown processor powered by plugins.
- [markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parser with 100% CommonMark support, extensions and syntax plugins.
- [parse5](https://github.com/inikulin/parse5) - Fast full-featured spec compliant HTML parser.
- [strip-json-comments](https://github.com/sindresorhus/strip-json-comments) - Strip comments from JSON.
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Strip comments from CSS.
- [parse-json](https://github.com/sindresorhus/parse-json) - Parse JSON with more helpful errors.
- [URI.js](https://github.com/medialize/URI.js) - URL mutation.
- [PostCSS](https://github.com/postcss/postcss) - CSS parser / stringifier.
- [JSONStream](https://github.com/dominictarr/JSONStream) - Streaming JSON.parse and stringify.
- [neat-csv](https://github.com/sindresorhus/neat-csv) - Fast CSV parser. Callback interface for the above.
- [csv-parser](https://github.com/mafintosh/csv-parser) - Streaming CSV parser that aims to be faster than everyone else.
- [PEG.js](https://github.com/pegjs/pegjs) - Simple parser generator that produces fast parsers with excellent error reporting.
- [x-ray](https://github.com/lapwinglabs/x-ray) - Web scraping utility.
- [nearley](https://github.com/Hardmath123/nearley) - Simple, fast, powerful parsing for JavaScript.
- [binary-extract](https://github.com/juliangruber/binary-extract) - Extract a value from a buffer of JSON without parsing the whole thing.
- [Stylecow](https://github.com/stylecow/stylecow) - Parse, manipulate and convert modern CSS to make it compatible with all browsers. Extensible with plugins.
- [js-yaml](https://github.com/nodeca/js-yaml) - Very fast YAML parser.
- [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js) - XML to JavaScript object converter.
- [Jison](https://github.com/zaach/jison) - Friendly JavaScript parser generator. It shares genes with Bison, Yacc and family.
- [google-libphonenumber](https://github.com/seegno/google-libphonenumber) - Parse, format, store and validate phone numbers.
- [ref](https://github.com/TooTallNate/ref) - Read/write structured binary data in Buffers.
- [xlsx-populate](https://github.com/dtjohnson/xlsx-populate) - Read/write Excel XLSX.
- [Chevrotain](https://github.com/Chevrotain/chevrotain) - Very fast and feature rich parser building toolkit for JavaScript.
- [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) - Validate and parse XML.

### Humanize

- [pretty-bytes](https://github.com/sindresorhus/pretty-bytes) - Convert bytes to a human readable string: `1337` → `1.34 kB`.
- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Convert milliseconds to a human readable string: `1337000000` → `15d 11h 23m 20s`.
- [ms](https://github.com/rauchg/ms.js) - Tiny millisecond conversion utility.
- [pretty-error](https://github.com/AriaMinaei/pretty-error) - Errors with less clutter.
- [read-art](https://github.com/Tjatse/node-readability) - Extract readable content from any page.

### Compression

- [yazl](https://github.com/thejoshwolfe/yazl) - Zip.
- [yauzl](https://github.com/thejoshwolfe/yauzl) - Unzip.
- [Archiver](https://github.com/archiverjs/node-archiver) - Streaming interface for archive generation, supporting ZIP and TAR.
- [pako](https://github.com/nodeca/pako) - High speed zlib port to pure js (deflate, inflate, gzip).
- [tar-stream](https://github.com/mafintosh/tar-stream) - Streaming tar parser and generator. Also see [tar-fs](https://github.com/mafintosh/tar-fs).
- [decompress](https://github.com/kevva/decompress) - Decompression module with support for `tar`, `tar.gz` and `zip` files out of the box.

### Network

- [get-port](https://github.com/sindresorhus/get-port) - Get an available port.
- [ipify](https://github.com/sindresorhus/ipify) - Get your public IP address.
- [getmac](https://github.com/bevry/getmac) - Get the computer MAC address.
- [DHCP](https://github.com/infusion/node-dhcp) - DHCP client and server.
- [netcat](https://github.com/roccomuso/netcat) - Netcat port in pure JS.

### Database

- Drivers
  - [PostgreSQL](https://github.com/brianc/node-postgres) - PostgreSQL client. Pure JavaScript and native libpq bindings.
  - [Redis](https://github.com/luin/ioredis) - Redis client.
  - [LevelUP](https://github.com/Level/levelup) - LevelDB.
  - [MySQL](https://github.com/mysqljs/mysql) - MySQL client.
  - [couchdb-nano](https://github.com/apache/couchdb-nano) - CouchDB client.
  - [Aerospike](https://github.com/aerospike/aerospike-client-nodejs) - Aerospike client.
  - [Couchbase](https://github.com/couchbase/couchnode) - Couchbase client.
  - [MongoDB](https://github.com/mongodb/node-mongodb-native) - MongoDB driver.
- ODM / ORM
  - [Sequelize](https://github.com/sequelize/sequelize) - Multi-dialect ORM. Supports PostgreSQL, SQLite, MySQL, and more.
  - [Bookshelf](https://github.com/bookshelf/bookshelf) - ORM for PostgreSQL, MySQL and SQLite3 in the style of Backbone.js.
  - [Massive](https://github.com/robconery/massive-js) - PostgreSQL data access tool.
  - [Mongoose](https://github.com/Automattic/mongoose) - Elegant MongoDB object modeling.
  - [Waterline](https://github.com/balderdashy/waterline) - Datastore-agnostic tool that dramatically simplifies interaction with one or more databases.
  - [OpenRecord](https://github.com/PhilWaldmann/openrecord) - ORM for PostgreSQL, MySQL, SQLite3 and RESTful datastores. Similar to ActiveRecord.
  - [pg-promise](https://github.com/vitaly-t/pg-promise) - PostgreSQL framework for native SQL using promises.
  - [slonik](https://github.com/gajus/slonik) - PostgreSQL client with strict types, detailed logging and assertions.
  - [Objection.js](https://github.com/Vincit/objection.js) - Lightweight ORM built on the SQL query builder Knex.
  - [TypeORM](https://github.com/typeorm/typeorm) - ORM for PostgreSQL, MariaDB, MySQL, SQLite, and more.
  - [MikroORM](https://github.com/mikro-orm/mikro-orm) - TypeScript ORM based on Data Mapper, Unit of Work and Identity Map patterns. Supports MongoDB, PostgreSQL, MySQL and SQLite.
  - [Prisma](https://github.com/prisma/prisma) - Modern database access (ORM alternative). Auto-generated and type-safe query builder in TypeScript. Supports PostgreSQL, MySQL & SQLite.
- Query builder
  - [Knex](https://github.com/tgriesser/knex) - Query builder for PostgreSQL, MySQL and SQLite3, designed to be flexible, portable, and fun to use.
- Other
  - [NeDB](https://github.com/louischatriot/nedb) - Embedded persistent database written in JavaScript.
  - [Lowdb](https://github.com/typicode/lowdb) - Small JavaScript database powered by Lodash.
  - [Keyv](https://github.com/lukechilds/keyv) - Simple key-value storage with support for multiple backends.
  - [Finale](https://github.com/tommybananas/finale) - RESTful endpoint generator for your Sequelize models.
  - [database-js](https://github.com/mlaanderson/database-js) - Wrapper for multiple databases with a JDBC-like connection.
  - [Mongo Seeding](https://github.com/pkosiec/mongo-seeding) - Populate MongoDB databases with JavaScript and JSON files.
  - <span class="citation" data-cites="databases">\[@databases\]</span>(https://github.com/ForbesLindesay/atdatabases) - Query PostgreSQL, MySQL and SQLite3 with plain SQL without risking SQL injection.
  - [pg-mem](https://github.com/oguimbal/pg-mem) - In-memory PostgreSQL instance for your tests.

### Testing

- [AVA](https://github.com/avajs/ava) - Futuristic test runner.
- [Mocha](https://github.com/mochajs/mocha) - Feature-rich test framework making asynchronous testing simple and fun.
- [nyc](https://github.com/bcoe/nyc) - Code coverage tool built on istanbul that works with subprocesses.
- [tap](https://github.com/isaacs/node-tap) - TAP test framework.
- [tape](https://github.com/substack/tape) - TAP-producing test harness.
- [power-assert](https://github.com/power-assert-js/power-assert) - Provides descriptive assertion messages through the standard assert interface.
- [Mochify](https://github.com/mantoni/mochify.js) - TDD with Browserify, Mocha, PhantomJS and WebDriver.
- [trevor](https://github.com/vdemedes/trevor) - Run tests against multiple versions of Node.js without switching versions manually or pushing to Travis CI.
- [loadtest](https://github.com/alexfernandez/loadtest) - Run load tests for your web application, with an API for automation.
- [Sinon.JS](https://github.com/sinonjs/sinon) - Test spies, stubs and mocks.
- [navit](https://github.com/nodeca/navit) - PhantomJS / SlimerJS wrapper to simplify browser test scripting.
- [Nock](https://github.com/pgte/nock) - HTTP mocking and expectations.
- [intern](https://github.com/theintern/intern) - Code testing stack.
- [toxy](https://github.com/h2non/toxy) - Hackable HTTP proxy to simulate failure scenarios and network conditions.
- [hook-std](https://github.com/sindresorhus/hook-std) - Hook and modify stdout/stderr.
- [testen](https://github.com/egoist/testen) - Run tests for multiple versions of Node.js locally with NVM.
- [Nightwatch](https://github.com/nightwatchjs/nightwatch) - Automated UI testing framework based on Selenium WebDriver.
- [WebdriverIO](https://github.com/webdriverio/webdriverio) - Automated testing based on the WebDriver protocol.
- [Jest](https://github.com/facebook/jest) - Painless JavaScript testing.
- [TestCafe](https://github.com/DevExpress/testcafe) - Automated browser testing.
- [abstruse](https://github.com/bleenco/abstruse) - Continuous Integration server.
- [CodeceptJS](https://github.com/Codeception/CodeceptJS) - End-to-end testing.
- [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Headless Chrome.
- [Playwright](https://github.com/microsoft/playwright) - Headless Chromium, WebKit, and Firefox with a single API.
- [nve](https://github.com/ehmicky/nve) - Run any command on multiple versions of Node.js locally.
- [axe-core](https://github.com/dequelabs/axe-core) - Accessibility engine for automated Web UI testing.
- [testcontainers-node](https://github.com/testcontainers/testcontainers-node) - Provides lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.

### Security

- [upash](https://github.com/simonepri/upash) - Unified API for all password hashing algorithms.
- [themis](https://github.com/cossacklabs/themis) - Multilanguage framework for making typical encryption schemes easy to use: data at rest, authenticated data exchange, transport protection, authentication, and so on.
- [GuardRails](https://github.com/apps/guardrails) - GitHub app that provides security feedback in pull requests.
- [rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible) - Brute-force and DDoS attack protection.
- [crypto-hash](https://github.com/sindresorhus/crypto-hash) - Async non-blocking hashing.
- [jose-simple](https://github.com/davesag/jose-simple) - Encryption and decryption of data using the JOSE (JSON Object Signing and Encryption) standard.

### Benchmarking

- [Benchmark.js](https://github.com/bestiejs/benchmark.js) - Benchmarking library that supports high-resolution timers and returns statistically significant results.
- [matcha](https://github.com/logicalparadox/matcha) - Simplistic approach to benchmarking.

### Minifiers

- [babili](https://github.com/babel/babili) - ES2015+ aware minifier based on the Babel toolchain.
- [UglifyJS2](https://github.com/mishoo/UglifyJS2) - JavaScript minifier.
- [clean-css](https://github.com/jakubpawlowicz/clean-css) - CSS minifier.
- [minimize](https://github.com/Swaagie/minimize) - HTML minifier.
- [imagemin](https://github.com/imagemin/imagemin) - Image minifier.

### Authentication

- [Passport](https://github.com/jaredhanson/passport) - Simple, unobtrusive authentication.
- [Grant](https://github.com/simov/grant) - OAuth providers for Express, Koa, Hapi, Fastify, AWS Lambda, Azure, Google Cloud, Vercel, and many more.

### Authorization

- [CASL](https://github.com/stalniy/casl) - Isomorphic authorization for UI and API.
- [node-casbin](https://github.com/casbin/node-casbin) - Authorization library that supports access control models like ACL, RBAC and ABAC.

### Email

- [Nodemailer](https://github.com/andris9/Nodemailer) - The fastest way to handle email.
- [emailjs](https://github.com/eleith/emailjs) - Send text/HTML emails with attachments to any SMTP server.
- [email-templates](https://github.com/niftylettuce/email-templates) - Create, preview, and send custom email templates.
- [MJML](https://github.com/mjmlio/mjml) - Markup language designed to reduce the pain of creating responsive emails.

### Job queues

- [bull](https://github.com/OptimalBits/bull) - Persistent job and message queue.
- [agenda](https://github.com/rschmukler/agenda) - MongoDB-backed job scheduling.
- [idoit](https://github.com/nodeca/idoit) - Redis-backed job queue engine with advanced job control.
- [node-resque](https://github.com/taskrabbit/node-resque) - Redis-backed job queue.
- [rsmq](https://github.com/smrchy/rsmq) - Redis-backed message queue.
- [bee-queue](https://github.com/bee-queue/bee-queue) - High-performance Redis-backed job queue.
- [RedisSMQ](https://github.com/weyoss/redis-smq) - Simple high-performance Redis message queue with real-time monitoring.
- [sqs-consumer](https://github.com/bbc/sqs-consumer) - Build Amazon Simple Queue Service (SQS) based apps without the boilerplate.
- [better-queue](https://github.com/diamondio/better-queue) - Simple and efficient job queue when you cannot use Redis.

### Node.js management

- [n](https://github.com/tj/n) - Node.js version management.
- [nave](https://github.com/isaacs/nave) - Virtual Environments for Node.js.
- [nodeenv](https://github.com/ekalinin/nodeenv) - Node.js virtual environment compatible to Python’s virtualenv.
- [nvm for Windows](https://github.com/coreybutler/nvm-windows) - Version management for Windows.
- [nodenv](https://github.com/nodenv/nodenv) - Version manager that is similar to Ruby’s rbenv. It supports auto version switching.
- [fnm](https://github.com/Schniz/fnm) - Cross-platform Node.js version manager built in Rust.

### Natural language processing

- [retext](https://github.com/wooorm/retext) - An extensible natural language system.
- [franc](https://github.com/wooorm/franc) - Detect the language of text.
- [leven](https://github.com/sindresorhus/leven) - Measure the difference between two strings using the Levenshtein distance algorithm.
- [natural](https://github.com/NaturalNode/natural) - Natural language facility.
- [nlp.js](https://github.com/axa-group/nlp.js) - Building bots, with entity extraction, sentiment analysis, automatic language identify, and more.

### Process management

- [PM2](https://github.com/Unitech/pm2) - Advanced Process Manager.
- [nodemon](https://github.com/remy/nodemon) - Monitor for changes in your app and automatically restart the server.
- [node-mac](https://github.com/coreybutler/node-mac) - Run scripts as a native Mac daemon and log to the console app.
- [node-linux](https://github.com/coreybutler/node-linux) - Run scripts as native system service and log to syslog.
- [node-windows](https://github.com/coreybutler/node-windows) - Run scripts as a native Windows service and log to the Event viewer.
- [supervisor](https://github.com/petruisfan/node-supervisor) - Restart scripts when they crash or restart when a `*.js` file changes.
- [Phusion Passenger](https://github.com/phusion/passenger) - Friendly process manager that integrates directly into Nginx.

### Automation

- [robotjs](https://github.com/octalmage/robotjs) - Desktop Automation: control the mouse, keyboard and read the screen.
- [nut.js](https://github.com/nut-tree/nut.js) - Cross-platform native GUI automation / testing framework with image matching capabilities which integrates with Jest.

### AST

- [Acorn](https://github.com/ternjs/acorn) - Tiny, fast JavaScript parser.
- [babel-parser](https://github.com/babel/babel/tree/master/packages/babel-parser) - JavaScript parser used in Babel.
- [cherow](https://github.com/cherow/cherow) - JavaScript parser with focus on performance and stability.

### Static site generators

- [Wintersmith](https://github.com/jnordberg/wintersmith) - Flexible, minimalistic, multi-platform static site generator.
- [Assemble](https://github.com/assemble/assemble/) - Static site generator for Node.js, Grunt.js, and Yeoman.
- [DocPad](https://github.com/docpad/docpad) - Static site generator with dynamic abilities and huge plugin ecosystem.
- [Phenomic](https://github.com/phenomic/phenomic) - Modern static website generator based on the React and Webpack ecosystem.
- [docsify](https://github.com/QingWei-Li/docsify) - Markdown documentation site generator with no statically built HTML files.
- [Charge](https://github.com/brandonweiss/charge) - Opinionated, zero-config static site generator using JSX and MDX.

### Content management systems

- [KeystoneJS](https://github.com/keystonejs/keystone) - CMS and web application platform built on Express and MongoDB.
- [ApostropheCMS](https://github.com/apostrophecms/apostrophe) - Content management system with an emphasis on intuitive front end content editing and administration built on Express and MongoDB.
- [Strapi](https://github.com/strapi/strapi) - Content Management Framework (headless-CMS) to build powerful APIs.
- [Tipe](https://github.com/tipeio/tipe) - Developer-first content management system with GraphQL and REST API from a schema file.
- [Factor](https://github.com/fiction-com/factor) - Vue.js dashboard framework and headless CMS.
- [AdminBro](https://github.com/SoftwareBrothers/admin-bro) - Auto-generated admin panel with CRUD for all your resources.

### Forum

- [nodeBB](https://github.com/NodeBB/NodeBB) - Forum platform for the modern web.

### Blogging

- [Ghost](https://github.com/TryGhost/Ghost) - Simple, powerful publishing platform.
- [Hexo](https://github.com/hexojs/hexo) - Fast, simple and powerful blogging framework.

### Weird

- [cows](https://github.com/sindresorhus/cows) - ASCII cows.
- [superb](https://github.com/sindresorhus/superb) - Get superb like words.
- [cat-names](https://github.com/sindresorhus/cat-names) - Get popular cat names.
- [dog-names](https://github.com/sindresorhus/dog-names) - Get popular dog names.
- [superheroes](https://github.com/sindresorhus/superheroes) - Get superhero names.
- [supervillains](https://github.com/sindresorhus/supervillains) - Get supervillain names.
- [cool-ascii-faces](https://github.com/maxogden/cool-ascii-faces) - Get some cool ascii faces.
- [cat-ascii-faces](https://github.com/melaniecebula/cat-ascii-faces) - `₍˄·͈༝·͈˄₎◞ ̑̑ෆ⃛ (=ↀωↀ=)✧ (^･o･^)ﾉ”`.
- [nerds](https://github.com/SkyHacks/nerds) - Get data from nerdy topics like Harry Potter, Star Wars, and Pokémon.

### Serialization

- [snappy](https://github.com/kesla/node-snappy) - Native bindings for Google’s Snappy compression library.
- [protobuf](https://github.com/dcodeIO/protobuf.js) - Implementation of Protocol Buffers.
- [compactr](https://github.com/compactr/compactr.js) - Implementation of the Compactr protocol.

### Miscellaneous

- [execa](https://github.com/sindresorhus/execa) - Better `child_process`.
- [cheerio](https://github.com/cheeriojs/cheerio) - Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
- [Electron](https://github.com/atom/electron) - Build cross platform desktop apps with web technologies. _(You might like [awesome-electron](https://github.com/sindresorhus/awesome-electron))_
- [open](https://github.com/sindresorhus/open) - Opens stuff like websites, files, executables.
- [hasha](https://github.com/sindresorhus/hasha) - Hashing made simple. Get the hash of a buffer/string/stream/file.
- [dot-prop](https://github.com/sindresorhus/dot-prop) - Get a property from a nested object using a dot path.
- [onetime](https://github.com/sindresorhus/onetime) - Only run a function once.
- [mem](https://github.com/sindresorhus/mem) - Memoize functions - an optimization technique used to speed up consecutive function calls by caching the result of calls with identical input.
- [import-fresh](https://github.com/sindresorhus/import-fresh) - Import a module while bypassing the cache.
- [strip-bom](https://github.com/sindresorhus/strip-bom) - Strip UTF-8 byte order mark (BOM) from a string/buffer/stream.
- [os-locale](https://github.com/sindresorhus/os-locale) - Get the system locale.
- [ssh2](https://github.com/mscdex/ssh2) - SSH2 client and server module.
- [adit](https://github.com/markelog/adit) - SSH tunneling made simple.
- [import-lazy](https://github.com/sindresorhus/import-lazy) - Import a module lazily.
- [file-type](https://github.com/sindresorhus/file-type) - Detect the file type of a Buffer.
- [Bottleneck](https://github.com/SGrondin/bottleneck) - Rate limiter that makes throttling easy.
- [ow](https://github.com/sindresorhus/ow) - Function argument validation for humans.
- [webworker-threads](https://github.com/audreyt/node-webworker-threads) - Lightweight Web Worker API implementation with native threads.
- [clipboardy](https://github.com/sindresorhus/clipboardy) - Access the system clipboard (copy/paste).
- [node-pre-gyp](https://github.com/mapbox/node-pre-gyp) - Makes it easy to publish and install Node.js C++ addons from binaries.
- [opencv](https://github.com/peterbraden/node-opencv) - Bindings for OpenCV. The defacto computer vision library.
- [dotenv](https://github.com/motdotla/dotenv) - Load environment variables from .env file.
- [remote-git-tags](https://github.com/sindresorhus/remote-git-tags) - Get tags from a remote git repo.
- [semver](https://github.com/npm/node-semver) - Semantic version parser.
- [Faker.js](https://github.com/Marak/Faker.js) - Generate massive amounts of fake data.
- [nodegit](https://github.com/nodegit/nodegit) - Native bindings to Git.
- [json-strictify](https://github.com/pigulla/json-strictify) - Safely serialize a value to JSON without data loss or going into an infinite loop.
- [resolve-from](https://github.com/sindresorhus/resolve-from) - Resolve the path of a module like `require.resolve()` but from a given path.
- [simplecrawler](https://github.com/cgiffard/node-simplecrawler) - Event driven web crawler.
- [jsdom](https://github.com/tmpvar/jsdom) - JavaScript implementation of HTML and the DOM.
- [hypernova](https://github.com/airbnb/hypernova) - Server-side rendering your JavaScript views.
- <span class="citation" data-cites="sindresorhus/is">\[@sindresorhus/is\]</span>(https://github.com/sindresorhus/is) - Type check values.
- [env-dot-prop](https://github.com/simonepri/env-dot-prop) - Get, set, or delete nested properties of process.env using a dot path.
- [emittery](https://github.com/sindresorhus/emittery) - Simple and modern async event emitter.
- [node-video-lib](https://github.com/gkozlenko/node-video-lib) - Pure JavaScript library for working with MP4 and FLV video files and creating MPEG-TS chunks for HLS streaming.
- [basic-ftp](https://github.com/patrickjuchli/basic-ftp) – FTP/FTPS client.
- [cashify](https://github.com/xxczaki/cashify) - Currency conversion.
- [genepi](https://github.com/Geode-solutions/genepi) - Automatically generate a native Node.js addon from C++ code.
- [husky](https://github.com/typicode/husky) - Create Git hook scripts.
- [patch-package](https://github.com/ds300/patch-package) - Make and preserve fixes to npm dependencies.
- [editly](https://github.com/mifi/editly) - Declarative video editing API.

## Resources

### Tutorials

- [Node.js Best Practices](https://github.com/i0natan/nodebestpractices) - Summary and curation of the top-ranked content on Node.js best practices, available in multiple languages.
- [Nodeschool](https://github.com/nodeschool) - Learn Node.js with interactive lessons.
- [The Art of Node](https://github.com/maxogden/art-of-node/#the-art-of-node) - An introduction to Node.js.
- [stream-handbook](https://github.com/substack/stream-handbook) - How to write Node.js programs with streams.
- [module-best-practices](https://github.com/mattdesl/module-best-practices) - Some good practices when writing new npm modules.
- [The Node Way](http://thenodeway.io) - An entire philosophy of Node.js best practices and guiding principles exists for writing maintainable modules, scalable applications, and code that is actually pleasant to read.
- [You Don’t Know Node.js](https://github.com/azat-co/you-dont-know-node) - Introduction to Node.js core features and asynchronous JavaScript.
- [Portable Node.js guide](https://github.com/ehmicky/portable-node-guide) - Practical guide on how to write portable/cross-platform Node.js code.
- [Build a real web app with no frameworks](https://frameworkless.js.org/course) - A set of video tutorials/livestreams to help you build and deploy a real, live web app using a handful of simple libraries and the core Node.js modules.

### Discovery

- [npms](https://npms.io) - Superb package search with deep analysis of package quality using a [myriad of metrics](https://npms.io/about).
- [npm addict](https://npmaddict.com) - Your daily injection of npm packages.
- [npmcompare.com](https://npmcompare.com) - Compare and discover npm packages.

### Articles

- [Error Handling in Node.js](https://www.joyent.com/node-js/production/design/errors)
- [Teach Yourself Node.js in 10 Steps](https://ponyfoo.com/articles/teach-yourself-nodejs-in-10-steps)
- [Mastering the filesystem in Node.js](https://medium.com/@yoshuawuyts/mastering-the-filesystem-in-node-js-4706b7cb0801)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/)
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Why Asynchronous?](https://nodesource.com/blog/why-asynchronous/)
- [Understanding the Node.js Event Loop](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)
- [Understanding Object Streams](https://nodesource.com/blog/understanding-object-streams/)
- [Art of README](https://github.com/noffle/art-of-readme) - Learn the art of writing quality READMEs.
- [Using Express to Quickly Build a GraphQL Server](https://snipcart.com/blog/graphql-nodejs-express-tutorial)

### Newsletters

- [Node Weekly](http://nodeweekly.com) - Weekly e-mail round-up of Node.js news and articles.
- [Node Module Of The Week!](https://nmotw.in) - Weekly dose of hand picked node modules.

### Videos

- [Introduction to Node.js with Ryan Dahl](https://www.youtube.com/watch?v=jo_B4LTHi3I)
- [Hands on with Node.js](https://learn.bevry.me/hands-on-with-node.js/preface)
- [Nodetuts](http://nodetuts.com) - Series of talks, including TCP & HTTP API servers, async programming, and more.
- [V8 Garbage Collector](https://v8.dev/blog/trash-talk) - Trash talk about the V8 garbage collector.
- [10 Things I Regret About Node.js by Ryan Dahl](https://www.youtube.com/watch?v=M3BM9TB-8yA) - Insightful talk by the creator of Node.js about some of its limitions.
- [Mastering REST APIs in Node.js: Zero-To-Hero](https://www.manning.com/livevideo/mastering-rest-apis-in-nodejs) - Video course on how to make REST APIs using Node.js.
- [Make a vanilla Node.js REST API](https://www.youtube.com/watch?v=_1xa8Bsho6A) - Building a REST API without using a framework like Express.
- [Google I/O 2009 - V8: High Performance JavaScript Engine](https://www.youtube.com/watch?v=FrufJFBSoQY) - The basics of V8 architecture and how it optimizes JavaScript execution.
- [Google I/O 2012 - Breaking the JavaScript Speed Limit with V8](https://www.youtube.com/watch?v=UJPdhx5zTaw) - How V8 optimizes JavaScript execution.
- [Google I/O 2013 - Accelerating Oz with V8: Follow the Yellow Brick Road to JavaScript Performance](https://www.youtube.com/watch?v=VhpdsjBUS3g) - How to detect app bottlenecks and optimize performance with V8 knowledge.
- [Node.js Internal Architecture | Ignition, Turbofan, Libuv](https://www.youtube.com/watch?v=OCjvhCFFPTw) - How Node.js works internally, with a focus on V8 and libuv.
- [Introduction to libuv: What’s a Unicorn Velociraptor?](https://www.youtube.com/watch?v=_c51fcXRLGw) - `libuv` architecture, thread pool, and event loop, with its source code.
- [libuv Cross platform asynchronous i/o](https://www.youtube.com/watch?v=kCJ3PFU8Ke8) - `libuv` architecture in detail, such as where it’s actually using threads.
- [You Don’t Know Node - ForwardJS San Francisco](https://www.youtube.com/watch?v=oPo4EQmkjvY) - Explaining Node.js internals with quizzes about V8, libuv, event loop, module, stream, and cluster.

### Books

- [Node.js in Action](https://www.manning.com/books/node-js-in-action-second-edition)
- [Node.js in Practice](http://www.amazon.com/Node-js-Practice-Alex-R-Young/dp/1617290939)
- [Mastering Node](http://visionmedia.github.io/masteringnode/)
- [Node.js 8 the Right Way](https://pragprog.com/book/jwnode2/node-js-8-the-right-way)
- [Professional Node.js: Building JavaScript Based Scalable Software](http://www.amazon.com/Professional-Node-js-Building-Javascript-Scalable-ebook/dp/B009L7QETY/)
- [Practical Node.js: Building Real-World Scalable Web Apps](http://practicalnodebook.com)
- [Mixu’s Node book](http://book.mixu.net/node/)
- [Pro Express.js](http://proexpressjs.com)
- [Secure Your Node.js Web Application](http://www.amazon.com/Secure-Your-Node-js-Web-Application/dp/1680500856)
- [Express in Action](https://www.manning.com/books/express-in-action)
- [Practical Modern JavaScript](https://www.amazon.com/Practical-Modern-JavaScript-Dive-Future/dp/149194353X)
- [Mastering Modular JavaScript](https://www.amazon.com/Mastering-Modular-JavaScript-Nicolas-Bevacqua/dp/1491955686/)
- [Get Programming with Node.js](https://www.manning.com/books/get-programming-with-node-js)
- [Node.js Cookbook](https://www.amazon.com/dp/1838558756)
- [Node.js Design Patterns](https://www.nodejsdesignpatterns.com)

### Blogs

- [Node.js blog](https://nodejs.org/en/blog/)
- [webapplog.com](http://webapplog.com/tag/node-js/) - Blog posts on Node.js and JavaScript from the author of Practical Node.js and Pro Express.js Azat Mardan.

### Courses

- [Learn to build apps and APIs with Node.js](https://learnnode.com/friend/AWESOME) - Video course by Wes Bos.
- [Real Time Web with Node.js](https://www.codeschool.com/courses/real-time-web-with-node-js)
- [Learn and Understand Node.js](https://www.udemy.com/understand-nodejs)

### Cheatsheets

- [Express.js](https://github.com/azat-co/cheatsheets/blob/master/express4)
- [Stream FAQs](https://github.com/stephenplusplus/stream-faqs) - Answering common questions about streams, covering pagination, events, and more.
- [Strong Node.js](https://github.com/jesusprubio/strong-node) - Checklist for source code security analysis of a Node.js web service.

### Tools

- [OctoLinker](https://chrome.google.com/webstore/detail/octolinker/jlmafbaeoofdegohdhinkhilhclaklkp) - Chrome extension that linkifies dependencies in package.json, .js, .jsx, .coffee and .md files on GitHub.
- [npm-hub](https://chrome.google.com/webstore/detail/npm-hub/kbbbjimdjbjclaebffknlabpogocablj) - Chrome extension to display npm dependencies at the bottom of a repo’s readme.
- [RunKit](http://blog.tonicdev.com/2015/09/30/embedded-tonic.html) - Embed a Node.js environment on any website.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - Chrome extension that displays npm download stats on GitHub.
- [npm semver calculator](https://semver.npmjs.com) - Visually explore what versions of a package a semver range matches.
- [CodeSandbox](https://codesandbox.io/s/node-http-server-node) - Online IDE and prototyping.

### Community

- [Gitter](https://gitter.im/nodejs/node)
- [`#node.js` on Freenode](http://webchat.freenode.net/?channels=node.js)
- [Stack Overflow](http://stackoverflow.com/questions/tagged/node.js)
- [Reddit](https://www.reddit.com/r/node)
- [Twitter](https://twitter.com/nodejs)
- [Hashnode](https://hashnode.com/n/nodejs)
- [Discord](https://discordapp.com/invite/96WGtJt)

### Miscellaneous

- [nodebots](http://nodebots.io) - Robots powered by JavaScript.
- [node-module-boilerplate](https://github.com/sindresorhus/node-module-boilerplate) - Boilerplate to kickstart creating a node module.
- [modern-node](https://github.com/sheerun/modern-node) - Toolkit for creating node modules with Jest, Prettier, ESLint, and Standard.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Scaffold out a node module.
- [Microsoft Node.js Guidelines](https://github.com/Microsoft/nodejs-guidelines) - Tips, tricks, and resources for working with Node.js on Microsoft platforms.
- [Module Requests & Ideas](https://github.com/sindresorhus/module-requests) - Request a JavaScript module you wish existed or get ideas for modules.
- [v8-perf](https://github.com/thlorenz/v8-perf) - Notes and resources related to V8 and thus Node.js performance.

## Related lists

- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - Resources and tips for using npm.
- [awesome-cross-platform-nodejs](https://github.com/bcoe/awesome-cross-platform-nodejs) - Resources for writing and testing cross-platform code.

## Articles

- [One-line node modules](https://github.com/sindresorhus/ama/issues/10)
- [Build small single purpose modules](http://thenodeway.io/introduction/#build-small-single-purpose-modules)
- [Module best practices](https://github.com/mattdesl/module-best-practices)
- [Evaluating Packages Part 1 - Turn to community](http://bytearcher.com/articles/evaluating-packages-1-check-community/)
- [Evaluating Packages Part 2 - Review repository](http://bytearcher.com/articles/evaluating-packages-2-review-repository/)
- [Small modules: it’s not quite that simple](https://medium.com/@Rich_Harris/small-modules-it-s-not-quite-that-simple-3ca532d65de4)
- [In Defense of Hyper Modular JavaScript](https://medium.freecodecamp.com/in-defense-of-hyper-modular-javascript-33934c79e113)
- [Tiny npm package: Guidelines to create a Node.js module following the small package philosophy](http://g14n.info/2015/12/tiny-npm-package/)
- [The cost of small modules](https://nolanlawson.com/2016/08/15/the-cost-of-small-modules/)
- [Why I think “micro-packages” are a good thing.](http://codetunnel.io/why-i-think-micro-packages-are-a-good-thing/)

## Modules

### Array

- [is-sorted](https://github.com/dcousens/is-sorted) - A small module to check if an Array is sorted.
- [array-first](https://github.com/jonschlinkert/array-first) - Get the first element or first n elements of an array.
- [array-last](https://github.com/jonschlinkert/array-last) - Return the last element in an array.
- [arr-flatten](https://github.com/jonschlinkert/arr-flatten) - Recursively flatten an array or arrays.
- [dedupe](https://github.com/seriousManual/dedupe) - Remove duplicates from an array.
- [array-range](https://github.com/mattdesl/array-range) - Creates a new array with given range.
- [arr-diff](https://github.com/jonschlinkert/arr-diff) - Returns an array with only the unique values from the first array, by excluding all values from additional arrays using strict equality for comparisons.
- [filled-array](https://github.com/sindresorhus/filled-array) - Returns an array filled with the specified input
- [map-array](https://github.com/parro-it/map-array) - Map object keys and values into an array.
- [in-array](https://github.com/jonschlinkert/in-array) - Return true if any of passed values exists in array - faster than using indexOf.
- [unordered-array-remove](https://github.com/mafintosh/unordered-array-remove) - Efficiently remove an element from an unordered array without doing a splice.
- [array-swap](https://github.com/michaelzoidl/swap-array) - Swap position of two items in an array.
- [mirrarray](https://github.com/johnwquarles/mirrarray) - Creates a keymirror object from an array of valid keys.
- [group-array](https://github.com/doowb/group-array) - Group array of objects into lists.
- [array.chunk](https://github.com/zhiyelee/array.chunk) - Split array/TypedArray to chunks of given size.

### String

- [decamelize](https://github.com/sindresorhus/decamelize) - Convert a camelized string into a lowercased one with a custom separator: unicornRainbow → unicorn_rainbow.
- [pad-left](https://github.com/jonschlinkert/pad-left) - Left pad a string with zeros or a specified string.
- [to-camel-case](https://github.com/ianstormtaylor/to-camel-case) - Convert a string to a camel case.
- [to-capital-case](https://github.com/ianstormtaylor/to-capital-case) - Convert a string to a capital case.
- [to-constant-case](https://github.com/ianstormtaylor/to-constant-case) - Convert a string to a constant case.
- [to-dot-case](https://github.com/ianstormtaylor/to-dot-case) - Convert a string to a dot case.
- [to-no-case](https://github.com/ianstormtaylor/to-no-case) - Remove an existing case from a string.
- [to-pascal-case](https://github.com/ianstormtaylor/to-pascal-case) - Convert a string to a pascal case.
- [to-sentence-case](https://github.com/ianstormtaylor/to-sentence-case) - Convert a string to a sentence case.
- [to-snake-case](https://github.com/ianstormtaylor/to-snake-case) - Convert a string to a snake case.
- [to-space-case](https://github.com/ianstormtaylor/to-space-case) - Convert a string to a space case.
- [to-title-case](https://github.com/ianstormtaylor/to-title-case) - Convert a string to a title case.
- [node-slug](https://github.com/dodo/node-slug) - slugifies even utf-8 chars.
- [rtrim](https://github.com/sergejmueller/rtrim) - Strip whitespace - or other characters - from the end of a string.
- [slice.js](https://github.com/hustcc/slice.js) - Javascript library to enhance String.substring / Array.slice with python slice style.
- [strip-ansi](https://github.com/chalk/strip-ansi) - Strip ANSI escape codes.
- [striptags](https://github.com/ericnorris/striptags) - An implementation of PHP’s strip_tags in Node.js.
- [parse-next-json-value](https://github.com/ErikOnBike/parse-next-json-value) - Parse next JSON value from string allowing extraneous characters after value.
- [pluralize](https://github.com/DaniAkash/pluralizer) - A very tiny library to pluralize words

### Date & Time

- [pretty-ms](https://github.com/sindresorhus/pretty-ms) - Convert milliseconds to a human readable string: 1337000000 → 15d 11h 23m 20s.
- [hirestime](https://github.com/seriousManual/hirestime) - A wrapper around the built-in high resolution timer which simplifies the calculation of timestamps.
- [periods](https://github.com/timruffles/periods) - Defined time-periods constants for Javascript, in milliseconds.
- [fecha](https://github.com/taylorhakes/fecha) - Javascript Date formatting and parsing.
- [akamai-time-reference](https://github.com/jucrouzet/akamai-time-reference) - Get reference time using Akamai’s time reference service.
- [timeago.js](https://github.com/hustcc/timeago.js) - A tiny(~1.7kb) library used to format date with `*** time ago` statement.
- [count-days-in-month](https://github.com/shinnn/count-days-in-month) - Get the number of days in a given month.
- [time-stamp](https://github.com/jonschlinkert/time-stamp) - Get a formatted timestamp.
- [twas](https://github.com/vutran/twas) - Generate a relative time string (Example: “3 seconds ago”)

### Object

- [map-obj](https://github.com/sindresorhus/map-obj) - Map object keys and values into a new object.
- [filter-obj](https://github.com/sindresorhus/filter-obj) - Filter object keys and values into a new object.
- [object-values](https://github.com/sindresorhus/object-values) - Get the values of an object.
- [object-pairs](https://github.com/eush77/object-pairs) - Turn an object into list of \[key, value\] pairs for mapping, iterating or other purposes.
- [zipmap](https://github.com/landau/zipmap) - Returns a map with the keys mapped to the corresponding vals. zipmap also accepts a single value of objects or pairs.
- [just-pluck](https://github.com/jarofghosts/just-pluck) - Pluck without the madness.
- [deep-equal](https://github.com/substack/node-deep-equal) - Node’s assert.deepEqual() algorithm as a standalone module.
- [deep-assign](https://github.com/sindresorhus/deep-assign) - Recursive Object.assign().
- [set-value](https://github.com/jonschlinkert/set-value) - Create nested values and any intermediaries dot notation (`'a.b.c'`) paths.
- [get-value](https://github.com/jonschlinkert/get-value) - Use property paths (a.b.c) to get a nested value from an object.
- [has-value](https://github.com/jonschlinkert/has-value) - Returns true if a value exists, false if empty. Works with deeply nested values using dot notation (`'a.b.c'`) paths.
- [has-key-deep](https://github.com/ryanaghdam/has-key-deep) - Deep-search objects for keys. Keys can be searched by providing an array of keys, or using a dot-notiation.
- [flatkeys](https://github.com/ricardobeat/flatkeys) - Flatten object key hierarchies into a list of strings using a custom separator.
- [flatten-obj](https://github.com/watson/flatten-obj) - Converts an object literal with deeply nested nodes to a simple key/value object.
- [is-empty-object](https://github.com/gummesson/is-empty-object) - Check if an object is empty.
- [stringify-object](https://github.com/yeoman/stringify-object) - Stringify an object/array like JSON.stringify just without all the double-quotes.
- [sorted-object](https://github.com/domenic/sorted-object) - Returns a copy of an object with its keys sorted.
- [static-props](https://github.com/fibo/static-props) - Defines static object attributes using `Object.defineProperties`
- [missing-deep-keys](https://github.com/vladgolubev/missing-deep-keys) - Returns an array of keys from first object that are missing in second.
- [has-own-property](https://github.com/LinusU/has-own-property) - Check if an object has a local property.
- [merge-objects](https://github.com/shevaroller/node-merge-objects) - Deep-merge two objects. Arrays that are values of the same object key get concatenated.
- [deep-object-diff](https://github.com/mattphillips/deep-object-diff) - Deep diff two JavaScript Objects while preserving the data structure. Including nested structures of Arrays and Objects.

### Function

- [compose-function](https://github.com/stoeffel/compose-function) - Compose a new function from smaller functions `f(g(x))`.
- [curry](https://github.com/dominictarr/curry) - A curry function without anything too clever.
- [once](https://github.com/isaacs/once) - Run a function exactly one time.
- [deep-bind](https://github.com/jonschlinkert/deep-bind) - Bind a context to all functions in an object, including deeply nested functions.
- [identity-function](https://github.com/substack/identity-function) - Always return the input argument.
- [mem](https://github.com/sindresorhus/mem) - An optimization technique used to speed up consecutive function calls by caching the result of calls with identical input.
- [throttle-debounce](https://github.com/niksy/throttle-debounce) - Throttle/debounce your functions.
- [compose-tiny](https://github.com/hipstersmoothie/compose-tiny) - A very tiny and fast compose function.

### Math

- [is-even](https://github.com/jonschlinkert/is-even) - A good way to tell if a number is even or not (avoids type issues). Uses `is-odd` and `is-number` under the hood.
- [is-number](https://github.com/jonschlinkert/is-number) - Returns `true` if the value is a number.
- [is-odd](https://github.com/jonschlinkert/is-odd) - A good way to tell if a number is odd or not (avoids type issues). Uses `is-number` under the hood.
- [easy-math.js](https://github.com/kingzez/easy-math.js) - A tiny easy math library including addition, multiplication, subtraction, and division.
- [my-prime](https://github.com/jinnatul/my-prime) - A good way to tell if a number is prime or not.
- [fun-gcd](https://github.com/zubayerhimel/fun-gcd) - A tiny math library to get gcd of two numbers using Euclidean algorithm

### Stream

- [through2](https://github.com/rvagg/through2) - Tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise.
- [through2-filter](https://github.com/brycebaril/through2-filter) - A through2 to create an Array.prototype.filter analog for streams.
- [through2-map](https://github.com/brycebaril/through2-map) - A through2 to create an Array.prototype.map analog for streams.
- [stream-spigot](https://github.com/brycebaril/node-stream-spigot) - A readable stream generator, useful for testing or converting simple functions into Readable streams.
- [concat-stream](https://github.com/maxogden/concat-stream) - writable stream that concatenates strings or data and calls a callback with the result.
- [JSONStream](https://github.com/dominictarr/JSONStream) - streaming JSON.parse and stringify
- [through2-map-promise](https://github.com/RangerMauve/through2-map-promise) - A small promise-based wrapper for through2.
- [pump](https://github.com/mafintosh/pump) - pipe streams together and close all of them if one of them closes.
- [split](https://github.com/dominictarr/split) - Break up a stream and reassemble it so that each line is a chunk.
- [is-stream](https://github.com/sindresorhus/is-stream) - Check if something is a Node.js stream.
- [syncthrough](https://github.com/mcollina/syncthrough) - Transform your data as it pass by, synchronously.

### Promise

- [pify](https://github.com/sindresorhus/pify) - Promisify a callback-style function.
- [promise-all-props](https://github.com/Siilwyn/promise-all-props) - Like `Promise.all` but for object properties.
- [sleep-promise](https://github.com/brummelte/sleep-promise) - Resolves a promise after a specified delay.
- [is-promise](https://github.com/then/is-promise) - Test whether an object looks like a promises-a+ promise.

### File System

- [rimraf](https://github.com/isaacs/rimraf) - A deep deletion module for node (like rm -rf).
- [mkdirp](https://github.com/substack/node-mkdirp) - Recursively mkdir, like mkdir -p.
- [du](https://github.com/rvagg/node-du) - A simple JavaScript implementation of du -sb.
- [file-size](https://github.com/Nijikokun/file-size) - Lightweight filesize to human-readable / proportions w/o dependencies.
- [tmp](https://github.com/raszi/node-tmp) - Temporary file and directory creator for node.js.
- [fs-promise](https://github.com/kevinbeaty/fs-promise) - Node fs methods as Promise/A+ (optional fs-extra, graceful-fs).
- [read-git-user](https://github.com/RocktimSaikia/read-git-user) - Reads the username and email from `.gitconfig` :wrench: and returns it as json object.

### Browser

- [delegate](https://github.com/zenorocha/delegate) - Lightweight event delegation.
- [insert-css](https://github.com/substack/insert-css) - Insert a string of css into the head
- [dom-element-value](https://github.com/crysalead-js/dom-element-value) - DOM element value getter/setter.
- [image-promise](https://github.com/bfred-it/image-promise) - Load one or more `<img>`s in a Promise.
- [get-media-size](https://github.com/bfred-it/get-media-size) - Get the original size of any `img`/`video`/`svg`/`canvas` tags or canvas context.
- [document-ready](https://github.com/bendrucker/document-ready) - Document ready listener for modern browsers.
- [copee](https://github.com/styfle/copee) - Copy text from browser to clipboard…natively!

### Semver

- [semver](https://github.com/npm/node-semver) - The semantic version parser used by npm.
- [semver-max](https://github.com/eush77/semver-max) - Find maximum (or minimum) version according to semver.
- [semver-first-satisfied](https://github.com/parro-it/semver-first-satisfied) - Find minimum in an array of version that satisfies a semver range.

### CLI

- [abbrev](https://github.com/isaacs/abbrev-js) - Calculate the set of unique abbreviations for a given set of strings.
- [glob](https://github.com/isaacs/node-glob) - Glob functionality for node.js.
- [username](https://github.com/sindresorhus/username) - Get the username of the current user.
- [minimist](https://github.com/substack/minimist) - Parse argument options.
- [png-to-ico](https://github.com/steambap/png-to-ico) - Convert png to windows ico format.
- [help-version](https://github.com/eush77/help-version) - Easily handle –help and –version arguments in your CLI application

### Module management

- [pkg-conf](https://github.com/sindresorhus/pkg-conf) - Get namespaced config from the closest package.json.
- [normalize-pkg](https://github.com/jonschlinkert/normalize-pkg) - Normalize values in package.json to improve compatibility, programmatic readability and usefulness with third party libs.

### Generators

- [is-generator](https://github.com/blakeembrey/is-generator) - Check whether a given value is a generator function.

### Other

- [uuid](https://github.com/kelektiv/node-uuid) - Generate RFC-compliant UUIDs in JavaScript.
- [node-mime](https://github.com/broofa/node-mime) - Comprehensive MIME type mapping API based on mime-db module.
- [not-defined](https://github.com/fibo/not-defined) - Checks if foo is not defined, i.e. undefined, null, an empty string, array or object.
- [is-fqdn](https://github.com/parro-it/is-fqdn) - Check if a string represent a fully qualified domain name.
- [shurley](https://github.com/BrunoBernardino/shurley) - Parses URLs from user input (with potential typos in protocols, bad copy+paste, etc.) and returns a proper URL.
- [mime-type-check](https://github.com/RocktimSaikia/mime-type-check) - Get the MIME type of a file by its extension.

## Related lists

This section contains awesome lists that you may find useful if you use or write small NPM modules.

- [awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs) - A curated list of delightful Node.js packages and resources.
- [awesome-npm](https://github.com/sindresorhus/awesome-npm) - Awesome npm resources and tips.

## Small modules rockstars to follow

These people are used to develop awesome NPM modules that follows the single responsibility philosophy. Follow them to discover new great modules:

<table style="width:96%;"><colgroup><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /><col style="width: 16%" /></colgroup><thead><tr class="header"><th><a href="https://github.com/sindresorhus"><img src="https://avatars.githubusercontent.com/u/170270?s=130" alt="Sindre Sorhus" /></a></th><th><a href="https://github.com/substack"><img src="https://avatars1.githubusercontent.com/u/12631?s=130" alt="James Halliday" /></a></th><th><a href="https://github.com/eush77"><img src="https://avatars3.githubusercontent.com/u/4472489?s=130" alt="Eugene Sharygin" /></a></th><th><a href="https://github.com/isaacs"><img src="https://avatars3.githubusercontent.com/u/9287?s=130" alt="Isaac Z. Schlueter" /></a></th><th><a href="https://github.com/jonschlinkert"><img src="https://avatars1.githubusercontent.com/u/383994?s=130" alt="Jon Schlinkert" /></a></th><th><a href="https://github.com/dominictarr"><img src="https://avatars3.githubusercontent.com/u/259374?s=130" alt="Dominic Tarr" /></a></th></tr></thead><tbody><tr class="odd"><td><a href="https://github.com/sindresorhus">Sindre Sorhus</a></td><td><a href="https://github.com/substack">James Halliday</a></td><td><a href="https://github.com/eush77">Eugene Sharygin</a></td><td><a href="https://github.com/isaacs">Isaac Z. Schlueter</a></td><td><a href="https://github.com/jonschlinkert">Jon Schlinkert</a></td><td><a href="https://github.com/dominictarr">Dominic Tarr</a></td></tr></tbody></table>

<table><thead><tr class="header"><th><a href="https://github.com/rvagg"><img src="https://avatars0.githubusercontent.com/u/495647?s=130" alt="Rod Vagg" /></a></th><th><a href="https://github.com/maxogden"><img src="https://avatars3.githubusercontent.com/u/39759?s=130" alt="Max Ogden" /></a></th><th><a href="https://github.com/doowb"><img src="https://avatars1.githubusercontent.com/u/995160?s=130" alt="Brian Woodward" /></a></th></tr></thead><tbody><tr class="odd"><td><a href="https://github.com/rvagg">Rod Vagg</a></td><td><a href="https://github.com/maxogden">Max Ogden</a></td><td><a href="https://github.com/doowb">Brian Woodward</a></td></tr></tbody></table>

## —Contents

- [Articles](https://project-awesome.org/sindresorhus/awesome-npm#articles)
- [Tools](https://project-awesome.org/sindresorhus/awesome-npm#tools)
- [Packages](https://project-awesome.org/sindresorhus/awesome-npm#packages)
- [Clients](https://project-awesome.org/sindresorhus/awesome-npm#clients)
- [Tips](https://project-awesome.org/sindresorhus/awesome-npm#tips)
- [FAQ](https://project-awesome.org/sindresorhus/awesome-npm#faq)
- [Community](https://project-awesome.org/sindresorhus/awesome-npm#community)
- [Documentation](https://project-awesome.org/sindresorhus/awesome-npm#documentation)
- [Support](https://project-awesome.org/sindresorhus/awesome-npm#support)
- [Related](https://project-awesome.org/sindresorhus/awesome-npm#related)

## Articles

- [Small focused modules](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)
- [Unix philosophy and Node.js](http://blog.izs.me/post/48281998870/unix-philosophy-and-nodejs) - Write programs that do one thing and do it well.
- [Writing small modules](https://web.archive.org/web/20180302125059/https://substack.net/how_I_write_modules)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/) *(Must read!)*
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Offline installation of npm packages](https://addyosmani.com/blog/using-npm-offline/)
- [Task automation with npm run](https://web.archive.org/web/20180302164842/http://substack.net/task_automation_with_npm_run)
- [How to use npm as a build tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Install npm packages globally without sudo on macOS and Linux](https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md)
- [Optimizing the footprint of an npm package](https://medium.com/@goldglovecb/npm-needs-a-personal-trainer-537e0f8859c6)
- [The Art of Node](https://github.com/maxogden/art-of-node#modules) - An introduction to Node.js and client-side development with npm.
- [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) - An introduction to npm scripts with common packages and scripts, as well as a boilerplate project.

## Tools

### Web

- [npms](https://npms.io/) - Superb package search with deep analysis of package quality using a [myriad of metrics](https://npms.io/about).
  - [npm-introspect](http://npm-introspect.z3d.tech/) - A npms-based utility for visually exploring the quality of package dependencies.
- [npmsearch](http://npmsearch.com/) - Fast package search with ranking based on metrics like stars, dependents, release frequency, etc.
- [node-modules](http://node-modules.com/) - Personalized package search based on your GitHub social graph.
- [NodeICO](https://nodei.co/) - Package badges.
- [Libraries.io](https://libraries.io/npm) - Package discovery.
- [npm-stat](http://npm-stat.com/) - Statistics charts for packages.
- [npmgraph](http://npm.anvaka.com/) - Visualization of dependencies.
- [npm trends](http://www.npmtrends.com/) - Compare package download counts over time.
- [npm-compare](https://npmcompare.com/) - Easily search and compare packages.
- [npm-top](https://gist.github.com/bcoe/dcc961b869bbf6685002) - npm users by downloads.
- [npm semver calculator](http://semver.npmjs.com/) - Visually explore what versions of a package a semver range matches.
- [npm-stats](http://www.npm-stats.com/) - Displays metrics about packages.
- [ghub.io](https://ghub.io/) - Redirects to the GitHub repo of an npm package.
- [npm addict](https://npmaddict.com/) - Your daily injection of npm packages.
- [moiva](https://moiva.io/) - Discover and compare packages.

### Browser extensions

- [Octo-Linker](https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp) - Chrome extension to navigate across npm packages on GitHub with ease.
- [npm-hub](https://chrome.google.com/webstore/detail/npm-hub/kbbbjimdjbjclaebffknlabpogocablj) - Chrome extension to explore npm dependencies on GitHub repos.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - View npm download stats on GitHub.
- [npm-search-update](https://chrome.google.com/webstore/detail/npm-search-update/kagpoplamlmaonpddimnnigiojimihnh) - Chrome extension to quickly search for dependencies and monitor changes from the npm registry.

### CLI

- [zsh-better-npm-completion](https://github.com/lukechilds/zsh-better-npm-completion) - Better ZSH completion for npm.
- [npkill](https://github.com/voidcosmos/npkill) - Easily find and remove old and heavy node_modules folders.

## Packages

### Publishing

- [np](https://github.com/sindresorhus/np) - A better `npm publish`.
- [publish-please](https://github.com/inikulin/publish-please) - Publish packages safely and gracefully.
- [npm-release](https://github.com/phuu/npm-release) - Making releasing to npm so easy a kitten could probably do it™.
- [pkgfiles](https://github.com/timoxley/pkgfiles) - List all files which would be published in a package.
- [release-it](https://github.com/webpro/release-it) - Automate releases for Git repositories and/or npm packages. Changelog generation, GitHub/GitLab releases, etc.
- [semantic-release](https://github.com/semantic-release/semantic-release) - Fully automated package publishing.

### Registry

- [npm-name](https://github.com/sindresorhus/npm-name-cli) - Check whether a package name is available on npm.
- [package-json](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry.
- [latest-version](https://github.com/sindresorhus/latest-version-cli) - Get the latest version of an npm package.
- [npm-keyword](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword.
- [npm-user](https://github.com/sindresorhus/npm-user) - Get user info of an npm user.
- [npm-email](https://github.com/sindresorhus/npm-email) - Get the email of an npm user.
- [npm-user-packages](https://github.com/kevva/npm-user-packages-cli) - Get packages by an npm user.
- [dpn](https://github.com/gillstrom/dpn) - Get the dependents of a user’s npm packages.
- [npm-stats](https://github.com/hughsk/npm-stats) - Get data from an npm registry.
- [npm-cli-login](https://github.com/postmanlabs/npm-cli-login) - Log in to npm.
- [nrm](https://github.com/Pana/nrm) - Registry manager.
- [npm-register](https://github.com/dickeyxxx/npm-register) - Easy to set up and maintain npm registry and proxy.
- [verdaccio](https://github.com/verdaccio/verdaccio) - Lightweight private npm proxy registry.
- [cloudsmith](https://cloudsmith.io/l/npm-registry/) - A fully managed package management SaaS with support for public and private npm registries (and many others).

### Other

- [npm-home](https://github.com/sindresorhus/npm-home) - Open the npm page of a package.
- [gh-home](https://github.com/sindresorhus/gh-home) - Open the GitHub page of a package.
- [david](https://github.com/alanshaw/david) - Check if your package dependencies are out of date.
- [npm-check](https://github.com/dylang/npm-check) - Check for outdated, incorrect, and unused dependencies, as well as interactive update.
- [npm-upgrade](https://github.com/th0r/npm-upgrade) - Update outdated npm dependencies interactively.
- [npm-shrinkwrap](https://github.com/uber/npm-shrinkwrap) - A consistent shrinkwrap tool.
- [npm-windows-upgrade](https://github.com/felixrieseberg/npm-windows-upgrade) - Upgrade npm on Windows.
- [generator-nm](https://github.com/sindresorhus/generator-nm) - Scaffold out an npm package.
- [pkg-up](https://github.com/sindresorhus/pkg-up) - Find the closest package.json file.
- [read-pkg-up](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file.
- [normalize-package-data](https://github.com/npm/normalize-package-data) - Normalize package metadata.
- [pkg-conf](https://github.com/sindresorhus/pkg-conf) - Get namespaced config from the closest package.json.
- [npm-run-path](https://github.com/sindresorhus/npm-run-path) - Run locally installed binaries in the terminal by name like with global ones.
- [local-npm](https://github.com/nolanlawson/local-npm) - Use npm [offline](https://addyosmani.com/blog/using-npm-offline/).
- [npe](https://github.com/zeke/npe) - CLI for inspecting and editing properties in package.json.
- [engine-deps](https://github.com/samccone/engine-deps) - Manage Node.js version specific dependencies with ease.
- [enpeem-search](https://github.com/amovah/enpeem-search) - Search packages by scraping the npm web search.
- [npm-issues](https://github.com/seanzarrin/npm-issues) - Search known issues of all your packages at once.
- [john](https://github.com/davej/john) - Make npm3’s flat dependencies easier to find and sort.
- [ntl](https://github.com/ruyadorno/ntl) - Interactive CLI menu to list & run npm tasks.
- [decheck](https://github.com/egoist/decheck) - Explore dependencies of npm packages in the command-line.
- [shrinkpack](https://github.com/JamieMason/shrinkpack) - Lock down your dependencies and install offline.
- [redrun](https://github.com/coderaiser/redrun) - Expand scripts from package.json to improve execution speed.
- [package-size](https://github.com/egoist/package-size) - Get the bundle size of an npm package.
- [synp](https://github.com/imsnif/synp) - Convert yarn.lock to package-lock.json and vice versa.
- [npm-run-all](https://github.com/mysticatea/npm-run-all) - CLI tool to run multiple npm-scripts in parallel or serial.
- [onchange](https://github.com/Qard/onchange) - Watch files and folders and run a command when something changed.
- [cli-error-notifier](https://github.com/micromata/cli-error-notifier) - Sends native desktop notifications when npm scripts fail.
- [luna](https://github.com/rvpanoz/luna) - App to manage npm dependencies.
- [emma-cli](https://github.com/maticzav/emma-cli) - Interactive CLI package search utility.
- [lockfile-lint](https://github.com/lirantal/lockfile-lint) - Lint lockfiles for improved security and trust policies to mitigate malicious package injection and insecure lockfile resources.

## Clients

- [yarn](https://github.com/yarnpkg/yarn) - Fast, reliable, and secure dependency management.
- [npm](https://github.com/npm/cli) - The official client.
- [pnpm](https://github.com/pnpm/pnpm) - Fast, disk space efficient package manager.

## Tips

### Update to the latest npm version

    $ npm install --global npm

_[Windows users, read more.](https://github.com/felixrieseberg/npm-windows-upgrade)_

### Command aliases

- `npm i` → `npm install`
- `npm i -D` → `npm install --save-dev`
- `npm t` → `npm test`
- `npm it` → `npm install && npm test`
- `npm r` → `npm uninstall`
- `npm un` → `npm uninstall`
- `npm up` → `npm update`

### Shell aliases

Speed up your common npm tasks.

In your `.zshrc`/`.bashrc`:

    alias ni='npm install'
    alias nid='npm install --save-dev'
    alias nig='npm install --global'
    alias nt='npm test'
    alias nit='npm install && npm test'
    alias nk='npm link'
    alias nr='npm run'
    alias ns='npm start'
    alias nf='npm cache clean && rm -rf node_modules && npm install'
    alias nlg='npm list --global --depth=0'

### Don’t add to package.json when installing

By default npm adds packages you install to the `dependencies` field in package.json (since v5). You can prevent this by specifying the `--no-save` flag. You can add a package to `devDependencies` with `--save-dev`/`-D`:

    $ npm install --save-dev ava

### Run scripts

You can easily [run scripts](https://docs.npmjs.com/cli/run-script) using npm by adding them to the `"scripts"` field in package.json and run them with `npm run <script-name>`. Run `npm run` to see available scripts. Binaries of locally install packages are made available in the [PATH](<https://en.wikipedia.org/wiki/PATH_(variable)>), so you can run them by name.

    {
        "name": "awesome-package",
        "scripts": {
            "cat": "cat-names"
        },
        "dependencies": {
            "cat-names": "^1.0.0"
        }
    }

    $ npm run cat
    Max

All package.json properties are [exposed](https://docs.npmjs.com/misc/scripts#packagejson-vars) as environment variables:

    {
        "name": "awesome-package",
        "scripts": {
            "name": "echo $npm_package_name"
        }
    }

    $ npm run name
    awesome-package

#### Passing options to commands

You can pass options to the command you are using in your npm script by adding `-- --flag` like in the example below. The `--` [marks the end of options parsing](https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean-also-known-as-bare-double-dash), so `npm run` will just ignore it and pass it to the command.

    {
        "name": "awesome-package",
        "scripts": {
            "xo": "xo",
            "xo:fix": "npm run xo -- --fix",
        }
    }

_Adding the `-- --fix` option is like executing `xo --fix`_.

#### Silent option

`npm run` has a `--silent` option which is especially useful when combining npm scripts.

Imagine you have a setup for linting your JavaScript files like the following:

    {
        "name": "awesome-package",
        "scripts": {
            "xo": "xo",
            "xo:fix": "npm run xo --silent -- --fix",
        }
    }

_Using the `--silent` option reduces the output in the terminal. See [this comparison](https://twitter.com/mkuehnel/status/957965749473210369)._

### Lifecycle scripts

npm comes with predefined [lifecyle scripts](https://docs.npmjs.com/misc/scripts) which are excuted under specific conditions if they are defined in your package.json.

    {
        "name": "awesome-package",
        "scripts": {
            "prepublishOnly": "nsp check"
        },
        "devDependencies": {
            "nsp": "^3.0.0"
        }
    }

This will be executed automatically before your npm package is published to the registry via `npm publish` to check for known vulnerabilties in your dependencies.

_Note: prepublishOnly is available since npm v4.0.0. See [npm docs](https://docs.npmjs.com/misc/scripts#deprecation-note)._

#### `npm start` and `npm test`

`npm start` and `npm test` are also lifecycle scripts but are not executed automatically.

    {
        "name": "awesome-package",
        "scripts": {
            "start": "node server.js",
            "test": "ava"
        },
        "devDependencies": {
            "ava": "^1.0.0"
        }
    }

Therefore they can be executed simply with:

    $ npm test
    $ npm start

#### `pre` and `post` scripts

These are special lifecycle scripts which can be used to run scripts automatically in sequence.

    {
        "name": "awesome-package",
        "scripts": {
            "pretest": "eslint .",
            "test": "ava"
        },
        "devDependencies": {
            "eslint": "^4.19.0",
            "ava": "^1.0.0"
        }
    }

    $ npm test

This will lint your files before running your tests. The tests will not run if linting fails. Or more generally spoken: the following script won’t be executed if one of the scripts running in sequence exits with an exit code other than 0.

_Note: `pre` and `post` scripts can also be used for your custom npm scripts. So `npm run foo` will also run `prefoo` and `postfoo` if defined._

### Run script with `npx`

`npm` [comes bundled](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) with `npx` (Since v5.2.0) — a tool to execute package binaries. Each command is executed either from the local `node_modules/.bin` directory, or from a central cache, installing any packages needed in order for `<command>` to run.

    {
        "name": "awesome-package",
        "dependencies": {
            "cat-names": "^1.0.0"
        }
    }

If the binary is already installed, it will be executed from `node_modules/.bin`.

    $ npx cat-names
    Max

But if the binary is missing, it will be installed first.

    $ npx dog-names
    npx: installed 46 in 3.136s
    Bentley

### Run commands with different Node.js versions

With `npx` (Comes bundled with npm v5.2.0 or newer) and the [`node-bin`](https://www.npmjs.com/package/node-bin) package, you can easily try out code in different Node.js versions without having to use a version manager like [`nvm`](http://nvm.sh/), [`nave`](https://github.com/isaacs/nave), or [`n`](https://github.com/tj/n).

    $ npx --package=node-bin@6.11.0 -- node --version
    v6.11.0

### Link local packages

Sometimes it can be useful to have a local version of a package as a dependency. You can use `npm link` to link one local package into another. Run `npm link` in the package you want to use. This creates a global reference. Then go into your original package and run `npm link <package-name>` to link in the other package.

    $ cd rainbow
    $ npm link
    $ cd ../unicorn
    $ npm link rainbow

You can now use `rainbow` as a dependency in the `unicorn` package.

### Install a package from GitHub

npm supports using a shorthand for installing a package directly from a GitHub repo:

    $ npm install sindresorhus/chalk

Let’s target a specific commit as the main branch is a moving target:

    $ npm install 'sindresorhus/chalk#51b8f32'

Specify either a commit SHA, branch, tag, or nothing.

You can also install Git dependencies with semver: *(Requires npm v5 or newer)*

    $ npm install 'sindresorhus/chalk#semver:^2.0.0'

### Install a specific version of a package

    $ npm install chalk@1.0.0

### List top-level installed packages and their version

    $ npm ls --depth=0

### Command help

Get help docs for a command:

    $ npm help <command>

Example:

    $ npm help install

### Standalone version of a package

Quickly get a standalone version of a package that is browserified and usable in the browser.

    https://wzrd.in/standalone/<package-name>[@<version>]

Examples:

- <a href="https://wzrd.in/standalone/object-assign" class="uri">https://wzrd.in/standalone/object-assign</a>
- <a href="https://wzrd.in/standalone/object-assign@4.0.0" class="uri">https://wzrd.in/standalone/object-assign@4.0.0</a>

Great for prototyping, but download the file or use Browserify yourself for production.

## FAQ

- [Check in node_modules vs. shrinkwrap](https://stackoverflow.com/questions/11459733/check-in-node-modules-vs-shrinkwrap)
- [What is the difference between Bower and npm?](https://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm)
- [What does `^` mean in package.json versioning?](https://stackoverflow.com/questions/22137778/what-does-mean-in-package-json-versioning)
- [Find the version of an installed npm package](https://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package)
- [What’s the difference between dependencies, devDependencies, and peerDependencies in package.json?](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)

## Community

- [`#npm` on Freenode](https://webchat.freenode.net/?channels=npm)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/npm)
- [Reddit](https://www.reddit.com/r/npm)
- [Twitter](https://twitter.com/npmjs)
- [Blog](https://blog.npmjs.org/)

## Documentation

- [Official](https://docs.npmjs.com/)
- [Troubleshooting](https://github.com/npm/npm/wiki/Troubleshooting)
- [Semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning)
- [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
- [package.json](https://docs.npmjs.com/files/package.json)
- [npm run script](https://docs.npmjs.com/cli/run-script)
- [Stats API](https://github.com/npm/download-counts)
