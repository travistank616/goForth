const chrname = document.getElementById('characterName');
const crace = document.getElementById('characterRace');
const clvl = document.getElementById('characterLevel');

const cstr = document.getElementById('strengthLevel');
const cdex = document.getElementById('dexLevel');
const ccon = document.getElementById('constLevel');
const cint = document.getElementById('intLevel');
const cwis = document.getElementById('wisLevel');
const ccha = document.getElementById('charLevel');
//const createBtn = document.getElementById('createBtn');
const saveBtn = document.getElementById('saveBtn');
/**/

var database = firebase.database();
const characterSheet = database.ref('CharacterSheets');
var character;


saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    alert(user.email);
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

/* 
const autoId = characterSheet.push().key;

characterSheet.child(autoId).set({
    CharacterName: "New Guy",
    CharacterRace: "Elf",
    CharacterLevel: "12",
    CharacterStrength: "12",
    CharacterDexterity: "9",
    CharacterConstitution: "16",
    CharacterIntelligence: "4",
    CharacterWisdom: "11",
    CharacterCharisma: "15",
});


var char = characterSheet.child(autoId);
alert(char);

characterSheet.child(autoId).set({
    CharacterName: "Testing the New Guy"
});*/