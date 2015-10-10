var gulp = require('gulp');
var connect = require('gulp-connect');

/**
 * @param port {Number} webserver port (default:8080)
 * @param root  root path
 * @param livereload {Boolean: false}
 */
var config = {
    port: process.env.PORT || 8080,
    root: 'app'
};

gulp.task('connect', function () {
    connect.server({
        port: config.port,
        root: config.root,
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch([config.root + '/**'], function () {
        gulp.src(config.root + '/index.html')
            .pipe(connect.reload());
    });
});

gulp.task('default', ['connect', 'watch']);