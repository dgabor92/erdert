import Dashboard from "../components/Dashboard";
import { useGetUserQuery } from "../lib/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import KamionForm from "../components/Forms/KamionForm";
import TeherAForm from "../components/Forms/TeherAForm";
import SzemelyAForm from "../components/Forms/SzemelyAForm";
import VagonForm from "../components/Forms/VagonForm";

function FirstSelection() {
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useGetUserQuery();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!user) {
    navigate("/login");
  }
  const [kivalasztottElem, setKivalasztottElem] = useState<Number>(1);
  const handleClick = (elem: number) => {
    setKivalasztottElem(elem);
  };

  // Elemek listája
  const elemek = [
    { id: 1, nev: "Kamionok", szin: "bg-green-500 text-white" },
    { id: 2, nev: "Teherautók", szin: "bg-green-500 text-white" },
    { id: 3, nev: "Személyautók", szin: "bg-green-500 text-white" },
    { id: 4, nev: "Vagonok", szin: "bg-green-500 text-white" },
  ];

  return (
    <Dashboard>
      <div className="flex gap-4 sm:flex-col md:flex-row">
        {/* Bal oldali sáv (1/3 rész) */}
        <div className="p-4 bg-green-700 rounded-md text-white h-fit sm:w-full md:w-1/4">
          <div className="p-4 text-center">
            <ul>
              {elemek.map((elem) => (
                <li
                  key={elem.id}
                  className={`cursor-pointer p-2 rounded-md  ${
                    kivalasztottElem === elem.id
                      ? elem.szin
                      : "hover:bg-green-600"
                  }`}
                  onClick={() => handleClick(elem.id)}
                >
                  {elem.nev}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Jobb oldali sáv (2/3 rész) */}
        <div className="p-4 sm:w-full md:w-2/4">
          {kivalasztottElem === 1 && <KamionForm />}
          {kivalasztottElem === 2 && <TeherAForm />}
          {kivalasztottElem === 3 && <SzemelyAForm />}
          {kivalasztottElem === 4 && <VagonForm />}
        </div>
      </div>
    </Dashboard>
  );
}

export default FirstSelection;
