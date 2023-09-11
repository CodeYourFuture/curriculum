// I haven't written anything fancy here, just a few things to make the site work

// menu toggle
const menuToggles = document.querySelectorAll(".js-menu-toggle");
const menu = document.getElementById("site-menu");
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
// listeners - we allow anything to toggle Menu if nominated with the class
menuToggles.forEach((toggle) => toggle.addEventListener("click", toggleMenu));

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

// dark mode toggle
const darkModeToggle = document.getElementById("mode-toggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("is-dark-mode");
  document.body.classList.toggle("is-light-mode");
});

// I think this should probably be a custom render hook, will read up
// probably actually want to render all code blocks as code mirrors
// query all code blocks with a data-lang attribute
const editableCodeBlocks = document.querySelectorAll("code[data-lang]");
editableCodeBlocks.forEach((block) => {
  block.setAttribute("contenteditable", true);
  block.setAttribute("spellcheck", false);
  block.setAttribute("autocorrect", "off");
  block.setAttribute("autocapitalize", "off");
});

// alerts for issue cloning (error/success message)
const alert = document.querySelector(".c-alert");
const alertClose = alert.querySelector(".close");

// Fix for GFM task lists
// https://github.com/github/cmark-gfm/issues/299
window.addEventListener("DOMContentLoaded", (event) => {
  const taskListItems = document.querySelectorAll(
    "ul > li > input[type=checkbox]"
  );
  taskListItems.forEach((item) => {
    item.removeAttribute("disabled");
    const parent = item.parentNode;
    parent.innerHTML = `<label>${parent.innerHTML}</label>`;
  });

  // get query param for clone issue message/error
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get("message");
  const error = urlParams.get("error");

  if (message) {
    alert.removeAttribute("hidden");
    alert.classList.remove("c-alert--warning");
    alert.classList.add("c-alert--info");
    alert.querySelector(".alert__message").innerHTML = message;
  }

  if (error) {
    alert.removeAttribute("hidden");
    alert.classList.remove("c-alert--info");
    alert.classList.add("c-alert--warning");
    alert.querySelector(".alert__message").innerHTML = error;
  }

  alertClose.addEventListener("click", (event) => {
    alert.setAttribute("hidden", true);
  });
});
