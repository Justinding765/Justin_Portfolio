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
        <Card imagen={pfp} content={"At Mount Royal Montreal"}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp2} content={"One of my friends get an internship at HubSpot in Cambridge, Massachusetts, so we decided to pay him a visit"}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp3} content={"A very good meal I had on the Boston Pier"}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp4} content={"Ramen!"}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp5} content={"Dont really have a good picture of working out, so I used this emote"}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp6} content={"A beautiful picture of the city of Boston taken during a bike ride"}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={pfp7} content={"Chilling in a random store after a long walk in Montreal"}/>
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