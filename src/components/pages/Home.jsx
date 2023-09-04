import { useAuth } from "../../context/authContext";
import Videos from "../videos";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { currentUser } = useAuth();

  // Check if the user is authenticated
  if (!currentUser) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, allow access to the home page
  return <Videos />;
}
