import Profile from "./components/Profile";

const users = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Luu",
    isAdmin: true,
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    name: "Hoang Anh",
    size: 100,
    isAdmin: true,
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Trang",
    size: 200,
    isAdmin: false,
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Luu",
    size: 300,
    isAdmin: false,
  },
];

export default function App() {
  return (
    <div>
      {users
        .filter((user) => !user.isAdmin)
        .map((user) => (
          <Profile
            key={user.id}
            name={user.name}
            imageUrl={user.imageUrl}
            size={user.size}
            isAdmin={user.isAdmin}
          />
        ))}
    </div>
  );
}
