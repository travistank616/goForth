function handleAuth() {
  // retrieve email/password data
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  document.getElementById("sign-in-toggle").innerText.trim() !==
  "Click to Log In"
    ? this.handleLogIn(email, password)
    : this.handleSignUp(email, password);
}

//Connecting to database
let database = firebase.database();
handleLogIn.addEventListener("click", (e) => {
  e.preventDefault();
  database.ref("/email/" + email.nodeValue).set({
    email: email.value,
    password: password.value,
  });
});

function handleLogIn(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // TODO: alert the user to these properly
      console.log(error.code);
      console.log(error.message);
    });
}

function handleSignUp(email, password) {
  if (password === document.getElementById("confirm-pw-field").value) {
    if (email.length < 4) {
      alert("This is not a valid email.  Please try again.");
      return;
    } else if (password.length < 4) {
      alert("Password not strong enough.  Please make the password stronger.");
      return;
    }
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("This is the wrong password, please try again.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
      document.getElementById("quickstart-sign-in").disabled = false;
    });
  // at this point email and password should be approved
}

//once the users authenticated
//TODO: navigate from login page to the actual game once they are logged in.
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    //user is logged in
    if (window.location.href.includes("login")) {
      window.location.href = "../profile-page/profile-page.html";
    }
    // otherwise, user is logged out and navigated back to our sign-in page
  } else {
    window.location.href = "../login-page/loginPage.html";
  }
});

function toggleLogIn() {
  let isLogIn =
    document.getElementById("sign-in-toggle").innerText === "Click to Sign Up";

  document.getElementById("sign-in-toggle").innerText = isLogIn
    ? "Click to Log In"
    : "Click to Sign Up";

  if (isLogIn) {
    // switch to Sign Up form
    document.getElementById("confirm-pw-field").hidden = false;
    document.getElementById("terms-field").hidden = false;
  } else {
    // swith to Log In form
    document.getElementById("confirm-pw-field").hidden = true;
    document.getElementById("terms-field").hidden = true;
  }
}

//This will be the final function, for logging a user out of the game completely.
function LogOff() {
  firebase.auth().signOut();
}
