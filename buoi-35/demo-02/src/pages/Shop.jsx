import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function Shop() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => axios.get("http://localhost:3000/products"),
  });

  const queryClient = useQueryClient();

  const productDeleteMutation = useMutation({
    mutationFn: (id) => axios.delete(`http://localhost:3000/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  function handleProductDelete(id) {
    productDeleteMutation.mutate(id);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-4 gap-6">
      {data.data.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} alt="" />
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          <div className="flex gap-4">
            <Link to={`/products/edit/${product.id}`}>Edit</Link>
            <button onClick={() => handleProductDelete(product.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
