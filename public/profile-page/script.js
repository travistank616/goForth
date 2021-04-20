// DROP MENU CONSTRUCTOR ======================================//

db.collection("CharacterSheets")
  .where("userID", "==", user.uid)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // create dropdown items for each character queried
      document.getElementById("characterDrop").innerHTML +=
        '<a href="../character-page/character-page.html" class="dropdown-item">\n' +
        doc.CharacterName +
        "</a>";
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

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
