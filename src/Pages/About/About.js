import classes from "./About.module.css";
const About = () => (
  <div className={classes.page}>
    <div id="aboutHead" className={classes.heading}>
      <h1 className="display-2">.aboutMe()</h1>
    </div>
    <div id="aboutSkills" className={classes.skills}>
      <div className={classes.aboutMe}>
        <p>
          I'm a <span className={classes.strong}>student</span> currently
          seeking 
          <span className={classes.strong}> Bachelor of Engineering </span>
          in field of <span className={classes.strong}> Computer Science Engineering</span>. I love to develop websites
          and i am interested in various projects testing my skills and learning
          potential
        </p>
      </div>
      <div classname={classes.skillSet}>
        <h2>Skills</h2>
        <ul className={classes.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Vanilla JS</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>jQuery</li>
          <li>Bootstrap</li>
          <li>Three.js</li>
          <li>Java</li>
          <li>C/C++</li>
        </ul>
      </div>
    </div>
  </div>
);
export default About;
