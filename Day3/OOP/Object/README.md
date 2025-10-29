
# 🚗 JavaScript Object Example — Car

This project demonstrates how to create and use a **JavaScript object** with **properties** and **methods**.

---

## 🗂️ Files
- **index.html** → Loads the JavaScript file into the browser.
- **script.js** → Contains the JavaScript code for the `car` object.
- **README.md** → Explains how the example works.

---

## 🧠 What Is an Object?

A **JavaScript object** is a collection of **key–value pairs**.  
Each key is called a **property** (if it holds a value) or a **method** (if it holds a function).

### Example
```javascript
let car = {
  color: "red",      // property
  brand: "Toyota",   // property
  start: function() { // method
    console.log("Car started");
  }
};
````

---

## ⚙️ How It Works

* `color` and `brand` are **properties** that store values.
* `start()` is a **method** — a function that belongs to the object.
* You can access object data using **dot notation**:

  * `car.color` → Access property
  * `car.start()` → Call method

---

## ▶️ How to Run

1. Save `index.html` and `script.js` in the same folder.
2. Open `index.html` in a web browser.
3. Right-click → **Inspect → Console** to see the output.

---

## 💡 Expected Output

```
Car started
red
```

---

## 🧩 Summary

| Concept          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| **Object**       | A collection of key-value pairs                      |
| **Property**     | A variable inside an object                          |
| **Method**       | A function inside an object                          |
| **Dot Notation** | Used to access properties or methods (`car.start()`) |


