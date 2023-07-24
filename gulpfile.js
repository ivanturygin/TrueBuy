const gulp = require('gulp');

require('./gulp/dev.js');  // подключаем сборку gulp для разработки

require('./gulp/docs.js')  // подключаем сборку для продакшена

// Gulp default  (после команды gulp в терминале, запускаются 'clean' далее одновременно 'html','sass','images' и после их запуска 'server','watch')

gulp.task('default', gulp.series(

	'clean:dev',

	gulp.parallel('html:dev', 'sass:dev', 'fonts:dev', 'sprite:dev', 'images:dev', 'files:dev', 'js:dev'),

	gulp.parallel('fontsClean:dev','server:dev', 'watch:dev')

));


gulp.task('docs', gulp.series(

	'clean:docs',

	gulp.parallel('html:docs', 'sass:docs', 'fonts:docs', 'images:docs', 'js:docs'),

	gulp.parallel('server:docs')

));