require([
  // Libraries
  'jquery',
  'underscore',
  'backbone',
  'bootstrap',
  // Underscore mixins
  'mixins',
  // Main App Object
  'app',
  // Auth module 
  'auth',
  // Application routers
  'routers/MainRouter',
  'routers/UserRouter'
],

function ($, _, Backbone, bootstrap, mixins, App, auth, MainRouter, UserRouter) {

  // Navigation handler
  $(document).on('click', 'a:not([data-bypass])', function(ev) {

    var href = $(this).attr('href');

    if (href && href.indexOf('#') === 0) {
      ev.preventDefault();

      Backbone.history.navigate(href, true);
    }
  });

  // Start the app
  var options = {
    routers: {
      main   : MainRouter,
      user   : UserRouter
    }
  };
  
  App.start(options);

});
