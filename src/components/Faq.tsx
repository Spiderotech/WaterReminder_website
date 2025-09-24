import React from "react";

const faqs = [
  {
    question: "How does Dora Drink calculate my water goal?",
    answer:
      "Dora Drink uses your personal information like age, weight, and activity level, along with local weather data, to recommend a daily hydration goal. You can always adjust this number to fit your personal needs.",
  },
  {
    question: "Can I get reminders on my smart watch?",
    answer:
      "Yes! Dora Drink supports notifications on most smartwatches, making it easy to get a quick nudge to drink water, even when your phone isn't in hand.",
  },
  {
    question: "What if I forget to log a drink?",
    answer:
      "No problem at all. You can easily add, edit, or delete a log entry at any time to keep your daily tracking accurate. Just tap the plus button and adjust the time and amount.",
  },
 {
    question: "How do I add a new cup size?",
    answer:
      "You can add custom cup sizes in the app's home screen. This allows you to quickly log your water intake with just a tap, making the process faster and more accurate for you.",
  },
  {
    question: "Why is staying hydrated so important?",
    answer:
      "Proper hydration is vital for maintaining energy levels, supporting cognitive function, and improving overall physical health. It's the simplest way to take care of your body from the inside out.",
  },
  {
    question: "Can I customize my reminder schedule?",
    answer:
      "Yes, you can. While the app provides intelligent reminders based on your routine, you can also set specific times or intervals for reminders that work best for your lifestyle.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-12">
          Stuck on something? We're here to help you get the most out of Dora Drink.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-1">
                <span className="p-2 rounded-lg bg-blue-50 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.404-.901 3.73-1.081 1.25-.176 2.457-.222 3.522-.164.84.045 1.583.167 2.186.326.386.103.687.35.836.72-.083.048-.156.096-.226.144-.823.57-1.745.922-2.825 1.056-1.25.158-2.455.086-3.52-.164-.84-.045-1.583-.167-2.186-.326-.386-.103-.687-.35-.836-.72z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">{faq.question}</h4>
                <p className="text-gray-600 mt-1">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
