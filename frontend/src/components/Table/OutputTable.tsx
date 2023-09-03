import React, { useState } from "react";
import KamionTable from "./KamionTable";
import TeherATable from "./TeherATable";
import SzemelyATable from "./SzemelyATable";
import VagonTable from "./VagonTable";

function OutputTable({ kamions, teherautos, szemelyautos, vagons }) {
  const [selectedCategory, setSelectedCategory] = useState<Number>(1);
  const output = true;
  const handleClick = (elem: number) => {
    setSelectedCategory(elem);
  };

  const elemek = [
    { id: 1, name: "kamion", szin: "bg-green-500 text-white", selected: true },
    {
      id: 2,
      name: "teherauto",
      szin: "bg-green-500 text-white",
      selected: false,
    },
    {
      id: 3,
      name: "szemelyauto",
      szin: "bg-green-500 text-white",
      selected: false,
    },
    { id: 4, name: "vagon", szin: "bg-green-500 text-white", selected: false },
  ];

  const renderTable = () => {
    switch (selectedCategory) {
      case 1:
        return <KamionTable kamions={kamions} output={output} />;
      case 2:
        return <TeherATable teherautos={teherautos} output={output} />;
      case 3:
        return <SzemelyATable szemelyautos={szemelyautos} output={output} />;
      case 4:
        return <VagonTable vagons={vagons} output={output} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <div className="flex sm:flex-col md:flex-row pb-2">
          <div className="p-4 bg-green-700 rounded-md text-white h-fit sm:w-full">
            {elemek.map((elem) => (
              <button
                key={elem.id}
                className={`cursor-pointer px-3 py-2 rounded-md ${
                  selectedCategory === elem.id
                    ? elem.szin
                    : "hover:bg-green-600"
                }`}
                onClick={() => handleClick(elem.id)}
              >
                {elem.name.charAt(0).toUpperCase() + elem.name.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Táblázat */}
      {renderTable()}
    </div>
  );
}

export default OutputTable;
