define([
  'marionette'
],

function (Marionette) {

  var app = new Marionette.Application();

  // application configuration
  app.config = {
    // you can provide an absolute URL like http://api.yourserver.com/v1
    apiUrl: 'api'
  };

  //custom region that shows a view in bootstrap modal
  var ModalRegion = Marionette.Region.extend({
    el: "#modal",

    onShow: function(view) {
      view.on("close", this.hideModal, this);
      this.$el.modal('show');
    },
    
    hideModal: function() {
      this.$el.modal('hide');
    }
  });

  // main regions, check index.html 
  app.addRegions({
    wrapper: "#wrapper",
    modal:   ModalRegion
  });

  // app events
  app.on("initialize:after", function() {
    Backbone.history.start();
  });
  app.vent.on('app:show', function(appView) {
    app.wrapper.show(appView);
  });
  app.vent.on('modal:show', function(view) {
    app.modal.show(view);
  });
  app.vent.on('modal:close', function() {
    app.modal.hideModal();
  });
  

  app.addInitializer(function(options) {
    // we neeed to override loadTemplate because Marionette expect to recive only the template ID
    // but actually it's the full template html (require + text plugin)
    Backbone.Marionette.TemplateCache.prototype.loadTemplate = function (templateId) {
      var template = templateId;
      // remove this comment if you want to make sure you have a template before trying to compile it
      /*
      if (!template || template.length === 0) {
        var msg = "Could not find template: '" + templateId + "'";
        var err = new Error(msg);
        err.name = "NoTemplateError";
        throw err;
      }*/

      return template;
    };
    
    // init ALL app routers
    _(options.routers).each(function(router) {
      new router();
    });

  });

  return app;
  
});