import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setProducts(res.data.products);
    });

    // fetch("https://dummyjson.com/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data.products));
  }, []);

  if (products === null) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <img src={product.thumbnail} alt="" />
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
        </Link>
      ))}
    </div>
  );
}
