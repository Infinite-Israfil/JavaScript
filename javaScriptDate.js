
const d = new Date();

console.log(d);


// 7 number specify year, month, day, minute, second, and millisecond (in that )

const nd = new Date(2020, 11, 20, 10, 30, 30, 0);

console.log(nd);

// new Date(dateString) creates a new date object from a date string:

const newDate = new Date("October 13, 2014 11:13:00");

console.log(newDate);

const millisecond = new Date(0);

console.log(millisecond);

const milliseconds = new Date(100000000000);

console.log(milliseconds);

console.log(new Date() - millisecond);

console.log((new Date()).toUTCString());

console.log(new Date().toDateString());

console.log(new Date().toISOString());

console.log(new Date().toString());

console.log(new Date().getTime());

console.log(new Date().getFullYear());

console.log(new Date().getMonth() + 1);

console.log(new Date().getDate());

console.log(new Date().getHours());

console.log(new Date().getMinutes());

console.log(new Date().getSeconds());



