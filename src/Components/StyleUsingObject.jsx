import { useState } from "react";
function StyleUsingObject() {
  const [isVisible, setInVisible] = useState(true);
  const toggleVisibility = () => {
    setInVisible(!isVisible);
  };
  const messageStyle = {
    display: isVisible ? "block" : "none",
    color: "green",
    fontSize: "18px",
    marginTop: "10px",
  };

  // Cách 2
  //   const messageStyle() => ({
  //     display: isVisible ? "block" : "none",
  //     color: "green",
  //     fontSize: "18px",
  //     marginTop: "10px",
  //   });

  return (
    <div>
      <h2>Toggle Message</h2>
      <button onClick={toggleVisibility}>
        {isVisible ? "hide message" : "show message"}
      </button>
      <p style={messageStyle}>This is a hidden message</p>
    </div>
  );
}
export default StyleUsingObject;
