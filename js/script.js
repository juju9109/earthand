 // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
$(document).ready(function(){


    firebase.initializeApp({
      apiKey: "AIzaSyAJdokdboduz4XoloLlrv-9969XajiJ8g8",
      authDomain: "testtt-65705.firebaseapp.com",
      projectId: "testtt-65705",
      storageBucket: "testtt-65705.appspot.com",
      messagingSenderId: "730807158341",
      appId: "1:730807158341:web:670b5b45ecfef0f74dc52c"
    });

  // Initialize Firebase
  let db=firebase.firestore();
  let usersRef=db.collection("users");
  usersRef.doc("223").set({
  "name":"a",
  "age":27,
  })

})