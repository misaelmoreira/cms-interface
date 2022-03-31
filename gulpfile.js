const gulp = require('gulp');
const { watch, series } = require('gulp');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var gp_sourcemaps = require('gulp-sourcemaps');

function jsBuild(){
    return gulp.src(['public/javascripts/*.js'])
    .pipe(gp_concat('concat.js'))
    //.pipe(gulp.dest('dist'))
    .pipe(gp_rename('aplication.min.js'))
    .pipe(gp_uglify())
    .pipe(gulp.dest('public/javascripts/build/'));
};

function cssBuild(){
    return gulp.src(['public/stylesheets/*.css'])
    .pipe(gp_sourcemaps.init())
    .pipe(gp_concat('concat.css'))
    //.pipe(gulp.dest('dist'))
    .pipe(gp_rename('aplication.min.css'))
    .pipe(cssmin())
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('public/stylesheets/build/'));
};


gulp.task('comprimir', function(){
    watch('public/stylesheets/*.css', cssBuild);
    watch('public/javascripts/*.js', jsBuild);
});

