import competitionImg from "../assets/completion.png";
import goalsImg from "../assets/hydrationgoal.png";
import leaderboardImg from "../assets/leaderboard_podium.png";
import progressImg from "../assets/intro1.png";
import reminderImg from "../assets/reminder.png";
import rewardImg from "../assets/reawards.png";
import themeSettingsImg from "../assets/themes.png";
import {
  FaBell,
  FaBullseye,
  FaChartColumn,
  FaClock,
  FaCrown,
  FaFire,
  FaGift,
  FaMedal,
  FaMobileScreen,
  FaPalette,
  FaRankingStar,
  FaRotate,
  FaSliders,
  FaTrophy,
  FaUserGroup,
  FaWater,
} from "react-icons/fa6";

type FeatureCard = {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  tone: "blue" | "emerald" | "violet" | "pink" | "amber" | "cyan" | "indigo";
  bullets: {
    icon: JSX.Element;
    title: string;
  }[];
  imageClass?: string;
  visualClass?: string;
};

const toneClasses: Record<FeatureCard["tone"], { badge: string; bullet: string; glow: string; orb: string }> = {
  blue: {
    badge: "bg-blue-100 text-blue-600 shadow-blue-100/80",
    bullet: "bg-blue-50 text-blue-600",
    glow: "from-blue-100/0 via-blue-100/80 to-blue-200/40",
    orb: "bg-blue-100 text-blue-600",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-600 shadow-emerald-100/80",
    bullet: "bg-emerald-50 text-emerald-600",
    glow: "from-emerald-100/0 via-emerald-100/70 to-sky-100/50",
    orb: "bg-emerald-100 text-emerald-600",
  },
  violet: {
    badge: "bg-violet-100 text-violet-600 shadow-violet-100/80",
    bullet: "bg-violet-50 text-violet-600",
    glow: "from-violet-100/0 via-violet-100/70 to-blue-100/40",
    orb: "bg-violet-100 text-violet-600",
  },
  pink: {
    badge: "bg-pink-100 text-pink-500 shadow-pink-100/80",
    bullet: "bg-pink-50 text-pink-500",
    glow: "from-pink-100/0 via-pink-100/70 to-rose-100/40",
    orb: "bg-pink-100 text-pink-500",
  },
  amber: {
    badge: "bg-amber-100 text-amber-600 shadow-amber-100/80",
    bullet: "bg-amber-50 text-amber-600",
    glow: "from-amber-100/0 via-amber-100/70 to-orange-100/40",
    orb: "bg-amber-100 text-amber-600",
  },
  cyan: {
    badge: "bg-cyan-100 text-cyan-600 shadow-cyan-100/80",
    bullet: "bg-cyan-50 text-cyan-600",
    glow: "from-cyan-100/0 via-cyan-100/70 to-blue-100/40",
    orb: "bg-cyan-100 text-cyan-600",
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-600 shadow-indigo-100/80",
    bullet: "bg-indigo-50 text-indigo-600",
    glow: "from-indigo-100/0 via-indigo-100/70 to-violet-100/40",
    orb: "bg-indigo-100 text-indigo-600",
  },
};

