# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [10.0.0](https://git.autodesk.com/dpe/iccc/compare/@iccc/card@9.0.0...@iccc/card@10.0.0) (2024-02-14)


### Code Refactoring

* 💡 Update card examples to use link button variant ([#1113](https://git.autodesk.com/dpe/iccc/issues/1113)) ([8f1c16a](https://git.autodesk.com/dpe/iccc/commits/8f1c16ae8571aff3a3a9a9992549cd838c0739f1))


### BREAKING CHANGES

* 🧨 card link button is now a composition using button variant link-button





# [9.0.0](https://git.autodesk.com/dpe/iccc/compare/@iccc/card@8.0.0...@iccc/card@9.0.0) (2023-12-22)


### Features

* Introducing @iccc/icon entry points ([#1083](https://git.autodesk.com/dpe/iccc/issues/1083)) ([b8b3144](https://git.autodesk.com/dpe/iccc/commits/b8b3144c5673221a119c4f9d30e552f959fdc51a))


### BREAKING CHANGES

* Changed icon directory structure





# [8.0.0](https://git.autodesk.com/dpe/iccc/compare/@iccc/card@7.2.1...@iccc/card@8.0.0) (2023-11-28)


### Features

* Enable theme splitting capability for ThemeMui ([#1055](https://git.autodesk.com/dpe/iccc/issues/1055)) ([c755947](https://git.autodesk.com/dpe/iccc/commits/c755947444b2bb9a71d2759cf4a2a6338d812f3d))


### BREAKING CHANGES

* 🧨 Removed ThemeMui component wrapper





## [7.2.1](https://git.autodesk.com/dpe/iccc/compare/@iccc/card@7.2.0...@iccc/card@7.2.1) (2023-11-10)


### Performance Improvements

* Cache build script with lerna6 and nx ([#1040](https://git.autodesk.com/dpe/iccc/issues/1040)) ([aa270cf](https://git.autodesk.com/dpe/iccc/commits/aa270cf478177941e61b7fcddc3437d21cf2fa27))





# [7.2.0](https://git.autodesk.com/dpe/iccc/compare/@iccc/card@7.1.0...@iccc/card@7.2.0) (2023-11-02)


### Features

* Upgrade to Lerna v6 and cache jest tests ([#1035](https://git.autodesk.com/dpe/iccc/issues/1035)) ([b5e8e89](https://git.autodesk.com/dpe/iccc/commits/b5e8e897ff49b37c04fcb261fe3a2bf7fa1cf727))





# [7.1.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@7.0.3...@iccc/card@7.1.0) (2023-11-01)


### Features

* Add flexwrap behavior to Card's 'Two columns' story ([#1014](https://git.autodesk.com//dpe/iccc/issues/1014)) ([0b2a2e2](https://git.autodesk.com//dpe/iccc/commits/0b2a2e2486e12b01e2517b0a03f2fd6a3d26abfa))





## [7.0.3](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@7.0.2...@iccc/card@7.0.3) (2023-10-05)

**Note:** Version bump only for package @iccc/card





## [7.0.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@7.0.1...@iccc/card@7.0.2) (2023-10-02)

**Note:** Version bump only for package @iccc/card





## [7.0.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@7.0.0...@iccc/card@7.0.1) (2023-09-12)

**Note:** Version bump only for package @iccc/card





# [7.0.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@6.0.3...@iccc/card@7.0.0) (2023-08-18)


### Features

* 🎸 Remove SVG icon wrapper and internal references ([#906](https://git.autodesk.com//dpe/iccc/issues/906)) ([3ed37c8](https://git.autodesk.com//dpe/iccc/commits/3ed37c8b72dc830fcc62f50e86f01d2b039492e6)), closes [#883](https://git.autodesk.com//dpe/iccc/issues/883)


### BREAKING CHANGES

* 🧨 Deprecates @iccc/svg-icon





## [6.0.3](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@6.0.2...@iccc/card@6.0.3) (2023-08-07)

**Note:** Version bump only for package @iccc/card





## [6.0.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@6.0.1...@iccc/card@6.0.2) (2023-07-03)

**Note:** Version bump only for package @iccc/card





## [6.0.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@6.0.0...@iccc/card@6.0.1) (2023-06-08)

**Note:** Version bump only for package @iccc/card





# [6.0.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@5.0.0...@iccc/card@6.0.0) (2023-06-08)


### Code Refactoring

* 💡 Remove wrapper from Button ([#830](https://git.autodesk.com//dpe/iccc/issues/830)) ([355c0d5](https://git.autodesk.com//dpe/iccc/commits/355c0d5f87344139f1635f55c3cd8397be6a360e)), closes [#732](https://git.autodesk.com//dpe/iccc/issues/732)


### BREAKING CHANGES

* 🧨 Deprecates Button, updates several package dependencies





# [5.0.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@4.0.0...@iccc/card@5.0.0) (2023-06-02)


### Code Refactoring

* [Parity] Address MUI Discrepancies for Accordion ([#815](https://git.autodesk.com//dpe/iccc/issues/815)) ([972fb05](https://git.autodesk.com//dpe/iccc/commits/972fb055f451d7dcde6219031777c86783c0a266)), closes [#776](https://git.autodesk.com//dpe/iccc/issues/776)


### BREAKING CHANGES

* The SvgIcon component no longer uses the "size" prop to control size of the icon, instead use
"fontSize" prop, this is to be consistent with MUI SvgIcon API, [See
documentation](https://mui.com/material-ui/api/svg-icon/)





# [4.0.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.1.2...@iccc/card@4.0.0) (2023-05-30)


### Features

* 🎸 Create CardActionButton ([#813](https://git.autodesk.com//dpe/iccc/issues/813)) ([2d321f8](https://git.autodesk.com//dpe/iccc/commits/2d321f8fd718dce1fa5e73d97890178878b66a82))


### BREAKING CHANGES

* 🧨 Deprecates `cardAction` variant of Button and updates Card peer
dependencies





## [3.1.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.1.1...@iccc/card@3.1.2) (2023-04-25)

**Note:** Version bump only for package @iccc/card





## [3.1.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.1.0...@iccc/card@3.1.1) (2023-03-24)

**Note:** Version bump only for package @iccc/card





# [3.1.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.0.5...@iccc/card@3.1.0) (2023-03-13)


### Features

* implement flat style for Tree view component ([#663](https://git.autodesk.com//dpe/iccc/issues/663)) ([9b293c2](https://git.autodesk.com//dpe/iccc/commits/9b293c26f74624d33cddf01a9da921d86e9d63a9))





## [3.0.5](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.0.2...@iccc/card@3.0.5) (2023-03-11)

**Note:** Version bump only for package @iccc/card





## [3.0.3](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.0.2...@iccc/card@3.0.3) (2023-02-23)

**Note:** Version bump only for package @iccc/card





## [3.0.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.0.1...@iccc/card@3.0.2) (2023-02-14)

**Note:** Version bump only for package @iccc/card





## [3.0.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@3.0.0...@iccc/card@3.0.1) (2023-02-08)

**Note:** Version bump only for package @iccc/card





# [3.0.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@2.0.2...@iccc/card@3.0.0) (2023-01-26)


### Features

* migrate divider to MUI V5 ([#629](https://git.autodesk.com//dpe/iccc/issues/629)) ([0c743a0](https://git.autodesk.com//dpe/iccc/commits/0c743a05ec3e2d6a2db843bb63cb9a34b6c7a81c))


### BREAKING CHANGES

* This version of divider component is not compatible with older versions of theme MUI





## [2.0.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@2.0.1...@iccc/card@2.0.2) (2023-01-06)

**Note:** Version bump only for package @iccc/card





## [2.0.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@1.2.0...@iccc/card@2.0.1) (2022-11-14)

**Note:** Version bump only for package @iccc/card





# [1.2.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@1.1.2...@iccc/card@1.2.0) (2022-11-13)


### Features

* migrate typography to MUI V5 ([#554](https://git.autodesk.com//dpe/iccc/issues/554)) ([b87a6ae](https://git.autodesk.com//dpe/iccc/commits/b87a6ae9a9884118c0cc807415c9ab8d9b44fd27))





## [1.1.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@1.1.1...@iccc/card@1.1.2) (2022-11-11)

**Note:** Version bump only for package @iccc/card





## [1.1.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@1.1.0...@iccc/card@1.1.1) (2022-07-05)

**Note:** Version bump only for package @iccc/card





# [1.1.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@1.0.2...@iccc/card@1.1.0) (2022-06-06)


### Features

* create link with icon component and implement it with card ([#379](https://git.autodesk.com//dpe/iccc/issues/379)) ([25b5483](https://git.autodesk.com//dpe/iccc/commits/25b548388d12ba1b4d82e8bd5abc167ba558d7dc))





## [1.0.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@1.0.1...@iccc/card@1.0.2) (2022-05-27)

**Note:** Version bump only for package @iccc/card





## [1.0.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.9.0...@iccc/card@1.0.1) (2022-05-26)

**Note:** Version bump only for package @iccc/card





# [0.9.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.8.0...@iccc/card@0.9.0) (2022-04-12)


### Code Refactoring

* migrate button to MUI V5 ([#332](https://git.autodesk.com//dpe/iccc/issues/332)) ([e23b356](https://git.autodesk.com//dpe/iccc/commits/e23b35645dfb25af09b577ae859fab3466341132))


### BREAKING CHANGES

* Requires React 17





# [0.8.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.7.1...@iccc/card@0.8.0) (2022-04-08)


### Features

* implement flat variant of Accordion component ([#331](https://git.autodesk.com//dpe/iccc/issues/331)) ([059c528](https://git.autodesk.com//dpe/iccc/commits/059c5281b6c532abe1c9dcb95530aeed3c0545d4))





## [0.7.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.7.0...@iccc/card@0.7.1) (2022-03-31)

**Note:** Version bump only for package @iccc/card





# [0.7.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.6.5...@iccc/card@0.7.0) (2022-03-24)


### Features

* **theme-data and card:** linked and without divider card ([#319](https://git.autodesk.com//dpe/iccc/issues/319)) ([df6454a](https://git.autodesk.com//dpe/iccc/commits/df6454afd5f4b29daa9234a201e7d04eaa8b742a))





## [0.6.5](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.6.4...@iccc/card@0.6.5) (2022-03-24)


### Bug Fixes

* fix icon button imports ([#317](https://git.autodesk.com//dpe/iccc/issues/317)) ([d979ba3](https://git.autodesk.com//dpe/iccc/commits/d979ba3e43ed2e0fb4107189c8ef188c1a0c0384))





## [0.6.4](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.6.3...@iccc/card@0.6.4) (2022-03-09)

**Note:** Version bump only for package @iccc/card





## [0.6.3](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.6.2...@iccc/card@0.6.3) (2022-02-15)

**Note:** Version bump only for package @iccc/card





## [0.6.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.6.1...@iccc/card@0.6.2) (2022-02-07)

**Note:** Version bump only for package @iccc/card





## [0.6.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.6.0...@iccc/card@0.6.1) (2022-01-31)

**Note:** Version bump only for package @iccc/card





# [0.6.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.5.1...@iccc/card@0.6.0) (2022-01-19)


### Features

* post merge updates for Typography component ([#262](https://git.autodesk.com//dpe/iccc/issues/262)) ([669d00a](https://git.autodesk.com//dpe/iccc/commits/669d00a4c9fe9b4a65ba310406729dcccd5cf766))





## [0.5.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.5.0...@iccc/card@0.5.1) (2022-01-12)

**Note:** Version bump only for package @iccc/card





# [0.5.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.4.0...@iccc/card@0.5.0) (2021-12-17)


### Features

* add styles for text link in cards ([#250](https://git.autodesk.com//dpe/iccc/issues/250)) ([fe53b0b](https://git.autodesk.com//dpe/iccc/commits/fe53b0b75510e00cbfcfdf6b8c81e85768a587fa))





# [0.4.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.3.1...@iccc/card@0.4.0) (2021-11-04)


### Features

* SVG sprite, icon component, icon CSS ([#176](https://git.autodesk.com//dpe/iccc/issues/176)) ([#183](https://git.autodesk.com//dpe/iccc/issues/183)) ([cf8dc82](https://git.autodesk.com//dpe/iccc/commits/cf8dc824b10c452bcb3f853486490fbf6dc2101b))





## [0.3.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.3.0...@iccc/card@0.3.1) (2021-10-25)

**Note:** Version bump only for package @iccc/card





# [0.3.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.2.6...@iccc/card@0.3.0) (2021-10-21)


### Features

* Create Modal component ([#165](https://git.autodesk.com//dpe/iccc/issues/165)) ([8cbbeb4](https://git.autodesk.com//dpe/iccc/commits/8cbbeb4000e22829730c6b36ac5785a7f660e2f8)), closes [#152](https://git.autodesk.com//dpe/iccc/issues/152) [#156](https://git.autodesk.com//dpe/iccc/issues/156) [#160](https://git.autodesk.com//dpe/iccc/issues/160)





## [0.2.6](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.2.5...@iccc/card@0.2.6) (2021-10-01)

**Note:** Version bump only for package @iccc/card





## [0.2.5](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.2.4...@iccc/card@0.2.5) (2021-09-20)

**Note:** Version bump only for package @iccc/card





## [0.2.4](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.2.3...@iccc/card@0.2.4) (2021-09-17)

**Note:** Version bump only for package @iccc/card





## [0.2.3](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.2.2...@iccc/card@0.2.3) (2021-09-14)

**Note:** Version bump only for package @iccc/card





## [0.2.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.2.1...@iccc/card@0.2.2) (2021-09-14)

**Note:** Version bump only for package @iccc/card





## [0.2.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.2.0...@iccc/card@0.2.1) (2021-09-10)

**Note:** Version bump only for package @iccc/card





# [0.2.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.1.3...@iccc/card@0.2.0) (2021-09-09)


### Features

* theming for Card component ([#121](https://git.autodesk.com//dpe/iccc/issues/121)) ([c26c3cd](https://git.autodesk.com//dpe/iccc/commits/c26c3cd7f564756738e1f5155538c3ab1d1edc16))





## [0.1.3](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.1.2...@iccc/card@0.1.3) (2021-09-09)

**Note:** Version bump only for package @iccc/card





## [0.1.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.1.1...@iccc/card@0.1.2) (2021-09-07)

**Note:** Version bump only for package @iccc/card





## [0.1.1](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.1.0...@iccc/card@0.1.1) (2021-09-01)

**Note:** Version bump only for package @iccc/card





# [0.1.0](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.0.4...@iccc/card@0.1.0) (2021-08-31)


### Features

* **Card:** add Card Alpha, including storybook docs & tests ([#110](https://git.autodesk.com//dpe/iccc/issues/110)) ([da8ef05](https://git.autodesk.com//dpe/iccc/commits/da8ef05f8ad9c42b2bb62796f3ef697044dfc0a4))





## [0.0.4](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.0.3...@iccc/card@0.0.4) (2021-08-26)

**Note:** Version bump only for package @iccc/card





## [0.0.3](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.0.2...@iccc/card@0.0.3) (2021-08-24)

**Note:** Version bump only for package @iccc/card





## [0.0.2](https://git.autodesk.com//dpe/iccc/compare/@iccc/card@0.0.1...@iccc/card@0.0.2) (2021-08-24)

**Note:** Version bump only for package @iccc/card





## 0.0.1 (2021-08-23)

**Note:** Version bump only for package @iccc/card
