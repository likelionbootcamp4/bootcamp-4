import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CarouselControlButton from "./CarouselControlButton";

export default function CarouselControl({ onPrevItem, onNextItem }) {
  return (
    <div>
      <CarouselControlButton position="left" onClick={onPrevItem}>
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </CarouselControlButton>

      <CarouselControlButton position="right" onClick={onNextItem}>
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </CarouselControlButton>
    </div>
  );
}