const features: FeatureCard[] = [
  {
    title: "Smart Reminders",
    description:
      "Never forget to drink water again. Get timely reminders based on your lifestyle and preferences to keep you hydrated throughout the day.",
    icon: <FaBell />,
    image: reminderImg,
    tone: "blue",
    bullets: [
      { icon: <FaClock />, title: "Custom reminder times" },
      { icon: <FaBell />, title: "Smart & adaptive alerts" },
      { icon: <FaRotate />, title: "Snooze or reschedule anytime" },
    ],
  },
  {
    title: "Daily Hydration Goals",
    description:
      "Personalized water intake goals based on your age, weight, activity level, and climate conditions. Stay on track and build healthy habits.",
    icon: <FaBullseye />,
    image: goalsImg,
    tone: "emerald",
    bullets: [
      { icon: <FaWater />, title: "Personalized daily goal" },
      { icon: <FaSliders />, title: "Adjust anytime" },
      { icon: <FaChartColumn />, title: "Smart recommendations" },
    ],
  },
  {
    title: "Progress Tracking",
    description:
      "Easily track your daily, weekly, and monthly hydration progress. View detailed charts and stay motivated on your hydration journey.",
    icon: <FaChartColumn />,
    image: progressImg,
    tone: "violet",
    bullets: [
      { icon: <FaChartColumn />, title: "Daily, weekly & monthly views" },
      { icon: <FaWater />, title: "Detailed insights & stats" },
      { icon: <FaTrophy />, title: "Stay motivated every day" },
    ],
  },
  {
    title: "Theme Settings",
    description:
      "Personalize the app's appearance with themes and color schemes. Switch between light and dark modes to match your preference.",
    icon: <FaPalette />,
    image: themeSettingsImg,
    tone: "pink",
    bullets: [
      { icon: <FaMobileScreen />, title: "Light & Dark mode" },
      { icon: <FaPalette />, title: "Beautiful color themes" },
      { icon: <FaSliders />, title: "System default option" },
    ],
  },
  {
    title: "Rewards Store",
    description:
      "Turn healthy hydration into real motivation. Earn coins, unlock rewards, and keep coming back to build your best daily routine.",
    icon: <FaGift />,
    image: rewardImg,
    tone: "emerald",
    imageClass: "max-h-[250px] sm:max-h-[300px]",
    visualClass: "items-center justify-center",
    bullets: [
      { icon: <FaGift />, title: "Unlock exciting rewards" },
      { icon: <FaCrown />, title: "Collect coins as you hydrate" },
      { icon: <FaFire />, title: "Daily motivation loops" },
    ],
  },
  {
    title: "Competitions",
    description:
      "Join hydration challenges, complete goals, and compete with friends. Every glass gets you closer to the next win.",
    icon: <FaTrophy />,
    image: competitionImg,
    tone: "amber",
    imageClass: "max-h-[255px] sm:max-h-[310px]",
    visualClass: "items-center justify-center",
    bullets: [
      { icon: <FaTrophy />, title: "Challenge-based goals" },
      { icon: <FaMedal />, title: "Completion rewards" },
      { icon: <FaUserGroup />, title: "Compete with friends" },
    ],
  },
  {
    title: "Leaderboard",
    description:
      "Celebrate top performers and make consistency visible. Friendly rankings help users stay focused and proud of their progress.",
    icon: <FaRankingStar />,
    image: leaderboardImg,
    tone: "indigo",
    imageClass: "max-h-[220px] sm:max-h-[260px]",
    visualClass: "items-center justify-center",
    bullets: [
      { icon: <FaRankingStar />, title: "Live ranking moments" },
      { icon: <FaCrown />, title: "Top achiever spotlight" },
      { icon: <FaUserGroup />, title: "Community motivation" },
    ],
  },
];

const FeaturesPage = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-50 to-white" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
            DoraDrink features
          </span>
          <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            Everything you need to stay hydrated
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {features.map((feature, index) => {
            const tone = toneClasses[feature.tone];
            const isWide = index === features.length - 1;

            return (
              <article
                key={feature.title}
                className={`relative min-h-[25rem] overflow-hidden rounded-[1.75rem] border border-blue-50 bg-gradient-to-br from-white via-white to-sky-50/80 p-6 shadow-xl shadow-blue-900/5 sm:p-8 ${
                  isWide ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`absolute right-0 top-14 h-72 w-72 rounded-full bg-gradient-to-br ${tone.glow} blur-2xl`} />
                <div className="absolute right-10 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-dashed border-blue-200 lg:block" />

                <div className={`relative z-10 grid h-full gap-6 md:grid-cols-[0.95fr_1.05fr] ${isWide ? "lg:grid-cols-[0.9fr_1.1fr]" : ""}`}>
                  <div className="flex flex-col justify-center">
                    <span className={`grid h-14 w-14 place-items-center rounded-2xl text-2xl shadow-lg ${tone.badge}`}>
                      {feature.icon}
                    </span>

                    <h3 className="mt-6 max-w-sm text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                      {feature.title}
                    </h3>

                    <p className="mt-4 max-w-md text-base leading-7 text-slate-700">
                      {feature.description}
                    </p>

                    <div className="mt-7 space-y-4">
                      {feature.bullets.map((item) => (
                        <div key={item.title} className="flex items-center gap-4">
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-sm ${tone.bullet}`}>
                            {item.icon}
                          </span>
                          <span className="text-sm font-bold text-slate-950">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`relative flex min-h-[20rem] ${feature.visualClass ?? "items-end justify-center"}`}>
                    <div className={`absolute right-2 top-1/2 grid h-20 w-20 -translate-y-1/2 place-items-center rounded-full ${tone.orb} shadow-xl shadow-blue-900/10`}>
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <img
                      src={feature.image}
                      alt={`${feature.title} app preview`}
                      className={`relative z-10 max-h-[360px] w-auto object-contain drop-shadow-[0_28px_34px_rgba(15,23,42,0.18)] sm:max-h-[410px] ${
                        feature.imageClass ?? ""
                      }`}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
