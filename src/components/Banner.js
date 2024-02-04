import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
import { useEffect, useState } from "react";
import 'animate.css';

function Banner() {

    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["a Web Developer", "a Coding Enthusiast"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect( () =>{
        let ticker = setInterval( () => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0 , text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }

        else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
        
    }

    return(
        <div>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline animate__animated animate__bounceInDown">Welcome to my portfolio</span>
                            <h1>{"Hi I'm Swaraj Pawar "}<span className="wrap">{text}</span></h1>
                            <p>Aspiring student with a passion for coding, proficient in front-end development, actively mastering full- stack web development.</p>
                            <a href="#connect">
                                <button>Let's connect <ArrowRightCircle size={25}/></button>
                            </a>
                        </Col>

                        <Col xs={12} md={6} xl={5}>
                            <img src={headerImg} alt="Header-img"></img>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Banner;