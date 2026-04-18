import React from "react";
import { FaBell, FaSlideshare, FaSpotify } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { PiBrowsersDuotone } from "react-icons/pi";
import { MdDownloadForOffline } from "react-icons/md";
import Image from "next/image";
export default function page() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <header className="h-14 w-full bg-black-500 flex justify-between">
        <div className="justify-center items-center flex flex-row p-4">
          <FaSpotify size={24} className="inline-block" />
        </div>
        <div className="justify-center items-center flex flex-row p-4 gap-2 grow ml-64">
          <div className="hover:scale-105 cursor-pointer duration-100 bg-neutral-900 p-2 rounded-full">
            <GoHome size={24} className="inline-block" />
          </div>
          <div className=" bg-neutral-900 p-2 gap-1 rounded-full flex flex-row opacity-80 hover:opacity-100 duration-200 border hover:border-slate-200 border-neutral-900 shadow-xl">
            <div>
              <CiSearch size={24} className="inline-block" />
            </div>
            <div>
              <input className="pr-24 hover:opacity-100 outline-none hover:bg-neutral-850" placeholder="What do you want to play?" />
            </div>
            |
            <div className="px-1 bg-neutral-900 hover:scale-105 cursor-pointer duration-100">
              <PiBrowsersDuotone size={24} />
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-1">
          <div className="justify-center items-center flex flex-row p-4">
            <button className="text-black bg-white px-6 py-2 rounded-3xl font-bold text-xs hover:scale-105 cursor-pointer duration-100">
              Explore Premium
            </button>
          </div>
          <button className="flex flex-row gap-2 justify-center items-center hover:scale-105 cursor-pointer duration-100">
            <MdDownloadForOffline size={24} />
            Install App
          </button>
          <div className="flex flex-row justify-center items-center m-2 hover:scale-105 cursor-pointer duration-100">
            <FaBell />
          </div>
          <div className="flex flex-row justify-center items-center m-2 hover:scale-105 cursor-pointer duration-100">
            <FaSlideshare />
          </div>
          <div className="bg-slate-950 m-2 rounded-full ">
            <Image
              src="/avatar.png"
              alt="Avatar"
              width={36}
              height={36}
              className="rounded-full hover:scale-105 cursor-pointer duration-100"
            />
          </div>
        </div>
      </header>
      <div className="flex flex-row grow">
        <div className="bg-blue-500 p-1 grow">zone 1</div>
        <div className="bg-green-500 p-1 grow">zone 2</div>
        <div className="bg-red-500 p-1 grow">3</div>
      </div>
      <footer className="w-full h-12 bg-gray-500">footer (audio player)</footer>
    </div>
  );
}
