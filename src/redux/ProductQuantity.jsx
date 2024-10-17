import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlicde";
function ProductQuatity() {
  const dispatch = useDispatch;
  const counter = useSelector((state) => state.counter.counter);
  return (
    <>
      <h1>In Cart Product</h1>
      <div>
        <h1>Products Number</h1>
        <div>
          <div>Product Quantity</div>
          <a href="#" onClick={() => dispatch(increment())}></a>
          <span>-</span>
          <input type="text" value={counter} />
          <a href="#" onClick={() => dispatch(decrement())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}
export default ProductQuatity;
