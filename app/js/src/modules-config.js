define({

  // MODULES CONFIG
  // --------------
  // Every entry here must correspond to an app module.
  // The only required fields are 'modulePath' and 'baseRoute'
  // This configuration is used by the AppRouter to dynamically map
  // every module's route into the application in order to access it.
  user: {
    modulePath : 'modules/user/UserModule',
    baseRoute  : 'users'
  }

});
