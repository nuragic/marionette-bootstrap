require.config({

  // the application "bootstrap"
  deps: ['start'],

  paths: {
    // folders
    libs : '../libs',
    tmpl : '../../tmpl',

    // libs
    ldsh       : '../libs/lodash-template-loader/loader',
    lodash     : '../libs/lodash/lodash',
    jquery     : '../libs/jquery/dist/jquery',
    backbone   : '../libs/backbone/backbone',
    marionette : '../libs/marionette/lib/backbone.marionette',
    bootstrap  : '../libs/bootstrap/dist/js/bootstrap'
  },

  shim: {
    bootstrap: {
      deps: ['jquery']
    }
  },

  map: {
    '*' : {
      'underscore' : 'lodash',
      'lodash'     : 'lodash-config'
    },
    'lodash-config' : {
      'lodash' : 'lodash'
    }
  }

});
