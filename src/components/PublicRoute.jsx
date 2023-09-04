import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function PublicRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return !currentUser ? (
    <Route {...rest}>{(props) => <Element {...props} />}</Route>
  ) : (
    <Navigate to="/login" />
  );
}
