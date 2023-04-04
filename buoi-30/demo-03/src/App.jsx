import Item from "./components/Item/Item";

export default function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        <Item name="Clean room" hasDone={true} />
        <Item name="Do exercises" hasDone={true} />
        <Item name="Go to sleep" hasDone={false} />
      </ul>
    </div>
  );
}
