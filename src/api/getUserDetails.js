import { collection, doc, getDoc, getDocs, setDoc, Timestamp } from "firebase/firestore"
import { db } from '../config/firebase.config'
import * as Constants from '../constants'
import { DB_COLLECTIONS, DB_STORAGE } from "../constants"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storageRef as storage } from "../config/firebaseStorage.config"
import toast from "react-hot-toast"

export async function AddUser(user) {
    try {
        const {
            id,
            email,
            firstName,
            lastName,
        } = user;

        const NewUser = {
            id,
            email,
            firstName,
            lastName,
            phoneNo: null,
            imageUrl: null,
            role: Constants.USER_COLLECTION.ROLE,
            accountStatus: Constants.USER_COLLECTION.STATUS_ACTIVE,
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
            throw new Error("No Admin found!");
        }
    } catch (error) {
        toast.error(`Admin not found ${error.message}`)
    }
}

export async function getUser(id) {
    try {
        const docRef = doc(db, DB_COLLECTIONS.USERS, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            if (userData.role === "admin") {
                return userData;
            } else {
                toast.error("no user found");
                return null;
            }
        } else {
            return "No Such Admin Found";
        }
    } catch (error) {
        toast.error(`Admin not found ${error.message}`)
    }
}


export async function uploadImg(file) {

    const storageRefInstance = ref(storage, `${DB_STORAGE.RESUME}/${file.name}`);
    await uploadBytes(storageRefInstance, file);
    const downloadURL = await getDownloadURL(storageRefInstance);

    // console.log('Uploaded file and got download URL:', downloadURL);
    return downloadURL;
}