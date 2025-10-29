
# 💻 JavaScript `var` Declaration Example

This example demonstrates how to **declare variables using `var`** in JavaScript and view the output in the browser console.

---

## 🧠 What is `var`?

The **`var`** keyword is used to **declare variables** in JavaScript.
A variable is like a container that stores data — such as numbers, text, or other values.

**Example:**

```javascript
var city = "Mumbai";
console.log(city);
```

---

## 📂 Files in This Example

* **index.html** → A simple webpage linking the JavaScript file
* **script.js** → JavaScript file demonstrating the use of `var`

---

## ⚙️ How to Run the Example

1. Save both files (**index.html** and **script.js**) in the **same folder**.
2. Open **index.html** in your browser (double-click or right-click → *Open with Chrome*).
3. Right-click → **Inspect → Console tab**.
4. View the output.

---

## 🧾 Expected Output

```plaintext
Hello, I am Riya and I am 18 years old.
```

---

## 📘 Key Points About `var`

| Feature           | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| **Purpose**       | Used to declare variables                                               |
| **Scope**         | Function-scoped (accessible within the function where declared)         |
| **Redeclaration** | ✅ Can be redeclared and updated                                         |
| **Hoisting**      | Variables declared with `var` are **hoisted** to the top of their scope |

---

## ✅ Example Recap

* `var` is the **oldest way** to declare variables in JavaScript.
* It can **cause issues** in larger programs because it’s **not block-scoped**.
* For modern JavaScript, prefer using `let` or `const`.

