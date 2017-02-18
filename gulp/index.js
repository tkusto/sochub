const gulp = require('gulp');

module.exports = function initTasks(tasks) {
    tasks.forEach(task => gulp.task(task, require('./tasks/' + task)));
    return gulp;
};
