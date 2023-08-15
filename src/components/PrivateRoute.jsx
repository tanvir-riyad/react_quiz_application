import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function PrivateRoute({ element: Element, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Element {...props} />}</Route>
  ) : (
    <Navigate to="/login" />
  );
}
