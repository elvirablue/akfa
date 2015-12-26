var gulp = require('gulp');
	var connect = require('gulp-connect');
  var opn = require('opn');
  var less = require('gulp-less');
  var path = require('path');
  var prefix = require('gulp-autoprefixer');
  var minifyCss = require('gulp-minify-css');
  var useref = require('gulp-useref');
  var gulpif = require('gulp-if');
  var uglify = require('gulp-uglify');
 
gulp.task('build', function () {
    var assets = useref.assets();
 
    return gulp.src('app/*.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  // opn('http://localhost:8888');
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

gulp.task('less', function() {
    return gulp.src('less/*.less')  // only compile the entry file
        .pipe(less({
          paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(prefix("last 15 version", "> 1%", "ie 8", "ie 7"), {cascade:true})
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./app/css/'))
        .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch('less/*.less', ['less']);
});
 
gulp.task('default', ['connect', 'watch']);