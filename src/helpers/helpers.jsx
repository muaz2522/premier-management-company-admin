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
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  return `${month} ${day}, ${year} at ${hours}:${formattedMinutes} ${ampm}`;
}
