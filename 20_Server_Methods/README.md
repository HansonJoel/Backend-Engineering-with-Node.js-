📚 Node.js CRUD Server with File System

This project is a simple Node.js HTTP server that performs **Create, Read, Update, and Delete (CRUD)** operations on a collection of books stored in a local JSON file. It's built without any frameworks — using only Node.js core modules (`http`, `fs`, `path`) — to give a clear understanding of how servers handle requests at a low level.

---

## 🚀 Features

- 📖 **GET** `/books` — Fetch all books from `books.json`
- ➕ **POST** `/books` — Add a new book to the JSON file
- ✏️ **PUT** `/books` — Update a book's details using its `id`
- ❌ **DELETE** `/books` — Delete a book by `id`

---

## 📚 What I Learned

🧠 Manually handling req and res using Node.js core modules (http)

🧾 Parsing request bodies using Buffer.concat() and JSON.parse()

💾 Reading and writing JSON data using fs.readFile and fs.writeFile

🔀 Implementing routing logic without any frameworks like Express

✅ Applying proper HTTP status codes (200, 404, 500) for responses
