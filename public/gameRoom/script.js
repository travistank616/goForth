// DRAG SPRITE ======================================================================
dragElement(document.getElementById("my-sprite"));

function dragElement(el) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  el.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.prevenDefault();
    // get mouse cursor position at startup
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calc new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set new sprite position
    el.style.top = el.offsetTop - pos2 + "px";
    el.style.left = el.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// CLICK-TO-MOVE SPRITE =============================================================
document.addEventListener("DOMContentLoaded", function () {
  const ele = document.getElementById("map-box");
  const sprite = document.getElementById("my-sprite");

  ele.addEventListener("click", function (e) {
    e.preventDefault();

    const rect = ele.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY - (rect.top - 60);

    // set menu position
    sprite.style.setProperty("--mouse-y", y + "px");
    sprite.style.setProperty("--mouse-x", x + "px");

    //show the menu
    sprite.classList.remove("hidden");

    document.addEventListener("click", documentClickHandler);
  });

  const documentClickHandler = function (e) {
    const isClicked = sprite.contains(e.target);
    if (isClicked) {
      // hide the menu
      sprite.classList.add("hidden");

      // remove the even handler
      document.removeEventListener("click", documentClickHandler);
    }
  };
});

// CHANGE MAP MENU =========================================================
document.addEventListener("DOMContentLoaded", function () {
  const ele = document.getElementById("map-box");
  const menu = document.getElementById("menu-box");

  ele.addEventListener("contextmenu", function (e) {
    e.preventDefault();

    const rect = ele.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY - rect.top;

    // set menu position
    menu.style.setProperty("--mouse-y", y + "px");
    menu.style.setProperty("--mouse-x", x + "px");

    //show the menu
    menu.classList.remove("hidden");

    document.addEventListener("click", documentClickHandler);
  });

  const documentClickHandler = function (e) {
    const isClickedOutside = !menu.contains(e.target);
    const newSelection = menu.contains(e.target);
    if (isClickedOutside || newSelection) {
      // hide the menu
      menu.classList.add("hidden");

      // remove the even handler
      document.removeEventListener("click", documentClickHandler);
    }
  };
});

// function toggleMapMenu() {
//   var menuBox = document.getElementById("menu-box");
//   if (menuBox.style.display == "block") {
//     menuBox.style.display = "none";
//   } else {
//     menuBox.style.display = "block";
//   }
// }

function caveMapSwap() {
  document.getElementById("currentMap").src = "../images/Maps/frostCaveMap.jpg";
  toggleMapMenu();
}

function forestMapSwap() {
  document.getElementById("currentMap").src = "../images/Maps/forestMap.png";
  toggleMapMenu();
}

function gridMapSwap() {
  document.getElementById("currentMap").src = "../images/Maps/dndGrid.png";
  toggleMapMenu();
}

function dungeonMapSwap() {
  document.getElementById("currentMap").src = "../images/Maps/dungeonMap.png";
  toggleMapMenu();
}

// CHARACTER MENU ===========================================================
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

//------------------------------------------------------------------------//
//----------------------------CHAT BOX SCRIPT-----------------------------//
//------------------------------------------------------------------------//
const CLIENT_ID = "NbnM9Rxcgrt5Nd29";

const drone = new ScaleDrone(CLIENT_ID, {
  data: {
    // Will be sent out as clientData via events
    name: getRandomName(),
    color: getRandomColor(),
  },
});

let members = [];

drone.on("open", (error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Successfully connected to Scaledrone");

  const room = drone.subscribe("observable-room");
  room.on("open", (error) => {
    if (error) {
      return console.error(error);
    }
    console.log("Successfully joined room");
  });

  room.on("members", (m) => {
    members = m;
    updateMembersDOM();
  });

  room.on("member_join", (member) => {
    members.push(member);
    updateMembersDOM();
  });

  room.on("member_leave", ({ id }) => {
    const index = members.findIndex((member) => member.id === id);
    members.splice(index, 1);
    updateMembersDOM();
  });

  room.on("data", (text, member) => {
    if (member) {
      addMessageToListDOM(text, member);
    } else {
      // Message is from server
    }
  });
});

