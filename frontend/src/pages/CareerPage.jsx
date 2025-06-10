import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router";

const CareerPage = ()=> {
  return (
    <div>  
      <Header />
      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center mt-8 mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Careers at HireNest
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">No Current Openings</h2>
          
          <p className="text-center text-gray-600 mb-6">
            Thank you for your interest in joining the HireNest team! We don't have any open positions at the 
            moment, but we're always looking for talented individuals to join our team.
          </p>
          
          <div className="border-b border-gray-200 my-6"></div>
          
          <p className="text-center text-gray-600">
            Please check back later for future opportunities, or send your resume to {' '}
            <a href="mailto:careers@hirenest.com" className="text-blue-600 hover:underline">
              careers@hirenest.com
            </a> {' '}
            to be considered for future openings.
          </p>
          
          <div className="border-b border-gray-200 my-6"></div>
          
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-600 mb-4">Follow us on social media to be the first to know about new opportunities!</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:underline">LinkedIn</a>
              <a href="#" className="text-blue-600 hover:underline">Twitter</a>
              <a href="#" className="text-blue-600 hover:underline">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CareerPage;