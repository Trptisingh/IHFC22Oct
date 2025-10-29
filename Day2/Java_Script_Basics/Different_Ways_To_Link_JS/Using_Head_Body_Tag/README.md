# 🧠 Using `<script>` Tag in `<head>` and `<body>` — Complete Guide

This guide explains how the **`<script>` tag** works when placed inside the `<head>` and `<body>` sections of an HTML document.

---

## ⚙️ What is the `<script>` Tag?

The `<script>` tag in HTML is used to include **JavaScript code** inside a web page.
It can either:

* Contain **inline JavaScript** directly inside the tag, or
* Reference an **external JavaScript file** using the `src` attribute.

**Example:**

```html
<script src="script.js"></script>
```

---

## 🧩 Placement of `<script>` Tag

JavaScript can be placed in **two main areas** of an HTML file:

---

### ✅ 1. Inside the `<head>` Tag

Scripts inside the `<head>` run **before the page content loads**.

**Example:**

```html
<head>
  <script>
    console.log("Head script runs before the body loads");
  </script>
</head>
```

**🧠 Use this when:**

* You are defining **functions or global variables** to be used later.
* The script **does not interact** with HTML elements yet.

**⚠️ Note:**
Scripts in the `<head>` can **delay page rendering** if they perform heavy operations.

---

### ✅ 2. Inside the `<body>` Tag

Scripts inside the `<body>` (usually near the end) run **after the page content is loaded**.

**Example:**

```html
<body>
  <button onclick="showMessage()">Click Me</button>

  <script>
    function showMessage() {
      alert("This message is from the body script!");
    }
  </script>
</body>
```

**🧠 Use this when:**

* The script **interacts with HTML elements** (like buttons, forms, or text).
* You want **faster page rendering** before JavaScript executes.

---

## 🧱 Example Explanation

In a complete HTML file:

### Script inside `<head>`

```html
<script>
  console.log("Script inside <head> executed before the body loads.");
</script>
```

✅ Runs immediately as the browser reads the `<head>` section.

### Script inside `<body>`

```html
<script>
  function showMessage() {
    alert("Hello! This message is from the <body> script section");
  }
</script>
```

✅ Runs after the content loads, and the `showMessage()` function is triggered when the user clicks the button.

---

## 🧮 Summary Table

| Location | Executes When        | Common Use Case                       | Advantage                |
| -------- | -------------------- | ------------------------------------- | ------------------------ |
| `<head>` | Before content loads | Function declarations, metadata setup | Prepares logic early     |
| `<body>` | After content loads  | DOM manipulation, event handling      | Faster visible rendering |

---

## ⚡ Best Practice

✅ **Place scripts just before the closing `</body>` tag**
This ensures:

* All HTML elements are available when the script runs
* Faster initial page rendering
* Fewer loading issues


