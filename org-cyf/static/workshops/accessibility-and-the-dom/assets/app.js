const menuToggle = document.getElementById("toggle");
const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("is-active");
  menu.toggleAttribute("hidden");
  if (menu.getAttribute("hidden") == null) {
    menu.focus();
  } else {
    menuToggle.focus();
  }
}
menuToggle.addEventListener("click", toggleMenu);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("is-active")) {
    toggleMenu();
  }
  if (e.key === "/" && e.metaKey) {
    toggleMenu();
  }
});

const addButton = document.querySelector("#add");
const output = document.querySelector("#output");
const status = document.querySelector("#status");

const items = [
  () => {
    const p = document.createElement("p");
    p.textContent =
      "Thanks for clicking! Here is some extra information for you.";
    p.style.color = "#cccccc";
    return p;
  },
  () => {
    const img = document.createElement("img");
    const svg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='120' height='80'>" +
      "<rect width='120' height='80' fill='#4a4a4a'/></svg>";
    img.src = "data:image/svg+xml," + encodeURIComponent(svg);
    img.width = 120;
    img.height = 80;
    return img;
  },
  () => {
    const link = document.createElement("a");
    link.href = "https://codeyourfuture.io";
    link.innerHTML =
      "<svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>" +
      "<path d='M12 2 2 12h3v8h6v-5h2v5h6v-8h3z'/></svg>";
    return link;
  },
  () => {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML =
      "<svg width='24' height='24' viewBox='0 0 24 24' fill='currentColor'>" +
      "<path d='M19 13H5v-2h14z'/></svg>";
    return button;
  },
];

let next = 0;

addButton.addEventListener("click", () => {
  if (next >= items.length) {
    return;
  }

  const wrapper = document.createElement("div");
  wrapper.className = "added-item";
  wrapper.append(items[next]());
  output.append(wrapper);

  next = next + 1;

  if (next >= items.length) {
    addButton.disabled = true;
    status.textContent = `All ${items.length} elements added. Now run a Lighthouse audit in Snapshot mode.`;
  } else {
    status.textContent = `Added element ${next} of ${items.length}.`;
  }
});
