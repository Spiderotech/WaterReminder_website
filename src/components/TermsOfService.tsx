import React from 'react';

const TermsOfService = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-8 text-gray-700">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider uppercase">
              AGREEMENT TO TERMS
            </h2>
            <p className="mb-4 leading-relaxed">
              These Terms of Service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity you and
              Space we, concerning your access to and use of the space.com
              website as well as any other media form, media channel, mobile
              website or mobile application related, linked, or otherwise
              connected thereto (collectively, the "Site").
            </p>
            <p className="leading-relaxed">
              You agree that by accessing the Site, you have read, understood,
              and agree to be bound by all of these Terms of Service. If you do
              not agree with all of these Terms of Service, then you are
              expressly prohibited from using the Site and you must discontinue
              use immediately.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4 tracking-wider uppercase">
              USER REPRESENTATIONS
            </h2>
            <p className="mb-4 leading-relaxed">
              By using the Site, you represent and warrant that:
            </p>
            <ol className="list-decimal list-inside space-y-2 pl-4">
              <li>
                All registration information you submit will be true, accurate,
                current, and complete;
              </li>
              <li>
                You will maintain the accuracy of such information and promptly
                update such registration information as necessary;
              </li>
              <li>
                You have the legal capacity and you agree to comply with these
                Terms of Service;
              </li>
              <li>Not a minor in the jurisdiction in which you reside</li>
              <li>
                You will not access the Site through automated or non-human
                means, whether through a bot, script, or otherwise;
              </li>
            </ol>
            <p className="mt-6 leading-relaxed">
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Site (or any portion thereof).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;