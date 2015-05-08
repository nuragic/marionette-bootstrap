'use strict';

var gulp = require('gulp');

var api = require('./server/api/server');
var statics = require('./server/static/server');

var startAPI = function () {
  api.listen(9001);
};

var startAPP = function () {
  statics.listen(3000);
}

gulp.task('api', startAPI);
gulp.task('app', startAPP);

gulp.task('default', function () {
  startAPI();
  startAPP();
});
