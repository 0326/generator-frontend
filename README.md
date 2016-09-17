# generator-frontend 
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> popular front end project scaffolds

## Installation

First, install [Yeoman](http://yeoman.io) and generator-frontend using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-frontend
```

Then generate your new project:

```bash
yo frontend:demo
```

## Generator List
Generator frontend provides some scaffolds:

#### app
The default scaffold.
```bash
yo frontend
```

#### demo
A very simple page scaffold, only add gulp && livereload to let you quickly get started to code.
```bash
yo frontend:demo
npm install
```
Then, run `gulp` or `npm run dev` command to start server.

#### standard-app
A full scaffold for building a webapp.
```javascript
// TODO
```

## License

MIT © [0326]()


[npm-image]: https://badge.fury.io/js/generator-frontend.svg
[npm-url]: https://npmjs.org/package/generator-frontend
[travis-image]: https://travis-ci.org/0326/generator-frontend.svg?branch=master
[travis-url]: https://travis-ci.org/0326/generator-frontend
[daviddm-image]: https://david-dm.org/0326/generator-frontend.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/0326/generator-frontend
[coveralls-image]: https://coveralls.io/repos/0326/generator-frontend/badge.svg
[coveralls-url]: https://coveralls.io/r/0326/generator-frontend
