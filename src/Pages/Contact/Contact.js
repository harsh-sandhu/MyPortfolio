import classes from "./Contact.module.css";
import image from "../../Assets/contact.png";
const Contact = () => (
  <div className={classes.page}>
    <div id="contactHead" className={classes.heading}>
      <h1 className="display-3">.contact()</h1>
    </div>
    <div className={classes.box}>
      <div className={classes.links}>
        <a className={classes.github} href="https://github.com/harsh-sandhu">
          <i className="fab fa-github"></i> harsh-sandhu
        </a>
        <a
          className={classes.linkedin}
          href="https://www.linkedin.com/in/harsh-sandhu/"
        >
          <i className="fab fa-linkedin-in"></i> Harsh Sandhu
        </a>
        <a className="classes.mail" href="#contact">
          <i className="fas fa-envelope"></i>{" "}
          harshsandhu.cse19@chitkarauniversity.edu.in
        </a>
        <a href="#contact">
          <i className="fas fa-phone"></i> +91-9069822220
        </a>
      </div>
      <div id="contactImg" style={{height:'90vh'}} className={classes.contactImg}>
        <img src={image} ></img>
      </div>
    </div>
  </div>
);
export default Contact;
