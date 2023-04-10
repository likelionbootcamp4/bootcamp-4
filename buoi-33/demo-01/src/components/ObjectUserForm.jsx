import { useState } from "react";
import Input from "./Input";

const ObjectUserForm = () => {
  const [user, setUser] = useState({
    username: "huynguyen",
    password: "1234",
    fullname: "Nguyen Duc Huy",
  });

  function handleUsernameChange(e) {
    setUser({ ...user, username: e.target.value });
  }

  function handlePasswordChange(e) {
    setUser({ ...user, password: e.target.value });
  }

  function handleFullnameChange(e) {
    setUser({ ...user, fullname: e.target.value });
  }
  return (
    <div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Username"
          value={user.username}
          onChange={handleUsernameChange}
        />
        <Input
          placeholder="Password"
          type="password"
          value={user.password}
          onChange={handlePasswordChange}
        />
        <Input
          placeholder="Full Name"
          value={user.fullname}
          onChange={handleFullnameChange}
        />
      </div>
      <div>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
        <p>Full Name: {user.fullname}</p>
      </div>
    </div>
  );
};

export default ObjectUserForm;
