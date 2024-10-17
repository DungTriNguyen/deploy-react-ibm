import { useState } from "react";
const FirstChillComponent = () => {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);
  const updateItems = () => {
    const updateItems = [...items];
    updateItems[0] = "Update Item 1";
    setItems(updateItems);
  };
  console.log(updateItems);
  return (
    <>
      <button onClick={updateItems}>Update Item</button>
      <ul>
        {items.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </>
  );
};
export default FirstChillComponent;
