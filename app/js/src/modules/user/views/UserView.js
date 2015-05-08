define([
  'marionette',
  'ldsh!modules/user/views/templates/form'
],

function (Marionette, tmpl) {

  return Marionette.ItemView.extend({

    className: 'modal-content',

    template: tmpl,

    templateHelpers: {
      getTitle: function () {
        return (this.id ? 'Edit user' : 'Create user');
      }
    },

    triggers: {
      // UserController is listening
      'submit' : 'user:save'
    }

  });

});