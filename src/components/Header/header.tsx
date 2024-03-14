import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";
import { useEffect, useState } from "react";


export default function Header2(
  ) {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-white shadow-md">
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
          
        </div>

        <div className="flex items-center gap-2 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
          <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
              {/* Navbar */}
              <div className="navbar w-full">
                <div className="hidden flex-none font-bold lg:block">
                  <ul className="menu menu-horizontal">
                    <li className="pl-5">
                      <Link href="/landingpage" className="hover:bg-white hover:text-[#f3430b]"
                     >
                        Home
                      </Link>
                    </li>
                    <li className="pl-5">
                      <Link href="/about" className="hover:bg-white hover:text-[#f3430b] ">
                        About
                      </Link>
                    </li>
                    <li className="pl-5">
                      <Link href="/" className="hover:bg-white hover:text-[#f3430b] ">
                        Showcase
                      </Link>
                    </li>
                    <li className="pl-5">
                      <Link href="/event" className="hover:bg-white hover:text-[#f3430b] ">
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
              <ul className="menu min-h-full w-80 bg-white p-4">
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
                  <Link href="/landingpage" className="hover:bg-white hover:text-[#f3430b]">
                    Home
                  </Link>
                </li>
                <li className="py-2 pl-5">
                  <Link href="/about" className="hover:bg-white hover:text-[#f3430b]">
                    About
                  </Link>
                </li>
                <li className="py-2 pl-5">
                  <Link href="/" className="hover:bg-white hover:text-[#f3430b]">
                    Showcase
                  </Link>
                </li>
                <li className="py-2 pl-5">
                  <Link href="/event" className="hover:bg-white hover:text-[#f3430b]">
                    Event
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          </ul>

          {/* <!-- User Area --> */}
          <Link href="/auth/signin"><button className="py-1 lg:py-3 px-8 lg:px-8 text-white-500 font-semibold rounded-full bg-orange-500 text-white hover:shadow-orange-md transition-all outline-none">Login</button></Link>
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  )
}
