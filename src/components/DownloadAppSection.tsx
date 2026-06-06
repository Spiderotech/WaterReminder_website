import homeImage from "../assets/hydrationgoal.png";
import splashImage from "../assets/splash2.png";
import {
  FaApple,
  FaBell,
  FaChartLine,
  FaDownload,
  FaGooglePlay,
  FaShieldHalved,
  FaStar,
  FaUsers,
} from "react-icons/fa6";
import { IoWater } from "react-icons/io5";

const APP_STORE_URL = "https://apps.apple.com/app/id6752671109";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.doradrinkwaterreminderapp";

const benefits = [
  {
    icon: <FaBell />,
    title: "Smart Reminders",
    copy: "Never miss a sip",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaChartLine />,
    title: "Track Progress",
    copy: "See your daily stats",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <IoWater />,
    title: "Healthy Habits",
    copy: "Build a better you",
    color: "bg-blue-50 text-blue-600",
  },
];

const openStore = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

const AppStoreButton = () => (
  <button
    onClick={() => openStore(APP_STORE_URL)}
    className="flex h-14 w-48 items-center justify-center gap-3 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
  >
    <FaApple className="text-3xl" />
    <span className="text-left leading-none">
      <span className="block text-[11px]">Download on the</span>
      <span className="block text-xl font-semibold">App Store</span>
    </span>
  </button>
);

const PlayStoreButton = () => (
  <button
    onClick={() => openStore(PLAY_STORE_URL)}
    className="flex h-14 w-48 items-center justify-center gap-3 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
  >
    <FaGooglePlay className="text-2xl text-emerald-400" />
    <span className="text-left leading-none">
      <span className="block text-[11px] uppercase">Get it on</span>
      <span className="block text-lg font-semibold">Google Play</span>
    </span>
  </button>
);

const AppDownloadSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-50/80 to-white" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-blue-700 shadow-sm">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-white">
                <FaDownload className="text-xs" />
              </span>
              Get the app
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Download DoraDrink and{" "}
              <span className="text-blue-600">Stay Hydrated</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Stay on track with your hydration goals, get smart reminders, and
              build healthy habits every day.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {benefits.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl ${item.color}`}>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-black text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-[410px] w-full max-w-2xl">
            <div className="absolute left-1/2 top-4 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-blue-100/80" />
            <div className="absolute bottom-16 left-1/2 h-36 w-[78%] -translate-x-1/2 rounded-[50%] bg-blue-100 blur-2xl" />
            <div className="absolute bottom-10 left-1/2 h-44 w-[88%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(circle,#dbeafe_0,#eff6ff_60%,transparent_70%)]" />

            <img
              src={splashImage}
              alt="DoraDrink app on phone"
              className="absolute bottom-6 left-1/2 z-20 h-[390px] -translate-x-1/2 rotate-[6deg] object-contain drop-shadow-[0_30px_42px_rgba(15,23,42,0.24)]"
            />

            <div className="absolute bottom-14 left-10 h-24 w-40 rotate-[-16deg] rounded-[50%] border-b-[18px] border-blue-400/50" />
            <div className="absolute bottom-20 right-9 h-28 w-48 rotate-[12deg] rounded-[50%] border-b-[18px] border-blue-400/50" />
            <span className="absolute bottom-32 left-12 h-4 w-4 rounded-full border border-blue-400 bg-white/60" />
            <span className="absolute right-16 top-20 h-3 w-3 rounded-full border border-blue-400 bg-white/60" />
            <span className="absolute right-28 top-12 h-5 w-5 rounded-full border border-blue-300 bg-white/60" />
            <span className="absolute right-6 top-28 h-12 w-7 rotate-[35deg] rounded-full bg-green-500/80" />
            <span className="absolute left-20 bottom-28 h-10 w-6 rotate-[-55deg] rounded-full bg-green-500/80" />
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="relative min-h-[21rem] overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-white via-white to-blue-50 p-6 shadow-xl shadow-blue-900/5 sm:p-8">
            <div className="absolute bottom-0 right-0 h-40 w-72 rounded-tl-full bg-blue-100/80" />
            <div className="relative z-10 grid h-full gap-6 sm:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="flex items-center gap-5">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-600 text-4xl text-white shadow-lg shadow-blue-500/25">
                    <FaApple />
                  </span>
                  <span className="rounded-full bg-blue-50 px-5 py-2 text-sm font-extrabold text-blue-600">
                    For iPhone
                  </span>
                </div>

                <h3 className="mt-7 text-4xl font-black text-slate-950">iOS</h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-slate-700">
                  Manage your hydration goals and get smart reminders right on your iPhone.
                </p>
                <div className="mt-8">
                  <AppStoreButton />
                </div>
              </div>

              <div className="relative min-h-[18rem] overflow-hidden">
                <img
                  src={homeImage}
                  alt="DoraDrink iOS app preview"
                  className="absolute -bottom-28 left-1/2 h-[400px] -translate-x-1/2 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </article>

          <article className="relative min-h-[21rem] overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-white via-white to-emerald-50 p-6 shadow-xl shadow-blue-900/5 sm:p-8">
            <div className="absolute bottom-0 right-0 h-40 w-72 rounded-tl-full bg-emerald-100/80" />
            <div className="relative z-10 grid h-full gap-6 sm:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="flex items-center gap-5">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-4xl shadow-lg shadow-blue-900/5">
                    <FaGooglePlay className="text-emerald-500" />
                  </span>
                  <span className="rounded-full bg-emerald-50 px-5 py-2 text-sm font-extrabold text-emerald-600">
                    For Android
                  </span>
                </div>

                <h3 className="mt-7 text-4xl font-black text-slate-950">Android</h3>
                <p className="mt-4 max-w-sm text-base leading-7 text-slate-700">
                  Track your water intake and meet your daily goals with our easy-to-use Android app.
                </p>
                <div className="mt-8">
                  <PlayStoreButton />
                </div>
              </div>

              <div className="relative min-h-[18rem] overflow-hidden">
                <img
                  src={homeImage}
                  alt="DoraDrink Android app preview"
                  className="absolute -bottom-28 left-1/2 h-[400px] -translate-x-1/2 rotate-[3deg] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-5 rounded-3xl border border-blue-50 bg-sky-50/50 p-5 shadow-lg shadow-blue-900/5 md:grid-cols-2">
          <div className="flex items-center gap-5 md:justify-center">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-blue-100 text-2xl text-blue-600">
              <FaShieldHalved />
            </span>
            <div>
              <h3 className="text-base font-black text-slate-950">Your data is private and secure</h3>
              <p className="mt-1 text-sm text-slate-600">We respect your privacy. All data is stored securely on your device.</p>
            </div>
          </div>

          <div className="flex items-center gap-5 md:justify-center">
            <div className="flex -space-x-3">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-sky-50 bg-blue-100 text-blue-600"
                >
                  <FaUsers className="text-sm" />
                </span>
              ))}
            </div>
            <div>
              <h3 className="text-base font-black text-slate-950">Loved by thousands of users</h3>
              <div className="mt-1 flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} />
                ))}
                <span className="ml-2 text-sm font-medium text-slate-600">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
