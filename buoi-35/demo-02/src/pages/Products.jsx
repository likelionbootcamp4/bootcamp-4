import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const productsPerPage = 10;

export default function Products() {
  const [products, setProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(searchParams.get("q") || "");
  const [categories, setCategories] = useState(["all"]);
  const [pageNum, setPageNum] = useState(Number(searchParams.get("page")) || 1);
  const [numOfPages, setNumOfPages] = useState(0);

  useEffect(() => {
    const skip = (searchParams.get("page") - 1) * productsPerPage;
    axios
      .get(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`
      )
      .then((res) => {
        setProducts(res.data.products);
        setNumOfPages(Math.ceil(res.data.total / productsPerPage));
      });
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ page: pageNum });
  }, [pageNum]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories([...categories, ...res.data]));
  }, []);

  // useEffect(() => {
  //   const category = searchParams.get("category"); // skincare

  //   const url = `https://dummyjson.com/products${
  //     !category || category === "all" ? "" : `/category/${category}`
  //   }`;
  //   axios.get(url).then((res) => setProducts(res.data.products));
  // }, [searchParams]);

  // useEffect(() => {
  //   let url;
  //   const search = searchParams.get("q");
  //   if (search) {
  //     url = `https://dummyjson.com/products/search?q=${search}`;
  //   } else {
  //     url = "https://dummyjson.com/products";
  //   }

  //   axios.get(url).then((res) => {
  //     setProducts(res.data.products);
  //   });
  // }, [searchParams]);

  if (products === null) return <div>Loading...</div>;

  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          className="border"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={() => setSearchParams({ q: searchText })}>
          Search
        </button>
      </div>

      <div>
        <select
          value={searchParams.get("category") || ""}
          onChange={(e) => setSearchParams({ category: e.target.value })}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <img src={product.thumbnail} alt="" />
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button onClick={() => setPageNum(pageNum - 1)}>Prev</button>
        {Array.from({ length: numOfPages }, (_, i) => i + 1).map((item) => (
          <button
            key={item}
            onClick={() => setPageNum(item)}
            style={{
              color: pageNum === item ? "blue" : "black",
            }}
          >
            {item}
          </button>
        ))}
        <button onClick={() => setPageNum(pageNum + 1)}>Next</button>
      </div>
    </div>
  );
}
