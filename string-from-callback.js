
// string-from-callback @ npm, get string from callback.

module.exports = function (callback /*, arg ... */) {
	var typeofCallback = typeof callback;
	if (typeofCallback === "function") {
		callback = callback.apply(null, Array.prototype.slice.call(arguments, 1));
		typeofCallback = typeof callback;
	}

	if (typeofCallback === "string") return callback;
	else return JSON.stringify(callback);
}
