# 🔍 JavaScript Comparison Operators

Comparison operators in JavaScript are used to **compare two values** and return a **Boolean result** — either `true` or `false`.

---

## 📂 Files Included

* **index.html** — A simple webpage that links to the JavaScript file.
* **script.js** — Demonstrates how each comparison operator works.

---

## ⚙️ How to Run

1. Save both files in the **same folder**.
2. Open **index.html** in your web browser.
3. Press **F12** or **Right-click → Inspect → Console tab** to see the output.

---

## 🧠 What Are Comparison Operators?

Comparison operators compare two values in JavaScript and return `true` or `false`.

**Example:**

```javascript
let a = 10;
let b = 20;

console.log(a > b); // false
console.log(a < b); // true
```

---

## 📘 Comparison Operators List

| Operator | Description                                     | Example       | Result    |
| -------- | ----------------------------------------------- | ------------- | --------- |
| `==`     | Equal to (checks value only)                    | `10 == "10"`  | ✅ `true`  |
| `===`    | Strict equal to (checks **value and type**)     | `10 === "10"` | ❌ `false` |
| `!=`     | Not equal to (checks value only)                | `10 != 20`    | ✅ `true`  |
| `!==`    | Strict not equal to (checks **value and type**) | `10 !== "10"` | ✅ `true`  |
| `>`      | Greater than                                    | `15 > 10`     | ✅ `true`  |
| `<`      | Less than                                       | `5 < 10`      | ✅ `true`  |
| `>=`     | Greater than or equal to                        | `10 >= 10`    | ✅ `true`  |
| `<=`     | Less than or equal to                           | `8 <= 6`      | ❌ `false` |

---

## 💡 Summary

* Comparison operators always return a **boolean value**.
* Use `===` and `!==` for **strict comparisons** (check both value and type).
* These are commonly used in **conditions**, **loops**, and **decision-making statements**.

