
# 💻 JavaScript `let` Declaration Example

This example demonstrates how to **declare variables using `let`** in JavaScript and view the output in the browser console.

---

## 🧠 What is `let`?

The **`let`** keyword is used to **declare block-scoped variables** in JavaScript.
It was introduced in **ES6 (ECMAScript 2015)** to overcome the limitations of `var`.

**Example:**

```javascript
let fruit = "Apple";
console.log(fruit);
```

---

## 📂 Files in This Example

* **index.html** → Basic webpage linking the JavaScript file.
* **script.js** → Contains JavaScript code demonstrating `let`.

---

## ⚙️ How to Run the Example

1. Save both files (**index.html** and **script.js**) in the **same folder**.
2. Open **index.html** in your **web browser**.
3. Right-click → **Inspect → Console tab**.
4. Observe the output.

---

## 🧾 Expected Output

```plaintext
The temperature in Bangalore is 27°C.
Updated temperature: 30°C
```

---

## 📘 Key Points About `let`

| Feature           | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **Scope**         | Block-scoped — only accessible inside `{ }` where defined                                    |
| **Redeclaration** | ❌ Cannot be redeclared in the same scope                                                     |
| **Reassignment**  | ✅ Can be updated with a new value                                                            |
| **Hoisting**      | Variables are hoisted but **not initialized** — accessing before declaration causes an error |

---

## ✅ Example Recap

* `let` is ideal when you need variables that **can change values** but are **limited in scope**.
* It prevents **accidental redeclaration** (a common issue with `var`).
* Recommended for most variable declarations in modern JavaScript.

