define(['models/UserModel', 'app'], function (UserModel, app) {

  return Backbone.Collection.extend({
    
    model: UserModel,

    url: app.config.apiUrl + '/users',

    parse: function (resp, options) {

      return resp.users;
    },

    // Returns all models that match search criteria
    search: function (criteria) {

      return this.filter(function (model) {

        var modelValuesArray = _.squeeze(model.toJSON());

        return modelValuesArray.toString().search(new RegExp(criteria, 'gi')) !== -1 ;

      });
    }
    
  });

});