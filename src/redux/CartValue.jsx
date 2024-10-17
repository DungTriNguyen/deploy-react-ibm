import { useSelector } from "react-redux";
export const CartValue = () => {
  const counter = useSelector((state) => state.counter.counter);
  let totalAmount = counter * 100 + Math.random() * 15;
  return (
    <>
      <h2>The Total amount is {totalAmount}</h2>
    </>
  );
};
