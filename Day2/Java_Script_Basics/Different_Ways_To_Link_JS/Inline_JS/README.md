
# Inline JavaScript — Complete Guide

This example demonstrates how to use **Inline JavaScript** within an HTML document.
Inline JavaScript means writing JS code **directly inside the HTML file**, either inside event attributes or within a `<script>` tag.

---

## What is Inline JavaScript?

Inline JavaScript allows you to:

* Add small scripts directly inside HTML elements.
* Execute code when a user interacts with the page (e.g., clicks a button).
* Avoid creating a separate `.js` file for short, simple scripts.

---

## Syntax Overview

### 1. Using Event Attributes

Inline JavaScript can be written directly inside HTML tags using event attributes like `onclick`, `onmouseover`, etc.

**Example:**

```html
<button onclick="alert('Hello World!')">Click Me</button>
```

✅ When the user clicks the button, a popup alert appears immediately.

---

### 2. Using the `<script>` Tag

You can also embed JavaScript inside an HTML file using a `<script>` tag.

**Example:**

```html
<script>
  document.write("This message is written by inline JavaScript!");
</script>
```

✅ This script runs as soon as the browser reads it and writes the message directly to the webpage.

---

## Example Explanation

In this example:

**Button with Inline JavaScript:**

```html
<button onclick="alert('Hello! This message is triggered by Inline JavaScript');">Click Me</button>
```

**Script Tag Inside HTML:**

```html
<script>
  document.write("This text is displayed using inline JavaScript.");
</script>
```

---

## Best Practices

While inline JavaScript is fine for **small tasks** or **quick demonstrations**, it’s **not recommended** for larger or production projects because:

* ❌ It mixes HTML and JavaScript (harder to maintain).
* ⚠️ It can lead to **security issues** like XSS (Cross-Site Scripting).
* 🚫 It reduces **reusability** and **readability**.

✅ **Recommended Approach:**
For larger projects, use **external JavaScript files**:

```html
<script src="script.js"></script>
```
