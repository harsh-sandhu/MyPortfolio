import classes from "./Home.module.css";
import showcase from "../../Assets/showcase.png";
import { useEffect } from "react";
const Home = () => {
  return(
    <div className={classes.bg}>
    <div className={classes.bgShowcase}>
      <img id="myImage" src={showcase} className={classes.bgImage}></img>
    </div>
    <div className={classes.showcaseTitle}>
      <div className={`${classes.animate} ${classes.bgHeading1}`}>
        <span className={classes.span}>Harsh</span>
      </div>
      <div className={`${classes.animate} ${classes.bgHeading2}`}>
        <span className={classes.span}>Sandhu</span>
      </div>
    </div>
  </div>
  )
};
export default Home;
