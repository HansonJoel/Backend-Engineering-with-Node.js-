# 📦 Simple Node.js Module: Counter, Adder, and Pi Value

This project demonstrates how to create and use custom modules in **Node.js**. It showcases how to separate logic into reusable components using the `require` system.

---

## 📁 Project Structure

- **`app.js`** – Main file that imports and uses the module.
- **`count.js`** – Module that exports multiple functions and a constant.

---

## 🔧 Features

### ✅ Counter Function

Returns the number of elements in an array, formatted in a readable message.

### ➕ Adder Function

Accepts two numbers and returns their sum as part of a formatted string.

### π Pi Constant

A simple representation of the mathematical constant Pi.

---

## 🚀 How It Works

- The module `count.js` exports:

  - A counter function
  - An adder function
  - A numeric constant `pi`

- These are imported in `app.js` using Node’s `require()` function.

- The values and functions are then invoked and logged to the console to demonstrate module interaction.

---

## 🎯 Purpose

This mini-project serves as a learning example for understanding:

- How to structure Node.js modules
- The usage of `module.exports` and `require`
- Code separation and reusability
