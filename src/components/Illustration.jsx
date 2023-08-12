import classes from "../styles/Illustration.module.css";
import singupimage from "../assets/images/signup.svg";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={singupimage} alt="Signup" />
    </div>
  );
}
