import React, { useState } from "react";

function EditTeherAModal({ teherauto, onSave, onCancel }) {
  const [editedTeherA, setEditedTeherA] = useState(teherauto);

  const handleSaveClick = () => {
    for (const key in editedTeherA) {
      if (editedTeherA[key] === "" || editedTeherA[key] === null) {
        alert("Minden mezőt ki kell tölteni!");
        return;
      }
    }
    onSave(editedTeherA);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-2/3 h-2/3 grid">
        <h2 className="text-lg font-semibold mb-4">Szerkesztés</h2>
        <form className="flex gap-1 flex-col">
          <div className="space-y-8">
            <div className="border-b border-gray-900/10 pb-8">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Teherauto_info
              </h2>
              <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="sofor_neve"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Sofőr Neve
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="sofor_neve"
                        id="sofor_neve"
                        value={editedTeherA.sofor_neve}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            sofor_neve: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Rendszám
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="rendszam"
                        id="rendszam"
                        value={editedTeherA.rendszam}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            rendszam: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Szállító levés és belépés dátuma */}
              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="szal_level_szama"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Szállító levél száma
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="szal_level_szama"
                        id="szal_level_szama"
                        value={editedTeherA.szal_level_szama}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            szal_level_szama: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="belepes_datuma"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Belépés Dátuma
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="date"
                        name="belepes_datuma"
                        id="belepes_datuma"
                        value={editedTeherA.belepes_datuma}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            belepes_datuma: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* súly üres és tele */}
              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="belepes_datuma"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Kilépés Dátuma
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="date"
                        name="kilepes_datuma"
                        id="kilepes_datuma"
                        value={editedTeherA.kilepes_datuma}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            kilepes_datuma: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="suly_ures"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Súly üresen
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="suly_ures"
                        id="suly_ures"
                        value={editedTeherA.suly_üres}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            suly_üres: parseInt(e.target.value),
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="suly_tele"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Súly tele
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="number"
                        name="suly_tele"
                        id="suly_tele"
                        value={editedTeherA.suly_tele}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            suly_tele: parseInt(e.target.value),
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="megjegyzes"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Megjegyzés
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <textarea
                        name="megjegyzes"
                        id="megjegyzes"
                        value={editedTeherA.megjegyzes}
                        onChange={(e) =>
                          setEditedTeherA({
                            ...editedTeherA,
                            megjegyzes: e.target.value,
                          })
                        }
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-green-300 hover:shadow-sm px-3 rounded-md py-2 cursor-pointer"
              onClick={onCancel}
            >
              Mégse
            </button>
            <button
              type="button"
              className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSaveClick}
            >
              Mentés
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTeherAModal;
