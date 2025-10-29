# External JavaScript — Complete Guide

This example demonstrates how to use an **external JavaScript file** in an HTML webpage using the `<script>` tag.

---

## What Is External JavaScript?

Instead of writing JavaScript directly inside an HTML file, you can place it in a **separate `.js` file** and link it to your webpage.
This approach keeps your code **clean**, **organized**, and **reusable** across multiple pages.

---

## Basic Example

```html
<script src="script.js"></script>
```

This line links an external JavaScript file (`script.js`) to your HTML document.

---

## How It Works

### 1. Create a JavaScript File

**File:** `script.js`

```javascript
function greet() {
  alert("Hello from external JS!");
}
```

### 2. Link It to the HTML File

**File:** `index.html`

```html
<script src="script.js"></script>
```

### 3. Call the Function from HTML

```html
<button onclick="greet()">Click Me</button>
```

When you click the button, the function from the external JS file executes and shows an alert box.

---

## Why Use External JavaScript?

| Benefit                | Description                                               |
| ---------------------- | --------------------------------------------------------- |
| **Clean Code**         | Keeps HTML and JS separate                                |
| **Reusability**        | Use the same JS file across multiple pages                |
| **Better Performance** | Browsers can cache JS files                               |
| **Easy Maintenance**   | Update one JS file instead of editing multiple HTML pages |

---

## Example Explanation

**HTML File:** `external-script-example.html`

```html
<!DOCTYPE html>
<html>
<head>
  <title>External JS Example</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h2>External JavaScript Example</h2>
  <button onclick="showAlert()">Click Me</button>
</body>
</html>
```

**External JS File:** `script.js`

```javascript
function showAlert() {
  alert("Hello! This alert is from an external JavaScript file.");
}
```

When the button is clicked, the `showAlert()` function runs and displays an alert message.

---

## The `defer` Attribute

You can include your script inside the `<head>` using `defer`:

```html
<script src="script.js" defer></script>
```

* The `defer` attribute ensures the script is **downloaded immediately** but **executed only after** the HTML is fully parsed.
* This prevents errors when scripts try to access HTML elements that haven’t loaded yet.

---

## Summary Table

| Attribute | Description                                        | Example                                   |
| --------- | -------------------------------------------------- | ----------------------------------------- |
| `src`     | Specifies the external JS file                     | `<script src="script.js"></script>`       |
| `defer`   | Runs the script after HTML parsing                 | `<script src="script.js" defer></script>` |
| `async`   | Runs the script as soon as it loads (not in order) | `<script src="app.js" async></script>`    |


