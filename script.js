// Scroll to section by ID
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Example reusable function
function calculateYearsSince(year) {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
}

// Modal toggle (for contact page or project preview)
function toggleModal(show) {
  const modal = document.getElementById("modal");
  modal.classList.toggle("hidden", !show);
}
