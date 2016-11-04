var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function () {
    browserSync.init({
        server: {
            baseDir: "../"
        }
    });
});

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

gulp.task('sass', function () {
    gulp.src('style/main.scss')
        .pipe(sass().on('error', handleError))
        .pipe(prefix())
        .pipe(gulp.dest('../style/'))
        .pipe(browserSync.stream());
});

gulp.task('copy', function () {
    gulp.src('*.html')
        .pipe(gulp.dest('../'));
});

gulp.task('watch', function () {
    gulp.watch(['*.html'], ['copy', browserSync.reload]);
    gulp.watch(['style/*.scss'], ['sass']);
});

gulp.task('default', ['browser-sync', 'watch']);