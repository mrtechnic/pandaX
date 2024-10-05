const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute("class", isOpen ? "ri=close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

scrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

scrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});

scrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

scrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});

scrollReveal().Reveal(".steps__card", {
  ...scrollRevealOption,
  intervel: 500,
});

scrollReveal().reveal(".service__image img", {
  ...scrollRevealOption,
  origin: "left",
});

scrollReveal().reveal(".service__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

scrollReveal().reveal(".service__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

scrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

scrollReveal().reveal(".experience__card", {
  duration: 1000,
  interval: 500,
});

scrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});

scrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

scrollReveal().reveal(".download__content p", {
  ...scrollRevealOption,
  delay: 1000,
});

scrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1500,
});
