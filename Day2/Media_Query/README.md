# 📱 **CSS Media Queries — Desktop, Tablet, and Mobile**

**Media Queries** in CSS make your website **responsive** — adapting the layout and style based on the **device screen size**.
This ensures your webpage looks great on **mobiles, tablets, and desktops**.

---

## 🧠 **What Are Media Queries?**

A **media query** applies specific CSS rules only when certain conditions (like screen width) are met.
This allows developers to create designs that automatically adjust for different devices.

---

### ✅ **Basic Syntax**

```css
@media (condition) {
  /* CSS rules here */
}
```

---

## 🧩 **Example Code**

Here’s how to change the layout for **mobile**, **tablet**, and **desktop** screens.

```css
/* Mobile (max-width: 600px) */
@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
    background-color: peachpuff;
  }
}

/* Tablet (601px to 992px) */
@media (min-width: 601px) and (max-width: 992px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    background-color: lightgoldenrodyellow;
  }
}

/* Desktop (993px and above) */
@media (min-width: 993px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    background-color: lightgray;
  }
}
```

---

## 🎨 **Layout Behavior**

| Device          | Screen Width  | Layout    | Background      |
| --------------- | ------------- | --------- | --------------- |
| 📱 **Mobile**   | ≤ 600px       | 1 column  | Peachpuff       |
| 💻 **Tablet**   | 601px – 992px | 2 columns | Light Goldenrod |
| 🖥️ **Desktop** | ≥ 993px       | 3 columns | Light Gray      |

---

## 🧩 **Visual Representation**

### 📱 Mobile (1 Column)

```
[Box 1]
[Box 2]
[Box 3]
```

### 💻 Tablet (2 Columns)

```
[Box 1] [Box 2]
[Box 3]
```

### 🖥️ Desktop (3 Columns)

```
[Box 1] [Box 2] [Box 3]
```

---

## 💡 **Summary**

| Concept               | Description                                         |
| --------------------- | --------------------------------------------------- |
| `@media`              | Defines screen-based conditions for applying styles |
| `max-width`           | Applies styles **up to** a specific width           |
| `min-width`           | Applies styles **above** a specific width           |
| **Responsive Design** | Ensures layout adapts to all screen sizes           |

---

✅ **Pro Tip:**
Use your browser’s **Developer Tools → Toggle Device Toolbar** (Ctrl + Shift + M) to test mobile, tablet, and desktop responsiveness in real-time.
