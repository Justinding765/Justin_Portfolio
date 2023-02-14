import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/dropin-icon2.png";
import projImg2 from "../assets/img/dropin-icon3.png";
import projImg3 from "../assets/img/dropin-icon4.png";
import projImg4 from "../assets/img/dropin-icon5.png";
import projImg5 from "../assets/img/dropin-icon6.png";
import projImg6 from "../assets/img/Instructor_Student Website-icon1.png";
import projImg7 from "../assets/img/Instructor_Student Website-icon2.png";
import projImg8 from "../assets/img/Instructor_Student Website-icon3.png";
import projImg9 from "../assets/img/Instructor_Student Website-icon4.png";
import projImg10 from "../assets/img/Instructor_Student Website-icon5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import dropin from "../assets/img/dropin-icon.png";

export const Projects = () => {
    const projects = [ [
        {
          title: "Development Processs",
          description: "Languages, Frameworks/Libaries, Tools/Methodologies",
          imgUrl: "Orbit",
        },
        {
          title: "Features",
          description: "Main features of website",
          imgUrl: projImg1,
        },
        {
          title: "Create Group Feature",
          description: `Allows user to create a group based on their desired type of activity. The user can then set a group name, 
          group location, group skill level, group capcity and set a group profile picture `,
          imgUrl: projImg2,
        },
        {
          title: "Search Group Feature",
          description: `Allows user to search for a group and choose to join the group or chat with the group if they are already 
          a part of it. The feature provides a variety of ways to search including by activity, group name, and location`,
          imgUrl: projImg3,
        },
        {
          title: "Group Chat Feature",
          description: `Enables users in the same group to chat with one another. Each message has a time stamp and 
          group chat history is kept track of.`,
          imgUrl: projImg4,
        },
        {
          title: "Friends Feature",
          description: "Users can add/delete friends and have 1 on 1 chats with them",
          imgUrl: projImg5,
        },
    ], [{
      title: "Development Processs",
      description: "Languages, Frameworks/Libaries, Tools/Methodologies",
      imgUrl: "Bounce",
    },
    {
      title: "Registration Proccess",
      description: "Allows user to register an account as either an student or instructor",
      imgUrl: projImg6,
    },
    {
      title: "Homepage - Student",
      description: "Provides a custom homepage layout for students with customimzed widgets such as viewing grades and submitting anonymous feedback",
      imgUrl: projImg7,
    },
    {
      title: "Homepage - Instructor",
      description: `Provides a custom homepage layout for instructors with customimzed widgets such as adding marks for an 
      assignment, viewing student feedback ,student marks, student remark requests and personal details regarding each student`,
      imgUrl: projImg8,
    },
    {
      title: "Student Widgets",
      description: "Students can view their marks for various assignments and submit remark requests. they can also submit anonymous feedback to their instructors",
      imgUrl: projImg9,
    },
    {
      title: "Instructor Widgets",
      description: `Instructors can view anonymous feedback from students, course marks of students, 
      personal information of their students and input/modify student marks on assignments`,
      imgUrl: projImg10,
    },],
    []
  ];

    return (
    <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2><p>Projects</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">DROP IN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Instructor/Student Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mock Command Terminal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">
                      <Row>
                        <center><p>This is a Full Stack Web Application allowing like-minded individuals to find each other and organize 
                          activities. Users can search and join groups based on interests and location proximity, 
                          after which they may communicate with others in the group to organize activities together, like sports or board games.
                          <br /><br />We hope people will be able to use this application to meet up, make new friends, and form 
                          lasting bonds over common interests.</p>
                          <Nav.Link target="__blank" href="https://github.com/Justinding765/Sports-Activity-Finder-" className="source">Source Code</Nav.Link>
                          <br/></center>
                        {
                          projects[0].map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      <center>
                        <p> Developed a website that supports account creation, login, and logout features. It allows users 
                          to create accounts as either an instructor or a student with differing features depending on type of user. 
                          Has Integrated special features where instructors would get access to all the students’ grades, 
                          and have the ability to add or edit marks. Students would only be able to view their own grades 
                          and provide feedback to a selected instructor such has requesting remarks on assignments or asking 
                          questions</p>
                          <Nav.Link target="__blank" href="https://github.com/Justinding765/Instructor-Student-Grades-Database" className="source">Source Code</Nav.Link>
                          <br/>
                      </center>
                        {
                          projects[1].map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane >
                    <Tab.Pane eventKey="third">

                    <Row>
                      <center>
                        <p> A Mock Command Terminal written in Java.
                        The Mock Command Terminal replicates the typical features of a command terminal through CURL commands 
                        including downloading files from a URL as well as creating, deleting, 
                        modifying files and directories, and numerous additional features that are found in a standard command terminal<br/> <br/>
                        The user can create their own Mock Command Terminal through an IDE such as Visual Studio 
                        and construct and navigate through their own Mock File System</p>
                          <Nav.Link target="__blank" href="https://github.com/Justinding765/Mock-Command-Terminal" className="source">Source Code</Nav.Link>
                          <br/>
                      </center>
                        {
                          projects[2].map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
    </section>
)}