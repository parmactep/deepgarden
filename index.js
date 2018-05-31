var pkg = require('./package.json');

exports = module.exports = function() {
	return function (style) {
		style.include(__dirname + '/src');
	};
};

exports.libname = pkg.name;
exports.path = __dirname;
exports.version = pkg.version;