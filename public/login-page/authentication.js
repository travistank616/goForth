function handleAuth() {
   // retrieve email/password data
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  document.getElementById("sign-in-toggle").innerText.trim() === "Click to Log In" ?
    this.handleSignUp(email, password, username):
    this.handleLogIn(email, password);
}

let database  = firebase.database();

function handleLogIn(email, password) {
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password).then((userCredential) => {
    // Signed in
    var user = userCredential.user;
        alert("Signed in as" + user.email);
  })
  .catch(function(error) {
    // TODO: alert the user to these properly
    console.log(error.code);
    console.log(error.message);
  });
}

function handleSignUp(email, password, username) {
  //check for confirmed password match
    // check that email and password is long enough
    // TODO: make good requirements for eamil/password
    if (email.length < 4) {
      alert("This is not a valid email. Please try again.");
      return;
    } else if (password.length < 4) {
      alert("Password not strong enough. Please make the password stronger.");
      return;
    }

    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
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
    
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password).then((userCredential) => {
      // Signed in
      var user = userCredential.user;
          alert("Signed in");
    })
    .catch(function(error) {
      // TODO: alert the user to these properly
      console.log(error.code);
      console.log(error.message);
    });

    firesbase
    .auth()
    .updateUser(user.uid, {
      displayName: username.value
    });
    // at this point email and password should be approved
  }

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
      document.getElementById("username-field").hidden = false;
    } else {
      // swith to Log In form
      document.getElementById("confirm-pw-field").hidden = true;
      document.getElementById("terms-field").hidden = true;
      document.getElementById("username-field").hidden = true;
    }
  }


  //once the users authenticated 
  //TODO: navigate from login page to the actual game once they are logged in.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //user is logged in
    if (!window.location.href.includes("game")) {
      window.location.href = "../index.html";
    }
      // otherwise, user is logged out and navigated back to our sign-in page
    } else {
      if (window.location.href.includes("game")) {
        window.location.href = "login-page/loginPage.html";
      }

    }
  });
  

  //This will be the final function, for logging a user out of the game completely.
  function LogOff () {
    firebase.auth().signOut().catch((error) => {
      // An error happened.
    });;
  } 