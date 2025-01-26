import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'

function NavigationBar() {

    const[activeLink , setActiveLink] = useState('home');
    const[scrolled , setScrolled] = useState(false);

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }

    useEffect( () => {
        const onScroll = () =>{
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll );

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

  return (
    <div>
      <Navbar expand="lg" className={scrolled? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}    onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
              <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/swaraj-pawar-webdev"><img src={navIcon1} alt=""/></a>
                    <a href="https://github.com/Swaraj-23"><img src={navIcon2} alt=""/></a>
                    <a href="https://leetcode.com/swaraj_pawar_7/"><img src={navIcon3} alt=""/></a>
                </div>
                <a href="#connect">
                  <button className="vvd"><span>Let's Connect</span></button>
                </a>   
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
