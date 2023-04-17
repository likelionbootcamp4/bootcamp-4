import { useEffect, useState } from "react";

export default function App() {
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  if (product === null) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => setId(id + 1)}>Id: {id}</button>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
