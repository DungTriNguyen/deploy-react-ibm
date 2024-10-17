import "./ListProduct.css";
const ListProduct = () => {
  const products = [
    { id: 1, name: "Product A", price: 60 },
    { id: 2, name: "Product B", price: 70 },
    { id: 3, name: "Product C", price: 80 },
    { id: 4, name: "Product D", price: 90 },
    { id: 5, name: "Product E", price: 100 },
    { id: 6, name: "Product F", price: 700 },
  ];
  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => (
          <li key={product.id} className="product-list-item">
            <span>
              {product.name} - {product.price}
            </span>
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListProduct;
