import React, { useState } from "react";

function EditSzemelyAModal({ szemelyauto, onSave, onCancel }) {
  const [editedSzemelyA, setEditedSzemelyA] = useState(szemelyauto);

  const handleSaveClick = () => {
    for (const key in editedSzemelyA) {
      if (editedSzemelyA[key] === "" || editedSzemelyA[key] === null) {
        alert("Minden mezőt ki kell tölteni!");
        return;
      }
    }
    onSave(editedSzemelyA);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-2/3 h-2/3 grid">
        <h2 className="text-lg font-semibold mb-4">Szerkesztés</h2>
        <form className="flex gap-1 flex-col">
          <div className="space-y-8">
            <div className="border-b border-gray-900/10 pb-8">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                SzemelyAuto_info
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
                        value={editedSzemelyA.sofor_neve}
                        onChange={(e) =>
                          setEditedSzemelyA({
                            ...editedSzemelyA,
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
                        value={editedSzemelyA.rendszam}
                        onChange={(e) =>
                          setEditedSzemelyA({
                            ...editedSzemelyA,
                            rendszam: e.target.value,
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
                        value={editedSzemelyA.belepes_datuma}
                        onChange={(e) =>
                          setEditedSzemelyA({
                            ...editedSzemelyA,
                            belepes_datuma: e.target.value,
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
                    Kilépés Dátuma
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="date"
                        name="kilepes_datuma"
                        id="kilepes_datuma"
                        value={editedSzemelyA.kilepes_datuma}
                        onChange={(e) =>
                          setEditedSzemelyA({
                            ...editedSzemelyA,
                            kilepes_datuma: e.target.value,
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
                        value={editedSzemelyA.megjegyzes}
                        onChange={(e) =>
                          setEditedSzemelyA({
                            ...editedSzemelyA,
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

export default EditSzemelyAModal;
