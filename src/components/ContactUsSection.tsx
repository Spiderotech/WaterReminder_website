import React from 'react';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { BsChatDots } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

const ContactUsSection = () => {
  return (
    <section id='contact' className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Column: Contact Info */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Have questions about DoraDrink? We're here to help. Contact us via email or social media.
          </p>

          <div className="mb-8">
            <p className="text-gray-900 text-lg font-semibold mb-2">support@doradrink.com</p> 
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:w-1/2 bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
          <p className="text-gray-600 text-sm mb-6">You can reach us anytime</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="first-name" className="sr-only">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First name"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Last name"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <HiOutlineMail className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 pl-10 pr-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone-number" className="sr-only">
                Phone number
              </label>
              <div className="relative mt-1 flex">
                <select
                  id="country-code"
                  name="country-code"
                  className="block appearance-none w-auto py-2 pl-3 pr-1 border border-gray-300 rounded-l-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option>+62</option>
                  <option>+91</option>
                  <option>+44</option>
                </select>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  placeholder="Phone number"
                  className="flex-1 block w-full border border-gray-300 rounded-r-lg shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="how-can-we-help" className="sr-only">
                How can we help?
              </label>
              <div className="relative mt-1">
                <textarea
                  id="how-can-we-help"
                  name="how-can-we-help"
                  rows={3}
                  placeholder="How can we help?"
                  maxLength={120}
                  className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                  defaultValue={''}
                />
                <div className="absolute bottom-2 right-3 text-xs text-gray-400">
                  0/120
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>

          <p className="mt-4 text-center text-gray-500 text-xs">
            By contacting us, you agree to our{' '}
            <a href="/terms-and-conditions" className="text-blue-600 hover:underline">
              Terms of service
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;