# 🔑 Highlight Car Key — JavaScript + CSS Example

This mini project demonstrates how to **select and style HTML elements** dynamically using **JavaScript** and **CSS**.

---

## 🗂️ Files
| File | Description |
|------|--------------|
| **index.html** | Main HTML page that loads CSS and JavaScript |
| **style.css** | Contains styling rules for the page |
| **script.js** | JavaScript code that updates the car key element |
| **README.md** | Explains the project setup and usage |

---

## 🧠 What This Example Teaches

- Selecting elements in HTML using `getElementById()`
- Modifying element properties dynamically with JavaScript
- Applying hover effects and transitions using CSS

---

## 💡 How It Works

1. The `div` with `id="carKey"` displays a car key icon 🔑.
2. JavaScript selects this element using:
   ```javascript
   const carKey = document.getElementById("carKey");
It then changes the background color to yellow:

javascript
Copy code
carKey.style.backgroundColor = "yellow";
Finally, it updates the text:

javascript
Copy code
carKey.textContent = "Start the car!";
▶️ How to Run
Save all files in the same folder.

Open index.html in your web browser.

You’ll see the car key highlighted and the text updated.

💬 Expected Output
When the page loads:

The background turns yellow.

Text changes to "Start the car!".

Hovering over it slightly enlarges the key.

🧩 Summary
Concept	Description
getElementById()	Selects an HTML element by its ID
.style	Allows changing CSS styles dynamically
.textContent	Updates the visible text inside an element
:hover	Adds interactivity using CSS transitions