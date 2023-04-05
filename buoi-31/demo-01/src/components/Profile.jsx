export default function Profile({
  imageUrl = "https://images.unsplash.com/photo-1529946825183-536c6317f60e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80",
  name = "User123456",
  size = 100,
  isAdmin = false,
}) {
  return (
    <div>
      <img
        style={{
          borderRadius: 9999,
          width: size,
          height: size,
        }}
        src={imageUrl}
        alt={name}
      />
      <h2>
        {name} {isAdmin && "(Admin)"}
      </h2>
    </div>
  );
}
