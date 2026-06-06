import homeImage from '../assets/home.png';
import {
    FaApple,
    FaBell,
    FaChartSimple,
    FaChevronRight,
    FaGooglePlay,
    FaHeart,
    FaStar,
    FaTrophy,
} from "react-icons/fa6";
import { IoPlay, IoWater } from "react-icons/io5";

const APP_STORE_URL = "https://apps.apple.com/app/id6752671109";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.doradrinkwaterreminderapp";

const Home = () => {
    const openStore = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

    return (
        <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_78%_36%,#dff0ff_0,#f8fcff_34%,#ffffff_64%)]">
            <div className="pointer-events-none absolute left-[58%] top-24 hidden h-[420px] w-[420px] rounded-full bg-blue-100/70 blur-3xl lg:block" />
            <div className="pointer-events-none absolute bottom-0 right-0 hidden h-40 w-[44rem] rounded-tl-full bg-sky-100/70 lg:block" />

            <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-7xl items-center gap-7 px-5 pb-5 pt-7 sm:px-8 md:grid-cols-[0.95fr_1.05fr] lg:px-12 xl:px-14">
                <div className="relative z-10 mx-auto max-w-xl text-center md:mx-0 md:text-left">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-blue-900 ring-1 ring-blue-100">
                        <IoWater className="text-blue-500" />
                        Your personal hydration coach
                    </span>

                    <h1 className="mt-5 text-4xl font-black leading-[0.98] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                        Drink Better.
                        <span className="block">Feel Better.</span>
                        <span className="block text-blue-600">Every Day.</span>
                    </h1>

                    <p className="mt-4 max-w-lg text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                        DoraDrink helps you build healthy hydration habits with smart reminders, real-time tracking, and motivating achievements.
                    </p>

                    <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start">
                        <button
                            onClick={() => openStore(PLAY_STORE_URL)}
                            className="inline-flex h-12 w-full max-w-[17rem] items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-700 sm:w-auto"
                        >
                            Start Drinking Smarter
                            <FaChevronRight className="text-xs" />
                        </button>

                        <button className="inline-flex h-12 items-center gap-2.5 rounded-full px-1.5 text-left text-sm font-semibold text-slate-950 transition hover:text-blue-600">
                            <span className="grid h-10 w-10 place-items-center rounded-full border border-blue-200 bg-white text-blue-600 shadow-sm">
                                <IoPlay />
                            </span>
                            <span>
                                Watch Demo
                                <span className="block text-xs font-medium text-slate-500">1 min video</span>
                            </span>
                        </button>
                    </div>

                    <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row md:items-start">
                        <button
                            onClick={() => openStore(APP_STORE_URL)}
                            className="flex h-12 w-40 items-center justify-center gap-2.5 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
                        >
                            <FaApple className="text-2xl" />
                            <span className="text-left leading-none">
                                <span className="block text-[10px]">Download on the</span>
                                <span className="block text-lg font-semibold">App Store</span>
                            </span>
                        </button>

                        <button
                            onClick={() => openStore(PLAY_STORE_URL)}
                            className="flex h-12 w-40 items-center justify-center gap-2.5 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
                        >
                            <FaGooglePlay className="text-xl text-emerald-400" />
                            <span className="text-left leading-none">
                                <span className="block text-[10px] uppercase">Get it on</span>
                                <span className="block text-base font-semibold">Google Play</span>
                            </span>
                        </button>
                    </div>

                    <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row md:items-start">
                        <div className="flex -space-x-3">
                            {["AM", "RJ", "SK"].map((initials, index) => (
                                <span
                                    key={initials}
                                    className={`grid h-10 w-10 place-items-center rounded-full border-2 border-white text-xs font-bold text-white shadow-md ${index === 0 ? "bg-slate-700" : index === 1 ? "bg-blue-500" : "bg-cyan-500"}`}
                                >
                                    {initials}
                                </span>
                            ))}
                            <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-white bg-blue-600 text-xs font-bold text-white shadow-md">
                                25K+
                            </span>
                        </div>
                        <div>
                            <div className="flex justify-center gap-1 text-amber-400 md:justify-start">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>
                            <p className="mt-1.5 text-xs font-semibold text-slate-700 sm:text-sm">
                                Trusted by 25,000+ users
                                <span className="block font-medium text-slate-500">4.9/5 average app rating</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto h-[460px] w-full max-w-xl sm:h-[540px] lg:h-[610px]">
                    <div className="absolute inset-x-12 bottom-8 h-36 rounded-[50%] bg-blue-200/60 blur-3xl" />

                    <div className="absolute left-2 top-16 z-20 hidden w-32 rotate-6 rounded-2xl bg-white/85 p-4 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-100 backdrop-blur md:block xl:left-6">
                        <div className="flex items-center gap-2">
                            <IoWater className="text-3xl text-blue-500" />
                            <strong className="text-xl text-slate-950">2.1L</strong>
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-700">Water Intake</p>
                        <p className="text-[11px] text-slate-500">70% of daily goal</p>
                        <div className="mt-3 h-1.5 rounded-full bg-blue-100">
                            <div className="h-full w-[70%] rounded-full bg-blue-500" />
                        </div>
                    </div>

                    <div className="absolute left-4 top-60 z-20 hidden w-32 rotate-6 rounded-2xl bg-white/85 p-4 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-100 backdrop-blur md:block">
                        <div className="flex items-center gap-2">
                            <FaTrophy className="text-2xl text-emerald-400" />
                            <strong className="text-xl text-slate-950">7</strong>
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-700">Day Streak</p>
                        <p className="text-[11px] text-emerald-500">Keep it going!</p>
                    </div>

                    <div className="absolute right-0 top-24 z-20 hidden w-36 -rotate-6 rounded-2xl bg-white/85 p-4 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-100 backdrop-blur sm:block">
                        <strong className="text-xl text-slate-950">+18%</strong>
                        <p className="mt-2 text-xs font-semibold text-slate-700">Energy Increase</p>
                        <p className="text-[11px] text-slate-500">vs yesterday</p>
                        <div className="mt-3 flex h-8 items-end gap-1">
                            {[14, 20, 13, 24, 18, 29].map((height, index) => (
                                <span key={index} className="w-full rounded-full bg-violet-500/80" style={{ height }} />
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-16 right-7 z-20 hidden w-32 rotate-6 rounded-2xl bg-white/85 p-4 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-100 backdrop-blur lg:block">
                        <div className="flex items-center gap-2">
                            <FaTrophy className="text-2xl text-violet-500" />
                            <strong className="text-xl text-slate-950">12</strong>
                        </div>
                        <p className="mt-2 text-xs font-semibold text-slate-700">Achievements</p>
                        <p className="text-[11px] text-slate-500">Keep it up!</p>
                    </div>

                    <img
                        src={homeImage}
                        alt="DoraDrink mobile hydration tracking screen"
                        className="absolute bottom-0 left-1/2 z-10 h-[440px] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_28px_38px_rgba(15,23,42,0.22)] sm:h-[530px] lg:h-[600px]"
                    />

                    <div className="absolute left-8 top-8 h-3.5 w-3.5 rounded-full border border-blue-400 bg-white/50" />
                    <div className="absolute right-20 top-14 h-2.5 w-2.5 rounded-full border border-blue-400 bg-white/50" />
                    <div className="absolute bottom-44 left-16 h-4 w-4 rounded-full border border-blue-400 bg-white/50" />
                </div>
            </div>

            <div className="relative z-20 mx-auto -mt-1 w-full max-w-7xl px-5 pb-8 sm:px-8 lg:px-12 xl:px-14">
                <div className="grid gap-4 rounded-3xl bg-white/90 p-4 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-50 backdrop-blur md:grid-cols-4 md:p-5">
                    {[
                        { icon: <FaBell />, title: "Smart Reminders", copy: "Personalized reminders that fit your schedule.", color: "text-blue-600 bg-blue-50" },
                        { icon: <FaChartSimple />, title: "Track Progress", copy: "Visualize your daily, weekly and monthly progress.", color: "text-violet-600 bg-violet-50" },
                        { icon: <FaTrophy />, title: "Achievements", copy: "Earn badges and stay motivated every day.", color: "text-emerald-600 bg-emerald-50" },
                        { icon: <FaHeart />, title: "Feel the Difference", copy: "More energy, better focus and a healthier you.", color: "text-rose-600 bg-rose-50" },
                    ].map((item) => (
                        <div key={item.title} className="flex items-start gap-3">
                            <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-xl ${item.color}`}>
                                {item.icon}
                            </span>
                            <div className="text-left">
                                <h3 className="text-sm font-bold text-slate-950">{item.title}</h3>
                                <p className="mt-1.5 text-xs leading-5 text-slate-600">{item.copy}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Home
