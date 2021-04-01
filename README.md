# `cie.js`
[![GitHub](https://img.shields.io/github/license/redpeacock78/cie.js)](https://github.com/redpeacock78/cie.js/blob/master/LICENSE) [![npm](https://img.shields.io/npm/v/cie.js)](https://www.npmjs.com/package/cie.js) ![npm type definitions](https://img.shields.io/npm/types/cie.js) [![Document](https://camo.githubusercontent.com/65a196552ad2d9701824a4097bb102ce2b4a389febf6bbe8a43a86f0479760f8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646f63756d656e742d656e5f5f55532d627269676874677265656e2e737667)](https://cie-js.tk/)  
[![Npm Publish](https://github.com/redpeacock78/cie.js/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/redpeacock78/cie.js/actions/workflows/npm-publish.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/7a9e89fdf31fe3a5f41d/maintainability)](https://codeclimate.com/github/redpeacock78/cie.js/maintainability) [![codecov](https://codecov.io/gh/redpeacock78/cie.js/branch/master/graph/badge.svg?token=BP3CKGDO0V)](https://codecov.io/gh/redpeacock78/cie.js) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)  
Node.js wrapper around [`CIE.sh`](https://github.com/redpeacock78/CIE.sh).

## 📕 TOC
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [📃 About](#-about)
  - [📦 Dependencies](#-dependencies)
- [🛠 Usage](#%F0%9F%9B%A0-usage)
  - [🖥 CLI](#%F0%9F%96%A5-cli)
  - [📄 Javascript](#-javascript)
- [🔗 API](#-api)
  - [1976 Formula](#1976-formula)
  - [1994 Formula](#1994-formula)
  - [2000 Formula](#2000-formula)
- [🎉 Acknowledgements](#-acknowledgements)
- [🥝 Lisence](#-lisence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 📃 About
This package calculates the color difference between two colors using the color difference formula in LAB Delta E established by the Commission internationale de l'éclairage (CIE).  
It also uses Bash Script for the main logic, so the following is required to run it.
### 📦 Dependencies
  - bash >= 5.0
  - grep
  - awk
  - sed
  - cat
  - bc

## 🛠 Usage
### 🖥 CLI
```console
$ yarn global add cli.js  # npm install -g cli.js

$ cie-js -h
Usage: cie-js [options] [command]

Derives the color difference using the method defined by LAB Delta E (CIE76, CIE94, CIEDE2000).

Options:
  -v, --version   Output the version number
  -h, --help      display help for command

Commands:
  dE76            Use the CIE 1976 color difference formula.
  dE94            Use the CIE 1994 color difference formula.
  dE00            Use the CIEDE2000 color difference formula.
  help [command]  display help for command

TL;DR
  $ cie-js dE76 50.0000 2.6772 \ -79.7751 50.0000 0.0000 \ -82.7485
  $ cie-js dE94 -g 50.0000 2.6772 \ -79.7751 50.0000 0.0000 \ -82.7485
  $ cie-js dE00 50.0000 2.6772 \ -79.7751 50.0000 0.0000 \ -82.7485

$ cie-js dE76 50.0000 2.6772 \ -79.7751 50.0000 0.0000 \ -82.7485
4.0011
$ cie-js dE94 -g 50.0000 2.6772 \ -79.7751 50.0000 0.0000 \ -82.7485
1.3950
```
### 📄 Javascript
```javascript
import * as lab from 'cie.js';

const color_1 = { L: 50.0000, a: 50.0000, b: 0.0000 };
const color_2 = { L: 40.0000, a: 50.0000, b: 0.0000 };
(async () => {
  await lab.dE76(color_1, color_2).then((result) => {
    console.log(result);
  })
})();
// => 10.0000
```

## 🔗 API
### 1976 Formula
The CIE 1976 color difference formula is the first color difference formula defined, and is calculated as the Euclidean distance in CIELAB coordinates.
  - `lab.dE76(color_1: {[key: string]: number}, color_2: {[key: string]: number}): Promise<string>` 
    ```javascript
    const color_1 = { L: 50.0000, a: 2.6772, b: -79.7751 };
    const color_2 = { L: 50.0000, a: 0.0000, b: -82.7485 };
    (async () => {
      console.log(await lab.dE76(color_1, color_2));
    })();
    // => 4.0011
    ```
### 1994 Formula
ΔE(1994) is calculated from the difference in brightness, saturation, and hue in the L\*C\*h\* color space, which is calculated from the L\*a\*b\* color space. It also introduces a weighting factor for specific applications, derived from the allowable values for automotive paints.
  - `lab.dE94.textile(color_1: {[key: string]: number}, color_2: {[key: string]: number}): Promise<string>`  
    ![](https://render.githubusercontent.com/render/math?math=Weighting\%20Factor\%20(k_L=1,%20K_1=0.045,%20K_2=0.015))
    ```javascript
    const color_1 = { L: 50.0000, a: 2.6772, b: -79.7751 };
    const color_2 = { L: 50.0000, a: 0.0000, b: -82.7485 };
    (async () => {
      console.log(await lab.dE94.textile(color_1, color_2));
    })();
    // => 1.4230
    ```
  - `lab.dE94.graphicArts(color_1: {[key: string]: number}, color_2: {[key: string]: number}): Promise<string>`  
    ![](https://render.githubusercontent.com/render/math?math=Weighting\%20Factor\%20(k_L=2,%20K_1=0.048,%20K_2=0.014))
    ```javascript
    const color_1 = { L: 50.0000, a: 2.6772, b: -79.7751 };
    const color_2 = { L: 50.0000, a: 0.0000, b: -82.7485 };
    (async () => {
      console.log(await lab.dE94.graphicArts(color_1, color_2));
    })();
    // => 1.3950
    ```
### 2000 Formula
Since the CIE 1994 definition did not sufficiently ensure perceived uniformity, the CIE revised the definition and established the standard.
  - `lab.dE00(color_1: {[key: string]: number}, color_2: {[key: string]: number}): Promise<string>`
    ```javascript
    const color_1 = { L: 50.0000, a: 2.6772, b: -79.7751 };
    const color_2 = { L: 50.0000, a: 0.0000, b: -82.7485 };
    (async () => {
      console.log(await lab.dE00(color_1, color_2));
    })();
    // => 2.0425
    ```

## 🎉 Acknowledgements
  - [JavaScriptでCIE94色差計算 - Qiita](https://qiita.com/hachisukansw/items/3488df50b7082d4fcffb)
  - [JavaScriptでCIEDE2000色差計算 - Qiita](https://qiita.com/hachisukansw/items/860f061a2ab7a4f2d06f)
  - [色の距離(色差)の計算方法 ‒ Qiita](https://qiita.com/shinido/items/2904fa1e9a6c78650b93)
  - [色差 - Wikipedia](https://ja.wikipedia.org/wiki/%E8%89%B2%E5%B7%AE)
  - [Color Difference Calculator](http://www.brucelindbloom.com/index.html?ColorDifferenceCalc.html)
  - [Gaurav Sharma](http://www2.ece.rochester.edu/~gsharma/ciede2000/)
  - [色差計算器 (CIE76, CIE2000) ‒ でじたる小屋](https://plkl.sakura.ne.jp/?page_id=397)

## 🥝 Lisence
[MIT](https://github.com/redpeacock78/cie.js/blob/master/LICENSE)
