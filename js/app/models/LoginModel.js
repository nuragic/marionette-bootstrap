define(['backbone', 'app'], function(Backbone, app) {

  return Backbone.Model.extend({

    url: app.config.apiUrl + '/login',

    defaults: {
      email    : '',
      password : '',
      token    : ''
    },

    authenticate: function (email, password) {

      var authToken = btoa(email + ':' + password);
      var dfd = new $.Deferred();

      this.set({
        email : email
      },{
        silent: true
      });

      this.fetch({
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Authorization", "Basic " + authToken);
        },
        success: function(model, response, options) {
          dfd.resolve(model, response, options);
        },
        error: function(model, xhr, options) {
          dfd.reject(model, xhr, options);
        }
      });

      return dfd.promise();
    }

  });

});
