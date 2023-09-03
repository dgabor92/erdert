import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logOut } from "../lib/api";
import { User } from "../lib/interfaces";
import { useNavigate } from "react-router-dom";
import { useMutation, QueryClient } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const queryClient = new QueryClient();

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
interface NavbarProps {
  user: User;
}

export default function Navbar({ user }: NavbarProps) {
  const [kivalasztottElem, setKivalasztottElem] = useState<Number>(null);
  const navigation = [
    {
      id: 1,
      name: "Kezdőlap",
      href: "/home",
      szin: "bg-green-500 text-white",
      visible: true,
    },
    {
      id: 2,
      name: "Beléptetés",
      href: "/beleptetes",
      szin: "bg-green-500 text-white",
      visible: true,
    },
    {
      id: 3,
      name: "Kiléptetés",
      href: "/kileptetes",
      szin: "bg-green-500 text-white",
      visible: true,
    },
    {
      id: 4,
      name: "Statisztika",
      href: "/statisztika",
      szin: "bg-green-500 text-white",
      visible: user?.role === 1 ? true : false,
    },
    {
      id: 5,
      name: "Új felhasználó",
      href: "/new_user",
      szin: "bg-green-500 text-white",
      visible: user?.role === 1 ? true : false,
    },
  ];

  const navigate = useNavigate();
  const logOutMutation = useMutation<void, AxiosResponse<unknown>>(logOut, {
    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
      navigate("/login");
    },
  });

  const handleClick = (item) => {
    setKivalasztottElem(item.id);
    navigate(item.href);
  };

  return (
    <Disclosure as="nav" className="bg-green-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-10 w-auto" src="/erdert.png" alt="erdert" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 text-white">
                    {navigation.map(
                      (item) =>
                        item.visible && (
                          <button
                            key={item.id}
                            onClick={() => handleClick(item)}
                            className={`cursor-pointer p-2 rounded-md ${
                              kivalasztottElem === item.id
                                ? `${item.szin} text-white`
                                : "hover:bg-green-600"
                            }`}
                          >
                            {item.name}
                          </button>
                        )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.photo_url}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => navigate("/settings")}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => logOutMutation.mutate()}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  onClick={() => handleClick(item)}
                  className={`cursor-pointer p-2 rounded-md ${
                    kivalasztottElem === item.id
                      ? `${item.szin} text-white`
                      : "hover:bg-green-600"
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
