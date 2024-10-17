import { useEffect, useState } from "react";
function UseEffectFetch() {
  useEffect(() => {
    fetch("https://api.example.com/foods")
      .then((response) => response.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error(error));
  }, []);
  const [foods, setFoods] = useState([]);
  return (
    <div>
      <ul>
        {foods.map((foods) => (
          <li key={foods.id}>
            <h3>{foods.name}</h3>
            <p>{foods.description}</p>
            <p>{foods.price}</p>
            <img src={foods.image_url} alt={foods.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UseEffectFetch;
