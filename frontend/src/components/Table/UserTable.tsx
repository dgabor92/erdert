import React, { useState } from "react";
import { User, UserUpdateInput } from "../../lib/interfaces";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser, updateUser } from "../../lib/api";
import { notification } from "antd";
import EditUserModal from "../Modal/EditUserModal";

interface UserTableProps {
  users: User[];
  stat?: boolean;
}
const UserTable: React.FC<UserTableProps> = ({ users, stat }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (args: number) => {
      return deleteUser(args);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );

  const handleDelete = (id: number) => () => {
    if (window.confirm("Biztosan törölni szeretnéd?"))
      deleteMutation.mutateAsync(id);
  };

  const [editingUserId, setEditingUserId] = useState(null);
  const handleEditClick = (userId: number) => {
    setEditingUserId(userId);
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
  };
  const userMutation = useMutation(
    (args: UserUpdateInput) => {
      return updateUser(args);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(["users"]);
      },
    }
  );
  const handleSaveEdit = async (editedUser) => {
    await userMutation.mutateAsync(editedUser);
    notification.success({
      message: "Sikeres mentés",
      description: "A felhasználó sikeresen módosítva!",
      placement: "topRight",
    });
    setEditingUserId(null);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Név
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Role
          </th>
          {stat === true && (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {user.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {user.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {user.role === 1 ? "Admin" : "User"}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {editingUserId === user.id ? (
                <EditUserModal
                  user={user}
                  onSave={handleSaveEdit}
                  onCancel={handleCancelEdit}
                />
              ) : (
                <>
                  <button
                    className="text-green-600 hover:text-indigo-900"
                    onClick={() => handleEditClick(user.id)}
                  >
                    <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 ml-4"
                    onClick={() => handleDelete(user.id)}
                  >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
