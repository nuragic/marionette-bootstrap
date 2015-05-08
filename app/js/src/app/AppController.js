define([
  'marionette',
  'app/AppLayout',
  'app/views/HomeView'
],

function (Marionette, AppLayoutView, HomeView) {

  var showAppContent = function (layout, view) {
    layout.content.show(view);
  };

  return Marionette.Controller.extend({

    initialize: function (options) {
      this.layout = new AppLayoutView();

      this.appChannel = options.vent;
      this.appChannel.on('app:content:show', _.partial(showAppContent, this.layout));
      this.appChannel.trigger('wrapper:show', this.layout);
    },

    home: function () {
      this.appChannel.trigger('app:content:show', new HomeView());
    }

  });

});
