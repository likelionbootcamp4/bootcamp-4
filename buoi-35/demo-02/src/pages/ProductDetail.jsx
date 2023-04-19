import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { productId } = useParams();
  const {
    isLoading,
    data: product,
    error,
    isError,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => axios.get(`https://dummyjson.com/pro/${productId}`),
    select: (response) => response.data,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div className="text-red-500">{error.message}</div>;

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