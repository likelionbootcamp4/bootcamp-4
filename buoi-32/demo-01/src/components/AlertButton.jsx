import Button from "./Button";

export default function AlertButton({ message, children }) {
  return (
    <Button
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </Button>
  );
}
