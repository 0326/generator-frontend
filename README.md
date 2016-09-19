
<p align="center">
<img width="600" src="http://7xp4vm.com1.z0.glb.clouddn.com/generator-frontend-dog.png" alt="generator-frontend-dog">
</p>
<p align="center">
<a href="https://npmjs.org/package/generator-frontend"><img src="https://badge.fury.io/js/generator-frontend.svg" alt="License"></a>
<a href="https://travis-ci.org/0326/generator-frontend"><img src="https://travis-ci.org/0326/generator-frontend.svg?branch=master" alt="License"></a>
<a href="https://david-dm.org/0326/generator-frontend"><img src="https://david-dm.org/0326/generator-frontend.svg?theme=shields.io" alt="License"></a>
<a href="https://coveralls.io/r/0326/generator-frontend"><img src="https://coveralls.io/repos/0326/generator-frontend/badge.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg" alt="License"></a>
</p>

# generator-frontend-dog (under construction)
> Frontend-dog provides many popular frontend scaffolds, you can custom your project with ES6, PostCSS, ESLint, React, Vue.js, AngularJS, Polymer, Gulp, Webpack...or just a simple lightly demo page :)

## Installation

First, install [Yeoman](http://yeoman.io) and generator-frontend using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-frontend-dog
```

Then generate your new project:

```bash
yo frontend-dog:demo
```

## Generator List
Generator frontend-dog provides some nice scaffolds:

### demo
A very simple page scaffold, only add gulp && livereload to let you quickly get started to code. If you don't 
wanna use the fucking Webpack, React or any other framework, you just wanna the pure JavaScript by hand, try it:
```bash
yo frontend-dog:demo
```
It will generate files like this:
<pre>
├── gulpfile.js                 # only contain livereload config
├── package.json
└── src
    ├── index.html              # the entry page
    ├── css
    │   └── index.css
    └── js
        └── index.js
</pre>

Then, run `npm install` by yourself, after that run `gulp` or `npm run dev` command to start server.

### app
This is the default scaffold. Comparing to the demo scaffold, this default scaffold only add the ES6 && PostCSS, 
and choose BrowserSync to livereload, without any framework.
```bash
yo frontend-dog
```
The scaffold like this:
<pre>
├── gulpfile.js                 # livereload + ES6 + PostCSS
├── package.json
├── index.html                  # the entry page
└── src
    ├── index.html              
    ├── css
    │   └── index.css
    └── js
        └── index.js            # the entry js
        └── config.js
</pre>



### standard-app
A full scaffold for building a webapp with Vue.js, Polymer, AngularJS or any other popular framework.
```javascript
// TODO
```

## License

MIT © [0326](https://github.com/0326)

