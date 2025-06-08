import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Postings from '../components/postings';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs')
      .then(response => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch jobs');
        setLoading(false);
      });
  }, []);
 
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  if (loading) return <p className="text-center pt-5">Loading jobs...</p>;
  if (error) return <p className="text-center pt-5 text-red-600">{error}</p>;

  return (
    <>
      <div>
        <div className="flex justify-center">
          <button onClick={() => window.location.reload()} className="text-2xl font-semibold text-slate-700 pt-3 cursor-pointer hover:text-blue-600">
            Welcome to Job Portal
          </button>
        </div>

        <h2 className="text-5xl font-bold text-center text-slate-700">
          JOB LISTINGS
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Find your dream job or post a job opening.
        </p>
      </div>

      {jobs.length === 0 ? (
        <div className="h-[70vh] flex flex-col items-center justify-center text-center">
          <p className="text-3xl font-semibold text-gray-700 mb-2">No Jobs Available</p>
          <p className="text-lg text-gray-500">Try refreshing the page or come back later to see new job postings.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {currentJobs.map(job => (
              <div
                key={job._id}
                className="border p-4 rounded shadow hover:shadow-xl/30 transition-shadow flex flex-col hover:bg-blue-50"
              >
                <div className="flex justify-between">
                  <h3 className="text-3xl font-bold">{job.title}</h3>
                  <p className="text-gray-600 flex">
                    <span className="pt-1 pr-1">
                      <FaLocationDot />
                    </span>
                    {job.location}
                  </p>
                </div>
                <p className="text-gray-600 text-xl pb-1">Company: {job.company}</p>
                <button
                  onClick={() => navigate(`/job-details/${job._id}`)}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-900 cursor-pointer"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 mb-5"
            >
              Prev
            </button>
            <span className="px-4 py-2 text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 mb-5"
            >
              Next
            </button>
          </div>
        </>
      )}

      <Postings />
    </>
  );
};

export default HomePage;
