import AlertButton from "./components/AlertButton";
import Button from "./components/Button";
import LogButton from "./components/LogButton";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="flex gap-2 items-center">
      {/* <AlertButton message="Nice to meet you">Say Hi</AlertButton>
      <AlertButton message="I am Huy">Say your name</AlertButton>
      <AlertButton message="Something">Say Something</AlertButton> */}
      {/* <LogButton /> */}
      <Button
        onPress={() => {
          alert("Hi");
        }}
      >
        Say Hi
      </Button>
      <Button
        onPress={() => {
          console.log("hello");
        }}
      >
        Say Hello
      </Button>
    </div>
  );
}
