# 🔒 JavaScript `const` Declaration Example

This example demonstrates how to **declare constants using `const`** in JavaScript and view the output in the browser console.

---

## 🧠 What is `const`?

The **`const`** keyword is used to declare **constants** — variables whose values **cannot be changed or reassigned** once defined.
It was introduced in **ES6 (ECMAScript 2015)**.

**Example:**

```javascript
const country = "India";
console.log(country);
```

---

## 📂 Files in This Example

* **index.html** → A simple webpage linking the JavaScript file.
* **script.js** → Contains the `const` variable example and console output.

---

## ⚙️ How to Run the Example

1. Save both files (**index.html** and **script.js**) in the **same folder**.
2. Open **index.html** in a **web browser**.
3. Right-click → **Inspect → Console tab** to view the output.

---

## 🧾 Example Output

```plaintext
Country: India
Capital: New Delhi
Error: You cannot reassign a 'const' variable.
```

---

## 📘 Key Points About `const`

| Feature            | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| **Scope**          | Block-scoped (like `let`)                                                  |
| **Reassignment**   | ❌ Cannot be reassigned after initialization                                |
| **Redeclaration**  | ❌ Cannot be redeclared in the same scope                                   |
| **Initialization** | ✅ Must be initialized at the time of declaration                           |
| **Hoisting**       | Variables are hoisted but **not initialized** (Temporal Dead Zone applies) |

---

## ✅ Example Recap

* `const` ensures the variable value **remains constant**.
* Best used for **fixed values** like configuration, constants, or references.
* Trying to reassign a `const` variable will throw a **TypeError**.

Would you like me to now generate the **index.html** and **script.js** files for this same `const` example (with the output shown in console)?
