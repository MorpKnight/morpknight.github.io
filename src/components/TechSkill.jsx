import React from "react";

const data = [
  {
    name: "Example",
    icon: "",
    mastery: <progress value={0} max={100} />
  }
]

const TechSkill = () => {
  return (
    <div id="TechSkill" className="m-auto max-w-7xl md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900">
        Tech & Skill
      </h1>
    </div>
  );
};

export default TechSkill;
