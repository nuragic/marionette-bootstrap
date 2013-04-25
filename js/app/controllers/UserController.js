define([
  'underscore',
  'marionette',
  'templates',
  'views/AppLayoutView',
  'views/user/UserListView',
  'views/user/UserView',
  'models/UserModel',
  'collections/UserCollection',
  'session',
  'vent'
],

function (_, Marionette, templates, AppLayoutView, UserListView, UserView, UserModel, UserCollection, session, vent) {

  var UserController = {

    userList: function () {
      // check if user is logged
      // TODO: move this piece of code into action pre-filters (beforeAction) once implemented
      if(!session.isAuthenticated()) {
        Backbone.history.navigate("#login", {trigger: true});
        return false;
      }

      if (! this.users) {
        this.users = new UserCollection();
        this.users.fetch({reset: true});
      }
    
      var userListView  = new UserListView({
        collection: this.users
      });

      userListView.on('user:create',          this.createUser, this);
      userListView.on('itemview:user:edit',   this.editUser,   this);
      userListView.on('itemview:user:delete', this.deleteUser, this);
      
      this.layout  = new AppLayoutView({
        model: session
      });

      vent.trigger('app:show', this.layout);
      this.layout.content.show(userListView);
    },

    deleteUser: function (itemView) {
      // TODO FIXME: remove window.confirm implement a better one
      var confirm = window.confirm("Are you sure?");

      if (confirm) {
        itemView.model.destroy();
      }
    },

    editUser: function (itemView) {

      var userView  = new UserView({
        model: itemView.model
      });

      userView.on('user:save',   this.saveUser, this);
      vent.trigger('modal:show', userView);
    },

    createUser: function (args) {

      var userModel = new UserModel({}, {
        collection: this.users
      });
      
      var userView  = new UserView({
        model: userModel,
        action: 'create'
      });

      userView.on('user:save', this.saveUser, this);
      vent.trigger('modal:show', userView);
    },

    saveUser: function (args) {
      var self   = this;
      var view   = args.view;
      var model  = args.model;
      var email  = view.$('input#email').val();
      var rights = view.$('input#rights').val();

      model.save({
        email: email,
        rights: rights
      }, {
        success: function(model, response, options) {
          self.users.add(model);
          vent.trigger('modal:close');
        },
        error: function(model, xhr, options) {
          console.log('User save server ERROR');
        }
      });
      
    }

  };

  return UserController;

});