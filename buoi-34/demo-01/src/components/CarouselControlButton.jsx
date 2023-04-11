export default function CarouselControlButton({ position, onClick, children }) {
  return (
    <button
      className={`w-12 h-12 rounded-full bg-white/20 absolute top-1/2 -translate-y-1/2 flex justify-center items-center ${
        position === "left" ? "left-10" : "right-10"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
