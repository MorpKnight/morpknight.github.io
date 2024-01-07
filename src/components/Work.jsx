import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "Digital Laboratory Assistant of Electrical Engineering Department",
    duration: "August 2023 - Present",
    details:
      "The Digital Laboratory (Digilab) is a lab that is responsible for practicum for students of the Department of Electrical Engineering, which includes courses: Basic Programming, Basic Digital Systems, Advanced Programming, Basic Computing, Digital System Design, Physical Cyber Systems, and IoT",
  },
  {
    year: 2023,
    title: "Staff of Project EXERCISE 2023",
    duration: "January 2023 - Present",
    details:
      "EXERCISE is a professional organization operating in the IT sector. There, I was a staff member of the Project Technical Division who was responsible for carrying out projects assigned to both external and internal parties. During the management period, a total of 3 projects have been carried out, 2 of which have been completed",
  },
  {
    year: 2022,
    title: "Computer Engineering Student - Universitas Indonesia",
    duration: "July 2022 - Present",
    details: "",
  },
  {
    year: 2019,
    title: "SMAN 2 Kota Bekasi",
    duration: "July 2019 - June 2022",
    details: "",
  },
];

const Work = () => {
  return (
    <div id="Work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-blue-900 pb-4">
        Work & Education
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
