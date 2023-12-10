import React, { useState } from 'react';

const NewInstallationServices = () => {
  const [requestResidential, setRequestResidential] = useState('');
  const [installationResidential, setInstallationResidential] = useState('');
  const [requestCommercial, setRequestCommercial] = useState('');
  const [installationCommercial, setInstallationCommercial] = useState('');
  const [requestResidential2, setRequestResidential2] = useState('');
  const [installationResidential2, setInstallationResidential2] = useState('');
  const [requestCommercial2, setRequestCommercial2] = useState('');
  const [installationCommercial2, setInstallationCommercial2] = useState('');

  const generateRequestResidential = () => {
    setRequestResidential('101');
  };

  const generateInstallationResidential = () => {
    setInstallationResidential('201');
  };

  const generateRequestCommercial = () => {
    setRequestCommercial('102');
  };

  const generateInstallationCommercial = () => {
    setInstallationCommercial('202');
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md mb-4 w-full md:w-1/2 lg:w-4/5">
          <h1 className="text-2xl font-semibold mb-4">Electric Installation</h1>
        </div>

        <div className="bg-blue-400 p-8 rounded shadow-md text-white mb-4 w-full md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">Residential Installation</h2>
          <p>
            At Simsun Electric, we understand that your home is your sanctuary. Our residential installation services are designed to enhance your living space. From custom lighting solutions to smart home setups, we've got your electrical needs covered.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            onClick={generateRequestResidential}
          >
            Request {requestResidential}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
            onClick={generateInstallationResidential}
          >
            Installation {installationResidential}
          </button>
        </div>

        <div className="bg-green-400 p-8 rounded shadow-md text-white mb-4 w-full md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">Commercial Installation</h2>
          <p>
            When it comes to powering your business, you need reliable and efficient electrical solutions. Our commercial installation services are tailored to your industry, whether you run a restaurant, office, or manufacturing facility. Count on us for dependable electrical infrastructure.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            onClick={generateRequestCommercial}
          >
            Request {requestCommercial}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
            onClick={generateInstallationCommercial}
          >
            Installation {installationCommercial}
          </button>
        </div>

        <div className="bg-blue-400 p-8 rounded shadow-md text-white mb-4 w-full md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">Residential Installation</h2>
          <p>
            For residential installations, we provide top-quality electrical services to ensure your home is safe and well-connected. Our experienced electricians are here to help you with all your residential electrical needs.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            onClick={() => setRequestResidential2('103')}
          >
            Request {requestResidential2}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
            onClick={() => setInstallationResidential2('203')}
          >
            Installation {installationResidential2}
          </button>
        </div>

        <div className="bg-green-400 p-8 rounded shadow-md text-white w-full mb-5 md:w-1/2 lg:w-4/5">
          <h2 className="text-2xl font-semibold mb-4">Commercial Installation</h2>
          <p>
            When it comes to commercial electrical installations, our team has the expertise to handle large-scale projects. We offer tailored solutions to meet the electrical requirements of your business, ensuring efficiency and reliability.
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 mr-2"
            onClick={() => setRequestCommercial2('104')}
          >
            Request {requestCommercial2}
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 ml-2"
            onClick={() => setInstallationCommercial2('204')}
          >
            Installation {installationCommercial2}
          </button>
        </div>
      </div>
    </>
  );
};

export default NewInstallationServices;
