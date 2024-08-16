import { doc, setDoc, getDoc, Timestamp, getDocs, collection } from "firebase/firestore"
import { db } from '../config/firebase.config'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storageRef as storage } from "../config/firebaseStorage.config"

/**
 * 
 * @param {string} collectionName 
 * @returns {object}
 */

export async function getDocuments(collectionName) {
    try {
        const userCol = collection(db, collectionName);
        const userSnapshot = await getDocs(userCol);

        const userList = userSnapshot.docs.map(doc => ({...doc.data() }))

        if (userList.length > 0) {
            return userList;
        } else {
            throw new Error("No Post found!");
        }
    } catch (err) {
        return err.message;
    }
}

/**
 * 
 * @param {string} collectionName 
 * @param {string} id 
 * @returns {object}
 */

export async function getDocumentById(collectionName, id) {

    try {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const userData = docSnap.data();
            return userData;
        } else {
            return "No Such Document Found";
        }
    } catch (err) {
        return err.message;
    }
}