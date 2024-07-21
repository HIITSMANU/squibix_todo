import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../Contexts/ThemeContext";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useContext(AuthContext);

  return (
    <Disclosure
      as="nav"
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-800"
      }  max-h-[72px] shadow-lg mb-2 sm:mb-10`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center justify-between sm:hidden"></div>
          <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>
            <div className="p-2 sm:ml-6 sm:block">
              <h1
                className={`${
                  theme === "light" ? "text-black" : "text-white"
                } text-[30px]`}
              >
                TODOS
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={toggleTheme}
              className={` ${
                theme === "light" ? "" : "bg-gray-800"
              }relative rounded-full  p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <ThemeSwitcher />
            </button>

            
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex  rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <i
                    className={`fa-solid fa-user ${
                      theme === "light" ? "border-gray-500" : "text-white"
                    } text-[20px] border-2 p-2 rounded-full`}
                  ></i>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  {!user ? (
                    <>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        <strong>Username</strong> - testuser
                      </a>
                      <hr />
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        <strong>Password</strong> - 12345
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Welcome {user.username}
                      </a>
                      <hr />
                      <MenuItem>
                        <a
                          href="#"
                          onClick={logout}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          Sign out
                        </a>
                      </MenuItem>
                    </>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
