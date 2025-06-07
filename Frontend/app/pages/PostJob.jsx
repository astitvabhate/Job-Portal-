import React, { useState } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log('Submitting job data:', formData);
      
      await axios.post('http://localhost:5000/api/jobs', formData);
      alert('Job posted successfully!');
      navigate('/');
    } catch (error) {
      alert('Error posting job: ' + error.message);
    }
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-2xl shadow-md mt-10">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Post Your Job</h1>
          <span className="cursor-pointer hover:text-red-600" onClick={() => navigate('/')}><IoCloseCircleSharp size={30} /></span>
        </div>
        <p className="text-lg text-gray-600 mb-4">Fill out the form below to post your job listing and connect with potential candidates.</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Requirements</label>
            <textarea name="requirements" value={formData.requirements} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
          </div>
          <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Post Job
          </button>
        </form>
      </div>
    </div>
  )
}

export default PostJob;
