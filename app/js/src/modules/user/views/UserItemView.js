define([
  'marionette',
  'ldsh!modules/user/views/templates/item'
],

function (Marionette, tmpl) {

  return Marionette.ItemView.extend({

    tagName: 'tr',

    template: tmpl,

    triggers:  {
      // UserController is listening
      'click .edit'   : 'user:edit',
      'click .delete' : 'user:delete'
    },

    modelEvents: {
      'change'  : 'render',
      'destroy' : 'render'
    }

  });

});
