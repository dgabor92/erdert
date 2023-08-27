import React from "react";

interface SzemelyATableProps {
  szemelyautos: Szemelyauto[];
}

const SzemelyATable: React.FC<SzemelyATableProps> = ({ szemelyautos }) => {
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
        {szemelyautos.map((szemelyauto) => (
          <tr key={szemelyauto.id}>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.sofor_neve}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.rendszam}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.szal_level_szama}
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.belepes_datuma}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.kilepes_datuma}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.suly_üres}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.suly_tele}
            </td> */}
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {szemelyauto.megjegyzes}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SzemelyATable;
