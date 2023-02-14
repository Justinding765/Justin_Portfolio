import { useState, useEffect } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";

import navIcon4 from '../assets/img/nav-icon4.png';
import navIcon5 from '../assets/img/nav-icon5.png';
import navIcon6 from '../assets/img/nav-icon6.png';
import PDF from '../assets/img/Justin_Ding_Resume.pdf';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
    
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
     }
    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                    onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/justin-ding-b332091b1/" target="_blank"><img src={navIcon6} alt="linkden" /></a>
                             <a  href="https://github.com/Justinding765" className="git" target="_blank"><img  id = "git2" src={navIcon4} alt="Github" /></a> 
                             <a id="Resume_link" href={PDF} target="_blank"  without rel="noopener noreferrer"><img id = "Resume" src={navIcon5} alt="linkden" /></a>

                        </div>
                        <button className="vvd"  onClick={event =>  window.location.href='#connect'}><span>Let’s Connect</span></button>
                    </span>
                    
                </Navbar.Collapse>
            </Container>
    </Navbar>
    )

}