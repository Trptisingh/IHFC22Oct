// Select button and car key elements
const keyButton = document.getElementById('keyButton');
const carKey = document.getElementById('carKey');

// Add a click event to the button
keyButton.addEventListener('click', function () {
  // Display the car key element
  carKey.style.display = 'block';

  // Change button text after activation
  keyButton.textContent = 'Car Started ✅';

  // Optionally disable button to prevent multiple clicks
  keyButton.disabled = true;
});
