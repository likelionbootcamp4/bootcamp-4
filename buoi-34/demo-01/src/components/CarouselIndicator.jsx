export default function CarouselIndicator({ active, onClick }) {
  return (
    <button
      className={`w-2.5 h-2.5 border border-white rounded-full ${
        active && "bg-white"
      }`}
      onClick={onClick}
    ></button>
  );
}
