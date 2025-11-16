import React from "react";
import type { AdminInfoList } from "../type";

type AdminInfoProp = {
  admin: AdminInfoList;
};

const Admininfo: React.FC<AdminInfoProp> = ({ admin }) => {
  return (
    <div>
      <h2>Admin Information</h2>
      <p>{admin.id}</p>
      <p>{admin.name}</p>
      <p>{admin.email}</p>
      <p>{admin.role}</p>
      <p>{admin.lastLogin.toLocaleString()}</p>
    </div>
  );
};

export default Admininfo;
