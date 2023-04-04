import "./Avatar.css";

export default function Avatar({
  imgUrl = "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
  name = "Anonymous",
  size = 100,
}) {
  return (
    <img
      className="avatar"
      src={imgUrl}
      alt={name}
      width={size}
      height={size}
    />
  );
}
