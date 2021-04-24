// CLICK-TO-MOVE SPRITE =============================================================

var battleMap = document.querySelector("#map-box");
var spriteID;

// Watch for clicks on the battle map, and place sprite
// at location of the click.
battleMap.addEventListener("click", function (event) {
  const rect = battleMap.getBoundingClientRect();
  var x = event.clientX;
  var y = event.clientY - (rect.top - 60);

  document.getElementById("my-sprite-group").innerHTML +=
    '<div id="' +
    spriteID +
    '"class="charSprite absolute" style="top: ' +
    y +
    "px; left: " +
    x +
    'px" onclick="deleteSprite(this)"></div>';
});

// Click active sprite to hide.
function deleteSprite(sprite) {
  sprite.style.display = "none";
}

// Click desired sprite from the box o' sprites
// to make it active for placement.
function spriteSwap(selection) {
  spriteID = selection.id;
}

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

// SPRITE BOX ===============================================================
var button = document.getElementById("sprite-button");
var div = document.getElementById("sprite-select-block");

button.onclick = function () {
  div.style.display = "flex";
  button.style.display = "none";
};

div.onmouseup = function () {
  div.style.display = "none";
  button.style.display = "inline-flex";
};

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

//------------------------------------------------------>>>>>>>> jeremy additions
firebase.auth().onAuthStateChanged((user) => {
  if(user){
    getsCHRS();
  }
});

function getsCHRS(){
  user = firebase.auth().currentUser;
  let db = firebase.firestore();
  if(!user){
    //alert("cry1");
    return;
  }
  
  db.collection("CharacterSheets")
  .where("userID", "==", user.uid)
  .get()
  .then((querySnapshot) => {
    var stuff = '<a class="dropdown-item" onclick="setCharacter(\'newCHR\')">Create New Character</a>\n';
    querySnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data().CharacterName)
      // create dropdown items for each character queried
      stuff +=
        '<a class="dropdown-item" onclick="setCharacter(\'' + doc.id + '\')">\n' +
        doc.data().CharacterName +
        "</a>";
    });
    document.getElementById("characterDrop").innerHTML = stuff;
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
};

function setCharacter(key){
  if(key == 'newCHR'){
    sessionStorage.setItem('curchr', key);
    window.location.href = "../character-page/character-page.html";
  }
  else{
    initCHR(key);
  }
};



function initCHR(key){
  var user = firebase.auth().currentUser;
  let db = firebase.firestore();
  console.log(key);

  
  db.collection("CharacterSheets")
  .doc(key)
  .get()
  .then(function(doc){
      document.getElementById('charName').value = doc.data().CharacterName;
      document.getElementById('strengthLevel').value = doc.data().CharacterStrength;
      document.getElementById('dexLevel').value = doc.data().CharacterDexterity;
      document.getElementById('constLevel').value = doc.data().CharacterConstitution;
      document.getElementById('intLevel').value = doc.data().CharacterIntelligence;
      document.getElementById('wisLevel').value = doc.data().CharacterWisdom;
      document.getElementById('charLevel').value = doc.data().CharacterCharisma;
      
      document.getElementById('strengthBonus').value = doc.data().CharacterStrengthBonus;
      document.getElementById('dexBonus').value = doc.data().CharacterDexterityBonus;
      document.getElementById('constBonus').value = doc.data().CharacterConstitutionBonus;
      document.getElementById('intBonus').value = doc.data().CharacterIntelligenceBonus;
      document.getElementById('wisBonus').value = doc.data().CharacterWisdomBonus;
      document.getElementById('charBonus').value = doc.data().CharacterCharismaBonus;

      document.getElementById('currentHP').value = doc.data().CharacterCurrentHealth;
      document.getElementById('currentMaxHP').value = doc.data().CharacterMaxHealth;
      document.getElementById('currentAC').value = doc.data().CharacterArmorClass;
      document.getElementById('charInitiative').value = doc.data().CharacterInitiative;
      document.getElementById('charProficiency').value = doc.data().CharacterProficiency;
      document.getElementById('charSpeed').value = doc.data().CharacterSpeed;

      document.getElementById('spellFeatTextBox').value = doc.data().CharacterSpells + '\n' + doc.data().CharacterFeatures;
      document.getElementById('equippedTextBox').value = doc.data().CharacterEquipped;
  });

}