# 📦 Simple Node.js Math Library & User Module Demo

This project demonstrates the use of custom modules in Node.js by creating a basic math library and a user greeting function. It showcases how to organize code into reusable modules using the CommonJS `require` and `module.exports` system.

---

## 📁 Project Structure

- **`app.js`** – Entry point that imports and uses both the math and user modules.
- **`my_math_lib.js`** – Exports basic arithmetic functions (`add`, `subtract`, `multiply`).
- **`user.js`** – Exports a function to display a user's name.

---

## 🔧 Features

### ➕ Math Library

Provides three simple mathematical operations:

- `adds(num1, num2)` – Returns the sum of two numbers.
- `subs(num1, num2)` – Returns the difference between two numbers.
- `muls(num1, num2)` – Returns the product of two numbers.

### 👤 User Module

- `user(name)` – Logs a formatted message displaying the username.

---

## 🚀 How It Works

- The `my_math_lib.js` and `user.js` modules export their respective functions.
- In `app.js`, these modules are imported using `require()`.
- The math functions are used to perform arithmetic, and the user module logs a name to the console.

---

## 🎯 Purpose

This project is designed for learners to understand:

- How to split Node.js logic across multiple files
- The use of `module.exports` and `require()` to share functionality
- Basic code modularity and reusability principles in Node.js
