// menu toggle - this is just like your curriculum site
const menuToggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
const skipLink = document.getElementById("skip-link");

function toggleMenu() {
  menu.classList.toggle("is-active");
  menu.toggleAttribute("hidden");
  if (menu.getAttribute("hidden") == null) {
    menu.focus();
  } else {
    skipLink.focus();
  }
}
menuToggle.addEventListener("click", toggleMenu);

// if the menu is open listen for escape key to close it
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("is-active")) {
    toggleMenu();
  }
  // if meta plus slash key combination is pressed toggle the menu
  if (e.key === "/" && e.metaKey) {
    toggleMenu();
  }
});
