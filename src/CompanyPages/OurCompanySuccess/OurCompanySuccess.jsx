import React from 'react'

const OurCompanySuccess = () => {
  return (
    <div>
       <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-[#D7ADAE] p-4">
        <h1 className="text-3xl text-white font-semibold">Simsun Success</h1>
      </header>

      {/* Content */}
      <div className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Our Success Story</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec
            justo eget justo hendrerit cursus.
          </p>
        </div>

        {/* Main Roles */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Main Roles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black">Role 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black">Role 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black">Role 3</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>

        {/* Support Layout */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Support Layout</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black">Support 1</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black">Support 2</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-black">Support 3</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      {/* <footer className="bg-blue-500 p-4 mt-8">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Your Company Name
        </p>
      </footer> */}
    </div>
    </div>
  )
}

export default OurCompanySuccess
