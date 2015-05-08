define([
  'underscore',
  'backbone',
  'api-config',
  'modules/user/models/UserModel'
],

function (_, Backbone, apiConfig, UserModel) {

  return Backbone.Collection.extend({
    
    model: UserModel,

    url: apiConfig.users,

    // Returns all models that match search criteria
    search: function (criteria) {

      return this.filter(function (model) {

        var modelValuesArray = _.squeeze(model.toJSON());

        return modelValuesArray.toString().search(new RegExp(criteria, 'gi')) !== -1 ;

      });
    }
    
  });

});