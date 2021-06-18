
// JavaScript For loop


for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Statement 1 : This is not always the case, JavaScript doesn't care. Statement 1 is optional.
// We can initiate many values in statement 1

let i;
let text1 = "         ";
let len;

for (i = 0, len = text1.length; i < len; i++) {
    console.log("index", i);
}



// we can omit statement 1 and statement 2 like below the code
i = 0;

for(; i < text1.length;) {
    console.log("Index", i);
    i++;
}


// JavaScript for/in Loop:
// The JavaScript for/in statement loops the properties of an object:

/* for (key in object) {
    
    code block to be executed

} */

var person = {fname: "John", lname: "Doe", age: 25};


for (x in person) {
    console.log(person[x]);
}


// The JavaScript for/in statement can also loop over the properties of an array:

var numbers = [10, 20, 30, 40, 50];

for (x in numbers) {
    console.log(x)
    console.log(numbers[x]);
}


// JavaScript For/Of Loop
// The JavaScript for/of statement loops through the values of an iterable object

for (item of numbers) {
    console.log(item);
}


// JavaScript while loop:

var j = 0;

while (j < 20) {
    console.log(j)
    j++;
}