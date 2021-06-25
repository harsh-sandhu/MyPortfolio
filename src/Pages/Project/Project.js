import classes from './Project.module.css';
import Carousel from '../../Component/Carousel';
const Project=()=>(
    <div className={classes.page}>
        <div id="projectHead" className={classes.heading}>
            <h1 className="display-3">.project()</h1>
        </div>
        <Carousel/>
    </div>
)
export default Project;