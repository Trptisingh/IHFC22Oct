    const button = document.getElementById("fetch-btn");
    const output = document.getElementById("output");
    const input = document.getElementById("user-input");

    button.addEventListener("click", async () => {
      const message = input.value || "Hello";
      output.textContent = "⏳ Thinking...";
      try {
        const res = await fetch("http://localhost:3001/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message })
        });
        const data = await res.json();
        output.textContent = data.reply || "No response from server";
      } catch (err) {
        console.error(err);
        output.textContent = "⚠️ Error fetching API data";
      }
    });