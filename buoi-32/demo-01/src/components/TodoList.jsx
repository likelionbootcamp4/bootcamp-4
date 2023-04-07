export default function TodoList({ todos = [] }) {
  return todos.length === 0 ? (
    <p className="text-center">No items found</p>
  ) : (
    <ul className="text-center">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
