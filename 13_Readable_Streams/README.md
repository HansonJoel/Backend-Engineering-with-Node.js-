# 📄 Node.js Streams Practice — Reading Files (Server1 & Server2)

This repository documents my learning progress in **Node.js backend development** as part of my journey with **AltSchool Africa**.

In this project, I explored how to work with **Readable Streams** using Node.js core modules:  
`fs` (File System), `path` (Path Utilities), and `http` (HTTP Server).

---

## 🚀 What I Learned

- How to create and use **read streams** in Node.js.
- The importance of handling data in **chunks** for efficiency, especially with large files.
- How to use the `fs.createReadStream()` method.
- How to add **text encoding** (`utf8`) to ensure file data is read as human-readable text instead of binary buffers.

---

## 📝 Project Files

### 🔹 `read_stream_1.js`

- Basic file read stream **without text encoding**:
- The data here is logged as buffered binary output since no encoding is set.

### 🔹 `read_stream_2.js`

- Basic file read stream **File read stream with utf8 text encoding**:
- This version ensures the data is displayed as human-readable text in the console.

- readme.txt file containing some text

## 💡 Key Takeaways

- Streams help in reading or writing data **piece by piece** without loading the entire file into memory.
- Adding `{ encoding: 'utf8' }` to a read stream allows you to handle **text content** instead of raw binary data.
- Streams are fundamental to building **efficient and scalable Node.js servers**.

---

## 🔗 Next Steps

- Explore **Write Streams** in Node.js.
- Build a complete **file server** using both **Read** and **Write** streams.
- Practice **error handling** and **stream piping** for better control and performance.

---

> 🚧 This repository is part of my continuous learning in **Node.js backend development** and will be regularly updated as I progress.
