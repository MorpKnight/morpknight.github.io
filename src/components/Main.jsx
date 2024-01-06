import React from "react";
import { TypeAnimation } from "react-type-animation";
import * as fa from "react-icons/fa";

const Main = () => {
  return (
    <div id="Main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://cdn.wallpaperhub.app/cloudcache/0/b/3/0/d/d/0b30dd34bc53fa0892d630c18546b78fc59972bd.jpg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800`">
            I'm Giovan
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Programmer",
                2000,
                "Designer",
                2000,
              ]}
              wrapper="h2"
              repeat={Infinity}
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <fa.FaGithub size={25} />
            <fa.FaTwitter size={25} />
            <fa.FaLinkedin size={25} />
            <fa.FaInstagram size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
