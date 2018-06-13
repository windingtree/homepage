import cp from 'child_process';
import gulp from 'gulp';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import imagemin from 'gulp-imagemin';
import uglify from 'gulp-uglify';

// Modernizr
export function modernizr() {
    return cp.exec('./node_modules/modernizr/bin/modernizr -c ./modernizr-custom.json -d ./assets/js/modernizr-custom.js -u');
}

// JS
export function js() {
    return gulp.src([
        'assets/js/vendors/fontfaceobserver.js',
        'assets/js/vendors/slick.js',
        'assets/js/variables.js',
        'assets/js/utils.js',
        'assets/js/bootstrap-overrides/navbar.js',
        'assets/js/components/banners/index.js',
        'assets/js/components/already-with-us.js',
        'assets/js/components/features.js',
        'assets/js/components/partners.js',
        'assets/js/components/team.js'
    ])
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('assets/js/'));
}

// Img

export function img() {
    return gulp.src('assets/img/**/*.{gif,jpg,jpeg,png,svg}')
        .pipe(imagemin([
            imagemin.gifsicle({
                'interlaced': true
            }),
            imagemin.jpegtran({
                'progressive': true
            }),
            imagemin.optipng({
                'optimizationLevel': 7
            }),
            imagemin.svgo({
                'plugins': [
                    {
                        'cleanupIDs': false
                    }
                ]
            })
        ]))
        .pipe(gulp.dest('assets/img/'));
}

const build = gulp.series(modernizr, gulp.parallel(js, img));

gulp.task('build', build);

export default build;
