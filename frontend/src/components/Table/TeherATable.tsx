import React from "react";
import { Teherauto, TeherautoUpdateInput } from "../../lib/interfaces";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTeherauto, updateTeherauto } from "../../lib/api";
import EditTeherAModal from "../Modal/EditTeherAModal";
import { notification } from "antd";

interface TeherATableProps {
  teherautos: Teherauto[];
  stat?: boolean;
  output?: boolean;
}

const TeherATable: React.FC<TeherATableProps> = ({
  teherautos,
  stat,
  output,
}) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (args: number) => {
      return deleteTeherauto(args);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["teherautos"]);
      },
    }
  );

  const handleDelete = (id: number) => () => {
    if (window.confirm("Biztosan törölni szeretnéd?"))
      deleteMutation.mutateAsync(id);
  };

  const [editingTeherAId, setEditingTeherAId] = React.useState(null);
  const handleEditClick = (teherAId: number) => {
    setEditingTeherAId(teherAId);
  };

  const handleCancelTeherAEdit = () => {
    setEditingTeherAId(null);
  };
  const teherAMutation = useMutation(
    (args: TeherautoUpdateInput) => {
      return updateTeherauto(args);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(["teherautos"]);
      },
    }
  );

  const handleSaveTeherA = async (editedTeherA) => {
    await teherAMutation.mutateAsync(editedTeherA);
    notification.success({
      message: "Sikeres mentés",
      description: "A teherautó sikeresen módosítva!",
      placement: "topRight",
    });
    setEditingTeherAId(null);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Sofőr Neve
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Rendszám
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Szállítási Levél Száma
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Belépés Dátuma
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Kilépés Dátuma
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Súly Üres (kg)
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Súly Tele (kg)
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Megjegyzés
          </th>
          {stat === true && (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          )}
          {output === true && (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          )}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {!teherautos.length ? (
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Nincs adat
            </td>
          </tr>
        ) : (
          teherautos.map((teherauto) => (
            <tr key={teherauto.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.sofor_neve}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.rendszam}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.szal_level_szama}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.belepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.kilepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.suly_üres}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.suly_tele}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {teherauto.megjegyzes}
              </td>
              {stat === true && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button
                    className="text-green-600 hover:text-indigo-900"
                    onClick={() => handleEditClick(teherauto.id)}
                  >
                    <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 ml-4"
                    onClick={handleDelete(teherauto.id)}
                  >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {editingTeherAId === teherauto.id && (
                    <EditTeherAModal
                      teherauto={teherauto}
                      onSave={handleSaveTeherA}
                      onCancel={handleCancelTeherAEdit}
                    />
                  )}
                </td>
              )}
              {output === true && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button
                    className="text-green-600 hover:text-indigo-900"
                    onClick={() => handleEditClick(teherauto.id)}
                  >
                    <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  {/* <button
                    className="text-red-600 hover:text-red-900 ml-4"
                    onClick={handleDelete(kamion.id)}
                  >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button> */}

                  {editingTeherAId === teherauto.id && (
                    <EditTeherAModal
                      teherauto={teherauto}
                      onSave={handleSaveTeherA}
                      onCancel={handleCancelTeherAEdit}
                    />
                  )}
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default TeherATable;
