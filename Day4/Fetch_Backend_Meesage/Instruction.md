# 🚀 Fetch Backend Message

## 🧩 Project Overview

This project demonstrates how a **frontend web page** can communicate with a **Node.js + Express backend** using an API call.

When the user clicks the **“Get Data from Backend”** button, the frontend sends a request to the backend, and the backend responds with a message —
✨ **“Hello from the backend!”** ✨

---

## 🏗️ Folder Structure

```
Fetch_Backend_Message/
├── Backend/
│   └── server.js          # Node.js backend using Express
└── Frontend/
    ├── index.html         # Main UI file
    ├── script.js          # Handles fetch request to backend
    └── style.css          # (Optional) Styling for the frontend
```

---

## 🏷️ Technologies Used

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![CORS](https://img.shields.io/badge/CORS-FF6F61?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## ⚙️ Step-by-Step Setup Instructions

### 1️⃣ Prerequisites

Make sure you have these installed:

* **Node.js** (v14 or above) → [Download here](https://nodejs.org/)
* **npm** (comes with Node)

To verify installation:

```bash
node -v
npm -v
```

---

### 2️⃣ Open Project in VS Code

Open your project folder:

```bash
Fetch_Backend_Message/
```

Then open a terminal in the **Backend** directory.

---

### 3️⃣ Initialize Node.js

```bash
npm init -y
```

This will create a `package.json` file.

---

### 4️⃣ Install Dependencies

```bash
npm install express cors
```

---

### 5️⃣ Backend Code (server.js)

Your `server.js` file should look like this 👇

```js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
```

---

### 6️⃣ Run the Backend Server

```bash
node server.js
```

Backend is now live at:

```
http://localhost:3000/api/message
```

Test by opening the URL in your browser:

```json
{"message":"Hello from the backend!"}
```

---

### 7️⃣ Frontend Setup

Open the **Frontend** folder.
It contains:

* `index.html` → main web page
* `script.js` → fetches data from backend
* `style.css` → optional styling

Ensure your fetch call URL matches your backend:

```js
fetch("http://localhost:3000/api/message")
```

---

### 8️⃣ Run the Frontend

#### 🅰️ Option 1 — Open Directly

* Open `index.html` in a browser.
* Click **“Get Data from Backend”** → text updates:

```
Hello from the backend!
```

> ⚠️ If you face CORS or fetch errors, ensure backend is running.

#### 🅱️ Option 2 — Use Live Server (Recommended)

* In VS Code, right-click `index.html` → **Open with Live Server**
* Visit the local URL (e.g., `http://127.0.0.1:5500/Frontend/index.html`)

---

### 9️⃣ Expected Output

✅ On backend running + frontend open:

* A **card with a button** appears
* Clicking **“Get Data from Backend”** displays:

```
Hello from the backend!
```

---

## 💡 Bonus Tip

* Deploy frontend on **Firebase / GitHub Pages**
* Deploy backend on **Render, Vercel, or Railway**
* Update fetch URL in `index.html` with the live backend URL
