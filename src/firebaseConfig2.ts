import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration
const config = {
    apiKey: "AIzaSyCCh8T67SZANded0h-pv9abhde0_xQRYZ0",
    authDomain: "appproject4-6353a.firebaseapp.com",
    projectId: "appproject4-6353a",
    storageBucket: "appproject4-6353a.appspot.com",
    messagingSenderId: "814842839582",
    appId: "1:814842839582:web:e3d8a7a66e4cf1ee16240f"
};

const app = initializeApp(config);

//  Firebase Authentication
export const auth = getAuth(app);

// Function to log in the user
export async function loginUser(username: string, password: string) {
    try {
        const res = await signInWithEmailAndPassword(auth, username, password);
        console.log('User logged in successfully:', res);
        return true;
    } catch (error) {
        console.error('Error logging in:', error);
        return false;
    }
}

// Function to register a new user
export async function registerUser(email: string, password: string) {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User registered successfully:', res);
        return true;
    } catch (error) {
        console.error('Error registering user:', error);
        return false;
    }
}

export default app;
