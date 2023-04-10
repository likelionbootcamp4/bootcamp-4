import { useState } from "react";
import Input from "./Input";

const UserForm = () => {
  const [username, setUsername] = useState("huynguyen");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handleFullnameChange(e) {
    setFullname(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Username"
          onChange={handleUsernameChange}
          value={username}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <Input
          placeholder="Full Name"
          onChange={handleFullnameChange}
          value={fullname}
        />
      </div>
      <div>
        <p>Username: {username}</p>
        <p>Password: {password}</p>
        <p>Full Name: {fullname}</p>
      </div>
    </div>
  );
};

export default UserForm;
