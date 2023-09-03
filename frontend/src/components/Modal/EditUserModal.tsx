import React, { useState } from "react";

function EditUserModal({ user, onSave, onCancel }) {
  const [editedUser, setEditedUser] = useState(user);

  const handleSaveClick = () => {
    onSave(editedUser);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3 h-1/3 grid">
        <h2 className="text-lg font-semibold mb-4">Szerkesztés</h2>
        <form className="flex gap-2 flex-col">
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="sofor_neve"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Név
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="sofor_neve"
                    value={editedUser.name}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, name: e.target.value })
                    }
                    id="sofor_neve"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="sofor_neve"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="email"
                    name="sofor_neve"
                    value={editedUser.email}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, email: e.target.value })
                    }
                    id="sofor_neve"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="sofor_neve"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Role
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <select
                    name="role"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    value={editedUser.role}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        role: parseInt(e.target.value),
                      })
                    }
                  >
                    <option value="0">Válassz</option>
                    <option value="1">Admin</option>
                    <option value="2">User</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-green-300 hover:shadow-sm px-3 rounded-md py-2 cursor-pointer"
              onClick={onCancel}
            >
              Mégse
            </button>
            <button
              type="button"
              className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSaveClick}
            >
              Mentés
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserModal;
