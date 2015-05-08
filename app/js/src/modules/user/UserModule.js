define([
  'marionette',
  'modules/user/routers/UserRouter',
  'modules/user/controllers/UserController'
],

function (Marionette, UserRouter, UserController) {

  return Marionette.Module.extend({

    startWithParent: false,

    initialize: function (moduleName, app) {
      this.router = new UserRouter({
        controller: new UserController({
          vent: app.vent
        })
      });
    }

  });

});
