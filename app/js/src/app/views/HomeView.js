define([
  'marionette',
  'ldsh!app/views/templates/home'
],

function (Marionette, tmpl) {

  return Marionette.ItemView.extend({
    
    className: 'container span8 home',
    
    template: tmpl
    
  });

});
