define([
  'marionette',
  'lodash',
  'modules-config'
],

function (Marionette, _, modulesConfig) {

  var startModule = function (controller, moduleName) {
    controller.appChannel.trigger('app:module:start', moduleName);
  };

  var addModuleRoute = function (route, controller, config, moduleName) {
    route(new RegExp('^'+ config.baseRoute +'.*'), _.partial(startModule, controller, moduleName));
  };

  return Marionette.AppRouter.extend({

    // global app routes (do not add module's route here)
    appRoutes: {
      ''        : 'home',
      '/'       : 'home',
      'home'    : 'home'
    },

    // Maps the base route of each module to the router
    // in order to access any module by its base route.
    // Ex: when you enter the URL #user/list:
    // 1) the user module will be started
    // 2) the corresponding action in the user controller will be executed
    initialize: function (options) {
      _.each(modulesConfig, _.partial(addModuleRoute, _.bind(this.route, this), options.controller));
    }

  });

});
