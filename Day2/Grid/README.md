# CSS Grid — `grid-template-columns` and `grid-template-rows`

The **CSS Grid Layout** provides a powerful way to arrange elements in rows and columns.
It’s ideal for building **two-dimensional layouts** (both horizontal and vertical).

---

## What These Properties Do

### `display: grid`

Turns a container into a **grid layout**.
All its child elements become **grid items**.

### `grid-template-columns`

Defines how many **columns** the grid will have and their **width**.

**Example:**

```css
grid-template-columns: 150px 150px 150px;
```

This creates **3 columns**, each **150px wide**.

### `grid-template-rows`

Defines how many **rows** the grid will have and their **height**.

**Example:**

```css
grid-template-rows: 100px 100px;
```

This creates **2 rows**, each **100px tall**.

---

## Example

**HTML**

```html
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
  <div class="box4">Box 4</div>
  <div class="box5">Box 5</div>
  <div class="box6">Box 6</div>
</div>
```

**CSS**

```css
.container {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 100px 100px;
}
```

This creates a **3×2 grid** — 3 columns and 2 rows —
automatically placing each box in one grid cell.

---

## Visual Layout

```
+--------------------------------------------+
| Box1 | Box2 | Box3 |
| Box4 | Box5 | Box6 |
+--------------------------------------------+
```

* 3 columns × 2 rows grid
* Each cell fits one grid item
* Gaps and padding can be added for spacing clarity

---

## Summary

| Property                | Purpose                                | Example             | Description                         |
| ----------------------- | -------------------------------------- | ------------------- | ----------------------------------- |
| `display: grid`         | Turns an element into a grid container | —                   | Makes all child elements grid items |
| `grid-template-columns` | Defines columns                        | `150px 150px 150px` | 3 columns, each 150px wide          |
| `grid-template-rows`    | Defines rows                           | `100px 100px`       | 2 rows, each 100px tall             |

---

**Use Case:**
Ideal for **dashboards**, **photo galleries**, or **structured layouts** that need both row and column control.
