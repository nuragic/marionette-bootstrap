define([
  'underscore',
  'marionette',
  'templates'
],

function (_, Marionette, templates) {

  return Marionette.ItemView.extend({

    tagName: 'tr',

    template: _.template(templates.user.item),

    templateHelpers: {
      getRights: function () {
        // TODO map rights
        return this.rights;
      }
    },

    triggers:  {
      // UserController is listening
      'click .edit'   : 'user:edit',
      'click .delete' : 'user:delete'
    },

    initialize: function() {
      this.listenTo(this.model, "change", this.render, this);
      this.listenTo(this.model, "destroy", this.render, this);
    }

  });
  
});