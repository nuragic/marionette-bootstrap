require.config({
  // main.js is the application entry point
  deps: ['main'],

  paths: {
    // folders
    libs:    '../libs',
    plugins: '../plugins',
    utils:   '../utils',
    tmpl:    '../../tmpl',

    // libs
    text:       '../libs/text',
    jquery:     '../libs/jquery',
    underscore: '../libs/underscore',
    backbone:   '../libs/backbone',
    marionette: '../libs/backbone.marionette',
    bootstrap:  '../libs/bootstrap',
    cookie:     '../libs/jquery.cookie'   
  },

  shim: {
    underscore: {
      exports: '_',
      init: function () {
        this._.templateSettings = {
          evaluate:    /\{\{#([\s\S]+?)\}\}/g,            // {{# console.log("meh") }}
          interpolate: /\{\{[^#\{]([\s\S]+?)[^\}]\}\}/g,  // {{ title }}
          escape:      /\{\{\{([\s\S]+?)\}\}\}/g,         // {{{ title }}}
        };
        return _;
      }
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    marionette: {
      deps : ['backbone'],
      exports : 'Marionette'
    },
    bootstrap: {
      deps: ['jquery']
    },
    cookie: {
      deps: ['jquery']
    }
  }

  // development only: cache bust
  //urlArgs: "bust=" + (new Date()).getTime()

});
