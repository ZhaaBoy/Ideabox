import Link from "next/link";
import DarkModeSwitcher from "./DarkModeSwitcher";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";


export default function Header2(
  ) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-4 sm:gap-4">
          {/* <!-- Hamburger Toggle BTN --> */}

          {/* <!-- Hamburger Toggle BTN --> */}
          <div className="flex-1 lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <Link className="flex flex-none" href="/">
            <Image
              width={82}
              height={82}
              src={"/images/BNI_logo.svg"}
              alt="Logo"
            />
          </Link>
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar w-full">
                <div className="hidden flex-none font-bold lg:block">
                  <ul className="menu menu-horizontal">
                    <li className="pl-5">
                      <Link
                        href="/"
                        className="hover:bg-[#f3430b] hover:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="pl-5">
                      <Link href="/" className="hover:text-[#f3430b]">
                        Tutorial
                      </Link>
                    </li>
                    <li className="pl-5">
                      <Link href="/" className="hover:text-[#f3430b]">
                        Explore
                      </Link>
                    </li>
                    <li className="pl-5">
                      <Link href="/" className="hover:text-[#f3430b]">
                        Event
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="drawer-side z-10 font-bold">
              <label
                htmlFor="my-drawer-3"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu min-h-full w-80 bg-base-200 p-4">
                <Link
                  className="flex flex-shrink-0 items-center justify-center px-15 py-15"
                  href="/"
                >
                  <Image
                    width={120}
                    height={120}
                    src={"/images/BNI_logo.svg"}
                    alt="Logo"
                  />
                </Link>
                {/* Sidebar content here */}
                <li className="py-2 pl-5">
                  <Link href="/" className="hover:text-[#f3430b]">
                    Home
                  </Link>
                </li>
                <li className="py-2 pl-5">
                  <Link href="/" className="hover:bg-[#f3430b]">
                    Tutorial
                  </Link>
                </li>
                <li className="py-2 pl-5">
                  <Link href="/" className="hover:text-[#f3430b]">
                    Explore
                  </Link>
                </li>
                <li className="py-2 pl-5">
                  <Link href="/" className="hover:text-[#f3430b]">
                    Event
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <div className="hidden sm:block">
              <form action="/" method="POST">
                <div className="relative">
                  <button className="absolute left-0 top-1/2 -translate-y-1/2">
                    <svg
                      className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                        fill=""
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                        fill=""
                      />
                    </svg>
                  </button>

                  <input
                    type="text"
                    placeholder="Type to search..."
                    className="w-10 bg-transparent pl-9 pr-5 font-medium focus:outline-none xl:w-50"
                  />
                </div>
              </form>
            </div>

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

            {/* <!-- Chat Notification Area --> */}
            <DropdownMessage />
            {/* <!-- Chat Notification Area --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  )
}
