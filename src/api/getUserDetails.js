import { collection, doc, getDoc, getDocs, setDoc, Timestamp } from "firebase/firestore"
import { db } from '../config/firebase.config'
import * as Constants from '../constants'
import { DB_COLLECTIONS, DB_STORAGE } from "../constants"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storageRef as storage } from "../config/firebaseStorage.config"
import toast from "react-hot-toast"

// Add a new document in collection "cities"
export async function AddUser(user) {
    try {
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
    } catch (error) {
        toast.error(`${error.message}`)
    }
}

export async function getAllUsers() {
    try {
        const userCol = collection(db, DB_COLLECTIONS.USERS);
        const userSnapshot = await getDocs(userCol);

        const userList = userSnapshot.docs
            .filter(doc => doc.data().role !== "admin")
            .map(doc => ({
                // id: doc.id,
                ...doc.data()
            }));

        if (userList.length > 0) {
            return userList;
        } else {
            throw new Error("No User found!");
        }
    } catch (error) {
        toast.error(`users not found ${error.message}`)
    }
}

export async function getUser(id) {
    try {
        const docRef = doc(db, DB_COLLECTIONS.USERS, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            return userData;
        } else {
            return "No Such user Found";
        }
    } catch (error) {
        toast.error(`user not found ${error.message}`)
    }
}

export async function uploadCv(file) {

    const storageRefInstance = ref(storage, `${DB_STORAGE.RESUME}/${file.name}`);
    await uploadBytes(storageRefInstance, file);
    const downloadURL = await getDownloadURL(storageRefInstance);

    // console.log('Uploaded file and got download URL:', downloadURL);
    return downloadURL;
}