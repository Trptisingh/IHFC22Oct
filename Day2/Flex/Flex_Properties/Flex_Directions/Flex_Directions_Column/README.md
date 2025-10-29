# ⬇️ CSS `flex-direction: column`

The **`flex-direction: column`** property arranges flex items **vertically** — from **top to bottom** — inside a flex container.

---

## 🧠 What It Does

When a container uses:

```css
display: flex;
flex-direction: column;
````

its child elements stack **one below the other** instead of side by side.

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
  flex-direction: column;
  background-color: lightgray;
}
```

---

## 🎨 Visual Layout

```
[Box 1]
[Box 2]
[Box 3]
```

---

## 💡 Summary

* `flex-direction: column` places items **vertically**.
* The **main axis** becomes **vertical** (top → bottom).
* Useful for creating **stacked layouts** like sidebars, menus, or lists.

```
