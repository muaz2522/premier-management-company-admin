import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { db } from '../config/firebase.config';
import * as Constants from '../constants';
import { getDownloadURL } from "firebase/storage";
import { storageRef } from "../config/firebaseStorage.config";

// Add a new document in collection "cities"
export async function AddUser(user) {

    const {
        id,
        email,
        firstName,
        lastName,
        phone,
        experience,
        jobTitle,
        about
    } = user;
    const NewUser = {
        id,
        email,
        firstName,
        lastName,
        phoneNo: phone,
        imageUrl: null,
        resume: null,
        role: Constants.USER_COLLECTION.ROLE,
        accountStatus: Constants.USER_COLLECTION.STATUS,
        experience: Number(experience),
        jobTitle,
        about,
        updatedAt: Timestamp.fromDate(new Date()),
        createdAt: Timestamp.fromDate(new Date()),
    };

    await setDoc(doc(db, "users", id), NewUser);
}

export async function getUser(id) {
    console.log("id", id)
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return ("No Such Document Found");
    }
}

export async function uploadCv(file) {

    const storageRefInstance = storageRef(storage, `resume/${file.name}`);
    await uploadBytes(storageRefInstance, file);
    const downloadURL = await getDownloadURL(storageRefInstance);

    console.log('Uploaded file and got download URL:', downloadURL);

    return downloadURL;
}