import React, { useEffect, useState } from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Job not found or error fetching data");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center pt-10">Loading job details...</p>;
  if (!job) {
    return (
      <div className="text-center pt-10">
        <p className="text-2xl font-semibold text-gray-700">Job not found</p>
        <p className="text-lg text-gray-500">The job you are looking for does not exist.</p>
      <button onClick={() => navigate("/")} className="mt-4 px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-md hover:bg-blue-700">
        Go to Home
      </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-2xl shadow-md mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{job.title}</h1>
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer hover:text-red-600"
        >
          <IoCloseCircleSharp size={30} />
        </button>
      </div>

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
