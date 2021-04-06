function handleAuth() {

  //firebase sign up code from their website.. 
  /*firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
 */
 
   // retrieve email/password data
  let email = document.getElementById("email").nodeValue;
  let password = document.getElementById("password").nodeValue;

  document.getElementById("sign-in-toggle").innerText.trim() !== "Log in" ?
    this.handleLogIn(email, password) :
    this.handleSignUp(email, password);
}

function handleLogIn(email, password) {


}/*

function handleSignUp(email, password) {
  //check for confirmed password match
  if (password === document.getElementById("confirm-password").value) {
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
}