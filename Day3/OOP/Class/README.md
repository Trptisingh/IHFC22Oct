
# 🚘 JavaScript Class Example — Car

This project demonstrates how to create and use a **JavaScript class** with a **constructor** and a **method**.

---

## 🗂️ Files

- `index.html` → Loads the JavaScript file into the browser  
- `script.js` → Contains the JavaScript `Car` class  
- `README.md` → Explains how the example works  

---

## 🧠 What Is a Class?

A **class** in JavaScript is a blueprint for creating objects.  
It defines properties and methods that describe how those objects behave.

---

## 💡 Example

```javascript
class Car {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} car started`);
  }
}

let myCar = new Car("blue", "Honda");
myCar.start(); // Honda car started
````

---

## ⚙️ How It Works

* The `constructor()` method runs automatically when a new object is created.
* `this.color` and `this.brand` store the car’s details.
* The `start()` method prints a message to the console.

---

## ▶️ How to Run

1. Save `index.html` and `script.js` in the same folder.
2. Open `index.html` in your web browser.
3. Open **Developer Tools → Console** to view the output.

---

## 💬 Expected Output

```
Honda car started
```

---

## 🧩 Summary

| Concept             | Description                                             |
| ------------------- | ------------------------------------------------------- |
| **Class**           | A blueprint for creating objects                        |
| **Constructor**     | A special method that runs when a new object is created |
| **Method**          | A function defined inside a class                       |
| **Object Instance** | A real object created from a class using `new`          |
| **this**            | Refers to the current instance of the class             |

