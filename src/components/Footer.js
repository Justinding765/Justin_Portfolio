import { Container, Row, Col } from "react-bootstrap";
import navIcon4 from '../assets/img/nav-icon4.png';
import navIcon5 from '../assets/img/nav-icon5.png';
import navIcon6 from '../assets/img/nav-icon6.png';
import PDF from '../assets/img/Justin_Ding_Resume.pdf';
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/justin-ding-b332091b1/" target="_blank"><img src={navIcon6} alt="linkden" /></a>
            <a  href="https://github.com/Justinding765" className="git" target="_blank"><img  id = "git2" src={navIcon4} alt="Github" /></a> 
            <a id="Resume_link" href={PDF} target="_blank"  without rel="noopener noreferrer"><img id = "Resume" src={navIcon5} alt="linkden" /></a>

                        </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}