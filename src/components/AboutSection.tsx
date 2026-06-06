import homeImg from "../assets/home.png";
import profileImg from "../assets/profile.png";
import splashImg from "../assets/splash2.png";
import {
  FaArrowRight,
  FaBell,
  FaChartLine,
  FaCrown,
  FaDroplet,
  FaStar,
  FaUsers,
} from "react-icons/fa6";

const missionCards = [
  {
    icon: <FaBell />,
    title: "Smart Reminders",
    copy: "Personalized alerts that fit your routine and help you never miss a sip.",
    color: "bg-blue-600 text-white",
  },
  {
    icon: <FaChartLine />,
    title: "Progress Tracking",
    copy: "Track your daily, weekly & monthly progress with beautiful insights.",
    color: "bg-teal-500 text-white",
  },
];

const stats = [
  { icon: <FaUsers />, value: "25K+", label: "Happy Users", color: "bg-blue-50 text-blue-600" },
  { icon: <FaStar />, value: "4.9", label: "App Rating", color: "bg-violet-50 text-violet-600" },
  { icon: <FaDroplet />, value: "1M+", label: "Cups Tracked", color: "bg-teal-50 text-teal-500" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-sky-50/70 to-white" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto max-w-xl lg:mx-0">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
            <FaDroplet className="text-base" />
            Our Mission
          </span>

          <h2 className="mt-7 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Building Better Habits,{" "}
            <span className="text-blue-600">One Sip</span> at a Time.
          </h2>

          <div className="mt-5 h-1.5 w-16 rounded-full bg-[repeating-linear-gradient(90deg,#60a5fa_0_10px,transparent_10px_15px)]" />

          <p className="mt-6 max-w-lg text-base leading-7 text-slate-700">
            DoraDrink is more than a water tracker. It's your daily companion to
            help you stay hydrated, energized, and in control of your health.
          </p>

          <div className="mt-6 space-y-3">
            {missionCards.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-xl shadow-blue-900/5 ring-1 ring-blue-50"
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl text-xl shadow-lg ${item.color}`}>
                  {item.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-extrabold text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-slate-600">{item.copy}</p>
                </div>
                <span className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-blue-100 text-sm text-blue-500 sm:grid">
                  <FaArrowRight />
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-blue-900/5 ring-1 ring-blue-50 sm:grid-cols-3">
            {stats.map((item, index) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 ${index > 0 ? "sm:border-l sm:border-slate-200 sm:pl-4" : ""}`}
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-lg ${item.color}`}>
                  {item.icon}
                </span>
                <div>
                  <strong className="block text-xl font-black text-slate-950">{item.value}</strong>
                  <span className="text-xs font-medium text-slate-600">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[430px] w-full max-w-2xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-sky-100 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-50 sm:h-[500px] lg:h-[560px]">
          <div className="absolute left-[24%] top-[10%] h-[25rem] w-[25rem] rounded-full bg-blue-200/60" />
          <div className="absolute left-7 top-8 grid grid-cols-4 gap-2.5 opacity-35">
            {Array.from({ length: 16 }).map((_, index) => (
              <span key={index} className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            ))}
          </div>

          <div className="absolute right-5 top-8 z-30 flex rotate-[-6deg] items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-blue-900/10">
            <FaCrown className="text-2xl text-amber-400" />
            <div>
              <strong className="block text-xs font-black text-slate-950">7 Day Streak</strong>
              <span className="text-[11px] font-medium text-slate-500">Amazing! Keep it up!</span>
            </div>
            <FaArrowRight className="text-[10px] text-slate-300" />
          </div>

          <div className="absolute bottom-7 left-7 h-32 w-32 rounded-t-full bg-teal-400/40 blur-sm" />
          <div className="absolute bottom-7 left-16 h-28 w-24 rounded-t-full bg-teal-500/35 blur-sm" />
          <div className="absolute bottom-7 right-8 h-16 w-16 rounded-full bg-white/80 shadow-inner" />
          <div className="absolute bottom-14 right-20 h-8 w-8 rounded-full border border-blue-200 bg-white/70" />

          <img
            src={homeImg}
            alt="DoraDrink hydration dashboard"
            className="absolute bottom-16 left-[14%] z-10 h-[300px] rotate-[-8deg] object-contain drop-shadow-[0_24px_32px_rgba(15,23,42,0.22)] sm:h-[370px] lg:h-[420px]"
          />
          <img
            src={profileImg}
            alt="DoraDrink profile hydration goal"
            className="absolute bottom-16 right-[10%] z-10 h-[300px] rotate-[10deg] object-contain drop-shadow-[0_24px_32px_rgba(15,23,42,0.2)] sm:h-[370px] lg:h-[415px]"
          />
          <img
            src={splashImg}
            alt="DoraDrink welcome screen"
            className="absolute bottom-16 left-1/2 z-20 h-[335px] -translate-x-1/2 object-contain drop-shadow-[0_28px_38px_rgba(15,23,42,0.26)] sm:h-[430px] lg:h-[475px]"
          />

          <div className="absolute bottom-6 left-1/2 z-30 w-60 -translate-x-1/2 rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-2xl shadow-slate-900/25 sm:w-72">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold text-blue-100">Hydration Score</span>
                <strong className="mt-1.5 block text-xl font-black">Excellent</strong>
              </div>
              <span className="text-xs font-bold text-emerald-400">↑ 18%</span>
            </div>
            <div className="mt-3 flex h-5 items-end gap-1.5">
              {[8, 14, 9, 16, 11, 18, 12, 21].map((height, index) => (
                <span key={index} className="w-full rounded-full bg-cyan-400" style={{ height }} />
              ))}
            </div>
          </div>

          <span className="absolute right-8 top-[35%] h-12 w-12 rounded-full border-2 border-dashed border-blue-300" />
          <span className="absolute left-16 top-[24%] h-3 w-11 rotate-45 rounded-full bg-blue-500" />
          <span className="absolute left-24 top-[22%] h-3 w-11 rotate-[75deg] rounded-full bg-blue-200" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
