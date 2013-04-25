define([
  'underscore',
  'marionette',
  'vent',
  'templates',
  'views/LoadingView',
  'views/user/UserItemView'
],

function (_, Marionette, vent, templates, LoadingView, UserItemView) {

  return Marionette.CompositeView.extend({

    template: _.template(templates.user.list),

    //emptyView: LoadingView,
    
    itemView: UserItemView,

    triggers:  {
       // UserController is listening
      'click .create'      : 'user:create'
    },

    events: {
      'click #filter'      : 'filter',
      'click #resetFilter' : 'resetFilter'
    },

    appendHtml: function(collectionView, itemView) {
      collectionView.$("tbody").append(itemView.el);
    },

    filter: function (ev) {
      var val = this.$('input[name="filter"]').val();
      var originalModels = this.collection.models.slice();

      if (val) {
        var filtered = this.collection.search(val);
        this.collection.reset(filtered);
        this.collection.reset(originalModels, {silent: true});
      } else {
        this.render();
      }
      
    },

    resetFilter: function (ev) {
      this.$('input[name="filter"]').val('');
      this.$('#filter').trigger('click');
    }

  });

});