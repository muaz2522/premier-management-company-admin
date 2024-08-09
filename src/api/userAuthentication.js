import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase.config';
import { AddUser } from "./getUserDetails";

export function createUser(userInput) {
    createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
        .then((userCredential) => {
            const user = userCredential.user;
            const customUser = {
                ...userInput,
                id: user.uid
            }
            AddUser(customUser)
                // Signed up 
                // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export function SignInUser({ email, password }) {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

export function SignOutUser(navigate) {
    signOut(auth).then(() => {
        navigate("/login");
    }).catch((error) => {
        return error
    });
}