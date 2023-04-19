import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-4 text-red-500">
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link>
      <Link to="/products/new">New Product</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
}
