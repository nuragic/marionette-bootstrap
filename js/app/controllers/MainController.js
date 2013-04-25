define([
  'marionette',
  'views/AppLayoutView',
  'views/HomeView',
  'models/LoginModel',
  'views/LoginView',
  'session',
  'vent'
],

function (Marionette, AppLayoutView, HomeView, LoginModel, LoginView, session, vent) {

  // private
  var _initializeLayout = function() {
    MainController.layout = new AppLayoutView({
      model: session
    });

    MainController.layout.on("show", function() {
      vent.trigger("layout:rendered");
    });

    vent.trigger('app:show', MainController.layout);
  };

  vent.on("layout:rendered", function() {
      console.log('layout:rendered (MainController)'); 
  });

  var MainController = {

    home: function () {
      
      if(!session.isAuthenticated()) {
        Backbone.history.navigate("#login", {trigger: true});
        return false;
      }

      var homeView = new HomeView();

      _initializeLayout();

      MainController.layout.content.show(homeView);
    },

    login: function () {

      var loginModel = new LoginModel({
        email  : session.get('email'),
        issuer : session.get('issuer')
      });

      var view = new LoginView({
        model: loginModel
      });

      view.on('app:login', MainController.authenticate);

      vent.trigger('app:show', view);
    },

    authenticate: function (args) {
      var self     = this;
      var email    = this.$('input[name="email"]').val();
      var password = this.$('input[name="password"]').val();

      $.when(this.model.authenticate(email, password)).then(
        function (model, response, options){
          var token = model.get('token');
          session.save(model);
          session.load();
          Backbone.history.navigate("#home", {trigger: true});
        },
        function (model, xhr, options){
          self.$el.find('.alert').show();
        }
      );
    },

    logout: function () {
      session.destroy();
      Backbone.history.navigate("#login", {trigger: true});
    }

  };

  return MainController;
});