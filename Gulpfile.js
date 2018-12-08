'use strict'
var gulp = require('gulp')
var eslint = require('gulp-eslint')


gulp.task('lint', function () {
	return gulp.src(['index.js'])
		.pipe(eslint())
		.pipe(eslint.formatEach())
})

gulp.task('default', ['lint'], function () {
	console.log('default task is running')
})
