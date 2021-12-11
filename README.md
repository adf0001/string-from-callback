# string-from-callback
get string from callback

# Install
```
npm install string-from-callback
```

# Usage & Api
```javascript

var string_from_callback = require("string-from-callback");

function cb1(arg1) {
	return "a" + (arg1 || "");
}
function cb2(arg1) {
	return { a: arg1 || "" };
}

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

```
