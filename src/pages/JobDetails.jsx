  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    {/* Left Column - Description & Requirements */}
    <div className="md:col-span-2 space-y-6">
      <section className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </section>

      <section className="bg-white p-4 md:p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h2>
        <p className="text-gray-700">{job.requirements}</p>
      </section>

      {/* Apply Button */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow">
        <button
          onClick={handleApply}
          disabled={alreadyApplied}
          className={`w-full md:w-auto px-6 py-3 rounded-lg text-white font-semibold transition ${
            alreadyApplied
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {alreadyApplied ? 'Already Applied' : 'Apply for this Job'}
        </button>
      </div>
    </div>

    {/* Right Column - Company Info */}
    <div className="md:col-span-1">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow sticky top-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Company Information</h3>
        {/* Add company information here */}
      </div>
    </div>
  </div> 