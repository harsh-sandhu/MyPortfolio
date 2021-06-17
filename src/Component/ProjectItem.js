import classes from './ProjectItem.module.css'
const ProjectItem = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.img}></img>
      <div className={classes.details}>
      <h3>{props.name}</h3>
      </div>
    </div>
  );
};
export default ProjectItem;
