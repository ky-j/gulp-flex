var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var wrap = require('gulp-wrap');
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

// 把/source/pages/下的文件套上公共部分放到根目录下
gulp.task('build', function () {
    gulp.src('pages/*.html')
        .pipe(wrap({src:'layout/layout.html'}))
        .pipe(gulp.dest('../'));
});

// 监控/source/任意文件夹/下的html文件，若有变化则执行build和自动刷新
gulp.task('watch', function () {
    gulp.watch(['**/*.html'], ['build', browserSync.reload]);
});

gulp.task('default', ['browser-sync', 'watch']);