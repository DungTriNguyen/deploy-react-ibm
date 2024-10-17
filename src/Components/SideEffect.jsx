import { useState, useEffect } from "react";
function SideEffect() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://reqbin.com/echo/post/json")
      .then((Response) => Response.json())
      .then((data) => {
        console.log(data);
        setFoods(foods);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1> Food List</h1>
      <ul>
        {foods.map((food) => {
          return (
            <>
              <li key={food.id}>
                <h1>{food.Customer}</h1>
                <p>{food.Quantity}</p>
                <p>{food.Price}</p>
                <img
                  src={food.image_url}
                  alt={food.Customer}
                  height="100px"
                  width="100px"
                />
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
export default SideEffect;
