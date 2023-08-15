import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_APP_ID,
  databaseURL:
    "https://react-quiz-app-dev-fe348-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

// const quizRef = ref(database, "quiz/" + "2C5834qx0sA" + "/questions");

// // Function to fetch videos
// const fetchVideos = async () => {
//   try {
//     const snapshot = await get(quizRef);

//     if (snapshot.exists()) {
//       const videosData = snapshot.val();
//       const videos = Object.values(videosData); // Convert object to an array

//       console.log("Fetched questions:", videos);
//       return videos;
//     } else {
//       console.log("No videos found");
//     }
//   } catch (error) {
//     console.error("Error fetching videos:", error);
//   }
// };

// // Call the fetchVideos function
// fetchVideos();

export { database };
export default app;
