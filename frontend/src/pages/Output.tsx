import { useQuery } from "@tanstack/react-query";
import Dashboard from "../components/Dashboard";
import { useState } from "react";
import {
  getAllKamions,
  getAllSzemelyauto,
  getAllTeherauto,
  getAllVagon,
} from "../lib/api";
import OutputTable from "../components/Table/OutputTable";

function Output() {
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
      <OutputTable
        kamions={kamions}
        teherautos={teherautos}
        szemelyautos={szemelyautos}
        vagons={vagos}
      />
    </Dashboard>
  );
}

export default Output;
