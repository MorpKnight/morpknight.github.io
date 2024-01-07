import React from "react";
import ProjectData from "../data/projectData";
import sampleImage from "../assets/sampleImage.jpg";
import ProjectData2 from "../data/projectData2";

const data = [
  {
    name: "JBus",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "Java",
    affiliate: "Final Project of Object Oriented Programming",
    link: "https://github.com/MorpKnight/JBus",
  },
  {
    name: "JBus Android",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "Java",
    affiliate: "Final Project of Object Oriented Programming",
    link: "https://github.com/MorpKnight/JBus-android",
  },
  {
    name: "AutoChecker",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "Python",
    affiliate: "Digilab",
    link: "https://github.com/MorpKnight/AutoChecker",
  },
  {
    name: "Discord Bot",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "Javascript",
    affiliate: "Personal Project & Digilab",
    link: "https://github.com/MorpKnight/DigiLab-bot",
  },
  {
    name: "BluetoothApps",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "Kotlin",
    affiliate: "EXERCISE 2023",
    link: "https://github.com/ivanpahlevi8/BluetoothApps"
  },
  {
    name: "MightyShield",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "Javascript (TypeScript)",
    affiliate: "EXERCISE 2023",
    link: "https://github.com/ExerciseFTUI/MightyShield"
  },
  {
    name: "Advanced Programming Portofolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "C",
    affiliate: "Advanced Programming",
    link: "https://github.com/MorpKnight/Pemrograman-Lanjutan"
  },
  {
    name: "Basic Programming Portofolio",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.",
    tech: "C",
    affiliate: "Basic Programming",
    link: "https://github.com/MorpKnight/Proyek-Akhir-ProgDas"
  }
];

const Project = () => {
  return (
    <div id="Project" className="m-auto max-w-7xl md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900">Projects</h1>
      <p className="text-center py-0">
        Until now, there are several projects that I have worked on, both my own
        projects, projects related to EXERCISE, projects related to the Digital
        Laboratory, and projects carried out to fulfill the final assignment of
        certain courses at the University of Indonesia
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-12 pt-4">
        {data.map((item) => (
          <ProjectData2
            name={item.name}
            desc={item.desc}
            tech={item.tech}
            link={item.link}
            affiliate={item.affiliate}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
