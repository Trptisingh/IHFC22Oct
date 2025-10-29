# 🌤 Simple Weather App

This project is a **beginner-friendly Weather Application** built using **HTML, CSS, and JavaScript**.  
It displays real-time weather information (temperature and condition) for any city using the **OpenWeatherMap API**.

---

## 📁 Project Structure

```

📂 WeatherApp
┣ 📜 index.html     → Main webpage structure
┣ 🎨 style.css      → Styles and design
┣ ⚙️ script.js      → JavaScript logic and API integration
┗ 🧾 README.md      → Project documentation

```

---

## 🚀 Features
- Search weather by **city name**
- Shows **City**, **Temperature (°C)**, and **Weather Condition**
- Clean and **responsive glass-style UI**
- Handles invalid or misspelled city names gracefully

---

## 🧠 How It Works

### 1️⃣ User Input
You type the city name (e.g., `Delhi`, `London`, `Tokyo`) in the input field and click **Get Weather**.

### 2️⃣ API Request
The app sends a request to the **OpenWeatherMap API** endpoint:
```

[https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}](https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY})

````
- `{city}` → the name entered by the user  
- `{API_KEY}` → your personal API key from OpenWeatherMap

### 3️⃣ API Response
The API responds with JSON data like this:
```json
{
  "name": "Delhi",
  "main": { "temp": 303.15 },
  "weather": [{ "description": "clear sky" }]
}
````

### 4️⃣ Displaying Weather

The app extracts the following:

* **City Name:** `data.name`
* **Temperature (Kelvin → Celsius):** `(data.main.temp - 273.15).toFixed(2)`
* **Condition:** `data.weather[0].description`

The values are dynamically inserted into the page using JavaScript DOM manipulation.

---

## 🧮 Temperature Conversion

The OpenWeatherMap API provides temperature in **Kelvin**.
To convert it to **Celsius**:

```
°C = Kelvin - 273.15
```

---

## ⚙️ How to Run

1. Get a **free API key** from [OpenWeatherMap](https://openweathermap.org/api)
2. Open the project folder and replace this line in `script.js`:

   ```js
   const apiKey = "YOUR_API_KEY_HERE";
   ```
3. Open `index.html` in your browser
4. Type a city name and click **Get Weather**

---

## 🧩 Tech Stack

| Technology                                                                                  | Description                           |
| ------------------------------------------------------------------------------------------- | ------------------------------------- |
| ![HTML5](https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg)               | Structure of the webpage              |
| ![CSS3](https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg)                  | Styling and layout (Glassmorphism UI) |
| ![JavaScript](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)      | Fetching API and interactivity        |
| ![OpenWeatherMap](https://upload.wikimedia.org/wikipedia/commons/4/4e/OpenWeather-Logo.jpg) | Real-time weather data provider       |

---

## 💡 Example Output

**Input:**
`City: Delhi`

**Output on screen:**

```
City: Delhi  
Temperature: 30.12°C  
Weather: clear sky
```

---

✨ **Result:**
A simple, beautiful, and fully functional **Weather App** that helps you check live weather conditions instantly!
