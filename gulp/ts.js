const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

module.exports = function typeScript() {
	return gulp.src("src/js/*.ts").pipe(tsProject()).pipe(gulp.dest("build/js"));
};
