import React from "react";
import reminderImg from "../assets/reminder1.png"; // Replace with your actual images
import goalsImg from "../assets/hydrationgoal1.png";
import progressImg from "../assets/progress.png";
import cupSelectionImg from "../assets/cupselection.png";
import themeSettingsImg from "../assets/themes.png";

import { FaBell, FaBullseye, FaChartBar, FaGlassMartiniAlt, FaPalette } from "react-icons/fa";

const FeaturesPage = () => {
  const features = [
    {
      title: "Smart Reminders",
      description:
        "Never forget to drink water again. Get timely reminders based on your lifestyle and preferences to keep you hydrated throughout the day.",
      icon: <FaBell className="text-blue-500 text-2xl" />,
      image: reminderImg,
    },
    {
      title: "Daily Hydration Goals",
      description:
        "Personalized water intake goals based on your age, weight, activity level, and climate conditions. Stay on track and build healthy habits.",
      icon: <FaBullseye className="text-green-500 text-2xl" />,
      image: goalsImg,
    },
    {
      title: "Progress Tracking",
      description:
        "Easily track your daily, weekly, and monthly hydration progress. View detailed charts and stay motivated on your hydration journey.",
      icon: <FaChartBar className="text-purple-500 text-2xl" />,
      image: progressImg,
    },
    {
      title: "Cup Selection",
      description:
        "Choose from a variety of cup sizes to accurately log your water intake. Customize your experience by selecting your favorite cup or bottle.",
      icon: <FaGlassMartiniAlt className="text-cyan-500 text-2xl" />, // New icon for cup selection
      image: cupSelectionImg,
    },
    {
      title: "Theme Settings",
      description:
        "Personalize the app's appearance with a range of themes and color schemes. Switch between light and dark modes to match your preference.",
      icon: <FaPalette className="text-pink-500 text-2xl" />, // New icon for theme settings
      image: themeSettingsImg,
    },
  ];

  return (
    <section id="features" className=" py-32 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div
              className={`flex justify-center ${
                index % 2 === 1 ? "md:order-last" : ""
              }`}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full max-w-[220px] md:max-w-[280px] lg:max-w-[320px] "
              />
            </div>

            {/* Content */}
            <div
              className={`flex flex-col items-center md:items-start text-center md:text-left ${
                index % 2 === 1 ? "md:order-first" : ""
              }`}
            >
              <div className="bg-white rounded-lg shadow-sm w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h2 className="font-extrabold text-2xl md:text-3xl text-gray-900 mb-2 leading-snug">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-base max-w-md">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesPage;
