import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';


const config = {
        apiKey: "AIzaSyCCh8T67SZANded0h-pv9abhde0_xQRYZ0",
        authDomain: "appproject4-6353a.firebaseapp.com",
        projectId: "appproject4-6353a",
        storageBucket: "appproject4-6353a.appspot.com",
        messagingSenderId: "814842839582",
        appId: "1:814842839582:web:e3d8a7a66e4cf1ee16240f"
}

const app = initializeApp(config);

export const auth = getAuth(app);
export async function loginUser(username: string, password: string) {
    
    try {
        const res = await signInWithEmailAndPassword(auth, username, password)
    
        console.log(res)
        return true
    } catch (error) {
        console.error(error)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@codedamn.com`
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    }
    catch(error) {
        console.log(error)
        return false
    }
}
export default app;
