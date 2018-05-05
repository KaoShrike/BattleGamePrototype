var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat');

//Game Engine Tasks
gulp.task('gameScripts', () => {
    gulp.src('script/*.js')
    .pipe(concat('game.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/gameScript'));
});

//Styles tasks
gulp.task('styles', () => {
   console.log('Run gulp styles');
});

//Watches js files task (can be specific folder or ** for all folders at a specific folder)
gulp.task('watch', ()=> {
    gulp.watch('**/*.js',['scripts'])
});

gulp.task('manual',['gameScripts']);
gulp.task('default', ['gameScripts','styles', 'watch']);