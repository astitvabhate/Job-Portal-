import React from 'react'
import { useNavigate } from 'react-router-dom'

const postings = () => {
  const navigate = useNavigate();
  return (

    <div className='flex flex-col items-center justify-center bg-gray-300 p-4 bottom-0 left-0 right-0 z-50'>
     <h1 className='text-3xl font-bold text-center'>Looking to Hire? <span onClick={() => navigate('/post-job')} className='text-blue-500 cursor-pointer hover:underline'>Click Here</span></h1>

     <p className='text-center '>Post your job profile here and connect with skilled candidates who are ready to contribute to your team.</p>
      <p className='text-center'>Just fill out the job details, and we’ll help you reach the right audience quickly and efficiently.</p>
    </div>
  )
}

export default postings