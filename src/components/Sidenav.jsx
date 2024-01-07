import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkspaces } from "react-icons/md";
import { IoIosContact, IoMdDocument } from "react-icons/io";
import NavigationData from "../data/navigationData";
import PanelData from "../data/panelData";

const data = [
  {
    name: "Home",
    icon: <AiOutlineHome size={20} />,
    linkTo: "#Main",
  },
  {
    name: "Work",
    icon: <MdOutlineWorkspaces size={20} />,
    linkTo: "#Work",
  },
  {
    name: "Project",
    icon: <GrProjects size={20} />,
    linkTo: "#Project",
  },
  {
    name: "Contact",
    icon: <IoIosContact size={20} />,
    linkTo: "#Contact",
  },
];

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        className="top-4 right-4 z-[99] md:hidden fixed"
        onClick={handleNav}
        size={25}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          {data.map((item, idx) => (
            <NavigationData
              key={idx}
              name={item.name}
              icon={item.icon}
              linkTo={item.linkTo}
              handleClick={handleNav}
            />
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          {data.map((item, idx) => (
            <PanelData key={idx} icon={item.icon} linkTo={item.linkTo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
