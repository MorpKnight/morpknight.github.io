import React from "react";
import ProjectItem from "./ProjectItem";
import sampleImage from "../assets/sampleImage.jpg";

const Project = () => {
  return (
    <div id="Project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900">Projects</h1>
      <p className="text-center py-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque omnis,
        molestiae laboriosam, saepe sequi hic maxime quas non quisquam alias a,
        vel optio quis eius praesentium explicabo nulla sint. Aliquam?
      </p>
      <div className="grid sm:grid-cols-2 gap-12 pt-4">
        <ProjectItem img={sampleImage} title="Sample IMAGE" />
        <ProjectItem img={sampleImage} title="Sample IMAGE" />
        <ProjectItem img={sampleImage} title="Sample IMAGE" />
        <ProjectItem img={sampleImage} title="Sample IMAGE" />
      </div>
    </div>
  );
};

export default Project;
