# CSS `display: flex` — Complete Guide

The **`display: flex`** property in CSS enables a **flexible box layout**, making it easier to align, space, and distribute elements inside a container.  
It helps create responsive layouts without using floats or positioning.

---

## 🧠 What Does `display: flex` Do?

When you apply `display: flex` to a container, all its **direct child elements** automatically become **flex items**.  
These items are arranged **in a row by default** (horizontally) and can stretch or shrink to fit the available space.

Example:
```css
.container {
  display: flex;
}

