import Button from "./Button";
import CollapseText from "./CollapseText";
import { useState } from "react";

const Collapse = () => {
  const [visible, setVisible] = useState(false);

  function handleCollapse() {
    setVisible(!visible);
  }

  return (
    <div>
      <Button onClick={handleCollapse}>Collapse</Button>
      <CollapseText visible={true} />
      {/* <CollapseText visible={true} /> */}
    </div>
  );
};

export default Collapse;
