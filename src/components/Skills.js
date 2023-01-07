import website from "../assets/img/website.png";
import OOP from "../assets/img/OOP.png";
import framework from "../assets/img/framework.png";
import tools from "../assets/img/tools.png";
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import background from '../assets/img/background1.jpg'

export const Skills = () => {
  const OOP_skills = [ "Java", "Python", "C/C++", "MATLAB", "R"]
  const web = ["HTML/CSS", "JavaScript", "SQL", "Neo4j", "MongoDB"]
  const frame = [ "Python Flask", "SharePoint", "jQuery", "React.js", "Bootstrap", "Node.js", "Ajax"]
  const tool = ["Git", "JIRA", "SVN", "Linux", "Visual Studio Code", "Docker Desktop", "IntelliJ"]
  const [info, setInfo] = useState([])
  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState("")
  useEffect(()=>{

    setInfo(info)
    if (info.length > 0){
      setShow(true)
    }
  },[info])
  const handleClose = () => {
    setShow(false)
  }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2><p>Skills</p>
                            <Carousel  responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item" onClick={() => setInfo(web)}>
                                    <img src={website} alt="Image" />
                                    <h5>Web Development</h5>
                                    
                                </div>
                                <div className="item" onClick={() => setInfo(OOP_skills)}>
                                    <img src={OOP} alt="Image" />
                                    <h5>Object Oriented Programming</h5>
                                </div>
                                <div className="item" onClick={() =>setInfo(frame)}>
                                    <img src={framework} alt="Image" />
                                    <h5>Frameworks/Libraries</h5>
                                </div>
                                <div className="item" onClick={() => setInfo(tool)}>
                                    <img src={tools} alt="Image" />
                                    <h5>Developer Tools</h5>
                                </div>     
                            </Carousel>                    
                        </div>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose} id="modal" >
                  <div style={{backgroundColor: "#150c25"}}>
                    <Modal.Body >
                      {info.length > 0 && info.map((item) => <p>{item}</p>)}
                      <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                    </Modal.Body>
                </div>
            </Modal>
            </Container>
            
            <img className="background-image-left" src={colorSharp} alt="Image" />
            
        </section>
        

      )
}