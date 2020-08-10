//Main
const gulp = require('gulp');

//Styles
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
// const rename = require('gulp-rename');

//Images
const imagemin = require('gulp-imagemin');

var paths = {
    styles: {
        src: 'sass/**/*.scss',
        dest: 'dist/css/'
    },
    images: {
        src: 'src/img/*',
        dest: 'dist/img'
    }
};

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest(paths.styles.dest));
}

function images() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.images.src, images);
}

exports.default = watch;