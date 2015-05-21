define([
  'marionette'
],

function (Marionette) {

  // custom region that shows a view in a bootstrap modal
  return Marionette.Region.extend({

    onShow: function (view) {
      this.$el.modal('show');
    },

    onEmpty: function() {
      this.$el.modal('hide');
    }

  });

});
