import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore"; 
import { toast } from "react-toastify";

// Firebase configuration object containing the project's API keys and identifiers
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

/**
 * Format Firebase error codes by adding spaces between words.
 * @param {string} code - The error code from Firebase.
 * @returns {string} - The formatted error message.
 */
const formatErrorCode = (code) => {
  // Extract the relevant part of the error code and insert spaces before capital letters
  return code.split('/')[1].split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};

/**
 * Sign up a new user with the given name, email, and password.
 * @param {string} name - The name of the user.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user.
 */
const signup = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User signed up:', user);
    await addDoc(collection(db, "users"), { 
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    toast.success('User signed up successfully');
  } catch (error) {
    console.error('Error signing up:', error.message);
    toast.error(formatErrorCode(error.code)); // Displaying formatted error message using toast
  }
};

/**
 * Log in a user with the given email and password.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password for the user.
 */
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('User logged in:', user);
    toast.success('User logged in successfully');
    // Handle successful login (e.g., redirect user, set user state)
  } catch (error) {
    console.error('Error logging in:', error.message);
    toast.error(formatErrorCode(error.code)); // Displaying formatted error message using toast
  }
};

/**
 * Log out the currently signed-in user.
 */
const logout = async () => {
  try {
    await signOut(auth);
    console.log('User logged out');
    toast.success('User logged out successfully');
    // Handle successful logout (e.g., redirect user to login page)
  } catch (error) {
    console.error('Error logging out:', error.message);
    toast.error(formatErrorCode(error.code)); // Displaying formatted error message using toast
  }
};

// Exporting functions and instances for use in other parts of the application
export { signup, login, logout, auth, db };
