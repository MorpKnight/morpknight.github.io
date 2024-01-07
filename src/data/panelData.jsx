import React from "react";

const PanelData = ({ icon, linkTo }) => {
  return (
    <a
      href={linkTo}
      className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
    >
      {icon}
    </a>
  );
};

export default PanelData;
