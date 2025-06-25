import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Signup from './pages/Signup'
import Help from './pages/Help'
import EditJob from './components/EditJob'
import { ToastContainer, toast } from 'react-toastify'
import JobSeekerDashboard from './pages/JobSeekerDashboard'
import EmployerDashboard from './pages/EmployerDashboard'
import ProtectedRoute from './authvalidation/ProtectedRoute'
import JobSeekerForm from './pages/JobSeekerForm.jsx'
import EmployerProfileForm from './pages/EmployerProfileForm.jsx'
import CareerPage from './pages/CareerPage'
import JobDetails from './pages/JobDetails'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Clear any invalid authentication state on app startup
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('userRole');
    
    // If there's no token or role, clear all auth data to ensure clean state
    if (!token || !userRole) {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userName');
      localStorage.removeItem('userEmail');
    }
    
    setIsInitialized(true);
  }, []);

  // Show loading screen while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading HireNest...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Routes>
        <Route exact path ='/' element={<Home/>}></Route>
        <Route exact path ='/about' element={ <About/>}></Route>
        <Route exact path ='/career' element={<CareerPage/>}></Route>
        <Route exact path ='/contact' element={<Contact/>}></Route>
        <Route exact path ='/help' element={<Help/>}></Route>
        <Route exact path ='/login' element={<Login/>}></Route>
        <Route exact path ='/signup' element={<Signup/>}></Route>
        <Route exact path ='/jobseekerdashboard' element={
          <ProtectedRoute allowedRole="jobseeker">
            <JobSeekerDashboard/>
          </ProtectedRoute>
          }></Route>
        <Route exact path ='/employerdashboard' element={
          <ProtectedRoute allowedRole="employer">
            <EmployerDashboard/>
          </ProtectedRoute>
          
          }></Route>
          <Route exact path ='/jobseekerform' element={
          <ProtectedRoute allowedRole="jobseeker">
            <JobSeekerForm/>
          </ProtectedRoute>
          }></Route>
          
          <Route exact path ='/jobs/:jobId' element={
          <ProtectedRoute allowedRole="jobseeker">
            <JobDetails />
          </ProtectedRoute>
          }></Route>
          <Route exact path ='/employerprofileform' element={
          <ProtectedRoute allowedRole="employer">
            <EmployerProfileForm/>
          </ProtectedRoute>
          }></Route>
          
          <Route exact path ='/job/edit/:jobId' element={
          <ProtectedRoute allowedRole="employer">
            <EditJob />
          </ProtectedRoute>
          
          }></Route>
          
          {/* Catch all route - redirect any unknown paths to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
          
        </Routes>
        
      </div>

    <ToastContainer position="top-right" autoClose={8000} />
    </Router>
  )
}

export default App
