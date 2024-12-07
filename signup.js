import { auth, db } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signupForm");

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional fields to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        phone: phone,
        email: email,
      });

      // Store login state in localStorage
      localStorage.setItem("isLoggedIn", "true");

      alert("Signup successful!");
      window.location.href = "index.html";  // Redirect to index page after successful signup
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  });
});



