import { useState } from "react";
import Button from "./Button";
import CounterNumber from "./CounterNumber";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    count = count + 1;
    console.log(count);
  }

  function handleDecrement() {
    // setCount(count - 1);
  }

  return (
    <div className="flex items-center gap-4">
      <Button onClick={handleDecrement}>-</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <p>{count}</p>
      <Button onClick={handleIncrement}>+</Button>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  );
};

export default Counter;
