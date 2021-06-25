import ProjectItem from "./ProjectItem";
import sav from "../Assets/Videos/SVG.png";
import weather from "../Assets/Videos/Weather.png";
import foodapp from "../Assets/Videos/foodapp.png";
import snake from "../Assets/Videos/snake.png";
import cal from "../Assets/Videos/calculator.png";
import classes from './Carousel.module.css'
const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className={`carousel slide ${classes.wide}`}
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
          style={{ backgroundColor: "#662d91" }}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          style={{ backgroundColor: "#662d91" }}
        ></button>
        {/* <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          style={{ backgroundColor: "#662d91" }}
        ></button> */}
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ paddingBottom: "10vh" }}>
          <a href="https://harsh-sandhu.github.io/WeatherApp/build/index.html" target="blank">
            <ProjectItem img={weather} name="Weather App" />
          </a>
          <a href="https://harsh-sandhu.github.io/SAV/build/index.html" target="blank">
            <ProjectItem img={sav} name="Sorting Algorithm Visualizer" />
          </a>
          <a href="https://harsh-sandhu.github.io/Food-Ordering-App/build/index.html" target="blank">
            <ProjectItem img={foodapp} name="Food Ordering App" />
          </a>
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              color: "#662d91",
              filter: "drop-shadow(0 0 5px black)",
              backgroundColor: "rgba(256,256,256,0.3)",
              borderRadius: "20px",
              width: "40vw",
              margin: "auto",
            }}
          >
            <h5>React Js Projects</h5>
            <p>Click on project to open</p>
          </div>
        </div>
        <div className="carousel-item" style={{ paddingBottom: "10vh" }}>
          <a href="https://harsh-sandhu.github.io/SnakeGame/" target="blank">
            <ProjectItem img={snake} name="Snake Game" />
          </a>
          <a href="https://harsh-sandhu.github.io/Calculator/" target="blank">
            <ProjectItem img={cal} name="Calculator" />
          </a>
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              color: "#662d91",
              filter: "drop-shadow(0 0 5px black)",
              backgroundColor: "rgba(256,256,256,0.3)",
              borderRadius: "20px",
              width: "40vw",
              margin: "auto",
            }}
          >
            <h5>Vanilla JavaScript Project</h5>
            <p>Click on project to open</p>
          </div>
        </div>
        {/* <div className="carousel-item" style={{ paddingBottom: "10vh" }}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              color: "#662d91",
              filter: "drop-shadow(0 0 5px black)",
              backgroundColor: "rgba(256,256,256,0.3)",
              borderRadius: "20px",
              width: "40vw",
              margin: "auto",
            }}
          >
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div> */}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
        style={{ color: "#662d91" }}
      >
        <span
          style={{ backgroundColor: "#662d91" }}
          className="carousel-control-prev-icon rounded-circle"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          style={{ backgroundColor: "#662d91" }}
          className="carousel-control-next-icon  rounded-circle"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Carousel;
