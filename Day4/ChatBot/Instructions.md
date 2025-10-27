# 🚀 OpenRouter AI Chatbot

A **smart AI chatbot** powered by **OpenRouter AI**, enabling **real-time conversations** between users and AI.
---

## 🏷 Technologies Used

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)](https://nodejs.org/)
[![OpenRouter AI](https://img.shields.io/badge/OpenRouter-AI-blue?style=for-the-badge)](https://openrouter.ai/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)](https://expressjs.com/)
[![CORS](https://img.shields.io/badge/CORS-FF6F61?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## 💡 Project Overview

This project demonstrates a **web-based chatbot** using **OpenRouter AI**.

**Key Highlights:**

* Real-time conversation with AI
* User-friendly frontend interface
* Integrated with **OpenRouter AI** for intelligent responses
* Perfect for learning **frontend-backend communication** and **API integration**

**AI Model Used:** `deepseek/deepseek-chat-v3.1:free`

---

## ✨ Features

* 🌐 Real-time AI chat
* 🎨 Responsive frontend UI
* ⚡ Fast backend responses
* 🔒 Secure API key authentication
* 🌟 CORS enabled for cross-origin communication

---

## 🏗 Project Structure

### 1️⃣ Frontend

* Built with **HTML, CSS & JavaScript**
* Components:

  * **Title/Header**
  * **Input box** for messages
  * **Send button**
  * **Chat display area**

---

### 2️⃣ Backend

* Built with **Node.js & Express**
* Responsibilities:

  * Receives messages from frontend
  * Sends messages to OpenRouter AI
  * Returns AI responses to frontend
* **CORS Enabled** for frontend-backend communication on different ports

**CORS Explained:**
Cross-Origin Resource Sharing (CORS) allows the frontend (`localhost:5500`) to communicate with the backend (`localhost:3001`) safely.

---

### 3️⃣ OpenRouter AI Integration

* Access AI models via **OpenRouter API**
* Free model: `deepseek-chat-v3.1:free`
* Steps to obtain API Key:

  1. Sign up at [OpenRouter AI](https://openrouter.ai/)
  2. Navigate to **API Keys**
  3. Generate a new key
  4. Add the key to your backend

---

## ⚡ How the Chatbot Works

1. User types a message in the frontend
2. Frontend sends the message to backend API
3. Backend forwards it to **OpenRouter AI**
4. AI generates a response
5. Backend returns the response to frontend
6. Response is displayed in the chat interface

> ✅ Real-time communication for a smooth chat experience

---

## 🛠 Running the Project

### Backend Setup

```bash
# Navigate to project folder
cd path/to/project

# Install dependencies
npm install express cors node-fetch@2

# Run backend server
node server.js
```

> Backend runs on `http://localhost:3001`

### Frontend Setup

1. Open `index.html` in a web browser
2. Start chatting! 💬

> Make sure the backend server is running to receive AI responses

---

## 🔑 Key Points

* Keep your **API key confidential**
* Backend must be running for frontend communication
* Experiment with different OpenRouter AI models for varied responses
* **CORS** allows smooth communication between frontend & backend

---

## 🧰 Technologies Used

| Frontend   | Backend | AI                        |
| ---------- | ------- | ------------------------- |
| HTML       | Node.js | OpenRouter AI             |
| CSS        | Express | `deepseek-chat-v3.1:free` |
| JavaScript | CORS    | API integration           |


---

## 📌 Summary

This project provides a **production-ready AI chatbot** using **OpenRouter AI**, with:

* Clean architecture for frontend-backend communication
* Secure API integration
* Real-time responses
* Easy-to-follow setup instructions
