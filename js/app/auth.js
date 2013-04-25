define(['backbone'], function(Backbone) {

  var originalSync = Backbone.sync;
  
  Backbone.BasicAuth = {
    // Setup Basic Authentication for all future requests
    set: function (token) {
      // Override Backbone.sync for all future requests,
      // setting the Basic Auth header before the sync is performed.
      Backbone.sync = function(method, model, options) {
        options.headers = options.headers || {};
        _.extend(options.headers, { 'Authorization': 'Basic ' + token });
        return originalSync.call(model, method, model, options);
      };
    },

    // Clear Basic Authentication for all future requests
    clear: function() {
      token = null;
      Backbone.sync = originalSync;
    }
  };

});