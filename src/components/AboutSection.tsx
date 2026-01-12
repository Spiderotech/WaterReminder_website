import React from "react";
import aboutimg from "../assets/about.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col items-start p-8 bg-gray-50 rounded-3xl shadow-lg h-full">
          <span className="text-white bg-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            OUR MISSION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Making Hydration a <br className="hidden sm:block" /> Happy and Healthy Habit
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
            DoraDrink was founded to help people lead healthier lives by making hydration effortless. Our smart reminders and intuitive tracking tools are designed to fit seamlessly into your day, ensuring you never forget to drink water and can easily see the positive impact it has on your well-being.
          </p>
          {/* Feature List */}
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 p-3 rounded-xl mr-4 text-white">
                {/* Replaced FaClock with inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Intelligent Reminders
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Get personalized notifications to drink water based on your daily schedule and goals.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-blue-600 p-3 rounded-xl mr-4 text-white">
                {/* Replaced FaChartBar with inline SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M11.47 3.84a.75.75 0 10-1.06 1.06l3.894 3.893a.75.75 0 001.06 0l3.894-3.893a.75.75 0 10-1.06-1.06l-3.368 3.369-3.369-3.37zM4.58 11.47a.75.75 0 001.06 0l3.894-3.893a.75.75 0 10-1.06-1.06L3.52 10.41a.75.75 0 000 1.06l5.96 5.96a.75.75 0 001.06 0l1.06-1.06a.75.75 0 00-1.06-1.06l-4.755 4.756-2.5-2.5zM12 20.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z" />
                  <path fillRule="evenodd" d="M3.75 14.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Effortless Progress Tracking
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  Visually track your daily, weekly, and monthly hydration progress.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Image */}
        <div className="relative h-full w-full">
          <img
            src={aboutimg}
            alt="Person drinking water"
            className="rounded-3xl object-cover w-full h-full min-h-[400px] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;