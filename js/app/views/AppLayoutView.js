define(['underscore', 'marionette', 'templates'], function(_, Marionette, templates) {

  return Marionette.Layout.extend({

    className: 'app-layout',
    
    template: _.template(templates.applayout),

    regions: {
      menu:    "#menu",
      content: "#content"
    },

    initialize: function (options) {
      $('body').removeClass('stripes-bg');
    }

  });
});
