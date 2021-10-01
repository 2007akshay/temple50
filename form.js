
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // Import the functions you need from the SDKs you need
 

// TODO: Add SDKs for Firebase produimportcts that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOd_kBjk3tjZFHi6aMYE5LWfVVWBrRv7E",
  authDomain: "loginpage-bccd2.firebaseapp.com",
  projectId: "loginpage-bccd2",
  storageBucket: "loginpage-bccd2.appspot.com",
  messagingSenderId: "144598060277",
  appId: "1:144598060277:web:f77072d0eaa29b8eb849bc",
  measurementId: "G-3T0C21HDRE"
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("registered successfully")
  }

  