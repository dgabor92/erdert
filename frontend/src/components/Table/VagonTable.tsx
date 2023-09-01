import React from "react";
import { Vagon } from "../../lib/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteVagon } from "../../lib/api";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface VagonTableProps {
  vagons: Vagon[];
  stat?: boolean;
}

const VagonTable: React.FC<VagonTableProps> = ({ vagons, stat }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (args: number) => {
      return deleteVagon(args);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["vagons"]);
      },
    }
  );

  const handleDelete = (id: number) => () => {
    if (window.confirm("Biztosan törölni szeretnéd?"))
      deleteMutation.mutateAsync(id);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Vagon Száma
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
        {!vagons.length ? (
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Nincs adat
            </td>
          </tr>
        ) : (
          vagons.map((vagon) => (
            <tr key={vagon.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vagon.vagon_szama}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vagon.belepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vagon.kilepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {vagon.megjegyzes}
              </td>
              {stat === true && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button className="text-green-600 hover:text-indigo-900">
                    <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 ml-4"
                    onClick={handleDelete(vagon.id)}
                  >
                    <TrashIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </td>
              )}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default VagonTable;
