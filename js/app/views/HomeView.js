define(['underscore', 'marionette', 'templates'], function(_, Marionette, templates) {

  return Marionette.ItemView.extend({
    className: 'container span8 home',
    
    template: _.template(templates.home),

    initialize: function (options) {
      _.bindAll(this);
    }

  });

});
