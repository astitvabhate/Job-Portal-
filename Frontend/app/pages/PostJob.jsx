import React from 'react'

const PostJob = () => {
  return (
    <div> 
       <div className="max-w-3xl mx-auto p-6 bg-blue-50 rounded-2xl shadow-md mt-10">
         <h1 className="text-3xl font-bold text-gray-800 mb-2">Post Your Job</h1>
          <p className="text-lg text-gray-600 mb-4">Fill out the form below to post your job listing and connect with potential candidates.</p>
         <form className="space-y-6">
           <div>
             <label className="block text-sm font-medium text-gray-700">Job Title</label>
             <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">Company Name</label>
             <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">Location</label>
             <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">Job Description</label>
             <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">Requirements</label>
             <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
           </div>
           <button type="submit" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
             Post Job
           </button>
         </form>
       </div>
    </div>
  )
}

export default PostJob