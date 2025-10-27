
    const button = document.getElementById("fetch-btn");
    const output = document.getElementById("output");

    button.addEventListener("click", async () => {
      try {
        const response = await fetch("http://localhost:3000/api/message");
        const data = await response.json();
        output.textContent = data.message; 
      } catch (error) {
        output.textContent = "⚠️ Error fetching data";
        console.error(error);
      }
    });
