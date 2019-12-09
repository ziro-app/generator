# Generator
[Plop](https://github.com/plopjs/plop) generator to standardize the creation of new projects inside Ziro org.
## Requirements
- Install [Node](https://nodejs.org/en/download/)
- Install [Plop](https://github.com/plopjs/plop)
```
npm i -g plop
```
## Usage
On a blank project folder (it **must** be blank), follow the steps below:
- Install the generator
```
npm i @ziro/generator
```
- Create a plopfile.js in the root of your project requiring the generator
``` javascript
module.exports = require('@ziro/generator')
```
You can use the command below to speed up the creation of the file
```
echo "module.exports = require('@ziro/generator')" > plopfile.js
```
- Run `plop` to start the generator
- When the generator is done creating all the files, run `npm i` to install all dependencies.
This step is needed because the package.json file will be created by the generator
and not by calling `npm init -y`
