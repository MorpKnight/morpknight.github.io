import React from "react";

const NavigationData = ({ name, icon, linkTo, handleClick }) => {
  return (
    <a
      href={linkTo}
      className="flex w-[75%] justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
      onClick={handleClick}
    >
      {icon}
      <span className="pl-4">{name}</span>
    </a>
  );
};

export default NavigationData;
