# gulp-remove-sourcemap
A gulp plugin which removes all traces of sourcemap files.

##Example
This gulp task will remove all occurrences of the `//# sourceMappingURL=....js.map` line in all files, as well as **delete** the actual sourcemap files.
```javascript
var gulp = require('gulp');
var removeSourcemap = require('gulp-remove-sourcemap');

gulp.task('clean:sourcemaps', function() {
	return gulp
			.src('./src', { base: '.' })
			.pipe(removeSourcemap())
			.pipe(gulp.dest('.'));
});
```
