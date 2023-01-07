import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";

export default function Carroussel(props) {
    const size = props.cards.length 
    const [currentCount, setCount] = useState(10);
    const timer = () => setCount(currentCount - 1);
    const[slide_num, setSlide] = useState(0)
    useEffect(
        () => {
            setSlide((slide_num+ 1))
            console.log(slide_num % size)
            handleSubmit()
            const id = setInterval(timer,4000);
            return () => clearInterval(id);
        },
        [currentCount]
    
    );

    
    const table = props.cards.map((element, index) => {
        return { ...element,handleSubmit};
      });

  function handleSubmit() {
    setGoToSlide((slide_num+ 1) % size) 
  }
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);
  return (
    <div
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
