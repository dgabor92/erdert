import Dashboard from "../components/Dashboard";
import { useGetAllKamionsQuery } from "../lib/api";

function Home() {
  const { data: kamions, isLoading, isError } = useGetAllKamionsQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!kamions) {
    return <div>No data</div>;
  }

  return <Dashboard>Home</Dashboard>;
}

export default Home;
