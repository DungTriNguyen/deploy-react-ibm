import React from "react";

const SecondChillComponent = React.memo(() => {
  console.log("Rendering Second Child Component");
  return (
    <div>
      <h2>Second Child Component</h2>
      <p>This is the second Child Component</p>
    </div>
  );
});

export default SecondChillComponent;
