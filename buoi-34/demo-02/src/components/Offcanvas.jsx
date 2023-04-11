import Overlay from "./Overlay";

export default function Offcanvas({ open, onOffcanvasClose }) {
  //   if (!open) return null;

  return (
    <div className={open ? "" : "hidden"}>
      <Overlay onClick={onOffcanvasClose} />
      <div className="fixed top-0 left-0 bottom-0 max-w-[300px] w-full bg-slate-400">
        <button onClick={onOffcanvasClose}>Close</button>
      </div>
    </div>
  );
}
