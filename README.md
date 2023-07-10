# <p align="center"> char random </p>

<p align="center">
    <img alt="Github License" src="https://img.shields.io/github/license/Arikato111/char-random" />
    <img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/Arikato111/char-random" />
    <img alt="GitHub Issues" src="https://img.shields.io/github/issues/Arikato111/char-random" />
    <img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/Arikato111/char-random" />
    <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/Arikato111/char-random" />
    <img alt="" src="https://img.shields.io/github/repo-size/Arikato111/char-random" />
</p>

random one or many text

## Installing

Install with NPM
```
npm install char-random
```
or install with Yarn
```
yarn add char-random
```

## Example

With no config

```js
import charRandom from "char-random";

let char = charRandom()
```

With config

```js
import charRandom from "char-random";

let char = charRandom({
    count: 32,
    allowLowerCase: true,
    allowNumber: true
})
```
