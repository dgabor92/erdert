import React from "react";
import { Kamion } from "../../lib/interfaces";

interface KamionTableProps {
  kamions: Kamion[];
}

const KamionTable: React.FC<KamionTableProps> = ({ kamions }) => {
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
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default KamionTable;
