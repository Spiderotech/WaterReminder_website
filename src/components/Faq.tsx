import {
  FaBell,
  FaCloudArrowUp,
  FaDroplet,
  FaGear,
  FaGift,
  FaLock,
  FaPlus,
  FaShieldHalved,
  FaTrashCan,
  FaUser,
} from "react-icons/fa6";
import { FaBullseye } from "react-icons/fa";

const faqs = [
  {
    question: "What is DoraDrink?",
    answer:
      "DoraDrink is a hydration tracking app designed to help you monitor and improve your daily water intake.",
    icon: <FaDroplet />,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    question: "How does DoraDrink work?",
    answer:
      "You log your water intake and DoraDrink tracks your progress toward your daily hydration goal.",
    icon: <FaGear />,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    question: "Is DoraDrink's tracking accurate?",
    answer:
      "DoraDrink offers accurate tracking based on your input and recommended intake goals.",
    icon: <FaBullseye />,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    question: "Is DoraDrink free to use?",
    answer: "Yes, DoraDrink is free with optional premium features in the future.",
    icon: <FaGift />,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    question: "Can I export my DoraDrink data?",
    answer: "This feature will be available soon in settings.",
    icon: <FaCloudArrowUp />,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    question: "How do I update my personal data?",
    answer:
      "Go to Settings > Personal Information to update your age, weight, height, and other details.",
    icon: <FaUser />,
    tone: "bg-teal-50 text-teal-600",
  },
  {
    question: "Can I reset my account data?",
    answer:
      "Yes, you can reset all your data from Settings > Reset Data. This will erase all your water intake, reminders, and preferences.",
    icon: <FaTrashCan />,
    tone: "bg-rose-50 text-rose-500",
  },
  {
    question: "How do I change my password?",
    answer:
      "Currently, DoraDrink does not require an account or password. All data is stored locally on your device.",
    icon: <FaLock />,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    question: "Is my data private?",
    answer:
      "Yes, your data is stored locally and is not shared with anyone. Please see our Privacy Policy for more details.",
    icon: <FaShieldHalved />,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    question: "Does DoraDrink send reminders?",
    answer:
      "Yes, DoraDrink can send you hydration reminders based on your schedule. You can customize reminders in Settings > Reminder.",
    icon: <FaBell />,
    tone: "bg-violet-50 text-violet-600",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white p-6 shadow-2xl shadow-blue-900/5 ring-1 ring-blue-50 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute right-20 top-10 hidden h-56 w-56 rounded-full bg-blue-50 blur-2xl lg:block" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-white">
                ?
              </span>
              FAQ
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
              Frequently Asked
              <span className="block text-blue-600">Questions</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Have questions about DoraDrink? We've got you covered. Find
              answers to the most common questions below.
            </p>
          </div>

          <div className="relative hidden h-48 lg:block">
            <div className="absolute right-28 top-4 h-32 w-40 rotate-[-5deg] rounded-[2rem] bg-blue-600 shadow-2xl shadow-blue-500/25">
              <span className="grid h-full place-items-center text-7xl font-black text-white">
                ?
              </span>
              <span className="absolute -bottom-5 left-10 h-10 w-10 rotate-45 rounded-br-xl bg-blue-600" />
            </div>
            <div className="absolute right-0 top-16 h-28 w-40 rotate-[5deg] rounded-[1.75rem] bg-white shadow-2xl shadow-blue-900/10 ring-1 ring-blue-50">
              <span className="grid h-full place-items-center text-5xl font-black text-blue-500">
                ...
              </span>
              <span className="absolute -bottom-4 right-10 h-8 w-8 rotate-45 rounded-br-xl bg-white ring-1 ring-blue-50" />
            </div>
            <span className="absolute right-80 top-8 h-4 w-3 rotate-[-35deg] rounded-full bg-blue-500" />
            <span className="absolute right-72 top-2 h-9 w-2 rotate-[-25deg] rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="relative z-10 mt-9 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="flex items-center gap-5 rounded-2xl border border-blue-50 bg-white p-5 shadow-lg shadow-blue-900/5"
            >
              <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-2xl shadow-lg shadow-slate-900/5 ${faq.tone}`}>
                {faq.icon}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-black text-slate-950">{faq.question}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
              <button
                type="button"
                aria-label={`Expand ${faq.question}`}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-blue-100 text-blue-600 transition hover:bg-blue-50"
              >
                <FaPlus />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
