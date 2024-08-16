import { addDoc, collection, doc, getDocs, setDoc, Timestamp } from "firebase/firestore"
import { DB_COLLECTIONS, DB_STORAGE } from '../constants'
import { db } from '../config/firebase.config'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storageRef as storage } from "../config/firebaseStorage.config"
import toast from "react-hot-toast"

export async function createPost(post) {
    try {
        const {
            title,
            content,
            creatorId,
            imageUrl,
            postImg
        } = post;

        const imgUrl = await uploadPost(postImg[0]);

        const newPost = {
            title,
            content,
            creatorId,
            uImage: imageUrl,
            imgUrl,
            updatedAt: Timestamp.fromDate(new Date()),
            createdAt: Timestamp.fromDate(new Date()),
        }

        await addDoc(collection(db, DB_COLLECTIONS.POSTS), newPost);
        toast.success("Post successfully created");
    } catch (err) {
        toast.error(`Post not created: ${err.message}`);
    }
}

export async function getAllPosts() {
    try {
        const userCol = collection(db, DB_COLLECTIONS.POSTS);
        const userSnapshot = await getDocs(userCol);

        const userList = userSnapshot.docs.map(doc => ({
            ...doc.data()
        }));

        if (userList.length > 0) {
            return userList;
        } else {
            throw new Error("No post found!");
        }
    } catch (error) {
        toast.error(`posts not found ${error.message}`)
    }
}

export async function uploadPost(file) {
    const storageRefInstance = ref(storage, `${DB_STORAGE.POST_IMAGES}/${file.name}`);
    await uploadBytes(storageRefInstance, file);
    const downloadURL = await getDownloadURL(storageRefInstance);
    return downloadURL;
}