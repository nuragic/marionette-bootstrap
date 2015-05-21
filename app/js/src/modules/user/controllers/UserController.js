define([
  'marionette',
  'underscore',
  'modules/user/views/UserListView',
  'modules/user/views/UserView',
  'modules/user/models/UserModel',
  'modules/user/collections/UserCollection'
],

function (Marionette, _, UserListView, UserView, UserModel, UserCollection) {

  return Marionette.Controller.extend({

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
        itemView.model.destroy();
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
      var view   = args.view;
      var model  = args.model;
      var data = {
        email : view.$('#email').val(),
        role  : view.$('#role').val()
      };

      var _onSaveSuccess = function (model, response, options) {
        this.users.add(model);
        this.appChannel.trigger('modal:close');
      };

      var _onSaveError = function (model, xhr, options) {
        console.log('User save server ERROR');
      };

      model.save(data, {
        success : _.bind(_onSaveSuccess, this),
        error   : _.bind(_onSaveError, this)
      });
    }

  });

});
