export default function Item({ name, hasDone }) {
  //   if (hasDone) {
  //     return <li>{name} (done)</li>;
  //   }

  return (
    <li>
      {name} {hasDone && "(done)"}
    </li>
  );
}
