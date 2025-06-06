import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from '../pages/HomePage.jsx'
import Postings from '../components/postings.jsx'
import JobDetails from '../pages/JobDetails.jsx'
import PostJob from '../pages/PostJob.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
    <Postings /> 
    <JobDetails/>
    <PostJob/>
  </StrictMode>,
)
