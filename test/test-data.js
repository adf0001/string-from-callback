// global, for html page

string_from_callback = require("../string-from-callback.js");

module.exports = {

	"string_from_callback()": function (done) {
		function cb1(arg1) {
			return "a" + (arg1 || "");
		}
		function cb2(arg1) {
			return { a: arg1 || "" };
		}

		done(!(
			//string_from_callback(callback /*, arg ... */)
			string_from_callback(cb1) === 'a' &&
			string_from_callback(cb1, 'b') === 'ab' &&		//args passed to callback

			//callback return object, then JSON.stringify()
			string_from_callback(cb2) === '{"a":""}' &&
			string_from_callback(cb2, 'b') === '{"a":"b"}' &&

			//callback is directly a string, or an object
			string_from_callback("aaa") === 'aaa' &&
			string_from_callback({ a: 1 }) === '{"a":1}' &&
			string_from_callback(123) === '123' &&
			string_from_callback(null) === 'null' &&
			typeof string_from_callback() === "undefined"
		));
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('mocha-test', function () { for (var i in module.exports) { it(i, module.exports[i]); } });
