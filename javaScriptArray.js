
// JavaScript Array Iteration

const number = [45, 30, 55, 35, 60, 20];

number.forEach(function(item, index, theArray){
    console.log(item);
    console.log("This is index " + index);
    console.log("This is the Array it self", theArray);
});


// javaScript array "map()" method

const number1 = number.map(function(item, index, theArray){
    return item * index;
});

console.log(number1);


// JavaScript array "filter()" method

const filtered = number.filter(function(item, index, theArray){
    return item > 30;
});

console.log(number);
console.log(filtered);


// JavaScript array "reduce()" method

let sum = number.reduce(function(total,item, index, theArray){

    return total + item;

}, /* here it can accept a second parameter as an initial value */ 0);

console.log(sum);


// JavaScript array "every()" method

let isThere = number.every(function(item, index, theArray){
    return item > 10;
})

console.log(isThere);


// JavaScript array "some()" method

let isSomeThere = number.some(function(item, index, theArray){
    return item > 30;
});

console.log(isSomeThere);



// JavaScript array "indexOf()" method

const fruits = ["Apple", "Raspeberry", "cherry", "Apple", "Mango", "blackberry"];

let position = fruits.indexOf("Raspeberry", -5) + 1;

console.log(position);

// JavaScript array "lastIndexOf()" method

let lastIndexOfTheItem = fruits.lastIndexOf("Apple") + 1;

console.log(lastIndexOfTheItem);


// JavaScript array "find()" method

const number2 = [45, 37, 54, 25, 15, 20, 10];

let findOne = number2.find(function(item, index, theArray){
    return item > 25;
});

console.log(findOne);


// JavaScript array "findIndex()" method

let findAnItemsIndex = number2.findIndex(function(item, index, theArray){
    return item > 50;
})

console.log(findAnItemsIndex);


