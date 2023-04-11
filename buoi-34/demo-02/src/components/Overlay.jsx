export default function Overlay({ onClick }) {
  return (
    <div className="fixed inset-0 bg-green-500/20" onClick={onClick}></div>
  );
}
