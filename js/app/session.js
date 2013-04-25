define([
  'jquery',
  'underscore',
  'backbone',
  'cookie'
],

function ($, _, Backbone){

  var Session = Backbone.Model.extend({

    defaults: {
      'accessToken': null
    },

    // Creating a new session instance will attempt to load the user cookie.
    initialize: function() {
        this.load();
    },

    // Returns true if the user is authenticated.
    isAuthenticated: function() {
      return Boolean(this.get('accessToken'));
    },

    // Saving will create the cookie data instead of syncing the model.
    save: function(model) {
      $.cookie('accessToken', model.get('token'));
      $.cookie('email', model.get('email'));
    },

    // Loads the user's credentials from the cookie data.
    load: function() {
      this.set('accessToken', $.cookie('accessToken'));
      this.set('email', $.cookie('email'));
      //set the Authorization header
      Backbone.BasicAuth.set($.cookie('accessToken'));
    },

    destroy: function () {
      return $.removeCookie('accessToken');
    }

  });

  return new Session();

});