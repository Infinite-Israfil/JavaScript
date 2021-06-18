
//JavaScript Function

// Function Declarations

function functionName () {
    // code to be executed
}

// Declared functions are not executed immediately. They are saved for later use.
// and will be executed later when they are invoked

function myFunction(a, b) {
    return a * b;
}



// Function Expressions

// A JavaScript function can also be defined using expression.
// A function expression can be stored in a variable

const a = function (a, b) {return a * b};
// After a function expression has been stored in a variable, the
//variable can be used as a function

console.log(a(2, 5));
// The function above ends with a semicolon because it is a part of an executable
// statement.


// JavaScript Function() Constructor

// Function can also be defined with a built in JavaScript function constructor called Function().

const y = new Function("a", "b", "return a * b");

console.log(y(5, 3));

// You actually don't have to use the function constructor.
// The Example above is the same as writing:
const z = function (a, b) {return a * b};

console.log(z(10, 2));




// Function Hoisting
// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope
// Hoisting applies to variable declarations and to function declarations.


//Because of this, JavaScript functions can be called before they are declared:

console.log(f(3, 10)); // this will return 30

function f(a, b) {
    return a * b;
}



// Self-Invoking functions

// A self-invoking expression is invoked(started) automatically, without being called.

// Function expression will execute automatically if the expression is followed by ().

// you cannot self-invoke a function declaration.

// you have to add parentheses around the function to indicate that it is a function expression

(function () {
    console.log("the Self-Invoking Function") // I will Invoke myself
})();





// Functions are Objects

// The typeof operator in JavaScript returns "function" for functions.

// But, JavaScript function can best be described as objects

// JavaScript functions have both properties and methods.

// The arguments.length property returns the number of arguments recevied when the function was invoked

function argsLength(a,b) {
    return arguments.length;
}

console.log(argsLength("Hello", "World"));

// The toString() method returns the function as a string:

const text = argsLength.toString();

console.log(text);

// Arrow Functions

const i = (a, b) => a + b;

const k = (a, b) => {return a * b};// Good practice is allways kepp the curly brackets and return




// JavaScript arguments object


const greaterNumber = findMax(10, 20, 30, 40, 50, 60);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(greaterNumber);


const total = sumAll(10, 20, 30, 40);


function sumAll() {
    let sum = 0;

    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

console.log(total);


// JavaScript call() method


const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

const nameOfPerson1 = person.fullName.call(person1);
console.log(nameOfPerson1);


const nameOfPerson2 = person.fullName.call(person2);
console.log(nameOfPerson2);


// The call() Method with Arguments

const personObj = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + " " + city +
        " " + country;
    }
};


const person3 = {
    firstName: "Israfil",
    lastName: "Mallick"
};

const personDetails = personObj.fullName.call(person3, "NY", "USA");

console.log(personDetails);


// JavaScript Function Apply

const fullNameStr = person.fullName.apply(person1);

console.log(fullNameStr);

// The Difference Between call() and apply():
// The call() method takes arguments seperately.
// The apply() method takes arguments as an array.

const getPerson = personObj.fullName.apply(person3, ["NY", "USA"]);

console.log(getPerson);
