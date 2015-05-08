define([
  'marionette',
  'modules/user/views/UserListView',
  'modules/user/views/UserView',
  'modules/user/models/UserModel',
  'modules/user/collections/UserCollection'
],

function (Marionette, UserListView, UserView, UserModel, UserCollection) {

  var UserController = Marionette.Controller.extend({

    initialize: function (options) {
      this.appChannel = options.vent;
    },

    listUsers: function () {
      if (! this.users) {
        this.users = new UserCollection();
        this.users.fetch({reset: true});
      }
    
      var userListView = new UserListView({
        collection: this.users
      });

      this.listenTo(userListView, 'user:create', this.createUser, this);
      this.listenTo(userListView, 'childview:user:edit', this.editUser, this);
      this.listenTo(userListView, 'childview:user:delete', this.deleteUser, this);

      this.appChannel.trigger('app:content:show', userListView);
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

      this.listenTo(userView, 'user:save', this.saveUser, this);
      this.appChannel.trigger('modal:show', userView);
    },

    createUser: function () {
      var userModel = new UserModel({}, {
        collection: this.users
      });
      
      var userView  = new UserView({
        model: userModel,
        action: 'create'
      });

      this.listenTo(userView, 'user:save', this.saveUser, this);
      this.appChannel.trigger('modal:show', userView);
    },

    saveUser: function (args) {
      var self   = this;
      var view   = args.view;
      var model  = args.model;
      var email  = view.$('#email').val();
      var rights = view.$('#rights').val();

      model.save({
        email: email,
        rights: rights
      }, {
        success: function(model, response, options) {
          self.users.add(model);
          this.appChannel.trigger('modal:close');
        },
        error: function(model, xhr, options) {
          console.log('User save server ERROR');
        }
      });
      
    }

  });

  return UserController;

});