drone.on("close", (event) => {
  console.log("Connection was closed", event);
});

drone.on("error", (error) => {
  console.error(error);
});

function getRandomName() {
  const adjs = [
    "autumn",
    "hidden",
    "bitter",
    "misty",
    "silent",
    "empty",
    "dry",
    "dark",
    "summer",
    "icy",
    "delicate",
    "quiet",
    "white",
    "cool",
    "spring",
    "winter",
    "patient",
    "twilight",
    "dawn",
    "crimson",
    "wispy",
    "weathered",
    "blue",
    "billowing",
    "broken",
    "cold",
    "damp",
    "falling",
    "frosty",
    "green",
    "long",
    "late",
    "lingering",
    "bold",
    "little",
    "morning",
    "muddy",
    "old",
    "red",
    "rough",
    "still",
    "small",
    "sparkling",
    "throbbing",
    "shy",
    "wandering",
    "withered",
    "wild",
    "black",
    "young",
    "holy",
    "solitary",
    "fragrant",
    "aged",
    "snowy",
    "proud",
    "floral",
    "restless",
    "divine",
    "polished",
    "ancient",
    "purple",
    "lively",
    "nameless",
  ];
  const nouns = [
    "waterfall",
    "river",
    "breeze",
    "moon",
    "rain",
    "wind",
    "sea",
    "morning",
    "snow",
    "lake",
    "sunset",
    "pine",
    "shadow",
    "leaf",
    "dawn",
    "glitter",
    "forest",
    "hill",
    "cloud",
    "meadow",
    "sun",
    "glade",
    "bird",
    "brook",
    "butterfly",
    "bush",
    "dew",
    "dust",
    "field",
    "fire",
    "flower",
    "firefly",
    "feather",
    "grass",
    "haze",
    "mountain",
    "night",
    "pond",
    "darkness",
    "snowflake",
    "silence",
    "sound",
    "sky",
    "shape",
    "surf",
    "thunder",
    "violet",
    "water",
    "wildflower",
    "wave",
    "water",
    "resonance",
    "sun",
    "wood",
    "dream",
    "cherry",
    "tree",
    "fog",
    "frost",
    "voice",
    "paper",
    "frog",
    "smoke",
    "star",
  ];
  return (
    adjs[Math.floor(Math.random() * adjs.length)] +
    "_" +
    nouns[Math.floor(Math.random() * nouns.length)]
  );
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

//------------- DOM STUFF ---------------//

const DOM = {
  membersCount: document.querySelector(".members-count"),
  membersList: document.querySelector(".members-list"),
  messages: document.querySelector(".messages"),
  input: document.querySelector(".message-form__input"),
  form: document.querySelector(".message-form"),
};

DOM.form.addEventListener("submit", sendMessage);

function sendMessage() {
  const value = DOM.input.value;
  if (value === "") {
    return;
  }
  DOM.input.value = "";
  drone.publish({
    room: "observable-room",
    message: value,
  });
}

function createMemberElement(member) {
  const { name, color } = member.clientData;
  const el = document.createElement("div");
  el.appendChild(document.createTextNode(name));
  el.appendChild(document.createTextNode(":"));
  el.className = "member";
  el.style.color = color;
  return el;
}

function updateMembersDOM() {
  DOM.membersCount.innerText = `${members.length} users in room:`;
  DOM.membersList.innerHTML = "";
  members.forEach((member) =>
    DOM.membersList.appendChild(createMemberElement(member))
  );
}

function createMessageElement(text, member) {
  const el = document.createElement("div");
  el.appendChild(createMemberElement(member));
  el.appendChild(document.createTextNode(text));
  el.className = "message";
  el.style.color = "white";
  el.style.backgroundColor = "none";
  return el;
}

function addMessageToListDOM(text, member) {
  const el = DOM.messages;
  const wasTop = el.scrollTop === el.scrollHeight - el.clientHeight;
  el.appendChild(createMessageElement(text, member));
  if (wasTop) {
    el.scrollTop = el.scrollHeight - el.clientHeight;
  }
}
