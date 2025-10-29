# ↔️ CSS `flex-direction: row` — Complete Guide

The **`flex-direction`** property in CSS defines the **direction in which flex items are placed** inside a flex container.

When set to **`row`**, the flex items are arranged **horizontally**, from **left to right** (in left-to-right writing systems).

---

## 🧠 What Does `flex-direction: row` Do?

By default, a flex container arranges items horizontally.  
However, explicitly setting `flex-direction: row` ensures the layout stays in a row, even if the default behavior changes (for example, in complex or nested flex layouts).

Example:
```css
.container {
  display: flex;
  flex-direction: row;
}
