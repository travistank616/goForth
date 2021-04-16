// drops down dropdown menus when Clicked
var drop = function (element) {
  const dropper = element;
  const dropped = element.querySelector(".is-active");
  const button = element.querySelector(".button");

  if (dropped) {
    dropper.classList.remove("is-active");
    button.classList.remove("dropStyle");
  } else {
    dropper.classList.toggle("is-active");
    button.classList.toggle("dropStyle");
  }
};

function collapseDrop() {
  const dropMenu = document.querySelector(".dropdown");
  const dropped = dropMenu.querySelector(".is-active");
  const button = element.querySelector(".button");

  if (dropped) {
    dropper.classList.remove("is-active");
    button.classList.remove("dropStyle");
  }
}

var createGame = function () {};
