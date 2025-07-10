# 🌐 Node.js Streams: Reading, Writing, and Piping to the Client

This repository documents my learning progress as I continue to build my **backend development skills with Node.js**.  
In this exercise, I learned how to **read a file using streams, write the data to a response, and pipe the content directly to the client** through an HTTP server.

---

## 🚀 What I Learned

- How to create a simple **HTTP server** using Node's built-in `http` module.
- How to use `fs.createReadStream()` to **read a file as a stream** with proper encoding.
- How to **pipe** the read stream directly into the server response (`res`) to serve file content to the client.
- The use of `{ encoding: 'utf8' }` to ensure that the streamed data is **readable text** instead of **Buffer** data.

---

✅ **This Code:**

- 🚀 Starts a simple **Node.js server**.
- 📄 Reads the content of **`readme.txt`** as a **stream**.
- 🔗 Pipes the data directly to the **client’s browser**.

---

## 💡 Key Takeaways

- **Streams** are an efficient way to handle **large files** without blocking the server.
- The **`.pipe()`** method simplifies connecting **readable streams** to **writable streams** (such as `res` in an HTTP response).
- Setting `{ encoding: 'utf8' }` ensures that the file content is served as **plain text** instead of binary.

---

## 🔗 Next Steps

- Explore streaming different file types such as:
  - 🖼️ **Images**
  - 📄 **JSON**
  - 📝 **HTML**
- Learn how to **handle stream errors** properly to avoid application crashes.
- Apply streams to real-world scenarios like:
  - 📄 **Serving files to users**
  - 🔄 **Proxying or transforming data streams**
  - 🎬 **Streaming media content**

---

## 📌 Repository Purpose

This repository is part of my learning journey in **Backend Engineering with Node.js at AltSchool Africa**.  
I am committed to sharing **practical examples** of what I learn, with the goal of building a strong foundation in **backend web development**.

---
