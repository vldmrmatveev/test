const gulp = require('gulp');

const serve = require('./gulp/serve');
const html = require('./gulp/html');
const styles = require('./gulp/styles');
// const script = require("./gulp/script");
const typeScript = require('./gulp/ts');
const fonts = require('./gulp/fonts');
const iconfont = require('./gulp/iconfont');
const images = require('./gulp/images');

module.exports.default = gulp.series(
	html,
	styles,
	// script,
	typeScript,
	fonts,
	iconfont,
	images,
	serve
);

module.exports.test = gulp.series(html);
