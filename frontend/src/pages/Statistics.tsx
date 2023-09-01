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
      <button onClick={handleExport}>Excel-export</button>
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
