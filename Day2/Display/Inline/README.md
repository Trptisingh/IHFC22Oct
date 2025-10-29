# 🌐 CSS `display: inline` Property — Complete Guide

The **`display: inline`** property in CSS makes an element behave as an **inline element**.  
Inline elements do **not start on a new line**, and they only take up as much width as their content.

---

## 🧠 What Does `display: inline` Do?

When you apply `display: inline`, the element:

- Does **not start on a new line**
- Takes up **only as much width as necessary**
- **Ignores** `width` and `height` properties (they won’t have any effect)
- Can have **horizontal padding and margins**, but **vertical spacing** behaves differently

---

## 🎨 Example

```html
<div style="display: inline; background-color: lightgreen; padding: 10px;">
  Inline Div
</div>

<div style="display: inline; background-color: lightpink; padding: 10px;">
  Another Inline Div
</div>
🧾 Output Description
Both <div> elements appear side by side on the same line,
since they are inline elements and don’t start on a new line.

📘 Comparison
Display Type	Starts New Line	Accepts Width/Height	Typical Use Case
block	✅ Yes	✅ Yes	Sections, divs
inline	❌ No	❌ No	Text, spans, links
inline-block	❌ No	✅ Yes	Buttons, small containers

💡 Key Takeaways
Inline elements flow with text.

You can’t control their width or height.

Great for small elements like <span>, <a>, or icons inline with text.

For elements that should behave inline but still respect size, use display: inline-block.
