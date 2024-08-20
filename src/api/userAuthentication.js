import { signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase.config';
import { AddUser } from "./getUserDetails";
import toast from "react-hot-toast";

export function createUser(userInput, reset) {
    createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
        .then((userCredential) => {
            const user = userCredential.user;
            const customUser = {
                ...userInput,
                id: user.uid
            }
            AddUser(customUser)
            reset();
            toast.success("admin created successfully");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`${errorMessage}: ${errorCode}`)
        });
}

export function SignInUser({ email, password }, setIsLoading, navigate) {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setIsLoading(false)
                // navigate("/admin")
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(`${errorMessage}: ${errorCode}`)
            setIsLoading(false);
        });
}

export function SignOutUser(navigate) {
    signOut(auth).then(() => {
        navigate("/");
        toast.success(`user Successfully logOut`)

    }).catch((error) => {
        toast.error(`${error.message}`)
        return error
    });
}