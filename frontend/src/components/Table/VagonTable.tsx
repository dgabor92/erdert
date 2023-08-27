import React from "react";

interface VagonTableProps {
  vagons: Vagon[];
}

const VagonTable: React.FC<VagonTableProps> = ({ vagons }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Vagon Száma
          </th>
          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Rendszám
          </th> */}
          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Szállítási Levél Száma
          </th> */}
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Belépés Dátuma
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Kilépés Dátuma
          </th>
          {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Súly Üres (kg)
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Súly Tele (kg)
          </th> */}
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Megjegyzés
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {vagons.map((vagon) => (
          <tr key={vagon.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.szama}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.rendszam}
            </td> */}
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.szal_level_szama}
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.belepes_datuma}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.kilepes_datuma}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.suly_üres}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.suly_tele}
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {vagon.megjegyzes}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VagonTable;
