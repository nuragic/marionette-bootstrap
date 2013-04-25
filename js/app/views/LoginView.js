define([
  'underscore',
  'backbone',
  'marionette',
  'templates'
],

function (_, Backbone, Marionette, templates) {

  return Marionette.ItemView.extend({
    
    className: 'container span4 login',

    template: templates.login,

    triggers: {
      'submit' : 'app:login'
    }

  });
  
});