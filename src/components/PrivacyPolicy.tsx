import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider uppercase">
              INTRODUCTION
            </h2>
            <p className="mb-4 leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains
              what personal information we collect, how we use it, and your
              choices regarding our use of your personal information. This
              policy applies to all visitors, users, and others who access the
              Service ("Users").
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider uppercase">
              INFORMATION WE COLLECT
            </h2>
            <p className="mb-4 leading-relaxed">
              We collect different types of information from or through the
              Service.
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                **Personal Information:** This includes your name, email address,
                phone number, and any other information you provide when you
                register for an account or contact us.
              </li>
              <li>
                **Usage Data:** Information about how you access and use the
                Service, such as your IP address, browser type, device
                information, and pages visited.
              </li>
              <li>
                **Cookies and Tracking Technologies:** We use cookies and
                similar tracking technologies to monitor activity on our Service
                and hold certain information.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider uppercase">
              HOW WE USE YOUR INFORMATION
            </h2>
            <p className="mb-4 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Provide, maintain, and improve our Service;</li>
              <li>Communicate with you;</li>
              <li>Monitor and analyze usage and trends to improve your experience;</li>
              <li>Detect, prevent, and address technical issues;</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider uppercase">
              SHARING YOUR INFORMATION
            </h2>
            <p className="leading-relaxed">
              We do not share your personal information with third parties
              except as necessary to provide our services, comply with the law,
              or protect our rights.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider uppercase">
              YOUR CHOICES AND RIGHTS
            </h2>
            <p className="leading-relaxed">
              You have certain choices regarding the information we collect and
              how it's used. You may access, update, or delete your personal
              information by contacting us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;