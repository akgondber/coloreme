# coloreme [![NPM version][npm-image]][npm-url]

> Suite of color combinations for using in your projects

## Install

```sh
npm install coloreme
```

or

```sh
yarn add coloreme
```

## Usage

```javascript
import { coloreme, coloremeList, colors } from 'coloreme';

console.log(coloreme.BluePastelPink);
/*
{
  name: 'BluePastelPink',
  color: '#2F3C7E',
  bgColor: '#FBEAEB',
  c: '#2F3C7E',
  b: '#FBEAEB',
  inverse: { color: '#FBEAEB', bgColor: '#2F3C7E', c: '#FBEAEB', b: '#2F3C7E' }
}
*/
/* Same as above */
console.log(colors.obj.BluePastelPink);

/* Get some pair by index from list */
console.log(coloremeList[11]);
/*
{
  name: 'CherryRedOffWhite',
  color: '#990011',
  bgColor: '#FCF6F5',
  c: '#990011',
  b: '#FCF6F5',
  inverse: { color: '#FCF6F5', bgColor: '#990011', c: '#FCF6F5', b: '#990011' }
}
*/
/* Previous analogue */
console.log(colors.list[11]);

console.log(colors.random()); // get random color pair
```

## License

MIT © [Rushan Alyautdinov](https://github.com/akgondber)

[npm-image]: https://img.shields.io/npm/v/coloreme.svg?style=flat
[npm-url]: https://npmjs.org/package/coloreme
