# 🚗 Highlight Driver Seat — JavaScript + CSS Example

This project demonstrates how to **select and style HTML elements dynamically** using **JavaScript** and **CSS**.

---

## 🗂️ Files
| File | Description |
|------|--------------|
| **index.html** | The main HTML page that links CSS and JavaScript |
| **style.css** | Contains all the visual styling for the page |
| **script.js** | JavaScript file that modifies the driver seat element |
| **README.md** | Explains the project purpose and usage |

---

## 🧠 What You’ll Learn
- Selecting HTML elements using `querySelector()`
- Changing styles dynamically with JavaScript
- Updating text and font size
- Using hover effects with smooth transitions in CSS

---

## ⚙️ How It Works
1. The HTML contains a `div` element with the class `driverSeat`.
2. JavaScript selects it using:
   ```javascript
   const driverSeat = document.querySelector(".driverSeat");
The script then:

Increases font size to 30px

Changes background color to light blue

Updates the text to "Driver Seat!"

▶️ How to Run
Save all files in the same folder.

Open index.html in a web browser.

Right-click → Inspect → Console (optional to debug).

💡 Expected Output
When you open the page:

The “Driver Seat” box is highlighted in light blue.

Text becomes larger and says "Driver Seat!"

When you hover, it slightly enlarges smoothly.

🧩 Summary
Concept	Description
querySelector()	Selects the first element matching a CSS selector
.style	Allows changing CSS styles from JavaScript
.textContent	Updates the text inside an element
:hover	Adds a CSS hover effect with transition
transition	Makes style changes smooth and animated