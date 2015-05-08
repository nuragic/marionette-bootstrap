define([
  'marionette'
],

function (Marionette) {

  //custom region that shows a view in bootstrap modal
  var ModalRegion = Marionette.Region.extend({

    el: "#modal",

    onShow: function(view) {
      view.on("close", this.hideModal, this);
      this.$el.modal('show');
    },
    
    hideModal: function() {
      this.$el.modal('hide');
    }
    
  });

  return ModalRegion;
  
});