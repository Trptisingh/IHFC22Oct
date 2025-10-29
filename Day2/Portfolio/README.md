# 🌟 **Vision Viksit Bharat – About Me Webpage**

This project is a simple **HTML + CSS personal webpage** created for **Kendriya Vidyalaya (KV) students** participating in the **Vision Viksit Bharat** initiative.
It helps students learn and showcase the basics of **web design** using **semantic HTML**, **CSS styling**, and **responsive layouts**.

---

## 🧩 **Project Overview**

The webpage introduces a student, describing their **background, goals, and hobbies**.
It demonstrates clean structure, accessibility, and responsive design for a better viewing experience across devices.

---

## 🎨 **Features Used**

### 🖌️ 1. **Basic Page Styling**

Sets the overall look and feel of the webpage with readable fonts and smooth colors.

```css
body {
  font-family: "Trebuchet MS", Arial, sans-serif;
  background-color: #f5f9ff;
  margin: 0;
  padding: 0;
  color: #222;
}
```

✅ **Explanation:**

* `font-family` → Defines the main text font.
* `background-color` → Gives a soft light blue background.
* `margin` and `padding` → Remove default spacing for a clean layout.

---

### 📦 2. **Section Styling**

Each section (like *About Me*, *My Goals*, *Contact*) is styled with soft borders and spacing.

```css
section {
  background-color: #ffffff;
  margin: 15px;
  padding: 15px;
  border: 1px solid #cce0ff;
  border-radius: 6px;
}
```

✅ **Explanation:**

* Adds a white box with light blue borders.
* Rounded corners (`border-radius`) make it visually appealing.

---

### 🧍‍♀️ 3. **Flexbox Layout**

Aligns images and text neatly side-by-side.

```css
div {
  display: flex;
  align-items: center;
}
```

✅ **Explanation:**

* `display: flex;` → Enables horizontal alignment.
* `align-items: center;` → Centers text vertically with the image.

---

### 🪶 4. **Buttons and Input Styling**

Improves form appearance for better user interaction.

```css
input, textarea, button {
  font-family: inherit;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

Adds hover effect to the submit button:

```css
input[type="submit"]:hover {
  background-color: #005b99;
  color: white;
}
```

✅ **Explanation:**

* All form fields look uniform and clean.
* Hover color gives interactive feedback to users.

---

### 📱 5. **Responsive Design with Media Query**

Ensures proper layout on mobile and tablet screens.

```css
@media (max-width: 600px) {
  div {
    flex-direction: column;
    text-align: center;
  }

  img {
    margin: 0 0 10px 0;
  }
}
```

✅ **Explanation:**

* On small screens, elements stack vertically.
* Keeps text centered and easy to read.

---

## 🧠 **Concepts Demonstrated**

| Concept                | Description                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------- |
| **Semantic HTML**      | Uses `<header>`, `<section>`, `<footer>`, `<blockquote>`, `<details>`, `<summary>` |
| **Forms**              | Includes text input, email input, textarea, and submit button                      |
| **Flexbox**            | Aligns content (image + text) horizontally                                         |
| **Media Queries**      | Makes layout responsive for phones                                                 |
| **Color & Typography** | Uses soft colors and readable fonts                                                |

---

## 💡 **Example Structure**

### 🧱 `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <title>About Me - Vision Viksit Bharat</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Vision Viksit Bharat - My Journey</h1>
  </header>

  <section>
    <div>
      <img src="student-photo.jpg" alt="My Photo" width="120">
      <p>Hello! I am <strong>Riya Sharma</strong> from Class 9. I love coding, reading, and exploring new technologies.</p>
    </div>
  </section>

  <section>
    <h2>My Goals</h2>
    <p>I aspire to become an innovator contributing to a developed India through science and technology.</p>
  </section>

  <section>
    <h2>Contact Me</h2>
    <form>
      <label>Name:</label>
      <input type="text" required>
      <label>Email:</label>
      <input type="email" required>
      <label>Message:</label>
      <textarea rows="3"></textarea>
      <input type="submit" value="Send Message">
    </form>
  </section>

  <footer>
    <p>© 2025 Vision Viksit Bharat | Kendriya Vidyalaya Project</p>
  </footer>
</body>
</html>
```

---

### 🎨 `style.css`

(Contains all the CSS examples mentioned above)

