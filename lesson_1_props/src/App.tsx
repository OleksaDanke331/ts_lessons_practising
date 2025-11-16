import React from "react";
import Userinfo from "./components/Userinfo";
import Admininfo from "./components/Admininfo";
import type { AdminInfoList, Info } from "./type";

const App = () => {
  const user: Info = {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Jane Doe",
    email: "jane@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <Userinfo user={user} />
      <Admininfo admin={admin} />
    </div>
  );
};

export default App;
