import { useState } from "react";
import CarouselControl from "./CarouselControl";
import CarouselIndicators from "./CarouselIndicators";
import CarouselItem from "./CarouselItem";

export default function Carousel({ carouselItems }) {
  const [index, setIndex] = useState(0);

  function handlePrevItem() {
    setIndex(index === 0 ? carouselItems.length - 1 : index - 1);
  }

  function handleNextItem() {
    setIndex(index === carouselItems.length - 1 ? 0 : index + 1);
  }

  function handleIndicatorClick(i) {
    setIndex(i);
  }

  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="relative">
          <CarouselItem imageUrl={carouselItems[index]} />
          <CarouselControl
            onPrevItem={handlePrevItem}
            onNextItem={handleNextItem}
          />
          <CarouselIndicators
            activeItem={index}
            carouselItems={carouselItems}
            onIndicatorClick={handleIndicatorClick}
          />
        </div>
      </div>
    </div>
  );
}
