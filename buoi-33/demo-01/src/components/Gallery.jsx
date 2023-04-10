import { useState } from "react";
import Button from "./Button";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const images = [
    "https://plus.unsplash.com/premium_photo-1676550886096-bfc64aae1e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1680549645205-7330eab343d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1680978560866-481aff9fd6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://plus.unsplash.com/premium_photo-1674332004007-535c8af278a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1975&q=80",
  ];

  function handleNext() {
    setIndex(index + 1);
  }

  return (
    <div>
      <Button onClick={handleNext}>Next</Button>
      <img src={images[index]} alt="" />
    </div>
  );
};

export default Gallery;
