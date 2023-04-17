import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (product === null) return <div>Loading...</div>;

  return (
    <div>
      <img src={product.thumbnail} alt="" />
      <p>Id: {product.id}</p>
      <h2>Title: {product.title}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
