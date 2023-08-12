import "./styles/App.css";
import Layout from "./components/layout";
// import Home from "./components/pages/Home";
// import Signup from "./components/pages/Signup";
// import Login from "./components/pages/Login";
import Quiz from "./components/pages/quiz";

export default function App() {
  return (
    <div>
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </div>
  );
}
