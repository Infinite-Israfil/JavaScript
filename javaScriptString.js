

// JavaScript String Method

// length property returns the length of a string:

var txt = "abcdefghijklmnopqrstuvwxyz";

var stringLength = txt.length;

console.log(stringLength);


// JavaScript String "indexOf()" method

var myStr = "Please locate where 'locate' occurs!";
var position = myStr.indexOf("locate");

console.log(position);


// JavaScript String "lastIndexOf()" method

var positionOfLast = myStr.lastIndexOf("locate");

console.log(positionOfLast);

// Note: both methods(indexOf(), lastIndexOf()) accept a second parameter as the starting position for the Search



// JavaScript String "search()" method

var position = myStr.search("locate");

console.log(position);


// JavaScript String "slice()" method

const fruits = "Apple, Banana, KiWi";
let result = fruits.slice(7, 13);

console.log(result);

result = fruits.slice(-12, -6);

console.log(result);



// JavaScript String "substring()" method
// substring() is similar to slice()
// the difference is that substring() cannot accept negative indexes.

var fruits1 = "Apple, Banana, KiWi";
var res = fruits1.substring(7, 13);

console.log(res);



// JavaScript String "substr()" method
// substr() is similar to slice()
// the difference is that the second parameter specifies the length of the extracted part.

var res = fruits1.substr(7, 6);

console.log(res);

res = fruits1.substr(-4);

console.log(res);


// JavaScript String "replace()" method

var str = "Please visit Microsoft!";

var newStr = str.replace("Microsoft", "W3school");

console.log(newStr);



// JavaScript String "toUpperCase()" method

var text1 = "Hello World";
var text2 = text1.toUpperCase();

console.log(text2);


// JavaScript String "toLowerCase()" method

var text1 = "Hello World";
var text2 = text1.toLowerCase();

console.log(text2);


// JavaScript String "concat()" method

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);

console.log(text3);


// JavaScript String "trim()" method

var text1 = "                 Hey Programmer";
var text2 = text1.trim();

console.log(text1);
console.log(text2);


// JavaScript String "padStart()" method

var text1 = "5";
var text2 = text1.padStart(4, 0);

console.log(text2);


// JavaScript String "padEnd()" method

var text1 = "5";
var text2 = text1.padEnd(4, 0);

console.log(text2);



// JavaScript String "split()" method

var text1 = "a,b,c,d,e,f"
var text2 = text1.split(",");

console.log(text2);







