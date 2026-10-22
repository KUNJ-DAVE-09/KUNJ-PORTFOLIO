// Mobile navigation toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen.toString());
});

// Contact form feedback
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Thank you! Your message has been received.";
  contactForm.reset();
});

// Automatic copyright year
document.getElementById("year").textContent = new Date().getFullYear();
