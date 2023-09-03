import React, { useState } from "react";
import { Szemelyauto, SzemelyautoUpdateInput } from "../../lib/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSzemelyauto, updateSzemelyauto } from "../../lib/api";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import EditSzemelyAModal from "../Modal/EditSzemelyAModal";
import { notification } from "antd";

interface SzemelyATableProps {
  szemelyautos: Szemelyauto[];
  stat?: boolean;
}

const SzemelyATable: React.FC<SzemelyATableProps> = ({
  szemelyautos,
  stat,
}) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (args: number) => {
      return deleteSzemelyauto(args);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["szemelyautos"]);
      },
    }
  );

  const handleDelete = (id: number) => () => {
    if (window.confirm("Biztosan törölni szeretnéd?"))
      deleteMutation.mutateAsync(id);
  };

  const [editingSzemelyAId, setEditingSzemelyAId] = useState(null);
  const handleEditClick = (szemelyAId: number) => {
    setEditingSzemelyAId(szemelyAId);
  };

  const handleCancelSzemelyAEdit = () => {
    setEditingSzemelyAId(null);
  };
  const szemelyAMutation = useMutation(
    (args: SzemelyautoUpdateInput) => {
      return updateSzemelyauto(args);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries(["szemelyautos"]);
      },
    }
  );

  const handleSaveSzemelyA = async (editedSzemelyA) => {
    await szemelyAMutation.mutateAsync(editedSzemelyA);
    notification.success({
      message: "Sikeres mentés",
      description: "A személyautó sikeresen módosítva!",
      placement: "topRight",
    });
    setEditingSzemelyAId(null);
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
            Belépés Dátuma
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Kilépés Dátuma
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Megjegyzés
          </th>
          {stat === true && (
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          )}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {!szemelyautos.length ? (
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Nincs adat
            </td>
          </tr>
        ) : (
          szemelyautos.map((szemelyauto) => (
            <tr key={szemelyauto.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {szemelyauto.sofor_neve}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {szemelyauto.rendszam}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {szemelyauto.belepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {szemelyauto.kilepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {szemelyauto.megjegyzes}
              </td>
              {stat === true && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button
                    className="text-green-600 hover:text-indigo-900"
                    onClick={() => handleEditClick(szemelyauto.id)}
                  >
                    <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 ml-4"
                    onClick={handleDelete(szemelyauto.id)}
                  >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button>

                  {editingSzemelyAId === szemelyauto.id && (
                    <EditSzemelyAModal
                      szemelyauto={szemelyauto}
                      onSave={handleSaveSzemelyA}
                      onCancel={handleCancelSzemelyAEdit}
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

export default SzemelyATable;
