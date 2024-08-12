import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import { db } from '../config/firebase.config';
import * as Constants from '../constants';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storageRef as storage } from "../config/firebaseStorage.config";

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
        about,
        cv,
    } = user;

    const resumeUrl = await uploadCv(cv[0]);

    const NewUser = {
        id,
        email,
        firstName,
        lastName,
        phoneNo: phone,
        imageUrl: null,
        resumeUrl: resumeUrl,
        resumeFileName: cv[0].name,
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
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return ("No Such Document Found");
    }
}

export async function uploadCv(file) {

    const storageRefInstance = ref(storage, `resume/${file.name}`);
    await uploadBytes(storageRefInstance, file);
    const downloadURL = await getDownloadURL(storageRefInstance);

    // console.log('Uploaded file and got download URL:', downloadURL);
    return downloadURL;
}