// Normal function statement
function sayHi() {
  // Normal function have a name
  console.log("hi");
}

sayHi();

// function expression (without parameter)
let sayWelcome = function () {
  // function expression is anonymous function i.e it has no name and it can be saved in a variable.
  console.log("Welcome");
};

sayWelcome();   // since its an anonymous function, we call the variable its saved in

// function expression (with parameter)
let sayBye = function (name) {
  console.log("Bye " + name);
};

sayBye("Joel");



//Arrow function.    Arrow function is also an anonymous function i.e it has no name and it can be saved in a variable.
let greeting = (name) => {
  console.log("Good Morning " + name);
};
greeting("Joel");



// callback function
function callBack(fun) {
  fun();
}

let welcome = function () {
  console.log("Welcome to my House");
};

callBack(welcome);




