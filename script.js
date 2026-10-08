const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = navLinks.querySelectorAll("a");
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function closeMenu() {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

function openMenu() {
  navLinks.classList.add("open");
  menuToggle.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");
}

menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

navItems.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();
      closeMenu();
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  formStatus.textContent = "Thanks for your message. I will reply soon.";
  contactForm.reset();
});
