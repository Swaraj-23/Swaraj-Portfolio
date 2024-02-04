import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/foodies1.webp";
import projImg2 from "../assets/img/ecomzy1.png";
import projImg3 from "../assets/img/rapid-news1.png";
import projImg4 from "../assets/img/blog1.png";
import projImg5 from "../assets/img/weather-app1.png";
import projImg6 from "../assets/img/snake-game1.png";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"


function Project(){

    const projects = [
        {
          title: "Foodies",
          description: "Campus canteen app: Menus, nutrition, health news integration.",
          imgUrl: projImg1,
          webUrl: "https://foodies-web-app.vercel.app/"
        },
        {
          title: "Ecomzy",
          description: "E-commerce app: Seamless shopping, cart, responsive navigation.",
          imgUrl: projImg2,
          webUrl: "https://ecomzy-shopping-webapp.netlify.app/"
        },
        {
          title: "RapidNews",
          description: " News app: Explore, search, stay updated effortlessly.",
          imgUrl: projImg3,
          webUrl: "https://rapidnews-webapp.netlify.app/"
        },
        {
          title: "IT-Insights-Blogs",
          description: "Blog app: Explore, read, and toggle dark mode effortlessly.",
          imgUrl: projImg4,
          webUrl: "https://it-insights-blogs.netlify.app/"
        },
        {
          title: "Weather Pulse",
          description: "Weather app: Real-time updates, city search, beautiful icons.",
          imgUrl: projImg5,
          webUrl: "https://weatherpulse-webapp.netlify.app/"
        },
        {
          title: "Snake Game",
          description: "Classic Snake Game: Navigate, grow, avoid, aim for high score!",
          imgUrl: projImg6,
          webUrl: "https://snake-game-webapp.netlify.app/"
        },
      ];

    return(
        <div>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>Discover my portfolio of projects, each a testament to simplicity, functionality, and creative design. Let's build something amazing together.</p>  
                        </Col>
                    </Row>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return(
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                </Container>
                <img className="background-image-right" src={colorSharp2}/>
            </section>
        </div>
    )
}

export default Project;