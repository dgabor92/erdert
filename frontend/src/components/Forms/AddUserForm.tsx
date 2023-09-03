import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { UserInput } from "../../lib/interfaces";
import { addUser } from "../../lib/api";
import { notification } from "antd";

function AddUserForm() {
  const initialValues: UserInput = {
    name: "",
    email: "",
    role: 0,
    password: "",
  };
  const queryClient = useQueryClient();
  const [userForm, setUserForm] = useState(initialValues);
  const userMutation = useMutation(
    (args: UserInput) => {
      return addUser(args);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
        setUserForm(initialValues);
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const key in userForm) {
      if (userForm.hasOwnProperty(key)) {
        if (
          userForm[key as keyof UserInput] === "" ||
          userForm[key as keyof UserInput] === 0
        ) {
          alert("Minden mezőt ki kell tölteni!");
          return;
        }
      }
    }
    await userMutation.mutateAsync(userForm);
    notification.success({
      message: "Sikeres mentés",
      description: "A felhasználó sikeresen hozzáadva!",
      placement: "topRight",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <h2 className="text-lg font-semibold mb-2">Felhasználó hozzáadása</h2>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <input
          type="text"
          name="name"
          value={userForm.name}
          onChange={(e) => setUserForm({ ...userForm, name: e.target.value })}
          placeholder="Név"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <input
          type="email"
          name="email"
          value={userForm.email}
          onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
          placeholder="E-mail"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <select
          name="role"
          value={userForm.role}
          onChange={(e) =>
            setUserForm({ ...userForm, role: parseInt(e.target.value) })
          }
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        >
          <option value="0">Válassz</option>
          <option value="1">Admin</option>
          <option value="2">User</option>
        </select>
      </div>

      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <input
          type="password"
          name="password"
          value={userForm.password}
          onChange={(e) =>
            setUserForm({ ...userForm, password: e.target.value })
          }
          placeholder="Jelszó"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
      <div>
        <button
          type="submit"
          className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Hozzáadás
        </button>
      </div>
    </form>
  );
}

export default AddUserForm;
