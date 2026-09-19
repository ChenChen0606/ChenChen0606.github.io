const dropdownButton = document.querySelector("#dropdownBtn");
const dropdownMenu = document.querySelector("#dropdownMenu");
const dropdownArrow = dropdownButton.querySelector(".arrow");

function setDropdownState(isOpen) {
  dropdownButton.setAttribute("aria-expanded", isOpen);
  dropdownArrow.textContent = isOpen ? "▲" : "▼";
}

dropdownButton.addEventListener("click", function (event) {
  event.stopPropagation();

  dropdownMenu.classList.toggle("show");
  setDropdownState(dropdownMenu.classList.contains("show"));
});

document.addEventListener("click", function (event) {
  const clickedInsideDropdown =
    dropdownButton.contains(event.target) || dropdownMenu.contains(event.target);

  if (!clickedInsideDropdown && dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
    setDropdownState(false);
  }
});

dropdownMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    dropdownMenu.classList.remove("show");
    setDropdownState(false);
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
    setDropdownState(false);
    dropdownButton.focus();
  }
});
