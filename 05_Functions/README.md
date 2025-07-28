# 📘 JavaScript Functions – My Learning Notes

## This document captures my recent learning on **functions in JavaScript**, including different types and how they are used. This was just a quick recap on function as i progress in my node.js journey

## ✅ 1. Normal Function Statement

```javascript
function sayHi() {
  // Normal functions have a name
  console.log("hi");
}

sayHi();
```

- A named function declared using the function keyword.
- Can be called before it's defined due to hoisting.

## ✅ 2. Function Expression

```let sayBye = function (name) {
  // Function expressions are anonymous functions saved in a variable
  console.log("Bye " + name);
};

sayBye("Joel");

```

- Anonymous function (no name).
- Stored in a variable.
- Not hoisted, so must be declared before use.

## ✅ 3. Arrow Function

```
let greeting = (name) => {
  console.log("Good Morning " + name);
};

greeting("Joel");

```

- Also an anonymous function, but with a shorter syntax.
- Useful for simple functions.
- Doesn't have its own this.

## ✅ 4. Callback Function

```
function callBack(fun) {
  fun();
}

let welcome = function () {
  console.log("Welcome to my House");
};

callBack(welcome);
```

- A callback is a function passed as an argument to another function.
- Often used for asynchronous operations or event handling.
