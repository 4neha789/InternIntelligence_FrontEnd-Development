// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXl6OGjIuylr0QqkmV9Uj5oS-n_hXWLew",
  authDomain: "portfolio2-1ced4.firebaseapp.com",
  databaseURL: "https://portfolio2-1ced4-default-rtdb.firebaseio.com",
  projectId: "portfolio2-1ced4",
  storageBucket: "portfolio2-1ced4.appspot.com",
  messagingSenderId: "449459623558",
  appId: "1:449459623558:web:34b9d3ef3f3e495b47a307",
  measurementId: "G-7HFE7EXV1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(() => {
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Save message to Firebase
function saveMessage(name, email, message) {
  const messagesRef = ref(database, 'messages');
  const newMessageRef = push(messagesRef);
  set(newMessageRef, {
    name: name,
    email: email,
    message: message
  }).then(() => {
    console.log("Message saved successfully!");
  }).catch((error) => {
    console.error("Error saving message: ", error);
  });
}
