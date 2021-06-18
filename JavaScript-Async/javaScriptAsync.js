
function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(10, 10, myDisplayer);

// In the real world, callback are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().


// Waiting for a Timeout

// When using the JavaScript function setTimeout(), you can specify a callback function to be executed on time-out:

function myFunction() {
    console.log("I Love You Mim !!");
}

setTimeout(myFunction, 3000);

// In the example above, myFunction is used as a callback.
// The function (the function name) is passed to setTimeout() as an argument.
// 3000 is the number of milliseconds before time-out so myFunction() will be called after 3 seconds.


// Instead of passing the name of a function as an argument to another function,
// you can always pass a whole function instead:

setTimeout(function () {
    console.log("I Love You Mim !!!");
}, 3000);


// Waiting for Intervals:

// When using the JavaScript function setInterval(), you can specify a callback
// function to be executed of each interval:

function showMyLove() {
    console.log("I Love You Mim !!!, itInterval");
}

setInterval(showMyLove, 1000);