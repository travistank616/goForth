const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const passwordCheck = document.getElementById('passwordCheck');
const emailAddress = document.getElementById('emailAddress');
const signUpBtn = document.getElementById('signUpBtn')

const database = firebase.database();
const users = database.ref("users");

signUpBtn.addEventListener('click', (e) =>{
    e.preventDefault();

    if (email.length < 4) {
        alert("This is not a valid email. Please try again.");
        return;
    } else if (password.length < 5) {
        alert("Password not strong enough. Please make the password stronger.");
        return;
    }
    else if (password.value != passwordCheck.value) {
        alert("Retyped passwords do not match.");
        return;
    }

    const autoId = users.push().key;
    users.child(autoId).set({
        userName: userName.value,
        first_name: firstName.value,
        last_name: lastName.value,
        email_Address: emailAddress.value
    });
});