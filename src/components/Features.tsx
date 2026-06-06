import centerApp from "../assets/splash2.png";
import farLeftApp from "../assets/onbording.png";
import leftApp from "../assets/onbord1.png";
import rightApp from "../assets/hydrationgoal.png";
import farRightApp from "../assets/progress.png";
import {
  IoAlarm,
  IoAnalytics,
  IoFlame,
  IoNavigateCircle,
  IoStatsChart,
  IoTime,
  IoTrophy,
  IoWater,
} from "react-icons/io5";

const leftHighlights = [
  {
    icon: <IoTime />,
    title: "Smart Reminders",
    copy: "Right time, every time",
  },
  {
    icon: <IoNavigateCircle />,
    title: "Tailored to You",
    copy: "Based on your lifestyle",
  },
  {
    icon: <IoWater />,
    title: "Never Miss a Sip",
    copy: "Gentle nudges that work",
  },
];

const rightHighlights = [
  {
    icon: <IoAnalytics />,
    title: "Daily & Weekly Insights",
    copy: "Clear progress at a glance",
  },
  {
    icon: <IoFlame />,
    title: "Streaks That Motivate",
    copy: "Build consistency, earn badges",
  },
  {
    icon: <IoTrophy />,
    title: "Celebrate Every Win",
    copy: "Big or small, every drop counts",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_50%_18%,#eef7ff_0,#ffffff_42%,#eef8ff_100%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-32 -top-28 h-80 w-80 rounded-full bg-blue-100/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-12 h-72 w-72 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-r from-blue-400/80 via-sky-200/80 to-cyan-300/80" />
      <div className="pointer-events-none absolute -bottom-10 left-[-8%] h-36 w-[68%] rounded-[50%] bg-white" />
      <div className="pointer-events-none absolute -bottom-12 right-[-8%] h-32 w-[52%] rounded-[50%] bg-white/80" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.36fr_0.78fr] lg:gap-6 xl:px-10">
        <div className="order-2 mx-auto max-w-md text-center lg:order-1 lg:mx-0 lg:text-left">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blue-100 text-3xl text-blue-600 shadow-lg shadow-blue-100/70 lg:mx-0">
            <IoAlarm />
          </span>

          <h2 className="mt-7 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-[2.55rem]">
            Personalized Reminders to Keep You{" "}
            <span className="text-blue-600">Hydrated</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-700">
            DoraDrink learns your daily routine to send smart, personalized
            reminders. Stay on track with your hydration goals and build healthy
            habits without even thinking about it.
          </p>

          <div className="mt-8 rounded-3xl bg-white/90 p-5 text-left shadow-2xl shadow-blue-900/10 ring-1 ring-blue-50 backdrop-blur">
            {leftHighlights.map((item) => (
              <div key={item.title} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-50 text-2xl text-blue-600 ring-1 ring-blue-100">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto h-[360px] w-full max-w-[42rem] overflow-visible sm:h-[455px] lg:h-[520px]">
            <div className="absolute left-1/2 top-[74%] h-14 w-[64%] -translate-x-1/2 rounded-[50%] bg-blue-200/60 blur-2xl" />
            <div className="absolute bottom-[9%] left-1/2 h-10 w-[50%] -translate-x-1/2 rounded-[50%] bg-white shadow-[0_24px_58px_rgba(37,99,235,0.2)] ring-1 ring-blue-100" />

            <img
              src={farLeftApp}
              alt="DoraDrink lifestyle setup screen"
              className="absolute bottom-[16%] left-1/2 z-0 hidden h-[245px] -translate-x-[128%] rotate-[-3deg] object-contain drop-shadow-xl sm:block lg:h-[315px]"
            />
            <img
              src={leftApp}
              alt="DoraDrink onboarding screen"
              className="absolute bottom-[12%] left-1/2 z-10 hidden h-[305px] -translate-x-[88%] rotate-[-1deg] object-contain drop-shadow-2xl sm:block lg:h-[385px]"
            />
            <img
              src={rightApp}
              alt="DoraDrink hydration goal screen"
              className="absolute bottom-[12%] left-1/2 z-10 hidden h-[305px] -translate-x-[12%] rotate-[1deg] object-contain drop-shadow-2xl sm:block lg:h-[385px]"
            />
            <img
              src={rightApp}
              alt="DoraDrink progress screen"
              className="absolute bottom-[16%] left-1/2 z-0 hidden h-[245px] translate-x-[32%] rotate-[6deg] object-contain drop-shadow-xl sm:block lg:h-[315px]"
            />
            <img
              src={centerApp}
              alt="DoraDrink app splash screen"
              className="absolute bottom-[7%] left-1/2 z-20 h-[335px] -translate-x-1/2 object-contain drop-shadow-[0_26px_38px_rgba(15,23,42,0.24)] sm:h-[430px] lg:h-[500px]"
            />

            <span className="absolute left-[17%] top-[7%] hidden h-4 w-4 rounded-full border border-blue-400 bg-white/70 shadow-inner sm:block" />
            <span className="absolute left-[22%] bottom-[15%] hidden h-5 w-5 rounded-full border border-blue-400 bg-white/70 shadow-inner lg:block" />
            <span className="absolute right-[20%] top-[9%] hidden h-7 w-7 rounded-full border border-blue-300 bg-white/80 shadow-inner sm:block" />
            <span className="absolute right-[13%] top-[17%] hidden h-4 w-4 rounded-full border border-blue-400 bg-white/70 shadow-inner lg:block" />
          </div>
        </div>

        <div className="order-3 mx-auto max-w-md text-center lg:mx-0 lg:text-left">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-500 shadow-lg shadow-emerald-100/70 lg:mx-0">
            <IoStatsChart />
          </span>

          <h2 className="mt-7 text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-[2.55rem]">
            Track Your Progress & Celebrate{" "}
            <span className="text-blue-600">Milestones</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-700">
            Track your daily intake, view historical data, and see your hydration
            streak grow over time. With DoraDrink, you can easily see how far
            you've come and celebrate every drop you've tracked.
          </p>

          <div className="mt-8 rounded-3xl bg-white/90 p-5 text-left shadow-2xl shadow-blue-900/10 ring-1 ring-blue-50 backdrop-blur">
            {rightHighlights.map((item) => (
              <div key={item.title} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-emerald-50 text-2xl text-emerald-500 ring-1 ring-emerald-100">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-950">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mt-9 flex w-[min(92%,32rem)] items-center gap-4 rounded-full bg-white/95 px-5 py-4 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-50 backdrop-blur">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-600 text-2xl text-white shadow-lg shadow-blue-500/30">
          <IoWater />
        </span>
        <p className="text-sm font-semibold text-slate-950 sm:text-base">
          Your hydration journey starts here.
          <span className="block font-medium text-slate-600">
            Drink better. Feel better. <span className="text-blue-600">Every day.</span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Features;
