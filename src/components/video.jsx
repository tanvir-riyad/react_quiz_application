import image from "../assets/images/3.jpg";
import classes from "../styles/video.module.css";

export default function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} Questions</p>
        <p>Total point : {noq * 5}</p>
      </div>
    </div>
  );
}
