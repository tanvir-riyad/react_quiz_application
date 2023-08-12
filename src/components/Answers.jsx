import classes from "../styles/answers.module.css";

import Checkbox from "./Checkbox";

export default function Answers() {
  return (
    <div class={classes.answers}>
      <Checkbox className={classes.answer} text="Test Answer" />
    </div>
  );
}
