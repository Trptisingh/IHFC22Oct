# 🖋️ CSS `font-family` Property — Complete Guide

The **`font-family`** property in CSS specifies the **typeface** used for text.  
It controls how the text looks by determining which font is applied to an element.  
You can assign one or more font names as a "font stack" to ensure a fallback if the preferred font isn’t available.

---

## 🧠 What Does `font-family` Do?

It defines which font should be used to display the text of an element.  
You can specify a **single font**, or a **list of fonts** separated by commas — the browser uses the first available one.

Example:
```css
p {
  font-family: "Arial", sans-serif;
}
