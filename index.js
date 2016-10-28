var through = require("through2");
var gutils = require("gulp-util");
var del = require("del");

module.exports = function () {
    return through.obj(transform);

    function transform(file, enc, callback) {
        var text = file.contents.toString();

        var directory = file.history[0];
        directory = directory.substring(0, directory.lastIndexOf("\\"));

        var match = /(\/\/# sourceMappingURL=\S*\w*\W*\d*\D*\.js\.map)/g.exec(text);

        if (match) {

            text = text.substring(0, match.index);
            file.contents = new Buffer(text);
            this.push(file);

            var filename = match[0].substring(match[0].indexOf("=")+1);
            del([directory + "\\" + filename]);
        }
        callback();
    };
};
