import Button from "./Button";

export default function NavBar() {
  return (
    <nav>
      <a href="">Logo</a>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
        <Button />
      </ul>
    </nav>
  );
}
