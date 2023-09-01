import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUser } from "../lib/api";
import Dashboard from "../components/Dashboard";
import UserTable from "../components/Table/UserTable";
import AddUserForm from "../components/Forms/AddUserForm";

function NewUser() {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });
  const stat = true;
  return (
    <Dashboard>
      <div className="flex gap-4 sm:flex-col md:flex-row">
        <div className="sm:w-full md:w-2/5">
          <AddUserForm />
        </div>
        <div className="sm:w-full md:w-3/5">
          <UserTable users={users} stat={stat} />
        </div>
      </div>
    </Dashboard>
  );
}

export default NewUser;
