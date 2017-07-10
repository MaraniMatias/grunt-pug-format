# grunt-pug-format

> A grunt wrapper for _Jade-Beautify_ or __Pug-Beautify__.

## Getting Started
This plugin usgin [pug-beautify](https://github.com/MaraniMatias/pug-beautify)

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-pug-format --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-pug-format');
```

## The "pug_beautify" task

### Overview
In your project's Gruntfile, add a section named `pug_beautify` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  pug_beautify: {
    expand: true,
    cwd: 'src/views/',
    src: '*.pug',
    dest: 'src/views/beautify',
    options: {
      fill_tab: false,
      omit_div: true,
      tab_size: 2,
      separator_space: true,
      omit_empty_lines: true 
    }
  }
});
```

### Options

* fill_tab - boolean, fill whether tab or space, default true.
* omit_div - boolean, whether omit 'div' tag, default false.
* tab_size - number, when 'fill_tab' is false, fill 'tab_size' spaces, default 4.
* separator_space - boolean, When 'separator_space' is true, the attribute separator is comma, default true.
* omit_empty_lines - When 'separator_space' is false, delete line blank, default true.
