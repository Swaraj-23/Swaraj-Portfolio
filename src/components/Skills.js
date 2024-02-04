import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp2.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png"
import javascript from "../assets/img/js.png";
import react from "../assets/img/react.svg";
import c from "../assets/img/c.svg";
import cPlus from "../assets/img/c++.svg";
import java from "../assets/img/java.svg";
import mysql from "../assets/img/Mysql.svg";
import dsa from "../assets/img/dsa.png";


function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Explore my diverse skill set, a fusion of problem-solving
                expertise and creative innovation.<br></br> Embrace my
                adaptability in the evolving tech landscape.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html} alt="image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={c} alt="image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={cPlus} alt="image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={java} alt="image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={dsa} alt="image" />
                  <h5>DSA</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="image" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}

export default Skills;
