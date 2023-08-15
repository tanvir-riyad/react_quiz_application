import { database } from "../firebase";
import { ref, get } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestion(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  // const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchQuestion() {
      const quizRef = ref(database, "quiz/" + videoID + "/questions");

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizRef);
        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
          });
          console.log("Fetched Questions:", questions);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
      }
    }

    fetchQuestion();
  }, []);

  return {
    loading,
    error,
    questions,
  };
}
