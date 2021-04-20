const chrname = document.getElementById('characterName');
const crace = document.getElementById('characterRace');
const clvl = document.getElementById('characterLevel');
const cstr = document.getElementById('strengthLevel');
const cdex = document.getElementById('dexLevel');
const ccon = document.getElementById('constLevel');
const cint = document.getElementById('intLevel');
const cwis = document.getElementById('wisLevel');
const ccha = document.getElementById('charLevel');
const saveBtn = document.getElementById('saveBtn');
/*

var database = firebase.database();
const characterSheet = database.ref('CharacterSheets');
var character;
*/

function initpage(){
    user = firebase.auth().currentUser;
    let db = firebase.firestore();
    
    let chkey = sessionStorage.getItem('curchr');
    console.log(chkey);

    if(chkey != "newCHR"){
        db.collection("CharacterSheets")
        .doc(chkey)
        .get()
        .then(function(doc){
            document.getElementById('characterName').value = doc.data().CharacterName;
            document.getElementById('characterRace').value = doc.data().CharacterRace;
            document.getElementById('characterLevel').value = doc.data().CharacterLevel;
            document.getElementById('strengthLevel').value = doc.data().CharacterStrength;
            document.getElementById('dexLevel').value = doc.data().CharacterDexterity;
            document.getElementById('constLevel').value = doc.data().CharacterConstitution;
            document.getElementById('intLevel').value = doc.data().CharacterIntelligence;
            document.getElementById('wisLevel').value = doc.data().CharacterWisdom;
            document.getElementById('charLevel').value = doc.data().CharacterCharisma;
        });
    }
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let db = firebase.firestore();
    var user = firebase.auth().currentUser;
    //alert(user.email);
    if(chrname.value.length > 0 && user != null){
        db.collection('CharacterSheets').add({
        CharacterName: chrname.value,
        CharacterRace: crace.value,
        CharacterLevel: clvl.value,
        CharacterStrength: cstr.value,
        CharacterDexterity: cdex.value,
        CharacterConstitution: ccon.value,
        CharacterIntelligence: cint.value,
        CharacterWisdom: cwis.value,
        CharacterCharisma: ccha.value,

        userID: user.uid

    });
    }else{
        alert("Couldn't Save");
    }
});

/* 
saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    if(chrname.value.length > 0 && user != null){
    const autoId = characterSheet.push().key
    characterSheet.child(autoId).set({
        CharacterName: chrname.value,
        CharacterRace: crace.value,
        CharacterLevel: clvl.value,
        CharacterStrength: cstr.value,
        CharacterDexterity: cdex.value,
        CharacterConstitution: ccon.value,
        CharacterIntelligence: cint.value,
        CharacterWisdom: cwis.value,
        CharacterCharisma: ccha.value,

        accountID: user.uid
    },
    //character = characterSheet.orderByKey().equalsTo(autoId).limitToFirst(1)
    );
    }else{
        alert("Couldn't Save");
    }
});
*/