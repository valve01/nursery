const { src, dest } = require('gulp');
const fs = require('fs');
const clean = require('gulp-clean');
const plumber = require('gulp-plumber');
const changed = require('gulp-changed');
// const server = require('gulp-server-livereload');
const ghPages = require('gulp-gh-pages');

//HTML
const fileInclude = require('gulp-file-include');
const htmlClean = require('gulp-htmlclean'); //минификатор
// const avifWebpHtml = require('gulp-avif-webp-html'); //auto avif+webp <picture>

//SCSS
const sassGlob = require('gulp-sass-glob');
const scss = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const webpCss = require('gulp-webp-css');
const avifCss = require('gulp-avif-css'); // только добавляет классы, (автоматически не работает)
// const mediaQueries = require('gulp-group-css-media-queries');//конфиликтует с sourcemaps

//JS
const notify = require('gulp-notify');
const webpack = require('webpack-stream');
const babel = require('gulp-babel');

//Images
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const svgSprite = require('gulp-svg-sprite');

//Fonts
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');

// =============================================================== Const =====================================================================

const fileIncludeSettings = { prefix: '@@', basepath: '@file' };

const plumberConfig = (title) => {
	return {
		errorHandler: notify.onError({
			title, // место откуда пришла ошибка
			message: 'Error <%= error.message %>', // шаблон из документации notify
			sound: false,
		}),
	};
};

// ============================================================ Tasks ================================================================
// ============================================================ Clean ===============================================================

function cleanDocs(done) {
	if (fs.existsSync('./docs/')) {
		return src('./docs/', { read: false }).pipe(clean({ force: true }));
	}
	done();
}

function cleanPublish(done) {
	if (fs.existsSync('./.publish/')) {
		return src('./.publish/', { read: false }).pipe(clean({ force: true }));
	}
	done();
}

// ============================================================= HTML ================================================================

function htmlIncludeDocs() {
	return (
		src(['./src/html/**/*.html', '!./src/html/blocks/*.html'])
			.pipe(changed('./docs/'))
			.pipe(plumber(plumberConfig('Html')))
			.pipe(fileInclude(fileIncludeSettings))
			// .pipe(avifWebpHtml())
			.pipe(htmlClean())
			.pipe(dest('./docs/'))
	);
}

// ============================================================ SCSS ================================================================

function scssDocs() {
	return (
		src('./src/scss/*.scss')
			.pipe(changed('./docs/css/'))
			.pipe(plumber(plumberConfig('Styles')))
			.pipe(sourceMaps.init())
			.pipe(autoprefixer()) // не срабатывет не может прочитать нужен postcss-scss parser (такая ошибка вылазит если будет комментарий в scss)
			.pipe(sassGlob())
			.pipe(webpCss())
			.pipe(avifCss())
			.pipe(scss())
			.pipe(csso())
			// .pipe(mediaQueries())// Конфликтует с sourceMaps. Включать отдельно друг от друга
			.pipe(sourceMaps.write())
			.pipe(dest('./docs/css/'))
	);
}

// ========================================================== Images ==================================================================
// Временно отключаю, чтобы долго не ждать сборку, если нужно просто проверить работу на сервере 
function imagesDocs() {
	return (
		src('./src/img/**/*.{png,jpg,jpeg}')
			// .pipe(changed('./docs/img/'))// Временно отключаю
			// .pipe(avif())// Временно отключаю
			.pipe(dest('./docs/img/'))

			// Два раза обращаемся к /img/

			// .pipe(src(['./src/img/**/*', '!./src/img/**/*.svg']))// Временно отключаю
			// .pipe(changed('./docs/img/'))// Временно отключаю
			// .pipe(webp())// Временно отключаю
			// .pipe(dest('./docs/img/'))// Временно отключаю

			// Третий раза обращаемся к /img/
			.pipe(src(['./src/img/**/*', '!./src/img/**/*.svg', './src/img/logo.svg']))
			.pipe(changed('./docs/img/'))
			.pipe(imagemin({ verbose: true }))
			.pipe(dest('./docs/img/'))
	);
}

function spriteDocs() {
	return src(['./src/img/**/*.svg'])
		.pipe(changed('./docs/img/'))
		.pipe(
			svgSprite({
				shape: {
					spacing: {
						box: 'icon',
					},
				},
				mode: {
					stack: {
						sprite: '../sprite.svg',
						example: true, //отвечает за создания папки stack с вложенным в нее файлом sprite.stack.html , где есть примеры применения конкрентного файла из спрайта
					},
				},
			}),
		)
		.pipe(dest('./docs/img/'));
}

// ========================================================== Fonts ==================================================================

function fontsDocs() {
	return (
		src('./src/fonts/**/*')
			.pipe(changed('./docs/fonts'))
			.pipe(
				fonter({
					formats: ['woff', 'ttf'], // любые форматы конвертирует в woof и ttf
				}),
			)
			//Второй раз обращаемся только к ttf файлам// В шрифтах мы не делаем 		.pipe(dest('./docs/fonts'))		 перед тем как обратиться к только что сконвертированному ttf
			.pipe(src('./docs/fonts/**/*.ttf'))
			.pipe(changed('./docs/fonts'))
			.pipe(ttf2woff2())
			.pipe(dest('./docs/fonts'))
	);
}

// ========================================================== CopyFiles ==================================================================

function copyFilesDocs() {
	return src('./src/files/**/*').pipe(changed('./docs/files')).pipe(dest('./docs/files'));
}

// ============================================================== JS ===================================================================

function jsDocs() {
	return src('./js/*.js')
		.pipe(changed('./docs/js'))
		.pipe(plumber(plumberConfig('JS')))
		.pipe(babel())
		.pipe(webpack(require('./../webpack.config.js')))
		.pipe(dest('./docs/js'));
}

// =========================================================== Server ============================================================
// Сервер по умолчанию отключен в продакшн режиме
// function startServerDocs() {
// 	return src('./docs/').pipe(
// 		server({
// 			livereload: true,
// 			open: true,
// 		}),
// 	);
// }

// =========================================================================================================================

function deployGhP() {
	return src('./docs/**/*').pipe(ghPages());
}

exports.cleanDocs = cleanDocs;
exports.htmlIncludeDocs = htmlIncludeDocs;
exports.scssDocs = scssDocs;
exports.imagesDocs = imagesDocs;
exports.spriteDocs = spriteDocs;
exports.fontsDocs = fontsDocs;
exports.copyFilesDocs = copyFilesDocs;
exports.jsDocs = jsDocs;
// exports.startServerDocs = startServerDocs;
exports.deployGhP = deployGhP;
exports.cleanPublish = cleanPublish;
