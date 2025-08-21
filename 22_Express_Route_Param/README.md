# 🚀 Learning Express.js — Route Parameters

This project is part of my **Backend Engineering Journey**, where I’m learning Express.js step by step.

## 📌 What I’ve Learned

1. **Basic Express Setup**

   - Created a simple Express server.
   - Defined routes for `"/"` (Home) and `"/contact"` (Contact).

2. **Route Parameters**

   - Implemented **dynamic routing** using route parameters.
   - Example: `/profile/:id` allows us to request a user profile dynamically based on the `id` in the URL.

   ```js
   app.get("/profile/:id", function (req, res) {
     res.send("You requested to see a profile with the id of " + req.params.id);
   });
   ```
