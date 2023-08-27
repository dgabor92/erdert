import Dashboard from "../components/Dashboard";
import DataTable from "../components/DataTable";
import {
  useGetAllKamionsQuery,
  useGetAllTeherautoQuery,
  useGetAllSzemelyautoQuery,
  useGetAllVagonQuery,
} from "../lib/api";

function Statistics() {
  const {
    data: kamions,
    isLoading: isLoadingKamion,
    isError: isErrorKamion,
  } = useGetAllKamionsQuery();
  const {
    data: teherautos,
    isLoading: isLoadingTeherauto,
    isError: isErrorTeherauto,
  } = useGetAllTeherautoQuery();
  const {
    data: szemelyautos,
    isLoading: isLoadingSzemelyauto,
    isError: isErrorSzemelyauto,
  } = useGetAllSzemelyautoQuery();
  const {
    data: vagons,
    isLoading: isLoadingVagon,
    isError: isErrorVagon,
  } = useGetAllVagonQuery();

  // handling errors or loadings
  if (
    isLoadingKamion ||
    isLoadingTeherauto ||
    isLoadingSzemelyauto ||
    isLoadingVagon
  ) {
    return <div>Loading...</div>;
  }

  if (isErrorKamion || isErrorTeherauto || isErrorSzemelyauto || isErrorVagon) {
    return <div>Error</div>;
  }

  // handling no data
  if (
    kamions?.length === 0 &&
    teherautos?.length === 0 &&
    szemelyautos?.length === 0 &&
    vagons?.length === 0
  ) {
    return <div>No data</div>;
  }

  return (
    <Dashboard>
      <div>Excel-export</div>
      <DataTable
        kamions={kamions}
        teherautos={teherautos}
        szemelyautos={szemelyautos}
        vagons={vagons}
      />
    </Dashboard>
  );
}

export default Statistics;
