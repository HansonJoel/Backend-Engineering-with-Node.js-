🚀 Learning Express.js — Middlewares & Static Files

This project is part of my Backend Engineering Journey, where I’m learning Express.js step by step.
In this stage, I focused on understanding middlewares and how to serve static files like CSS from my server.

📌 What I’ve Learned
✅ Middlewares in Express

- A middleware is basically a function that sits between the request and the response.
- It can modify the request, response, or even end the request-response cycle.
- In my app, I used the built-in express.static() middleware to serve files.

app.use("/assets", express.static("assets"));
👉 This makes everything in the assets folder (like styles.css) available to my EJS views under /assets/....

✅ Serving Static Files

- Created a CSS file (styles.css) inside the assets/ folder.
- Linked the stylesheet inside my EJS templates:

<link rel="stylesheet" href="/assets/styles.css" />
- This allowed me to style all my pages consistently, instead of writing inline styles in each template.

🎯 Key Takeaway

- Today I learned how middlewares make Express apps powerful and modular. By using express.static(), I can now serve static files like CSS, making my pages look better while keeping my templates clean and reusable.
