import React from "react";

const faqs = [
  // General
  {
    question: "What is DoraDrink?",
    answer: "DoraDrink is a hydration tracking app designed to help you monitor and improve your daily water intake.",
  },
  {
    question: "How does DoraDrink work?",
    answer: "You log your water intake and DoraDrink tracks your progress toward your daily hydration goal.",
  },
  {
    question: "Is DoraDrink's tracking accurate?",
    answer: "DoraDrink offers accurate tracking based on your input and recommended intake goals.",
  },
  {
    question: "Is DoraDrink free to use?",
    answer: "Yes, DoraDrink is free with optional premium features in the future.",
  },
  {
    question: "Can I export my DoraDrink data?",
    answer: "This feature will be available soon in settings.",
  },

  // Account
  {
    question: "How do I update my personal data?",
    answer: "Go to Settings > Personal Information to update your age, weight, height, and other details.",
  },
  {
    question: "Can I reset my account data?",
    answer: "Yes, you can reset all your data from Settings > Reset Data. This will erase all your water intake, reminders, and preferences.",
  },
  {
    question: "How do I change my password?",
    answer: "Currently, DoraDrink does not require an account or password. All data is stored locally on your device.",
  },
  {
    question: "Is my data private?",
    answer: "Yes, your data is stored locally and is not shared with anyone. Please see our Privacy Policy for more details.",
  },

  // Services
  {
    question: "Does DoraDrink send reminders?",
    answer: "Yes, DoraDrink can send you hydration reminders based on your schedule. You can customize reminders in Settings > Reminder Settings.",
  },
  {
    question: "How do I contact support?",
    answer: "Go to Settings > Contact Support to reach out to our team via email.",
  },
  {
    question: "Is there a premium version?",
    answer: "All core features are free. Premium features may be introduced in the future.",
  },

  // Help
  {
    question: "The app crashes when I open it.",
    answer: "Please try reinstalling the app. If the issue persists, contact Support.",
  },
  {
    question: "I can't log my water intake.",
    answer: "Make sure you have the latest version of DoraDrink. If the problem continues, contact Support.",
  },
  {
    question: "Reminders are not working.",
    answer: "Check your notification settings and ensure DoraDrink has permission to send notifications.",
  },
  {
    question: "The app is slow or unresponsive.",
    answer: "Try clearing the app cache or reinstalling DoraDrink. If issues persist, contact Support.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mb-12">
          Have questions about DoraDrink? Find answers here!
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
