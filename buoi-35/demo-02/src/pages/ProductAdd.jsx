import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function ProductAdd() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const productAddMutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post("http://localhost:3000/pro", newProduct),
    onSuccess: () => {
      reset();
    },
  });

  function handleProductAdd(data) {
    productAddMutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(handleProductAdd)}>
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
      <button>{productAddMutation.isLoading ? "Adding..." : "Add"}</button>

      {productAddMutation.isSuccess && (
        <div className="text-green-500">Successfully added product!</div>
      )}

      {productAddMutation.isError && (
        <div className="text-red-500">{productAddMutation.error.message}</div>
      )}
    </form>
  );
}
