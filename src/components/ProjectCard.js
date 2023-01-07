import { Col, Container } from "react-bootstrap";
import { Orbit } from "./Orbit";
import { Bounce } from "./Bounce";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
      {imgUrl != "Orbit" && imgUrl != "Bounce" &&
        <img src={imgUrl} />
      }
      {imgUrl == ( "Orbit") &&
        <Orbit />
      }

      {imgUrl == ( "Bounce") &&
        <Container>
          <Bounce />
        </Container>  
      }
        
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}