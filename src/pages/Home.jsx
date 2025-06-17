import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />  
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="relative px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
          <div className="container mx-auto max-w-6xl relative">
            <div className="text-center text-white space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                Welcome to <span className="text-blue-200">HireNest</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100 px-4">
                Find your dream job or the perfect candidate with our AI-powered matching system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 px-4">
                <a href="/jobs" className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Find Jobs
                </a>
                <a href="/signup" className="w-full sm:w-auto bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Post a Job
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
              Why Choose <span className="text-blue-600">HireNest</span>?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transform hover:scale-105 transition-all duration-200 hover:shadow-xl">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">For Job Seekers</h3>
                <p className="text-gray-600 leading-relaxed">Discover opportunities that match your skills and aspirations with AI-powered recommendations.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transform hover:scale-105 transition-all duration-200 hover:shadow-xl">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">For Employers</h3>
                <p className="text-gray-600 leading-relaxed">Find the perfect candidates for your positions using our advanced matching system.</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transform hover:scale-105 transition-all duration-200 hover:shadow-xl">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">AI-Powered</h3>
                <p className="text-gray-600 leading-relaxed">Our intelligent system learns from your preferences to provide better matches over time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600 font-medium">Active Jobs</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">5K+</div>
                <div className="text-gray-600 font-medium">Companies</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">50K+</div>
                <div className="text-gray-600 font-medium">Job Seekers</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Perfect Match?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Join thousands of job seekers and employers who have already found success with HireNest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/signup" className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl">
                Get Started Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home 