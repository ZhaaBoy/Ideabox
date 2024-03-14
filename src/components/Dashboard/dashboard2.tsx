import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "../card/card";

const features = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits."
]

const listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/images/icon/akun.svg",
    },
    {
      name: "Idea",
      number: "200",
      icon: "/images/icon/idea.svg",
    },
    {
      name: "Lorem",
      number: "50",
      icon: "/images/icon/company.svg",
    },
  ]

const Dashboard2 = () => {
  return (
    <div
      className="max-w-screen-xl px-8 xl:px-16 mx-auto"
      id="home"
    >
          <div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-7">
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-2 leading-normal">
                Lorem, ipsum dolor sit ame <strong className="text-orange-500">LoremEPSUM</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid amet facilis quae quisquam, itaque quaerat corporis rem, id vel provident cum ratione quam veritatis laborum impedit culpa ab ipsam! Velit!
              </p>
              <Link href="/">
              <button className="py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-full bg-orange-500 text-white hover:shadow-orange-md transition-all outline-none">Get Started</button></Link>
            </div>
            <div className="flex w-full">
              <div className="h-full w-full">
                <Image
                alt="idea"
                  src="/images/idea.png"
                  quality={100}
                  width={412}
                  height={83}
                  layout="responsive"
                />
              </div>
            </div>
          </div> 

{/* Test */}
<div className="relative w-full flex">
        <div
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-200 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
       </div>
       </div>
{/* End */}

          {/* End Card */}
    </div>
  );
};

export default Dashboard2;
