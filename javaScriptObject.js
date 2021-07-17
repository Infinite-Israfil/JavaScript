// JavaScript Objects

// Creating a JavaScript Object:
/*
    with javascript, you can define and create your own objects.

    there are different ways to create new object:
    create a single object, using an object literal
    create a single object, with the keyword new
    difine an object constructor, and then create objects of the constructed type
    create an object using Object.create().
*/


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}; // Space and line breaks are not important. an object definition can span multiple lines



// this example create an empty Javascript Object, and then adds 4 properties:

const person1 = {};
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1.eyeColor = "blue";

// this example create an object using "new Object()" ,
// and than adds 4 properties:

const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";


// JavaScript Objects are Mutable

const x = person3;
x.firstName = "Israfil";

console.log("this is x", x);
console.log("this is person3", person3);

// The object x is not a copy of person.It is person. Both x and person are the same object.
// Any changes to x will also change person, because x and person are the same object.




// JavaScript Object Methods

const person4 = {
    firstName: "John",
    lastName: "Doe",
    id: 5556,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// The this Keyword
// In a function definition, this refers to the "owner" of the function.
// In the example above, this is the person4 Object that "Owns" the fullName function


// Adding a Method to an Object
person4.name = function () {
    return this.firstName + " " + this.lastName;
};

console.log(person4.name());


// JavaScript Object Constructor

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// It is considered good practice to name constructor with an upper-case first letter

// Sometimes we need a blueprint for creating many objects of the same "type".

// The way to create an "Object type" is to use an Object constructor function

// In the example above, function Person() is an object constructor function

// Objects of the same type are created by calling the constructor function with the new Keyword

const myFriend = new Person("Stephen", "Karlbarg", 50, "black");
const mySis = new Person("Alisa", "Karlbarg", 45, "black");

// The this keyword

// In JavaScript, the thing called this is the object that owns the code

// the value of this, when used in an object it the object itself

// In a constructor function "this" does not have a value. It is a substitute for the new object.
// The value of "this" will become the new object when a new object is created


//Note: "this" is not a variable. It is a keyword. You cannot change the value of "this"



// Adding a Property to an Object

//Adding a new property to an existing object is easy:

myFriend.nationality = "English";

console.log(myFriend);


// Adding a Method to an Object

myFriend.name = function () {
    return this.firstName + " " + this.lastName;
}

console.log(myFriend.name());


// Adding a Method to a Constructor

function Man (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.name = function () {
        return this.firstName + " " + this.lastName;
    }
}

const man = new Man("Dianna", "Karlbarg", 25, "blue");

console.log(man.name());

// JavaScript has buit in constructor for native objects:
// new String()
// new Number()
// new Boolean()
// new Object()
// new Array()
// new RegExp()
// New Function()
// new Date()



// Using the prototype Property
// The JavaScript prototype property allows you to add new properties to object constructor

function Car (name, color, year) {
    this.name = name;
    this.color = color;
    this.year = year;
}

const myCar = new Car("Ford", "black", 2020);

Car.prototype.country = "United State of America";

const myFriendsCar = new Car("Audi", "white", 2020);

console.log(myFriendsCar.country);


// The JavaScript prototype property also allows you to add new methods
// to objects constructor


Car.prototype.brand = function () {
    return this.name + " of " + this.country
}

console.log(myFriendsCar.brand());











