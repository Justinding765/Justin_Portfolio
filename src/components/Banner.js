import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Profile_pic } from "./Profile_pic";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import pfp8 from '../assets/img/pfp8.jpg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Software Developer", "Gym Enthusiast", "Traveller" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const period = 1000;
    const [show, setShow] = useState(false);
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);

        return () => { clearInterval(ticker) };
      }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 1.5);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setDelta(200);
        } else {
        }
      }
      const handleClose = () => {
        setShow(false)
      }
      const handleOpen = () => {
        setShow(true)
      }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={10} xl={10}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                          <span className="tagline">Welcome to my Portfolio</span>
                          <h1>{"Hello! I'm Justin! A very passionate " } 
                          <span className="txt-rotate" ><span className="wrap">{text}</span>
                          </span></h1>
                          <p id="about" onClick={() => handleOpen()}>About Me </p>
                        
                          <Modal show={show} onHide={handleClose} id="modal" >
                            <div style={{backgroundColor: "#151515"}}>
                              <Modal.Body >
                              <center>
                                <img src={pfp8} alt="Image" style={{width: "50%", marginBottom:"5%"}}/>
                                <p>I am fourth year student completing a double major in Computer Science and Statistics at the University of Toronto Scarborough. 
                                  I have professional experience as a Full Stack Developer in the Government, and have done multiple software development projects
                                  on the side for both educational purposes and as a hobby. 
                                  Feel free to reach out to me by clicking the "Let's Connect" button and filling out the form!</p>
                                
                                  <Button variant="secondary" onClick={handleClose}>
                                      Close
                                  </Button>
                                </center>
                              </Modal.Body>
                            </div>
                          </Modal>
                        </div>}
                      </TrackVisibility>
                    </Col>
                  
                </Row>
                <Row>
                <Profile_pic />
                </Row>
            </Container>
            </section>
    )
}