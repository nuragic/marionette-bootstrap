define(['underscore', 'marionette', 'templates'], function (_, Marionette, templates) {

  return Marionette.ItemView.extend({

    tagName: 'tr',

    className: 'loading',

    template: templates.loading,

    initialize: function (opt) {
      this.model.set(opt.loadingViewData, { silent: true });
    }

  });

});
