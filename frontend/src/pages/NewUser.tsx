import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../lib/api";
import Dashboard from "../components/Dashboard";
import UserTable from "../components/Table/UserTable";

function NewUser() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });
  const stat = true;
  return (
    <Dashboard>
      <div>
        <UserTable users={users} stat={stat} />
        {/* <AddUserForm addUser={addUser} /> */}
      </div>
    </Dashboard>
  );
}

export default NewUser;
