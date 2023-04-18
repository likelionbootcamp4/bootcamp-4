import axios from "axios";
import { useForm } from "react-hook-form";

export default function ProductAdd() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function handleProductAdd(data) {
    axios
      .post("http://localhost:3000/products", data)
      .then((res) => console.log(res.data));
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
      <button>Add</button>
    </form>
  );
}
