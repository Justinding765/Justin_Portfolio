import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Web Developer", "Software Developer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200);
    const period = 1000;
    const [index, setIndex] = useState(1);
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
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(200);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hello! I'm Justin. A passionate `} 
                        <span className="txt-rotate" dataPeriod="1000" 
                        data-rotate='[ "Web Developer", "Software Developer" ]'><span className="wrap">{text}</span>
                        </span></h1>
                        <p>About Me </p>
                        <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                      </div>}
                    </TrackVisibility>
                    </Col>
                
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>    
                    </Col>

                </Row>
            </Container>
            </section>
    )
}