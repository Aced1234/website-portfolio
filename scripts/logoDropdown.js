document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("kali-logo");
  const menu = document.getElementById("logo-dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  document.addEventListener("click", () => {
    menu.style.display = "none";
  });
});
