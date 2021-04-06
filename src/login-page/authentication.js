function handleAuth() {
  
   // retrieve email/password data
  let email = document.getElementById("email").nodeValue;
  let password = document.getElementById("password").nodeValue;


  document.getElementById("sign-in-toggle").innerText.trim() !== "Log in" ?
    this.handleLogIn(email, password) :
    this.handleSignUp(email, password);
}

function handleLogIn(email, password) {
  firebase
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(function(error) {
    // TODO: alert the user to these properly
    console.log(error.code);
    console.log(error.message);
  });
}

function handleSignUp(email, password) {
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
    // at this point email and password should be approved
  }


  //once the users authenticated 
  //TODO: navigate from login page to the actual game once they are logged in.
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //user is logged in
    if (!window.location.href.includes("game")) {
      window.location.href = "./gameRoom/index.html";
    }
      // otherwise, user is logged out and navigated back to our sign-in page
    } else {
      if (window.location.href.includes("game")) {
        window.location.href = "login-page/loginPage.html";
      }

    }
  });

