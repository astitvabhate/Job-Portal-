import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Postings from '../components/postings.jsx'
import HomePage from '../pages/HomePage.jsx'
import JobDetails from '../pages/JobDetails.jsx'
import PostJob from '../pages/PostJob.jsx'

function App() {
return(
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job-details/:id" element={<JobDetails />} />
      <Route path="/post-job" element={<PostJob />} />
    </Routes>
  </>
)
}

export default App
