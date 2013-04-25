define(['marionette', 'controllers/UserController'], function (Marionette, UserController) {

  return Marionette.AppRouter.extend({
    
    controller: UserController,
    
    appRoutes: {
      "users" : "userList"
    }

  });

});