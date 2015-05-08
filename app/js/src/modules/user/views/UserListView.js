define([
  'marionette',
  'modules/user/views/UserItemView',
  'ldsh!modules/user/views/templates/list'
],

function (Marionette, UserItemView, tmpl) {

  return Marionette.CompositeView.extend({

    childView: UserItemView,
    
    template: tmpl,

    ui: {
      inputFilter : 'input[name="filter"]'
    },

    triggers:  {
       // UserController is listening
      'click .create' : 'user:create'
    },

    events: {
      'keyup [name="filter"]' : 'filter',
      'click #resetFilter'    : 'resetFilter'
    },

    attachBuffer: function (collectionView, buffer) {
      collectionView.$("tbody").append(buffer);
    },

    filter: function () {
      var val = this.ui.inputFilter.val();
      var filtered = this.collection.search(val);
      var originalModels = this.originalModels = this.collection.models.slice();

      this.collection.reset(filtered);
      this.collection.reset(originalModels, {silent:true});
    },

    resetFilter: function () {
      this.ui.inputFilter.val('');
      this.filter();
    }

  });

});