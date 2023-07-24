const gulp = require('gulp');

const html = require('gulp-file-include');

const sass = require('gulp-sass')(require('sass'));

const server = require('gulp-server-livereload');

const clean = require("gulp-clean");

const fs = require('fs');

const sourceMaps = require("gulp-sourcemaps");

const plumber = require("gulp-plumber");

const notify = require("gulp-notify");

const webpack = require("webpack-stream");

const svgSprite = require("gulp-svg-sprite");

const fonter = require("gulp-fonter");

const ttf2woff2 = require("gulp-ttf2woff2");



// Plumber

const plumberSassConfig = {

	errorHandler: notify.onError({

		title: 'Styles', // Название ошибки

		massage: 'Error <%= error.message %>', // Текст ошибки

		sound: false
	})
};

const plumberHtmlConfig = {

	errorHandler: notify.onError({

		title: 'Html', // Название ошибки

		massage: 'Error <%= error.message %>', // Текст ошибки

		sound: false
	})
};

const plumberJSConfig = {

	errorHandler: notify.onError({

		title: 'JS', // Название ошибки

		massage: 'Error <%= error.message %>', // Текст ошибки

		sound: false
	})
};

// Html

const fileIncludeSetting = {

	prefix: '@@',

	basepath: '@file'

};

gulp.task('html:dev', function () {

	return gulp

		.src(['./src/html/**/*.html', '!./src/html/components/*.html']) // берем все файлы .html кроме папки components

		.pipe(plumber(plumberHtmlConfig)) // запускаем plumber

		.pipe(html(fileIncludeSetting)) // собираем

		.pipe(gulp.dest('./build/')) // папка с результатом

});


// Sass

gulp.task('sass:dev', function () {

	return gulp.src('./src/scss/*.scss') // берем все файлы .scss

		.pipe(plumber(plumberSassConfig)) // запускаем plumber

		.pipe(sourceMaps.init()) // инициализируем maps

		.pipe(sass()) // запускаем sass

		.pipe(sourceMaps.write())

		.pipe(gulp.dest('./build/css/')) // папка с результатом
});


// Img

const spriteConfig = {

	mode: {

		stack: {

			sprite: './sprite.svg',

			example: true

		}

	}
}

gulp.task('sprite:dev', function () {

	return gulp.src('./src/img/**/*.svg')

		.pipe(svgSprite(spriteConfig))

		.pipe(gulp.dest('./build/img/'))
})


gulp.task('images:dev', function () {

	return gulp.src('./src/img/**/*') // берем любые файлы любой вложенности (images)

		/*.pipe(imgMin({
			verbose: true
		}))*/                          // сжимаем изображения

		.pipe(gulp.dest('./build/img/')) // копируем в build
});


// Fonts

gulp.task('fonts:dev', function (done) {

	return gulp.src('./src/fonts/**/*') // берем любые файлы шрифтов

	.pipe(fonter({

			formats: ['ttf']

		}))

		.pipe(gulp.src('./src/fonts/**/*.ttf'))

		.pipe(ttf2woff2())

		.pipe(gulp.dest('./build/fonts/')) // копируем в build

});

gulp.task('fontsClean:dev', function(done) {
	

		return gulp.src('.src/fonts/**/*')

		.pipe(gulp.src('./src/fonts/**/*.ttf'))
		
			.pipe(clean())

			.pipe(gulp.src('./src/fonts/**/*.woff'))
	
         .pipe(clean())

})


// FileCopy

gulp.task('files:dev', function () {

	return gulp.src('./src/files/**/*')

		.pipe(gulp.dest('./build/files/'))
});



// Server

gulp.task('server:dev', function () {

	return gulp.src('./build/')

		.pipe(server({

			livereload: true,

			open: true

		}))
});


// GulpClean

gulp.task('clean:dev', function (done) {

	if (fs.existsSync('./build/')) { // проверяем существование папки build


		return gulp.src('./build', {
				read: false
			})

			.pipe(clean()); // находим папку build и удаляем ее (read:false не читаем файлы внутри build)

	}

	done(); // запускается если папки build нет

});


// JS

gulp.task('js:dev', function () {

	return gulp.src('./src/js/*.js')

		.pipe(plumber(plumberJSConfig)) // запускаем plumber

		.pipe(webpack(require('./../webpack.config')))

		.pipe(gulp.dest('./build/js/'));

});

// Watch

gulp.task('watch:dev', function () {

	gulp.watch('./src/scss/**/*.scss', gulp.parallel('sass:dev')); // следим за всеми файлами .scss

	gulp.watch('./src/**/*.html', gulp.parallel('html:dev')); // следим за html

	gulp.watch('./src/img/**/*', gulp.parallel('images:dev')); // следим за  изображениями

	gulp.watch('./src/fonts/**/*', gulp.parallel('fonts:dev')); // следим за шрифтами

	gulp.watch('./src/file/**/*', gulp.parallel('files:dev')); // следим за изображениями

	gulp.watch('./src/js/**/*.js', gulp.parallel('js:dev')); // следим за js

});


