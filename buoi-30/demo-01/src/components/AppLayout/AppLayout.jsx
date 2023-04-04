import "./AppLayout.css";

export default function AppLayout({ children }) {
  return (
    <div>
      <div>Navbar</div>
      <main>{children}</main>
      <div>Footer</div>
    </div>
  );
}
