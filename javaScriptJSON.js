// JSON Syntax Rules
/*
    Data is in name/value pairs
    Data is seperated by commas
    Curly braces hold object
    Square brackets hold arrays
*/

// JSON Data - A Name and a Value
// A name/value pair consists of a field name(in double quotes), followed by a colon, followed by a value:

// "firstName" : "John"


// JSON Objects

// {"firstName": "John", "lastName": "Doe"}


// JSON Arrays:

/*
    {
        "employees":[
            {
                "firstName": "John", "lastName": "Doe"
            }
            {
                "firstName": "Anna", "lastName": "Smith"
            }
            {
                "firstName": "Peter", "lastName": "Jones"
            }
        ]
    }
*/

// Converting a JSON Text to a JavaScript Object

var text = '{"employees": [' +
'{ "firstName":"John", "lastName":"Doe" },' +
'{ "firstName": "Anna", "lastName":"Smith" },' +
'{ "firstName": "Peter", "lastName": "John" } ]}';

var obj = JSON.parse(text);
console.log(obj);