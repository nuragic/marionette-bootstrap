define([
  'underscore',
  'marionette',
  'templates',
  'vent'
],

function (_, Marionette, templates, vent) {

  return Marionette.ItemView.extend({

    className: "userDetail",

    template: _.template(templates.user.form),

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