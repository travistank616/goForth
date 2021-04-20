const chrname = document.getElementById('characterName');
const crace = document.getElementById('characterRace');
const clvl = document.getElementById('characterLevel');
const cstr = document.getElementById('strengthLevel');
const cdex = document.getElementById('dexLevel');
const ccon = document.getElementById('constLevel');
const cint = document.getElementById('intLevel');
const cwis = document.getElementById('wisLevel');
const ccha = document.getElementById('charLevel');

const cstrb = document.getElementById('strengthBonus');
const cdexb = document.getElementById('dexBonus');
const cconb = document.getElementById('constBonus');
const cintb = document.getElementById('intBonus');
const cwisb = document.getElementById('wisBonus');
const cchab = document.getElementById('charBonus');

const chp = document.getElementById('currentHP');
const cmhp = document.getElementById('currentMaxHP');
const cac = document.getElementById('currentAC');
const cinit = document.getElementById('charInitiative');
const cprof = document.getElementById('charProficiency');
const cspd = document.getElementById('charSpeed');

const cbio = document.getElementById('bioTextBox');
const cdtl = document.getElementById('detailsTextBox');
const cspll = document.getElementById('spellsTextBox');
const catk = document.getElementById('attacksTextBox');
const cftr = document.getElementById('featuresTextBox');
const ceqp = document.getElementById('equippedTextBox');
const cinv = document.getElementById('inventoryTextBox');


const saveBtn = document.getElementById('saveBtn');
/*

var database = firebase.database();
const characterSheet = database.ref('CharacterSheets');
var character;
*/


function initpage(){
    var user = firebase.auth().currentUser;
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

            document.getElementById('bioTextBox').value = doc.data().CharacterBio;
            document.getElementById('detailsTextBox').value = doc.data().CharacterProfLang;
            document.getElementById('spellsTextBox').value = doc.data().CharacterSpells;
            document.getElementById('attacksTextBox').value = doc.data().CharacterAttacks;
            document.getElementById('featuresTextBox').value = doc.data().CharacterFeatures;
            document.getElementById('equippedTextBox').value = doc.data().CharacterEquipped;
            document.getElementById('inventoryTextBox').value = doc.data().CharacterInventory;
        });
    }
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let chkey = sessionStorage.getItem('curchr');
    let db = firebase.firestore();
    var user = firebase.auth().currentUser;
    //alert(user.email);

    if(chkey == "newCHR"){
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
            
            CharacterStrengthBonus: cstrb.value,
            CharacterDexterityBonus: cdexb.value,
            CharacterConstitutionBonus: cconb.value,
            CharacterIntelligenceBonus: cintb.value,
            CharacterWisdomBonus: cwisb.value,
            CharacterCharismaBonus: cchab.value,

            CharacterCurrentHealth: chp.value,
            CharacterMaxHealth: cmhp.value,
            CharacterArmorClass: cac.value,
            CharacterInitiative: cinit.value,
            CharacterProficiency: cprof.value,
            CharacterSpeed: cspd.value,

            CharacterBio: cbio.value,
            CharacterProfLang: cdtl.value,
            CharacterSpells: cspll.value,
            CharacterAttacks: catk.value,
            CharacterFeatures: cftr.value,
            CharacterEquipped: ceqp.value,
            CharacterInventory: cinv.value,
            
            userID: user.uid

        });
        }else{
            alert("Couldn't Save New Character. Please Try Again or Contact Us");
        }
    }
    else{
        db.collection("CharacterSheets")
        .doc(chkey)
        .update({
            CharacterName: chrname.value,
            CharacterRace: crace.value,
            CharacterLevel: clvl.value,
            CharacterStrength: cstr.value,
            CharacterDexterity: cdex.value,
            CharacterConstitution: ccon.value,
            CharacterIntelligence: cint.value,
            CharacterWisdom: cwis.value,
            CharacterCharisma: ccha.value,
            
            CharacterStrengthBonus: cstrb.value,
            CharacterDexterityBonus: cdexb.value,
            CharacterConstitutionBonus: cconb.value,
            CharacterIntelligenceBonus: cintb.value,
            CharacterWisdomBonus: cwisb.value,
            CharacterCharismaBonus: cchab.value,

            CharacterCurrentHealth: chp.value,
            CharacterMaxHealth: cmhp.value,
            CharacterArmorClass: cac.value,
            CharacterInitiative: cinit.value,
            CharacterProficiency: cprof.value,
            CharacterSpeed: cspd.value,

            CharacterBio: cbio.value,
            CharacterProfLang: cdtl.value,
            CharacterSpells: cspll.value,
            CharacterAttacks: catk.value,
            CharacterFeatures: cftr.value,
            CharacterEquipped: ceqp.value,
            CharacterInventory: cinv.value,
        });
    }
});
