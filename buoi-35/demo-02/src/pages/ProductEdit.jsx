import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductEdit() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: product,
  } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => axios.get(`http://localhost:3000/products/${productId}`),
    select: (res) => res.data,
    onSuccess: (data) => {
      reset(data);
    },
  });

  const productUpdateMutation = useMutation({
    mutationFn: (updateProduct) =>
      axios.put(`http://localhost:3000/products/${productId}`, updateProduct),
    onSuccess: () => {
      navigate("/shop");
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  function handleProductEdit(data) {
    productUpdateMutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(handleProductEdit)}>
      <div>
        <label>Title</label>
        <input type="text" {...register("title")} />
      </div>
      <div>
        <label>Price</label>
        <input type="text" {...register("price")} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" {...register("description")} />
      </div>
      <div>
        <label>Thumbnail</label>
        <input type="text" {...register("thumbnail")} />
      </div>
      <button>{productUpdateMutation.isLoading ? "Saving..." : "Save"}</button>
    </form>
  );
}
