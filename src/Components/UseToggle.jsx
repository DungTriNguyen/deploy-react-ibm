import { useState } from "react";

function UseToggle(initialValue = false) {
  const [isToggle, setIsToggle] = useState(initialValue);

  const toggle = () => {
    setIsToggle((prev) => !prev);
  };

  return [isToggle, toggle];
}

export default UseToggle;
