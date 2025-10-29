# ⚙️ JavaScript Logical Operators

Logical operators in JavaScript are used to **combine or invert boolean values** (`true` or `false`).

They are commonly used in conditions, decision making, and loops.

---

## 📂 Files

- **index.html** — Loads the external JavaScript file.  
- **script.js** — Contains examples of logical operations.  

---

## 🚀 How to Run

1. Save both files in the same folder.  
2. Open **index.html** in your browser.  
3. Right-click → **Inspect → Console tab** to view the output.

---

## 🧠 Logical Operators Overview

| Operator | Name | Description | Example | Result |
|-----------|------|--------------|----------|---------|
| `&&` | AND | Returns true **only if both** values are true | `true && false` | ❌ false |
| `||` | OR | Returns true **if at least one** value is true | `true || false` | ✅ true |
| `!` | NOT | Reverses the value (true → false, false → true) | `!true` | ❌ false |

---

## 💡 Example Code

```javascript
let a = true;
let b = false;

console.log("a && b:", a && b); // false
console.log("a || b:", a || b); // true
console.log("!a:", !a);         // false
console.log("!b:", !b);         // true