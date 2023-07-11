 const { src, dest, watch, parallel, series }  = require('gulp');

 const scss         = require('gulp-sass')(require('sass'));
 const concat       = require('gulp-concat');
 const browserSync  = require('browser-sync').create();
 const uglify       = require('gulp-uglify-es').default;
 const autoprefixer = require('gulp-autoprefixer');
 const imagemin     = require('gulp-imagemin');
 const del          = require('del');
 const plumber      = require('gulp-plumber');
 const notify       = require('gulp-notify');
 const fonter       = require('gulp-fonter');
 const ttf2woff2    = require('gulp-ttf2woff2');
 const fs           = require('fs');
 const vinylFTP     = require('vinyl-ftp');
 const util         = require('gulp-util');





 const configFTP = {
	host: '', // Адрес FTP сервера
	user: '', // Имя пользователя
	password: '', // Пароль
	parallel: 5 // Количество потоков
 }

 function ftp() {
 	configFTP.log = util.log;
 	const ftpConnect = vinylFTP.create(configFTP);
 	return app.gulp.src(`dist/**/*.*`, {})
 		.pipe(plumber({
 			errorHandler: function (err) {
 				notify.onError({
 					title: 'FTP Error',
 					message: 'Error:<%= error.message %>'
 				})(err);
 				this.emit('end');
 			}
 		}))
 		.pipe(ftpConnect.dest(`/test/gulppack`));
 }


 function styles() {
   return src('app/scss/style.scss')
	   .pipe(plumber({
			errorHandler: function(err) {
				notify.onError({
					title:   'SCSS Error',
					message: 'Error:<%= error.message %>'
				})(err);
				this.emit('end');
			}
		}))
	   .pipe(scss({outputStyle:'compressed'}))
		.pipe(concat('style.min.css'))
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 10 version'],
			grid: true
		}))
		.pipe(dest('app/css'))
		.pipe(browserSync.stream())
 }


 function browsersync() {
	browserSync.init({
		server: {
			baseDir: "app/"
		}
	})
 }


 function cleanDist() {
	return del('dist')
 }


 function cleanFonts() {
	return del(['app/fonts/*.otf', 'app/fonts/*.ttf']);
 }

 function images() {
	return src('app/images/**/*')
	.pipe(imagemin(
		[
			imagemin.gifsicle({interlaced: true}),
			imagemin.mozjpeg({quality: 75,progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({plugins: [{removeViewBox: true},
						{cleanupIDs: false}
					]
				})
		]
	))
	.pipe(dest('dist/images'))
 }


 function scripts () {
 	return src([
		'node_modules/jquery/dist/jquery.js',
		'app/js/main.js'
	])
	.pipe(plumber({
		errorHandler: function (err) {
			notify.onError({
				title: 'JS Error',
				message: 'Error:<%= error.message %>'
			})(err);
			this.emit('end');
		}
	}))
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js'))
	.pipe(browserSync.stream())
	}


	function otfToTtf() {
		// Ищем файлы шрифтов .otf
		return src (['app/fonts/*.otf'])

		//Отлавливаем ошибки
		.pipe(plumber({
		errorHandler: function (err) {
			notify.onError({
				title: 'Fonts Error',
				message: 'Error:<%= error.message %>'
			})(err);
			this.emit('end');
		}
		}))

		// Конвертируем в .ttf
		.pipe(fonter({formats:['ttf']}))

		// Выгружаем в исходную папку
		.pipe(dest('app/fonts/'))
	}


	function ttfTowoff() {
		// Ищем файлы шрифтов .ttf
		return src(['app/fonts/*.ttf'])

      //Отлавливаем ошибки
		.pipe(plumber({
			errorHandler: function (err) {
				notify.onError({
					title: 'Fonts Error',
					message: 'Error:<%= error.message %>'
				})(err);
				this.emit('end');
			}
		}))

		// Конвертируем в .woff
		.pipe(fonter({formats:['woff']}))
      .pipe(dest('app/fonts/'))
		.pipe(src('app/fonts/*.ttf'))
			// Конвертируем в .woff2
			.pipe(ttf2woff2())
			// Выгружаем в папку с результатом
			.pipe(dest('app/fonts/'))
	}


	 function fonstStyle() {
		let fontsFile = `app/scss/_fonts.scss`;
		// Проверяем существуют ли файлы шрифтов
		fs.readdir('app/fonts/', function (err, fontsFiles) {
			if (fontsFiles) {
				// Проверяем существует ли файл стилей для подключения шрифтов
				if (!fs.existsSync(fontsFile)) {
					// Если файла нет, создаем его
					fs.writeFile(fontsFile, '', cb);
					let newFileOnly;
					for (var i = 0; i < fontsFiles.length; i++) {
						// Записываем подключения шрифтов в файл стилей
						let fontFileName = fontsFiles[i].split('.')[0];
						if (newFileOnly !== fontFileName) {
							let fontName = fontFileName.split('-')[0] ? fontFileName.split('-')[0] : fontFileName;
							let fontWeight = fontFileName.split('-')[1] ? fontFileName.split('-')[1] : fontFileName;
							if (fontWeight.toLowerCase() === 'thin') {
								fontWeight = 100;
							} else if (fontWeight.toLowerCase() === 'extralight') {
								fontWeight = 200;
							} else if (fontWeight.toLowerCase() === 'light') {
								fontWeight = 300;
							} else if (fontWeight.toLowerCase() === 'medium') {
								fontWeight = 500;
							} else if (fontWeight.toLowerCase() === 'semibold') {
								fontWeight = 600;
							} else if (fontWeight.toLowerCase() === 'bold') {
								fontWeight = 700;
							} else if (fontWeight.toLowerCase() === 'extrabold' || fontWeight.toLowerCase() === 'heavy') {
								fontWeight = 800;
							} else if (fontWeight.toLowerCase() === 'black') {
								fontWeight = 900;
							} else {
								fontWeight = 400;
							}
							fs.appendFile(fontsFile, `@font-face {\n\tfont-family: ${fontName};\n\tfont-display: swap;\n\tsrc: url("../fonts/${fontFileName}.woff2") format("woff2"), url("../fonts/${fontFileName}.woff") format("woff");\n\tfont-weight: ${fontWeight};\n\tfont-style: normal;\n}\r\n`, cb);
							newFileOnly = fontFileName;
						}
					}
				} else {
					// Если файл есть, выводим сообщение
					console.log("Файл scss/fonts/fonts.scss уже существует. Для обновления файла нужно его удалить!");

				}
			} else {
				// Если шрифтов нет
				fs.unlink(fontsFile)
			}
		});
	}

	function cb() {}

	function build() {
		return src([
			'app/css/style.min.css',
			'app/fonts/**',
			'app/js/main.min.js',
			'app/*.html'
		], {base: 'app'} )
		.pipe(dest('dist'))
	}


function watching() {
	watch(['app/scss/**/*.scss'], styles)
	watch(['app/*.html']).on('change', browserSync.reload)
	watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
}




 exports.styles      = styles;
 exports.watching    = watching;
 exports.browsersync = browsersync;
 exports.scripts     = scripts;
 exports.images      = images;
 exports.cleanDist   = cleanDist;
 exports.fonstStyle  = fonstStyle;
 exports.otfToTtf    = otfToTtf;
 exports.ttfTowoff   = ttfTowoff;
 exports.cleanFonts  = cleanFonts;
 exports.ftp         = ftp;

 const fonts = series(otfToTtf, ttfTowoff, fonstStyle);
 exports.build      = series(cleanFonts,cleanDist, images, build);
 exports.default = parallel(fonts,styles, scripts, otfToTtf, browsersync, watching);
