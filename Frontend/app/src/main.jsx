import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from '../pages/HomePage.jsx'
import Postings from '../components/postings.jsx'
import JobDetails from '../pages/JobDetails.jsx'
import PostJob from '../pages/PostJob.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
</BrowserRouter>
)
