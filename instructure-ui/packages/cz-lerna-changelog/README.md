---
category: packages
---

## cz-lerna-changelog

[![npm][npm]][npm-url]&nbsp;
[![build-status][build-status]][build-status-url]&nbsp;
[![MIT License][license-badge]][LICENSE]&nbsp;
[![Code of Conduct][coc-badge]][coc]

Prompts for conventional changelog standard in a lerna environment.

### Installation

```sh
yarn add @instructure/cz-lerna-changelog
```

Add the following to your package.json file:

```json
"config": {
  "commitizen": {
    "path": "./node_modules/@instructure/cz-lerna-changelog"
  }
}
```

[npm]: https://img.shields.io/npm/v/@instructure/cz-lerna-changelog.svg
[npm-url]: https://npmjs.com/package/@instructure/cz-lerna-changelog

[build-status]: https://travis-ci.org/instructure/instructure-ui.svg?branch=master
[build-status-url]: https://travis-ci.org/instructure/instructure-ui "Travis CI"

[license-badge]: https://img.shields.io/npm/l/instructure-ui.svg?style=flat-square
[license]: https://github.com/instructure/instructure-ui/blob/master/LICENSE

[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/instructure/instructure-ui/blob/master/CODE_OF_CONDUCT.md
