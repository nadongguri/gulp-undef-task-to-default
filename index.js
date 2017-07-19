'use strict';

/**
 * undefined task by user input to default task
 * @param {object} gulp
 */
module.exports = function(gulp) {
  var argv = require('minimist')(process.argv.slice(2));
  var tasks = argv._;
  var i, taskName, taskObject;
  for (i = 0; i < tasks.length; i++) {
    taskName = tasks[i];
    taskObject = gulp.tasks[taskName];
    if (typeof taskObject === 'undefined') {
      console.log("task " + taskName + " is undefiend, so it redirects to default");
      gulp.task(taskName, gulp.tasks['default'].dep,  gulp.tasks['default'].fn);
    }
  }
};
