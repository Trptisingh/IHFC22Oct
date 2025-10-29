
# 🎯 CSS `justify-content: flex-start`

The **`justify-content`** property aligns flex items **along the main axis** (horizontal by default).  
When set to **`flex-start`**, all items are placed **at the beginning (left side)** of the flex container.

---

## 🧠 What It Does

```css
.container {
  display: flex;
  justify-content: flex-start;
}
````

All items are grouped on the **left side** of the container — this is the **default alignment** for Flexbox.

---

## 🧩 Example

```html
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: flex-start;
  background-color: lightgray;
  height: 200px;
}
```

---

## 🎨 Visual Layout

```
[Box 1] [Box 2] [Box 3]
```

All boxes are aligned **to the left (start)** of the container.

---

## 💡 Summary

* `justify-content` controls **horizontal alignment** in a flex container.
* `justify-content: flex-start` aligns items **to the start (left)** of the main axis.
* This is the **default alignment** behavior in Flexbox.

✅ **Use Case:** Ideal for layouts where content should begin from the left side — such as menus, toolbars, or lists.
