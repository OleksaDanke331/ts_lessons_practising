import React from "react";
import type { Info } from "../type";

type UserInfoProp = {
  user: Info;
};

const Userinfo: React.FC<UserInfoProp> = ({ user }) => {
  const { id, name, email } = user;
  return (
    <div>
      <h2>User Information</h2>
      <p>{id}</p>
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Userinfo;
