var FBAppScript = document.createElement('script');
FBAppScript.setAttribute('src', 'https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js?callback=init');
document.body.append(FBAppScript);

var firebaseConfig = {
  apiKey: "AIzaSyBe6ooH-1rrcd8ui6ec7TtARe42Lh4iSO8",
  authDomain: "edge-srv.firebaseapp.com",
  projectId: "edge-srv",
  storageBucket: "edge-srv.appspot.com",
  messagingSenderId: "576813547971",
  appId: "1:576813547971:web:5e9aced002ed4fadd07d76",
  measurementId: "G-G8JKZYGM57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function init() {
  console.log('test');
}