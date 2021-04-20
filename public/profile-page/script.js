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
//set windows.session t0 blah
//load characterpage
//href="../character-page/character-page.html"
  alert(key); 
  sessionStorage.setItem('curchr', key);
  window.location.href = "../character-page/character-page.html";
};