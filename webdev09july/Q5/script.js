window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    if (validateForm()) {
      // Form is valid, proceed with submission or further actions
      console.log("Form submitted successfully!");
      form.reset(); // Optional: Reset the form after successful submission
    }
  });

  function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const color = document.getElementById("color").value;

    // Perform your desired validation logic for each field
    // Here's a basic example with required fields and some additional checks

    if (name.trim() === "") {
      alert("Please enter your name");
      return false;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return false;
    }

    // Additional checks for email format validity
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    if (phone.trim() === "") {
      alert("Please enter your phone number");
      return false;
    }

    // Additional checks for phone number format validity
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return false;
    }

    if (password.trim() === "") {
      alert("Please enter your password");
      return false;
    }

    if (age.trim() === "") {
      alert("Please enter your age");
      return false;
    }

    if (gender === "") {
      alert("Please select your gender");
      return false;
    }

    if (dob.trim() === "") {
      alert("Please enter your date of birth");
      return false;
    }

    if (color.trim() === "") {
      alert("Please select your favorite color");
      return false;
    }

    // All fields are valid
    return true;
  }
});
