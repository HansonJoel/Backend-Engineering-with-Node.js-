# ✍️ Node.js Write Streams Tutorial

This repository showcases my learning progress as I continue to build my backend development skills using **Node.js**. In this tutorial, I explored how to use **write streams** to write data into a file, following my commitment to consistently document and share what I learn.

---

## 🚀 What I Learned

- How to use the built-in `fs` (File System) module to create both **readable** and **writable** streams.
- How to read data from one file and write it into another using streams.
- The importance of using **encoding** (like `'utf8'`) to work with human-readable text instead of binary data.

---

## 💡 Key Takeaways

- A **read stream** (`fs.createReadStream`) reads data from a file in **chunks**.
- A **write stream** (`fs.createWriteStream`) writes data to a file in **chunks**.
- Using `{ encoding: 'utf8' }` ensures the data is read and written as **text** instead of binary **Buffer** objects.
- This approach is **memory-efficient** and useful for working with **large files**.

---

## 🔗 Next Steps

- Learn about **stream piping** (`readableStream.pipe(writableStream`) to simplify the reading and writing process.
- Explore advanced **stream events** like:
  - `end`
  - `error`
- Apply streams to real-world use cases such as:
  - 📄 **File manipulation and transformation**
  - 📝 **Log writing systems**
  - 🎥 **Media streaming applications**
