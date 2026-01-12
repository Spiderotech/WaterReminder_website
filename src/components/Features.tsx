import React from "react";
import centerApp from "../assets/splash2.png"; 
import leftApp from "../assets/onbord1.png";
import rightApp from "../assets/onbord1.png";
import farLeftApp from "../assets/onbording.png";
import farRightApp from "../assets/onbording3.png";

const Features = () => {
  return (
    <section className="relative  bg-white overflow-hidden ">
      <div className="grid md:grid-cols-3 gap-10 md:gap-26 items-center w-full max-w-7xl mx-auto px-6">
        {/* Left Text */}
        <div className="text-center md:text-left space-y-4 flex flex-col justify-center md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 leading-snug">
             Personalized Reminders to Keep You Hydrated
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            DoraDrink learns your daily routine to send smart, personalized reminders. Stay on track with your hydration goals and build healthy habits without even thinking about it.
            
          </p>
        </div>

        {/* Center App Images */}
        <div className="relative flex justify-center items-end min-h-[500px]">
          {/* Far Left */}
          <img
            src={farLeftApp}
            alt="App screen"
            className="hidden sm:block w-[140px] md:w-[160px] absolute -left-28 bottom-0 drop-shadow-xl z-0"
          />
          {/* Left */}
          <img
            src={leftApp}
            alt="App screen"
            className="hidden sm:block w-[220px] md:w-[200px] absolute -left-14 bottom-0 drop-shadow-xl z-10"
          />
          {/* Center */}
          <img
            src={centerApp}
            alt="App center"
            className="w-[280px] md:w-[220px] lg:w-[260px] z-20 drop-shadow-2xl relative"
          />
          {/* Right */}
          <img
            src={rightApp}
            alt="App screen"
            className="hidden sm:block w-[220px] md:w-[200px] absolute -right-14 bottom-0 drop-shadow-xl z-10"
          />
          {/* Far Right */}
          <img
            src={farRightApp}
            alt="App screen"
            className="hidden sm:block w-[140px] md:w-[160px] absolute -right-28 bottom-0 drop-shadow-xl z-0"
          />
        </div>

        {/* Right Text */}
        <div className="text-center md:text-right space-y-4 flex flex-col justify-center md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-600 leading-snug">
            Track Your Progress & Celebrate Milestones
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Track your daily intake, view historical data, and see your hydration streak grow over time. With DoraDrink, you can easily see how far you've come and celebrate every drop you've tracked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
