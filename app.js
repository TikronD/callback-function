// Function logs a string to the console to tell the user the function was called
function notifyUser(){
    console.log("Function notifyUser is called.");
}

// Function accepts a function as an argument to run when it has done it's work

function myAwesomeFunction(notifyUserCallback) {
    console.log("Running myAwesomeFunction.");
    console.log("Complex task complete");
    notifyUserCallback();
}

// run the awesome function, and pass the notifyUser function to it
myAwesomeFunction(notifyUser);



// function notifyUser(){
//     console.log("Function notifyUser is called.");
// }

// function myAwesomeFunction() {
//     console.log("Running myAwesomeFunction.");
//     console.log("Complex task complete");
//     notifyUser();
// }

// myAwesomeFunction();