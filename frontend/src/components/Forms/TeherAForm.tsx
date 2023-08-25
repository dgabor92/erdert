import React from "react";
import { useState } from "react";

interface TeherAFormProps {
  sofor_neve: string;
  rendszam: string;
  szal_level_szama: string;
  belepes_datuma: string;
  suly_ures: number;
  suly_tele: number;
  megjegyzes: string;
}

function TeherAForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    for (const key in teheraForm) {
      if (teheraForm.hasOwnProperty(key)) {
        if (
          teheraForm[key as keyof TeherAFormProps] === "" ||
          teheraForm[key as keyof TeherAFormProps] === 0
        ) {
          alert("Minden mezőt ki kell tölteni!");
          return;
        }
      }
    }
  };

  const initialValues: TeherAFormProps = {
    sofor_neve: "",
    rendszam: "",
    szal_level_szama: "",
    belepes_datuma: new Date().toISOString().substring(0, 10),
    suly_ures: 0,
    suly_tele: 0,
    megjegyzes: "",
  };
  const [teheraForm, setTeherAForm] = useState(initialValues);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Teherauto_info
            </h2>
            {/* név és rendszám */}
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                      value={teheraForm.sofor_neve}
                      onChange={(e) =>
                        setTeherAForm({
                          ...teheraForm,
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
                      value={teheraForm.rendszam}
                      onChange={(e) =>
                        setTeherAForm({
                          ...teheraForm,
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
                      value={teheraForm.szal_level_szama}
                      onChange={(e) =>
                        setTeherAForm({
                          ...teheraForm,
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
                      value={teheraForm.belepes_datuma}
                      onChange={(e) =>
                        setTeherAForm({
                          ...teheraForm,
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
                  htmlFor="suly_ures"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Súly üresen
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="suly_ures"
                      id="suly_ures"
                      value={teheraForm.suly_ures}
                      onChange={(e) =>
                        setTeherAForm({
                          ...teheraForm,
                          suly_ures: parseInt(e.target.value),
                        })
                      }
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

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
                      type="text"
                      name="suly_tele"
                      id="suly_tele"
                      value={teheraForm.suly_tele}
                      onChange={(e) =>
                        setTeherAForm({
                          ...teheraForm,
                          suly_tele: parseInt(e.target.value),
                        })
                      }
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
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
                      value={teheraForm.megjegyzes}
                      onChange={(e) =>
                        setTeherAForm({
                          ...teheraForm,
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

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900 hover:bg-green-300 hover:shadow-sm px-3 rounded-md py-2 cursor-pointer"
            onClick={() => setTeherAForm(initialValues)}
          >
            Mégse
          </button>
          <button
            type="submit"
            className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Mentés
          </button>
        </div>
      </form>
    </div>
  );
}

export default TeherAForm;
