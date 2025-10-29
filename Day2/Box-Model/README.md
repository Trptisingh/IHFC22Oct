# 📦 CSS Box Model — Complete Guide

The **CSS Box Model** describes how every HTML element is represented as a rectangular box that wraps around its content.  
It consists of **four main parts** that determine how much space an element takes up on a webpage:

1. **Content** — The actual text or image inside the element  
2. **Padding** — Space between the content and the border  
3. **Border** — The outline surrounding the padding and content  
4. **Margin** — Space outside the border that separates the element from others  

---

## 🧠 How the Box Model Works

When a browser renders an element, it calculates the **total size** using this formula:

```

Total Width = Content Width + Padding + Border + Margin
Total Height = Content Height + Padding + Border + Margin

````

### Example:
```css
.box {
  width: 250px;
  padding: 20px;
  border: 5px solid royalblue;
  margin: 30px;
}
````

Here’s how the size is computed:

* **Content width:** 250px
* **Padding:** 20px × 2 (left + right) = 40px
* **Border:** 5px × 2 = 10px
* **Margin:** 30px × 2 = 60px

✅ **Total visual width** = 250 + 40 + 10 + 60 = **360px**

---

## 🎨 Components Explained

### 🧱 1. Content

The text, image, or other data inside the element.
It’s the innermost part of the box.

```css
.box {
  width: 250px;
}
```

---

### 🧍‍♀️ 2. Padding

Space **inside** the box — between the content and the border.
It increases the inner spacing without affecting outer layout.

```css
.box {
  padding: 20px;
}
```

**Supported Units:**

* `px` (pixels)
* `%` (percentage of container)
* `em`, `rem` (relative to font size)

**Shorthand:**

```css
padding: 10px 20px 15px 5px; /* top, right, bottom, left */
```

---

### 🧩 3. Border

The visible line surrounding the **content + padding**.
You can control its width, style, and color.

```css
.box {
  border: 5px solid royalblue;
}
```

**Common Border Styles:**

* `solid` — continuous line
* `dashed` — dashed line
* `dotted` — dotted line
* `double` — double line

**Border Shorthand:**

```css
border: 2px dashed red;
```

---

### ↔️ 4. Margin

Space **outside** the border — separates the element from others.

```css
.box {
  margin: 30px;
}
```

**Supported Units:**

* `px`, `%`, `em`, `rem`
* `auto` — lets the browser decide spacing (used for centering)

**Margin Shorthand:**

```css
margin: 10px 15px 20px 5px; /* top, right, bottom, left */
```

💡 **Note:** When two vertical margins meet, they can **collapse** into one (the larger value is applied).

---

## 🧩 Visual Representation

```
+-------------------------------+
|           Margin              |
|  +-------------------------+  |
|  |         Border          |  |
|  |  +-------------------+  |  |
|  |  |     Padding       |  |  |
|  |  |   [  Content  ]   |  |  |
|  |  +-------------------+  |  |
|  +-------------------------+  |
+-------------------------------+
```

---

## ⚙️ Box-Sizing Property

By default, padding and border are **added outside** the content’s width and height.
To include them within the element’s total size, use:

```css
box-sizing: border-box;
```

This ensures that padding and border do not increase the total width or height.

---

## 💡 Summary Table

| Property  | Defines       | Adds Space               | Affects Size         | Inside or Outside |
| --------- | ------------- | ------------------------ | -------------------- | ----------------- |
| `padding` | Inner spacing | Between content & border | ✅ Yes                | Inside            |
| `border`  | Outline       | Around padding           | ✅ Yes                | On edge           |
| `margin`  | Outer spacing | Outside border           | ❌ No (only position) | Outside           |

---

## 📘 Example Output Description

In the `index.html` file, a **yellow box with a blue border** is displayed.

* The **padding** adds space between the text and border.
* The **border** outlines the padded area.
* The **margin** adds space outside, separating the box from the page edges.

Together, these layers visually demonstrate how the **CSS Box Model** defines element layout, spacing, and structure on a webpage.

