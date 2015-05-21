define([
  'require',
  'jquery',
  'backbone',
  'marionette',
  'app/AppRouter',
  'app/AppController',
  'app/views/commons/ModalRegion',
  'modules-config'
],

function (require, $, Backbone, Marionette, AppRouter, AppController, ModalRegion, modulesConfig) {

  // helper function to "lazy load" an application module
  var getModuleDefinition = function (moduleName) {
    var deferred = $.Deferred();
    var modulePath = modulesConfig[moduleName].modulePath;

    require([modulePath], function (module) {
      deferred.resolve(module);
    });

    return deferred.promise();
  };

  // helper function to load an application module by URL
  var loadModule = function (moduleName) {
    Backbone.history.loadUrl(modulesConfig[moduleName].baseRoute);
  };

  // the application instance
  var app = new Marionette.Application();

  // application regions
  app.addRegions({
    wrapper: "#wrapper",
    modal: {
      selector    : "#modal",
      regionClass : ModalRegion
    }
  });

  // application events and callbacks
  app.vent.on('wrapper:show', function (appView) {
    app.wrapper.show(appView);
  });

  app.vent.on('modal:show', function (view) {
    app.modal.show(view);
  });

  app.vent.on('modal:close', function() {
    app.modal.reset();
  });

  // define and/or start a module
  app.vent.on('app:module:start', function (moduleName) {
    if (!app[moduleName]) {
      $.when(getModuleDefinition(moduleName)).then(function (moduleDefinition) {
        app.module(moduleName, moduleDefinition);
        app[moduleName].onStart = _.partial(loadModule, moduleName);
        app[moduleName].start();
      });
    } else {
      !app[moduleName]._isInitialized ? app[moduleName].start() : loadModule(moduleName);
    }
  });

  app.on("start", function () {
    // initialize backbone history
    Backbone.history.start({
      pushState: true
    });

    // catch the click for every link (that doesn't have data-bypass)
    // in order to fire a 'navigate' event
    $(document).on('click', 'a:not([data-bypass])', function (ev) {
      var href = $(this).attr('href');
      var protocol = this.protocol + '//';
      if (href.slice(protocol.length) !== protocol) {
        ev.preventDefault();
        app.router.navigate(href, true);
      }
    });
  });

  // initializer (called on application start)
  // to instantiate app router and controller
  app.addInitializer(function (options) {
    app.router = new AppRouter({
      controller: new AppController({
        vent: this.vent
      })
    });
  });

  return app;

});
