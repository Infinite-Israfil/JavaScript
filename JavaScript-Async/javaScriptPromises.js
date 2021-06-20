
// JavaScript Promise Object:

// A JavaScript Promise object contains the both the producing code and calls to the consuming code:

let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(); // When successful

    myReject(); // When error
});

myPromise.then(
    function(value) {/* code if successful */},
    function(error) {/* code if error */}
);






function myDisplayer(some) {
    console.log(some);
}

let thePromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("ERROR");
    }
});

thePromise.then((value) => {
    myDisplayer(value);
}, (error) => {
    myDisplayer(error);
});

