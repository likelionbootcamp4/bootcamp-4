import CarouselIndicator from "./CarouselIndicator";

export default function CarouselIndicators({
  activeItem,
  carouselItems,
  onIndicatorClick,
}) {
  return (
    <div className="absolute left-1/2 bottom-6 -translate-x-1/2 flex items-center gap-2.5">
      {carouselItems.map((item, index) => (
        <CarouselIndicator
          key={index}
          active={activeItem === index}
          onClick={() => onIndicatorClick(index)}
        />
      ))}
    </div>
  );
}
