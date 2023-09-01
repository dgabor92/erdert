import { useQuery } from "@tanstack/react-query";
import Dashboard from "../components/Dashboard";
import DataTable from "../components/DataTable";
import {
  getAllKamions,
  getAllSzemelyauto,
  getAllTeherauto,
  getAllVagon,
  getExcelExport,
} from "../lib/api";
import StatisticTable from "../components/StatisticTable";

function Statistics() {
  const handleExport = () => {
    getExcelExport();
  };
  const { data: kamions } = useQuery({
    queryKey: ["kamions"],
    queryFn: getAllKamions,
    // initialData: [],
  });

  const { data: teherautos } = useQuery({
    queryKey: ["teherautos"],
    queryFn: getAllTeherauto,
  });

  const { data: szemelyautos } = useQuery({
    queryKey: ["szemelyautos"],
    queryFn: getAllSzemelyauto,
  });

  const { data: vagos } = useQuery({
    queryKey: ["vagons"],
    queryFn: getAllVagon,
  });
  return (
    <Dashboard>
      <div className="flex mb-2">
        <button
          className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hidden sm:inline-block"
          onClick={handleExport}
        >
          Excel-export
        </button>
      </div>

      <StatisticTable
        kamions={kamions}
        teherautos={teherautos}
        szemelyautos={szemelyautos}
        vagons={vagos}
      />
    </Dashboard>
  );
}

export default Statistics;
