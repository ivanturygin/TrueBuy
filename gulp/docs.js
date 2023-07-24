const gulp = require('gulp');

const html = require('gulp-file-include');

const sass = require('gulp-sass')(require('sass'));

const autoprefixer = require("gulp-autoprefixer");

const server = require('gulp-server-livereload');

const clean = require("gulp-clean");

const fs = require('fs');

const sourceMaps = require("gulp-sourcemaps");

const plumber = require("gulp-plumber");

const notify = require("gulp-notify");

const webpack = require("webpack-stream");

const babel = require('gulp-babel');

const imgMin = require("gulp-imagemin");

const csso = require("gulp-csso");

const htmlclean = require("gulp-htmlclean");

const webp = require("gulp-webp");

const webphtml = require("gulp-webp-html");

const webpcss = require("gulp-webp-css")


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

gulp.task('html:docs', function () {

	return gulp

		.src(['./src/html/**/*.html', '!./src/html/components/*.html']) // берем все файлы .html

		.pipe(plumber(plumberHtmlConfig)) // запускаем plumber

		.pipe(html(fileIncludeSetting)) // собираем

		.pipe(webphtml())

		.pipe(htmlclean())

		.pipe(gulp.dest('./docs/')) // папка с результатом

});


// Sass

gulp.task('sass:docs', function () {

	return gulp.src('./src/scss/*.scss') // берем все файлы .scss

		.pipe(plumber(plumberSassConfig)) // запускаем plumber

		.pipe(sourceMaps.init()) // инициализируем maps

		.pipe(sass()) // запускаем sass

		.pipe(csso())

		.pipe(sourceMaps.write())

		.pipe(autoprefixer()) // запускаем autoprefixer

		.pipe(webpcss())

		.pipe(gulp.dest('./docs/css/')) // папка с результатом
});


// Img

gulp.task('images:docs', function () {

	return gulp.src('./src/img/**/*') // берем любые файлы любой вложенности (images)

	   .pipe(webp())

		.pipe(gulp.dest('./docs/img/'))

		.pipe(gulp.src('./src/img/**/*'))

		.pipe(imgMin({
			verbose: true
		}))

		.pipe(gulp.dest('./docs/img/')) // копируем в docs
});


// Fonts

// Fonts

gulp.task('fonts:docs', function () {

	return gulp.src('./src/fonts/**/*') // берем любые файлы шрифтов

		.pipe(fonter({

			formats: ['ttf']

		}))

		.pipe(gulp.src('./src/fonts/**/*.ttf'))

		.pipe(ttf2woff2())

		.pipe(gulp.dest('./build/fonts/')) // копируем в build
});


// FileCopy

gulp.task('files:docs', function () {

	return gulp.src('./src/file/**/*')

		.pipe(gulp.dest('./docs/file/'))
});



// Server

gulp.task('server:docs', function () {

	return gulp.src('./docs/')

		.pipe(server({

			livereload: true,

			open: true

		}))
});


// GulpClean

gulp.task('clean:docs', function (done) {

	if (fs.existsSync('./docs/')) { // проверяем существование папки docs


		return gulp.src('./docs', {
				read: false
			})

			.pipe(clean()); // находим папку docs и удаляем ее (read:false не читаем файлы внутри docs)

	}

	done(); // запускается если папки docs нет

});


// JS

gulp.task('js:docs', function () {

	return gulp.src('./src/js/**/*.js')

		.pipe(plumber(plumberJSConfig)) // запускаем plumber

		.pipe(babel())

		.pipe(webpack(require('./../webpack.config')))

		.pipe(gulp.dest('./docs/js'));

})

