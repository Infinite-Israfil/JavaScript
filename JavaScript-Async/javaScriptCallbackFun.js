// Function Sequence

// JavaScript functions are executed in the sequence they are called. not in the
// sequence they are defined.

// This example will end up displaying "Goodbye";

function myFirst() {
    console.log("Hello");
}

function mySecond() {
    console.log("Goodbye");
}

myFirst();
mySecond();



// This example will end up displaying "Hello"

mySecond();
myFirst();


// Sequence Control

// Sometimes you would like to have better control over when to execute a function

// Suppose you want to do a calculation, and then display the result.

// you could call a calculator function (myCalculator), save the result, and then call
// another function(myDisplayer) to display the result:


function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let result = myCalculator(10, 15);

myDisplayer(result);



// or you could call a calculator function (myCalculator), and let the calculator
// function call the display (myDisplayer);


function myDisplay (some) {
    console.log(some);
}

function myCalculation(num1, num2) {
    let sum = num1 + num2;
    myDisplay(sum);
}

myCalculation(20, 25);

// The problem with the first example above, is that you have to call
// two function to display the result

// The problem with the second example, is that you cannot prevent the calculator function from displaying the result


// Now it is time to bring in a callback.



// JavaScript Callbacks



// A callback is a function passed as a argument to another function.


// Using a callback, you could call the calculator function (myCalculator) with a callback, and let the calculator function run the callback after the calculation is finished:


function myDis(some) {
    console.log(some);
}


function myCal(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCal(20, 20, myDis);


// In the example above, myDis is the name of a function
// It is passed to myCal() as an argument


// When you pass a function as a argument, remember not to use parenthesis.
// Right: myCal(5, 5, myDis);
// Wrong: myCal(5, 5, myDis());


// When to Use a callback?

//The example above are not very exciting.
// They are simplified to teach you the callback syntax.

// Where callbacks really shine are in asynchronous functions, where one
// function has to wait for anothor function (like waiting for a file to load).

