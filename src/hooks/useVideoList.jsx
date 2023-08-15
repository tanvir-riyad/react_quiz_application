import { database } from "../firebase";
import { ref, get } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  // const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      const videosRef = ref(database, "videos");

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(videosRef);
        setLoading(false);

        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    // Call the fetchVideos function
    fetchVideos();
  }, []);

  return {
    loading,
    error,
    videos,
  };
}
