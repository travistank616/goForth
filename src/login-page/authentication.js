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
      alert("Email not valid!");
      return;
    } else if (password.length < 4) {
      alert("Password not valid");
      return;
    }

    // at this point email and password should be approved
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      //user is logged in
      var uid = user.uid;
      // otherwise, user is logged out
    } else {
      // User is signed out
      // ...
    }
  });

