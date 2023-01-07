import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import pfp from "../assets/img/pfp.jpg";
import pfp2 from "../assets/img/pfp2.jpg";
import pfp3 from "../assets/img/pfp3.jpg";
import pfp4 from "../assets/img/pfp4.png";
import pfp5 from "../assets/img/pfp5.png";
import pfp6 from "../assets/img/pfp6.jpg";
import pfp7 from "../assets/img/pfp7.jpg";


export const Profile_pic = () => {

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp2}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp3}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp4}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp5}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp6}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp7}/>
      )
    },
  ];
  return (
    <div className="">
      <Carousel
        cards={cards}
        height="500px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}