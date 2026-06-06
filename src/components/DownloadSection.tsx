import splashImage from "../assets/splash2.png";
import {
  FaApple,
  FaBell,
  FaChartColumn,
  FaGooglePlay,
  FaStar,
} from "react-icons/fa6";
import { IoWater } from "react-icons/io5";
import { FaBullseye } from "react-icons/fa";

const APP_STORE_URL = "https://apps.apple.com/app/id6752671109";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.doradrinkwaterreminderapp";

const highlights = [
  {
    icon: <FaBell />,
    title: "Smart Reminders",
    copy: "Never miss a sip",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaBullseye />,
    title: "Personalized Goals",
    copy: "Tailored to you",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <FaChartColumn />,
    title: "Track Progress",
    copy: "See how you improve",
    color: "bg-violet-50 text-violet-600",
  },
];

const openStore = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

const DownloadSection = () => {
  return (
    <section id="download" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 shadow-2xl shadow-blue-900/5 ring-1 ring-blue-50 sm:p-10 lg:p-16">
        <div className="pointer-events-none absolute right-20 top-20 h-[28rem] w-[28rem] rounded-full bg-blue-100/80" />
        <div className="pointer-events-none absolute right-56 top-56 grid grid-cols-5 gap-3 opacity-30">
          {Array.from({ length: 25 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          ))}
        </div>

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-blue-500 shadow-sm">
                <IoWater />
              </span>
              Stay hydrated, stay healthy
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Your Daily Hydration Partner{" "}
              <span className="text-blue-600">in Your Pocket</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              DoraDrink helps you build better hydration habits with smart
              reminders, goal tracking, and progress insights. Drink more water,
              feel better, live healthier.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => openStore(APP_STORE_URL)}
                className="flex h-14 w-56 items-center justify-center gap-3 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
              >
                <FaApple className="text-3xl" />
                <span className="text-left leading-none">
                  <span className="block text-xs">Download on the</span>
                  <span className="block text-2xl font-semibold">App Store</span>
                </span>
              </button>

              <button
                onClick={() => openStore(PLAY_STORE_URL)}
                className="flex h-14 w-56 items-center justify-center gap-3 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
              >
                <FaGooglePlay className="text-2xl text-emerald-400" />
                <span className="text-left leading-none">
                  <span className="block text-xs uppercase">Get it on</span>
                  <span className="block text-xl font-semibold">Google Play</span>
                </span>
              </button>
            </div>

            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-center gap-4 ${index > 0 ? "sm:border-l sm:border-slate-200 sm:pl-6" : ""}`}
                >
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl ${item.color}`}>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-sm font-black text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-white/90 p-5 shadow-xl shadow-blue-900/5 ring-1 ring-blue-50 sm:flex-row sm:items-center">
              <div className="flex -space-x-3">
                {["AM", "RJ", "SK"].map((initials, index) => (
                  <span
                    key={initials}
                    className={`grid h-12 w-12 place-items-center rounded-full border-2 border-white text-sm font-bold text-white ${
                      index === 0 ? "bg-slate-700" : index === 1 ? "bg-blue-500" : "bg-cyan-500"
                    }`}
                  >
                    {initials}
                  </span>
                ))}
                <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-white bg-blue-600 text-sm font-bold text-white">
                  25K+
                </span>
              </div>

              <div className="hidden h-12 w-px bg-slate-200 sm:block" />

              <div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600">
                  Trusted by 25,000+ happy users worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto h-[520px] w-full max-w-xl">
            <div className="absolute bottom-5 left-1/2 h-24 w-[78%] -translate-x-1/2 rounded-[50%] bg-blue-500 shadow-[0_28px_55px_rgba(37,99,235,0.35)]" />
            <div className="absolute bottom-20 right-7 z-20 rounded-3xl bg-white p-7 text-center shadow-2xl shadow-blue-900/10">
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-sky-100 text-4xl text-blue-600">
                <IoWater />
              </span>
              <strong className="mt-5 block text-xl font-black text-slate-950">
                Better Habits
                <span className="block">Better You</span>
              </strong>
              <div className="mx-auto mt-5 h-2 w-28 rounded-full bg-blue-100">
                <div className="h-full w-[62%] rounded-full bg-blue-600" />
              </div>
            </div>

            <img
              src={splashImage}
              alt="DoraDrink app splash screen"
              className="absolute bottom-11 left-1/2 z-10 h-[500px] -translate-x-1/2 rotate-[6deg] object-contain drop-shadow-[0_34px_44px_rgba(15,23,42,0.28)]"
            />

            <span className="absolute left-8 top-28 h-6 w-6 rounded-full border border-blue-400 bg-white/60" />
            <span className="absolute right-10 top-20 h-5 w-5 rounded-full border border-blue-400 bg-white/60" />
            <span className="absolute right-4 top-36 h-3 w-3 rounded-full border border-blue-300 bg-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
