import { database } from "../firebase";
import { ref, get } from "firebase/database";
import { useEffect, useState } from "react";

export default function useAnswer(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const answerRef = ref(database, "answers/" + videoID + "/questions");

      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerRef);
        setLoading(false);

        if (snapshot.exists()) {
          setAnswers((prevQuestion) => {
            return [...prevQuestion, ...Object.values(snapshot.val())];
          });
          console.log("Fetched Questions:", questions);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID]);
  console.log(error);

  return {
    loading,
    error,
    answers,
  };
}
