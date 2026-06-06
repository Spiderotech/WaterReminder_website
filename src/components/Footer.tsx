import logoImg from "../assets/logo.png";
import {
  FaApple,
  FaArrowRight,
  FaFacebookF,
  FaGift,
  FaGooglePlay,
  FaHeartPulse,
  FaInstagram,
  FaLeaf,
  FaLock,
  FaPaperPlane,
  FaShieldHalved,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const APP_STORE_URL = "https://apps.apple.com/app/id6752671109";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.doradrinkwaterreminderapp";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#about" },
      { label: "Benefits", href: "#download" },
      { label: "Screenshots", href: "#features" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Blog", href: "#blogs" },
      { label: "Press Kit", href: "#contact" },
      { label: "Careers", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-and-conditions" },
      { label: "Refund Policy", href: "#contact" },
      { label: "Accessibility", href: "#contact" },
    ],
  },
];

const trustItems = [
  { icon: <FaShieldHalved />, label: "Secure & Private" },
  { icon: <FaLock />, label: "No Sign Up Required" },
  { icon: <FaHeartPulse />, label: "Loved by Thousands" },
];

const socialLinks = [
  { icon: <FaInstagram />, label: "Instagram" },
  { icon: <FaFacebookF />, label: "Facebook" },
  { icon: <FaTwitter />, label: "Twitter" },
  { icon: <FaYoutube />, label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-50 bg-gradient-to-br from-white via-slate-50 to-blue-50 p-6 shadow-2xl shadow-blue-900/5 sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_2.6fr_1.25fr]">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <img src={logoImg} alt="DoraDrink logo" className="h-14 w-auto" />
              <span className="text-3xl font-black text-slate-950">DoraDrink</span>
            </a>

            <p className="mt-6 max-w-sm text-lg leading-8 text-slate-600">
              Your personal hydration companion. Smart reminders. Real results.
              Stay hydrated, stay healthy.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => window.open(APP_STORE_URL, "_blank", "noopener,noreferrer")}
                className="flex h-12 w-44 items-center justify-center gap-3 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
              >
                <FaApple className="text-2xl" />
                <span className="text-left leading-none">
                  <span className="block text-[10px]">Download on the</span>
                  <span className="block text-lg font-semibold">App Store</span>
                </span>
              </button>

              <button
                onClick={() => window.open(PLAY_STORE_URL, "_blank", "noopener,noreferrer")}
                className="flex h-12 w-44 items-center justify-center gap-3 rounded-lg bg-black text-white shadow-lg transition hover:bg-slate-800"
              >
                <FaGooglePlay className="text-xl text-emerald-400" />
                <span className="text-left leading-none">
                  <span className="block text-[10px] uppercase">Get it on</span>
                  <span className="block text-base font-semibold">Google Play</span>
                </span>
              </button>
            </div>
          </div>

          <div className="grid gap-8 border-y border-blue-50 py-8 sm:grid-cols-3 lg:border-x lg:border-y-0 lg:px-10 lg:py-0">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-lg font-black text-slate-950">{column.title}</h3>
                <ul className="mt-6 space-y-5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-base font-medium text-slate-600 transition hover:text-blue-600">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-lg font-black text-slate-950">Stay in the Loop</h3>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Subscribe to get hydration tips, app updates, and exclusive content.
            </p>

            <form className="mt-7 flex gap-3">
              <label className="sr-only" htmlFor="footer-email">
                Your email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email address"
                className="h-14 min-w-0 flex-1 rounded-xl border border-blue-50 bg-white px-5 text-base text-slate-950 outline-none shadow-lg shadow-blue-900/5 transition placeholder:text-slate-400 focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-700"
              >
                <FaPaperPlane />
              </button>
            </form>

            <div className="mt-7 flex items-center gap-4 text-sm text-slate-500">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-50 text-xl text-blue-600">
                <FaGift />
              </span>
              <span>No spam, ever. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-blue-50 pt-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-medium text-slate-500">© 2025 DoraDrink. All rights reserved.</p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-blue-600">
              <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
              <span className="text-slate-300">•</span>
              <a href="/terms-and-conditions" className="hover:underline">Terms of Service</a>
              <span className="text-slate-300">•</span>
              <a href="#contact" className="hover:underline">Cookies Policy</a>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href="#contact"
                  aria-label={item.label}
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-lg text-blue-700 shadow-lg shadow-blue-900/5 ring-1 ring-blue-50 transition hover:bg-blue-50"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-white/60 px-5 py-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <FaLeaf className="text-xl text-blue-600" />
              <span>DoraDrink is committed to your health and the planet. We support clean water initiatives worldwide.</span>
            </div>
            <a href="#about" className="inline-flex items-center gap-3 font-bold text-blue-600 hover:underline">
              Learn more
              <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
