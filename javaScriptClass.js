// JavaScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript classes are templates for JavaScript Objects.


// JavaScript Class Syntax:

// Use the keyword class to create a class
// Always add a method named constructor();

/* 

class ClassName {

    constructor() {
        ....
    }

}

*/

// JavaScript Class Example:

class Car {
    constructor(name, year) {
        this.name =name;
        this.year = year;
    }
}

// Using a Class:

let myCar = new Car("Ford", 2014);
let myCar1 = new Car("Audi", 2019);

console.log(myCar);



// Class Methods:
//Class methods are created with the same syntex as object methods.
// Use the keyword 'class' to create a class.
// Always add a constructor() method.
//Then any number of methods.

// Class method Syntax:
/*

class ClassName {
    constructor() {
        ...
    }
    method_1() {
        ...
    }
    method_2() {
        ...
    }
    method_3() {
        ...
    }
}

*/

// Example:

class CarObj {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
    setColorToTheCar(color) {
        this.color = color;
    }
}


let myCarObj = new CarObj("Audi", 2011);
myCarObj.setColorToTheCar("Green");
console.log(myCarObj);



// Class Inheritance
// To create a class inheritance, use the extends keyword.

// Create a class named "Model", which will inherit the methods from the "Car1" class

class Car1 {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

class Model extends Car1 {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ", it is a " + this.model;
    }
}

let myFriendsCar = new Model("Ford", "Mustang");
console.log(myFriendsCar);

// the super() method refers to the parent class.
// By calling the super() method in the constructor method, we call the parent's constructor method and gets 
// access to the parent's properties and methods



// JavaScript Static Methods


// Static class methods are defined on the class the class itself.
// you cannot call a static method on an object, only on an object class.


class Car2 {
    constructor(name) {
        this.name = name;
    }
    static hello() {
        return "Hello!";
    }
}

let myCar2 = new Car2("Ford");

// you can call 'hello()' on the Car2 Class:
console.log(Car2.hello());

// But Not on Car2 Object:
// console.log(myCar2.hello());
// This will raise an error.




// If you want to use the myCar object inside the static method, you can send it as a parameter:


class Car3 {
    constructor(name) {
        this.name = name;
    }
    static hello(x) {
        return "Hello" + " " + x.name;
    }
}

let myCar3 = new Car("Ford");

console.log(Car3.hello(myCar3));
