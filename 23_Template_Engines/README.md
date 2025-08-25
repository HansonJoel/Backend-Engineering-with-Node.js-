# 🚀 Learning Express.js — Serving EJS Views with Partials

This project is part of my Backend Engineering Journey, where I’m learning **Express.js** step by step.  
Today, I focused on **serving HTML pages using EJS templates** and making my app more modular with **partials**.

---

## 📌 What I’ve Learned

### ✅ Express with EJS

- Set up **EJS** as the templating engine in Express.
- Created dynamic HTML pages (`index.ejs`, `contact.ejs`, and `profile.ejs`).
- Passed data from the server to the template and displayed it dynamically.

### ✅ Partials in EJS

- Created a **partials folder** to store reusable components.
- Built a `nav.ejs` file for navigation and included it in multiple pages using:
  ```ejs
  <%- include('partials/nav') %>
  ```
  This avoids code duplication and makes the app easier to maintain.

✅ Dynamic Routes with Parameters

- Used route parameters (/profile/:name) to create personalized profile pages.

- Example: /profile/Joel will render Joel’s profile with details such as age, job, and hobbies.

🗂️ Project Structure
project-folder/
│── app.js
│── views/
│ │── index.ejs
│ │── contact.ejs
│ │── profile.ejs
│ └── partials/
│ └── nav.ejs
│── assets/

⚡ Sample Routes

/ → Renders the Home Page with navigation.
/contact → Renders the Contact Page with navigation.
/profile/:name → Renders a Profile Page with dynamic data (age, job, hobbies).

🎯 Key Takeaway

- Today I learned how to serve HTML pages from the server using EJS templates and how to make my code more reusable with partials. I also practiced passing data to templates and rendering dynamic content with route parameters.

- This is a big step forward in making my Express apps more modular, dynamic, and professional.
