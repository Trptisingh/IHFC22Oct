 // Select button
    var button = document.getElementById("getWeatherBtn");

    // Add click event
    button.addEventListener("click", getWeather);

    // Function to fetch and display weather
    async function getWeather() {
      var city = document.getElementById("city").value;
      var apiKey = "8f95b1ea3615e9a884a6da019dd585ca";
      var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

      try {
        var response = await fetch(url);
        var data = await response.json();

        // Check if city is valid
        if (data.cod !== 200) {
          alert("City not found. Please try again.");
          return;
        }

        // Convert temperature to Celsius
        var tempC = (data.main.temp - 273.15).toFixed(2);

        // Display results
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = tempC;
        document.getElementById("weather").textContent = data.weather[0].description;

      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Something went wrong. Please try again later.");
      }
    }