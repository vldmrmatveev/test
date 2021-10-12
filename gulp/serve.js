const gulp = require("gulp");

const images = require("./images");
const styles = require("./styles");
const html = require("./html");
const script = require("./script");
const iconfont = require("./iconfont");
// const ts = require("./ts");

const server = require("browser-sync").create();

const imagesArr = [
	"src/style/**/*.scss",
	"src/modules/*/*.scss",
	"src/modules/*/*/*.scss",
	"src/style/bootstrap/*.scss",
	"src/style/libs/*.scss",
];

const scripts = ["src/js/*.js", "src/modules/*/*.js", "src/modules/*/*/*.js"];

// const typeScripts = [
// 	"src/js/script.ts",
// 	"src/modules/*/*.ts",
// 	"src/modules/*/*/*.ts",
// ];

const pages = ["src/*pug", "src/modules/*/*.pug"];

function readyReload(cb) {
	server.reload();
	cb();
}

module.exports = function serve(cb) {
	server.init({
		server: "build",
		notify: false,
		open: true,
		cors: true,
	});

	gulp.watch(
		"src/img/*/*.{gif,png,jpg,svg,webp}",
		gulp.series(images, readyReload)
	);
	gulp.watch("src/iconfont/*.svg", gulp.series(iconfont, readyReload));
	gulp.watch(
		imagesArr,
		gulp.series(styles, (cb) =>
			gulp.src("build/css").pipe(server.stream()).on("end", cb)
		)
	);
	gulp.watch(scripts, gulp.series(script, readyReload));
	gulp.watch(pages, gulp.series(html, readyReload));
	// gulp.watch(typeScripts, gulp.series(ts, readyReload));

	return cb();
};
