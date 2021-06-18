
// JavaScript conditions

// The if else condition

const hours = 19;

let greeting;

if (hours < 18) {
    greeting = "Good day";
} 
else{
    greeting = "Good evening";
}

console.log(greeting);


const count = 3;

let greet = "";

if(count > 10) {
    greet = "count is greater than 10";
}
else if (count > 5) {
    greet = "count is greater than 5";
}
else{
    greet = "count is less than 5";
}

console.log(greet);



// The switch statement

switch (new Date().getDay()) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
}


// JavaScript switch "default" keyword

switch (new Date().getDay()) {
    case 6:
        console.log("Today is Saturday");
        break;
    case 0:
        console.log("Today is Sunday");
        break;
    default:
        console.log("Looking forward to the Weekend");
}

