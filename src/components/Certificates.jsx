import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Certificates</h2>
        <div className="space-y-6">
          {/* Example Certificate */}
          <div className="space-y-4 border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-xl font-semibold">ITS Cybersecurity</h3>
            <p className="text-gray-600">Issued by Certiport | May 2024</p>
            <p className="mt-2">
            Cybersecurity certifications are provided by accredited organizations that follow and maintain a certain level of industry accepted standards.
            </p>
          </div>
          {/* Add more certificates here */}
          <div className="space-y-4 border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-xl font-semibold">NCII Certificate: CSS</h3>
            <p className="text-gray-600">Issued by TESDA |March 2023</p>
            <p className="mt-2">
            The Computer Systems Servicing NC II Qualification covers competencies related to installing and configuring computer systems, setting up computer networks and servers, and maintaining and repairing computer systems and networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
