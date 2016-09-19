'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  // Your initialization methods
  initializing: function () {
    // (checking current project state, getting configs, etc)
  },
  // Where you prompt users for options
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'frontend-dog: ' + chalk.red('demo') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Project name',
      default: this.appname
    },
      {
        type: 'input',
        name: 'projectDescription',
        message: 'Project description'
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'Author name'
      },
      {
        type: 'input',
        name: 'authorEmail',
        message: 'Author email'
      },
      {
        type: 'input',
        name: 'license',
        message: 'License'
      }];

    return this.prompt(prompts)
      .then(function (answers) {
        this.props = answers;
      }.bind(this));
  },
  // Saving configurations and configure the project
  configuring: function () {
    //  (creating .editorconfig files and other metadata files)
  },
  // If the method name doesn't match a priority, it will be pushed to this group.
  default: function () {
    // console.log('');
  },
  // Where you write the generator specific files (routes, controllers, etc)
  writing: function () {
    var projectFiles = [
      {src: '_package.json', dst: 'package.json'},
      {src: 'gulpfile.js', dst: 'gulpfile.js'},
      {src: 'src/', dst: 'src/'}
    ];
    var dotfiles = ['editorconfig', 'gitignore'];

    projectFiles.forEach(function (f) {
      this.fs.copyTpl(this.templatePath(f.src), this.destinationPath(f.dst), this.props);
    }.bind(this));

    dotfiles.forEach(function (dotfile) {
      this.fs.copy(this.templatePath(dotfile), this.destinationPath('.' + dotfile));
    }.bind(this));
  },
  // Where conflicts are handled (used internally)
  conflicts: function () {
    console.log('');
  },
  // Where installation are run (npm, bower)
  install: function () {
    // this.installDependencies();
    this.log('I\'m all done. Please running npm install by yourself.');
  },
  // Called last, cleanup, say good bye, etc
  end: function () {
    this.log('Good Lucky!');
  }
});
