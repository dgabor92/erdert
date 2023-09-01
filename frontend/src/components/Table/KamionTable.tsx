import React from "react";
import { Kamion } from "../../lib/interfaces";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import { deleteKamion } from "../../lib/api";
interface KamionTableProps {
  kamions: Kamion[];
  stat?: boolean;
}

const KamionTable: React.FC<KamionTableProps> = ({ kamions, stat }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(
    (args: number) => {
      return deleteKamion(args);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["kamions"]);
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
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {!kamions.length ? (
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              Nincs adat
            </td>
          </tr>
        ) : (
          kamions.map((kamion) => (
            <tr key={kamion.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.sofor_neve}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.rendszam}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.szal_level_szama}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.belepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.kilepes_datuma}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.suly_üres}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.suly_tele}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {kamion.megjegyzes}
              </td>
              {stat === true && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <button className="text-green-600 hover:text-indigo-900">
                    <PencilIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900 ml-4"
                    onClick={handleDelete(kamion.id)}
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

export default KamionTable;
