// Smooth scroll function

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

}

// Contact form validation

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  document.getElementById("formMessage").textContent = "✅ Message sent successfully!";

  this.reset();

});