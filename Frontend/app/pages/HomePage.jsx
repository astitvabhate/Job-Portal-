
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaLocationDot } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Postings from '../components/postings';

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
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

    if (loading) return <p className="text-center pt-5">Loading jobs...</p>;
    if (error) return <p className="text-center pt-5 text-red-600">{error}</p>;
    if (jobs.length === 0) {
  return (<>
    <div>
        <h2 className="text-2xl font-semibold text-slate-700 text-center pt-3">
          Welcome to Job Portal
        </h2>
        <h2 className="text-5xl font-bold text-center text-slate-700">
          JOB LISTINGS
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Find your dream job or post a job opening.
        </p>
      </div>
    <div className="h-[70vh] flex flex-col items-center justify-center text-center">
      <p className="text-3xl font-semibold text-gray-700 mb-2">No Jobs Available</p>
      <p className="text-lg text-gray-500">Try refreshing the page or come back later to see new job postings.</p>
    </div>
    <Postings />
    </>
  );
}

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-slate-700 text-center pt-3">
          Welcome to Job Portal
        </h2>
        <h2 className="text-5xl font-bold text-center text-slate-700">
          JOB LISTINGS
        </h2>
        <p className="text-gray-600 mb-4 text-center">
          Find your dream job or post a job opening.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {jobs.map(job => (
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
      </div>
    <Postings />
    </>
  );
};

export default HomePage;
