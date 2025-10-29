# 🧩 CSS Grid — Using the `repeat()` Function

The **`repeat()`** function in CSS Grid helps you create rows or columns that repeat a specific number of times with the same size,  
making your grid code cleaner and more efficient.

---

## 🧠 What It Does

### Syntax:
```css
grid-template-columns: repeat(count, size);
grid-template-rows: repeat(count, size);
count → Number of times the track (column/row) should repeat

size → Width or height of each track (can be in px, %, fr, etc.)

🧩 Example
css
Copy code
.container {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(2, 100px);
}
This creates:

3 columns, each 150px wide

2 rows, each 100px tall

It’s equivalent to:

css
Copy code
grid-template-columns: 150px 150px 150px;
grid-template-rows: 100px 100px;
But more compact and easier to modify.

🎨 Visual Layout
diff
Copy code
+--------------------------------------------+
| Box1 | Box2 | Box3 |
| Box4 | Box5 | Box6 |
+--------------------------------------------+
Each column and row is created automatically using repeat().

💡 Why Use repeat()?
✅ Reduces repetitive code
✅ Makes grids scalable
✅ Easier to maintain when the number of columns/rows changes

🧩 Example Code
html
Copy code
<div class="container">
  <div class="box1">Box 1</div>
  <div class="box2">Box 2</div>
  <div class="box3">Box 3</div>
  <div class="box4">Box 4</div>
  <div class="box5">Box 5</div>
  <div class="box6">Box 6</div>
</div>
💡 Summary
Property	Purpose	Example	Description
display: grid	Enables grid layout	—	Turns element into grid container
grid-template-columns	Defines columns	repeat(3, 150px)	3 columns of 150px each
grid-template-rows	Defines rows	repeat(2, 100px)	2 rows of 100px each

✅ Best For: Creating grids with repeating patterns, like image galleries, dashboards, or cards.