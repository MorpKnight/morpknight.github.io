import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkspaces } from "react-icons/md";
import { IoIosContact, IoMdDocument } from "react-icons/io";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        className="absolute top-4 right-4 z-[99] md:hidden"
        onClick={handleNav}
        size={25}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            href="#Main"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={handleNav}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#Project"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={handleNav}
          >
            <GrProjects size={20} />
            <span className="pl-4">Project</span>
          </a>
          <a
            href="#Work"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={handleNav}
          >
            <MdOutlineWorkspaces size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            href="#Resume"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={handleNav}
          >
            <IoMdDocument size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            href="#Contact"
            className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            onClick={handleNav}
          >
            <IoIosContact size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#Main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#Project"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#Work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <MdOutlineWorkspaces size={20} />
          </a>
          <a
            href="#Resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <IoMdDocument size={20} />
          </a>
          <a
            href="#Contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <IoIosContact size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
