import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [lang, setLang] = useState('en')
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white dark:bg-boxdark shadow-[0px_4px_21px_-5px_rgba(0,0,0,0.20);] dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4  md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0" href="/">
            <Image
              width={150}
              height={32}
              src={"/images/logo.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden sm:ml-6 sm:block">
          <div className="flex gap-1 sm:gap-9">
            <Link
              href="/website/home"
              className="bg-gray-900 text-base rounded-md py-0 text-primary500"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              href="/website/about-us"
              className="text-gray-300 hover:bg-gray-700 text-base rounded-md py-0 hover:text-primary500"
            >
              About Us
            </Link>
            <Link
              href="/website/contact-us"
              className="text-gray-300 hover:bg-gray-700 text-base rounded-md py-0 hover:text-primary500"
            >
              Contact Us
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-300 hover:bg-gray-700 text-base rounded-md py-0 hover:text-primary500"
            >
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li>
              <Link href="/" className="flex items-center gap-1.5 text-red">
                {" "}
                <ArrowRightStartOnRectangleIcon className="h-5 w-5" /> Logout
              </Link>
            </li>
            <li>
              <div className="switches-container">
                <input
                  type="radio"
                  id="switchMonthly"
                  name="switchPlan"
                  value="en"
                  checked={lang === "en"}
                  onChange={(e) => setLang(e.target.checked ? 'en' : 'es')}
                />
                <input
                  type="radio"
                  id="switchYearly"
                  name="switchPlan"
                  value="es"
                  checked={lang === "es"}
                  onChange={(e) => setLang(e.target.checked ? 'es' : 'en')}
                />
                <label htmlFor="switchMonthly">En</label>
                <label htmlFor="switchYearly">Es</label>
                <div className="switch-wrapper">
                  <div className="switch">
                    <div>English</div>
                    <div>Spanish</div>
                  </div>
                </div>
              </div>
            </li>

            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            {/* <DropdownMessage /> */}
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
