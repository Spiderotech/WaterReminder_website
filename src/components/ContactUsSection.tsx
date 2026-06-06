import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaRegCommentDots,
  FaShieldHalved,
  FaGlobe,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const contactItems = [
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    content: "support@doradrink.com",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    content: "Mon - Fri, 9:00 AM - 6:00 PM (GMT+7)",
    color: "bg-emerald-50 text-emerald-600",
  },
];

const socialLinks = [
  { icon: <FaInstagram />, label: "Instagram", color: "bg-gradient-to-br from-pink-500 via-orange-400 to-purple-600" },
  { icon: <FaXTwitter />, label: "X", color: "bg-sky-500" },
  { icon: <FaFacebookF />, label: "Facebook", color: "bg-blue-600" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", color: "bg-sky-700" },
];

const ContactUsSection = () => {
  return (
    <section id="contact" className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-50 via-white to-blue-50 p-6 shadow-2xl shadow-blue-900/5 ring-1 ring-blue-50 sm:p-10 lg:p-16">
        <div className="pointer-events-none absolute left-[36%] top-28 hidden grid-cols-4 gap-5 opacity-30 lg:grid">
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-0 left-[31%] h-80 w-80 rounded-full bg-blue-100/80" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-blue-700 shadow-lg shadow-blue-900/5 ring-1 ring-blue-50">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-white">
                <FaRegCommentDots />
              </span>
              We're here for you
            </span>

            <h2 className="mt-7 text-5xl font-black leading-tight text-slate-950 sm:text-6xl">
              Contact <span className="text-blue-600">Us</span>
            </h2>

            <div className="mt-5 h-2 w-20 rounded-full bg-[repeating-linear-gradient(90deg,#2563eb_0_13px,transparent_13px_19px)]" />

            <p className="mt-7 max-w-lg text-lg leading-8 text-slate-700">
              Have questions about DoraDrink? We're here to help! Reach out to
              us anytime. We'll get back to you as soon as possible.
            </p>

            <div className="mt-9 space-y-7">
              {contactItems.map((item) => (
                <div key={item.title} className="flex items-center gap-5">
                  <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-2xl shadow-lg shadow-blue-900/5 ${item.color}`}>
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-base font-medium text-slate-600">{item.content}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-5">
                <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-violet-50 text-2xl text-violet-600 shadow-lg shadow-blue-900/5">
                  <FaGlobe />
                </span>
                <div>
                  <h3 className="text-lg font-black text-slate-950">Follow Us</h3>
                  <div className="mt-3 flex gap-3">
                    {socialLinks.map((item) => (
                      <a
                        key={item.label}
                        href="#contact"
                        aria-label={item.label}
                        className={`grid h-9 w-9 place-items-center rounded-lg text-white shadow-md ${item.color}`}
                      >
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

           
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-2xl shadow-blue-900/10 ring-1 ring-blue-50 sm:p-8 lg:p-10">
            <div className="mb-7 flex items-center gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-50 text-3xl text-blue-600">
                <FaPaperPlane />
              </span>
              <div>
                <h3 className="text-2xl font-black text-slate-950">Send us a message</h3>
                <p className="mt-1 text-base text-slate-500">You can reach us anytime</p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="relative block">
                  <span className="sr-only">First name</span>
                  <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="first-name"
                    autoComplete="given-name"
                    placeholder="First name"
                    className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </label>

                <label className="relative block">
                  <span className="sr-only">Last name</span>
                  <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    name="last-name"
                    autoComplete="family-name"
                    placeholder="Last name"
                    className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              </div>

              <label className="relative block">
                <span className="sr-only">Your email</span>
                <HiOutlineMail className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email"
                  className="h-14 w-full rounded-xl border border-slate-200 bg-white pl-12 pr-4 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </label>

              <div className="flex overflow-hidden rounded-xl border border-slate-200 bg-white focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
                <select
                  name="country-code"
                  aria-label="Country code"
                  className="h-14 w-28 border-r border-slate-200 bg-white px-5 text-base font-semibold text-slate-950 outline-none"
                >
                  <option>+62</option>
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input
                  type="tel"
                  name="phone-number"
                  autoComplete="tel"
                  placeholder="Phone number"
                  className="h-14 min-w-0 flex-1 px-5 text-base text-slate-900 outline-none placeholder:text-slate-400"
                />
              </div>

              <label className="relative block">
                <span className="sr-only">How can we help?</span>
                <FaRegCommentDots className="absolute left-5 top-5 text-slate-400" />
                <textarea
                  name="message"
                  rows={4}
                  maxLength={120}
                  placeholder="How can we help?"
                  className="min-h-32 w-full resize-none rounded-xl border border-slate-200 bg-white py-4 pl-12 pr-16 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
                <span className="absolute bottom-4 right-5 text-sm text-slate-400">0/120</span>
              </label>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-600 text-base font-extrabold text-white shadow-xl shadow-blue-500/25 transition hover:bg-blue-700"
              >
                Send Message
                <span className="grid h-7 w-7 place-items-center rounded-full border border-white/60">
                  <FaArrowRight />
                </span>
              </button>
            </form>

            <p className="mt-7 flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-500 sm:flex-row">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-blue-50 text-blue-600">
                <FaShieldHalved />
              </span>
              <span>
                By contacting us, you agree to our{" "}
                <a href="/terms-and-conditions" className="font-semibold text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy-policy" className="font-semibold text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
