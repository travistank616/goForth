var user = firebase.auth().currentUser;

if (user) {
    alert("Signed in");
} else {
    alert("Not Signed in");
}