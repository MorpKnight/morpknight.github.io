import React from "react";
import ProjectData from "../data/projectData";
import sampleImage from "../assets/sampleImage.jpg";

const data = [
  {
    name: "JBus",
    img: sampleImage,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "React JS",
    link: "https://github.com/MorpKnight/JBus",
  },
];

const Project = () => {
  return (
    <div id="Project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900">Projects</h1>
      <p className="text-center py-0">
        Until now, there are several projects that I have worked on, both my own
        projects, projects related to EXERCISE, projects related to the Digital
        Laboratory, and projects carried out to fulfill the final assignment of
        certain courses at the University of Indonesia
      </p>
      <div className="grid sm:grid-cols-2 gap-12 pt-4">
        <ProjectData img={sampleImage} title="Sample IMAGE" />
        <ProjectData img={sampleImage} title="Sample IMAGE" />
        <ProjectData img={sampleImage} title="Sample IMAGE" />
        <ProjectData img={sampleImage} title="Sample IMAGE" />
      </div>
    </div>
  );
};

export default Project;
