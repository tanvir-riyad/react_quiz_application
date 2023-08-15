import Account from "./account";
import classes from "../styles/Nav.module.css";
import logo from "../assets/images/logo-bg.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Quiz Based Tutorial</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
