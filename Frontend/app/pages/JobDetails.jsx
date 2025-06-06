import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const JobDetails = () => {
  const job = {
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Bangalore, India",
    description: `
      We are looking for a passionate Frontend Developer to join our dynamic team.
      You will be responsible for building and maintaining user-facing features using modern technologies.
      If you love clean code, creative design, and great UI/UX, this is the place for you.
    `,
    requirements:
      `Proficient in React.js, HTML, CSS, JavaScript. Experience with Tailwind CSS or similar frameworks. Familiarity with RESTful APIs and version control (Git). Strong understanding of responsive design principles. Good communication and problem-solving skills.`
    ,
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-2xl shadow-md mt-10">
     <div className="flex justify-between items-center"> <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1><span className=" cursor-pointer hover:text-red-600"><IoCloseCircleSharp size={30}/></span></div>
      <p className="text-lg text-gray-600 mb-1">{job.company}</p>
      <p className="text-sm text-gray-500 mb-6">{job.location}</p>

      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Job Description</h2>
        <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
       <p className="text-gray-700 whitespace-pre-line">{job.requirements}</p>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
