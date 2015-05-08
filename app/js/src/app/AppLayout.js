define([
  'marionette',
  'ldsh!app/views/templates/applayout'
],

function (Marionette, tmpl) {

  return Marionette.LayoutView.extend({

    className: 'app-layout',
    
    template: tmpl,

    regions: {
      menu:    "#menu",
      content: "#content"
    }

  });

});
