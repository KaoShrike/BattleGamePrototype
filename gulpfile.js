var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat');

//Game Canvas Engine Tasks
gulp.task('gameScripts', () => {
    gulp.src('script/*.js')
    .pipe(concat('game.min.js'))
    //.pipe(uglify()) //Uglify is not playing well with the "let" feature of js
    .pipe(gulp.dest('build/gameScript'));
});

//Game Pixi Engine Tasks
gulp.task('pixiScripts', () => {
    gulp.src('PixiScript/*.js')
    .pipe(concat('pixiGame.min.js'))
    //.pipe(uglify()) //Uglify is not playing well with the "let" feature of js
    .pipe(gulp.dest('build/pixiScript'));
});

//Styles tasks
gulp.task('styles', () => {
   console.log('Run gulp styles');
});

//Watches js files task (can be specific folder or ** for all folders at a specific folder)
gulp.task('watch', ()=> {
    gulp.watch('**/*.js',['scripts'])
});

gulp.task('manual',['gameScripts','pixiScripts']);
gulp.task('default', ['gameScripts','pixiScripts','styles', 'watch']);