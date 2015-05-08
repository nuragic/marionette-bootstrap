define([
  'marionette'
],

function (Marionette) {

  return Marionette.AppRouter.extend({

    appRoutes: {
      'users/*'    : 'listUsers',
      'users/list' : 'listUsers'
    }

  });

});