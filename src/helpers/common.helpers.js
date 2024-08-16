import { Timestamp } from "firebase/firestore";

// src/helpers/helper.js
export function formatDate(timestamp) {
    let date;

    if (timestamp && timestamp.seconds) {
        // Handle Firebase Timestamp
        date = new Date(timestamp.seconds * 1000);
    } else {
        // Handle other types of date strings or objects
        date = new Date(timestamp);
    }

    if (isNaN(date.getTime())) {
        return "Invalid date"; // Handle invalid date values
    }

    // Format date
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Format time
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${month} ${day}, ${year} at ${hours}:${formattedMinutes} ${ampm}`;
}

export function getPostTime(postTimestamp) {
    const postDate = postTimestamp.toDate();
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 7) {
        return `${days} days ago`;
    } else if (weeks < 4) {
        return `${weeks} weeks ago`;
    } else if (months < 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    }
}