//Uppgift 1
const popupButton = document.getElementById("popUpBtn");
const popup = document.getElementById("accessibleModal");
const closePopop = document.getElementById("closeModalBtn");

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    if (popup2.classList.contains("show")) {
      toggle(popup2, popupButton2);
    }
    if (popup.classList.contains("show")) {
      toggle(popup, popupButton);
    }
  }
});

function toggle(e, button) {
  e.classList.remove("show");
  button.focus();
}

popupButton.addEventListener("click", () => {
  popup.classList.toggle("show");
  let openStateString = popupButton.getAttribute("aria-expanded"); //get aria-expanded string
  let openStateBool = openStateString == "true"; //convert string to boolean
  popupButton.setAttribute("aria-expanded", `${!openStateBool}`); //reverse boolean and set attribute
  closePopop.focus();
});

closePopop.addEventListener("click", () => {
  popup.classList.toggle("show");
  if (popup.classList.contains("show")) {
  } else popupButton.focus();
});

//Uppgift 2
const popupButton2 = document.getElementById("popupBtn2");
const popup2 = document.getElementById("accessibleDialog");
const closePopop2 = document.getElementById("closeDialogBtn");

popupButton2.addEventListener("click", () => {
  popup2.classList.toggle("show");
  let openStateString = popupButton2.getAttribute("aria-expanded"); //get aria-expanded string
  let openStateBool = openStateString == "true"; //convert string to boolean
  popupButton2.setAttribute("aria-expanded", `${!openStateBool}`); //reverse boolean and set attribute
  closePopop2.focus();
});

closePopop2.addEventListener("click", () => {
  popup2.classList.toggle("show");
  if (popup2.classList.contains("show")) {
  } else popupButton2.focus();
});

//Uppgift 3

const hamburger = document.getElementById("menuButton");
const hamburgerContent = document.getElementById("menuContent");

hamburger.addEventListener("click", () => {
  hamburgerContent.classList.toggle("show");
});
