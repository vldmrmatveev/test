const gulp = require("gulp");

module.exports = function images() {
	return gulp
		.src("src/img/*/*.{gif,png,jpg,svg}")
		.pipe(gulp.dest("build/picture"));
};
