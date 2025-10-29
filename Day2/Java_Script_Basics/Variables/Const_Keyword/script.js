// Declaring variables using const
const country = "India";
const capital = "New Delhi";

// Display the values
console.log("Country:", country);
console.log("Capital:", capital);

// Trying to reassign a const variable (❌ This will cause an error)
try {
  country = "USA"; // This will throw a TypeError
} catch (error) {
  console.log("Error: You cannot reassign a 'const' variable.");
}
