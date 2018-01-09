/*jshint esversion: 6 */

const gulp = require('gulp');
const watch = require('gulp-watch');
const spritesmith = require('gulp.spritesmith');
const livereload = require('gulp-livereload');
const connect = require('gulp-connect');
const pug = require('gulp-pug');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const stylus = require('gulp-stylus');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

	imagemin.mozjpeg = require('imagemin-mozjpeg');
	imagemin.pngquant = require('imagemin-pngquant');

gulp.task('sprite', taskSprite);
gulp.task('pug', taskPug);
gulp.task('less', taskLess);
gulp.task('stylus', taskStylus);
gulp.task('connect', taskConnect);
gulp.task('imagemin', taskImagemin);

gulp.task('watch', function() {
	taskConnect();

	watch('./source/sprite/*.png', taskSprite);
	watch('./source/*.pug', taskPug).pipe(connect.reload());
	watch('./source/less/*.less', taskLess).pipe(connect.reload());
	watch('./source/stylus/*.styl', taskStylus).pipe(connect.reload());
	watch('./source/images/*.*', taskImagemin).pipe(connect.reload());

});

function taskStylus() {
	return gulp.src('./source/stylus/*.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(postcss([ autoprefixer() ]))
		.pipe(gulp.dest('./public/css/'));
}

function taskLess() {
	return gulp.src('./source/less/*.less')
		.pipe(plumber())
		.pipe(less({
			paths: ['.', 'bower_components']
		}))
		.pipe(gulp.dest('./public/css/'));
}

function taskConnect() {
	connect.server({
		root: 'public',
		livereload: true
	});
}

function taskSprite() {
	let spriteDate = gulp.src('./source/sprite/*.png')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.less',
			cssFormat: 'less',
			algorithm: 'binary-tree',
			cssTemplate: 'spritesmith.mustache'
		}));

	spriteDate.img.pipe(gulp.dest('./public/images/'));
	return spriteDate.css.pipe(gulp.dest('./source/less/spritesmith/'));
}

function taskPug() {
	return gulp.src('./source/*.pug')
	.pipe(plumber())
	.pipe(pug({
		pretty: '\t'
	}))
	.pipe(gulp.dest('./public/'));
}

function taskImagemin() {
	return gulp.src(['source/images/**/*.jpg', 'source/images/**/*.png', 'source/images/**/*.svg'])
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.mozjpeg({progressive: true}),
			imagemin.optipng({optimizationLevel: 7}),
			imagemin.pngquant({quality: '85-100'}),
			imagemin.svgo()
		]))
		.pipe(gulp.dest('public/images/'));
}
