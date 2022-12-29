import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {PopupActions, DialogType} from "react-custom-popup";

//import 'animate.css';
//import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  const [show, setShow] = useState(true);
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
}

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_20855xz",
        "template_me6tv63",
        form.current,
        "kwg9bJZe2_I5ZXrpN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("success");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <>
    
    <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                    <img  src={contactImg} alt="Contact Us"/>
                </Col>
                <Col size={12} md={6}>
                    <h2>Let's Get in Touch!</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <Row>
                            <Col size={12} sm={12} className="px-1" >
                            <input type="text" value={formDetails.firstName} placeholder="Full Name" name="user_name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                    
                            <Col size={12} sm={6} className="px-1" >
                            <input type="email" value={formDetails.email} placeholder="Email Address" name="user_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col size={12} sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                            </Col>
                            <Col size={12} className="px-1" >
                            <textarea rows="6" value={formDetails.message} placeholder="Message" name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                            status.message &&
                            <Col>
                                <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>
                            }
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
          
    </section>
 
    </>
  )
}