export default function LogButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
      onClick={() => {
        console.log("Hi");
      }}
    >
      Log
    </button>
  );
}
