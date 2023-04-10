import { useState } from "react";
import Input from "./Input";

const TextInput = () => {
  const [text, setText] = useState("hello");

  function handleInputChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <Input value={text} onChange={handleInputChange} />

      <p>Result: {text}</p>
    </div>
  );
};

export default TextInput;
