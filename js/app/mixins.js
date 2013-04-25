// Underscore mixins (AMD style)
define(function(require) {

  var _         = require('underscore');
  var templates = require('templates');

  _.mixin({

    squeeze: function (obj) {

      var _extract = function (obj, result) {

        for (var propName in obj) {
          
          var propValue = obj[propName];

          if (propValue) {
            if (_.isArray(propValue)) {
              _extract(propValue, result);
            } else if (_.isObject(propValue)) {
              _extract(_.flatten(propValue), result);
            } else if (_.isString(propValue)) {
              result.push(propValue);
            }
          }
        }

        return result;
      }

      return _extract(obj, []);
    }

  });

});
