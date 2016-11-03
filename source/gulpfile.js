var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');

gulp.task('sass', function(){
    gulp.src('style/main.scss')
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest('../style/'));
});

gulp.task('copy', function(){
    gulp.src('*.html')
        .pipe(gulp.dest('../'));
});

gulp.task('watch',function() {
    gulp.watch(['*.html'],['copy']);
    gulp.watch(['style/*.scss'],['sass']);
});

gulp.task('default', ['sass', 'copy', 'watch']);