const dropdownButton = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");

dropdownButton.addEventListener("click", function (event) {
  event.stopPropagation();

  dropdownMenu.classList.toggle("show");

  const isOpen = dropdownMenu.classList.contains("show");
  dropdownButton.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", function (event) {
  const clickedInsideDropdown =
    dropdownButton.contains(event.target) || dropdownMenu.contains(event.target);

  if (!clickedInsideDropdown && dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.toggle("show");
    dropdownButton.setAttribute("aria-expanded", "false");
  }
});

dropdownMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    dropdownMenu.classList.remove("show");
    dropdownButton.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownButton.focus();
  }
});
