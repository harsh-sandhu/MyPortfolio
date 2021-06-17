import classes from './Project.module.css';
import ProjectItem from '../../Component/ProjectItem';
import Carousel from '../../Component/Carousel';
const Project=()=>(
    <div className={classes.page}>
        <div id="projectHead" className={classes.heading}>
            <h1 className="display-3">.project()</h1>
        </div>
        {/* <ProjectItem/>
        <ProjectItem/>
        <ProjectItem/> */}
        <Carousel/>
    </div>
)
export default Project;