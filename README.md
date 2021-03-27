# `cie.js`
[![Maintainability](https://api.codeclimate.com/v1/badges/7a9e89fdf31fe3a5f41d/maintainability)](https://codeclimate.com/github/redpeacock78/cie.js/maintainability) [![codecov](https://codecov.io/gh/redpeacock78/cie.js/branch/master/graph/badge.svg?token=BP3CKGDO0V)](https://codecov.io/gh/redpeacock78/cie.js)  
Node.js wrapper around [`CIE.sh`](https://github.com/redpeacock78/CIE.sh).

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
## 🥝 Lisence
MIT
