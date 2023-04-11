import Overlay from "./Overlay";

export default function Modal({ open, onModalClose }) {
  if (!open) return null;

  return (
    <div>
      <Overlay onClick={onModalClose} />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-slate-200 w-[400px] h-[300px]">
        <button onClick={onModalClose}>Close</button>
      </div>
    </div>
  );
}
