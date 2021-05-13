const gulp = require("gulp");
const jshint = require("gulp-jshint");
const cleanCSS = require("gulp-clean-css");
const renameCSS = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const browserify = require("browserify");
const rename = require("gulp-rename");

const imagemin = require("gulp-imagemin");
// gulp -g, in case of errors
// gulp --tasks
// gulp.task("task_jshint", function (done) {
//   gulp.src("js/main.js").pipe(jshint()).pipe(jshint.reporter("default"));
//   done();
// });

// default task => could use "gulp" to run
// don't need to specify the task name
// gulp.tasks("default", function (done) {
//   gulp.src("js/main.js").pipe(jshint()).pipe(jshint.reporter("default"));
//   done();
// });

// task with new syntax
// function task_jshint(done) {
//   gulp.src("js/main.js").pipe(jshint()).pipe(jshint.reporter("default"));
//   done();
// }
// exports.task_jshint = task_jshint;

// new default
// function task_jshint(done) {
//   gulp.src("js/main.js").pipe(jshint()).pipe(jshint.reporter("default"));
//   done();
// }
// // exports.default = task_jshint;
// exports.default = gulp.series(task_jshint, task_jshint1);

// gulp minify and rename css files
// gulp-rename
// gulp-clean-css

// var styleSRC = "./src/scss/style.css";
// var styleDEST = "./dist/css";
// gulp.task("styles", function (done) {
//   gulp
//     .src(styleSRC)
//     .pipe(cleanCSS())
//     .pipe(renameCSS({ suffix: ".min" }))
//     .pipe(gulp.dest(styleDEST));
//   done();
// });

// sass compile + minify + rename + autoprefixer + sourcemaps
// gulp-sass
// gulp-autoprefixer
// gulp-sourcemaps

// var styleSRC = "./src/scss/style.scss";
// var styleDEST = "./dist/css";

// gulp.task("styles", function (done) {
//   gulp
//     .src(styleSRC)
//     .pipe(sourcemaps.init())
//     .pipe(
//       sass({
//         outputStyle: "compressed",
//       })
//     )
//     .on("error", console.error.bind(console))
//     .pipe(
//       autoprefixer({
//         // browsers: ["last 2 versions"],
//       })
//     )
//     .pipe(renameCSS({ suffix: ".min" }))
//     .pipe(sourcemaps.write("./"))
//     .pipe(gulp.dest(styleDEST));
//   done();
// });

// js files
// var jsSRC = "./src/js/script.js";
// var jsDEST = "./dist/js";

// gulp.task("js", function (done) {
//   // gulp.src(jsSRC).pipe(gulp.dest(jsDEST));
//   // done();
//   // --------------
//   // Browerify
//   // tranform babelify
//   // bundle
//   // source
//   // rename
//   // buffer
//   // init sourcemaps
//   // uglify
//   // write sourcemaps
//   // dist

//   browserify({
//     entries: jsSRC,
//   })
//     .transform(baselify, { presets: ["env"] })
//     .bundle()
//     .pipe(source(jsSRC))
//     .pipe(rename({ extname: ".min.js" }))
//     .pipe(buffer())
//     .pipe(sourcemaps.init({}))
//     .pipe(uglify())
//     .pip();
// });

// image minify
// var imgSRC = "./src/images/*";
// var imgDEST = "./dist/images";

// gulp.task("image", function (done) {
//   gulp.src(imgSRC).pipe(imagemin()).pipe(gulp.dest(imgDEST));
//   done();
// });

// automatically
//** => all the folders
// var styleWatch = "./src/scss/**/*.scss";
// var jsWatch = "./src/js/**/*.js";

// gulp.task("watch", function () {
//   gulp.watch(styleWatch, gulp.series("styles"));
//   gulp.watch(jsWatch, gulp.series("js"));
// });

// gulp.task("default", gulp.parallel("styles", "js"), function () {});
