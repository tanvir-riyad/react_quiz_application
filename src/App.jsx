import "./styles/App.css";
import Layout from "./components/layout";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/quiz";
import Result from "./components/pages/Result";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "./context/authContext";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/quiz/:id" element={<Quiz />} />
            <Route exact path="/result/:id" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
