export default function Button({ onPress, children }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded"
      onClick={onPress}
    >
      {children}
    </button>
  );
}
