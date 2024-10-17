import { useState } from "react";
function ConditionRendering() {
  const [items, setItems] = useState([
    "react",
    "html",
    "javascript",
    "node.js",
    "Angular",
    "NET",
  ]);
  return (
    <div>
      <h1>Fontend language</h1>
      {items.length > 5 ? (
        <ul>
          {items.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
      ) : (
        <p>No fontend languge is available</p>
      )}
    </div>
  );
}
export default ConditionRendering;
