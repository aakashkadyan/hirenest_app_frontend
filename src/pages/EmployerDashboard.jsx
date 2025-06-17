  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <img
            src="/images/hirenest-logo-new.png"
            alt="HireNest Logo"
            className="h-8 w-auto object-contain"
          />
          <div className="flex items-center">
            <UserProfile />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Sidebar */}
          <aside className="md:col-span-3 bg-white p-4 rounded-lg shadow">
            <nav className="flex flex-col space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-3 py-2 rounded ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700 font-semibold'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <section className="md:col-span-9 bg-white p-4 md:p-6 rounded-lg shadow">
            {activeTab === 'post-jobs' && <div>Post Jobs Content</div>}
            {activeTab === 'posted-jobs' && <div>Posted Jobs Content</div>}
            {activeTab === 'applications' && <div>Applications Content</div>}
          </section>
        </div>
      </main>
    </div>
  ); 