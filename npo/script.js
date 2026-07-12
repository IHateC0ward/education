const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const contactForm = document.querySelector(".contact-form");
const formNote = document.querySelector(".form-note");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "お問い合わせを受け付けました。担当者よりご連絡します。";
  contactForm.reset();
});
