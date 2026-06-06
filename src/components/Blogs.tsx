import agingHydrationImg from "../assets/blog-aging-hydration.png";
import athleteHydrationImg from "../assets/blog-athlete-hydration.png";
import moodHydrationImg from "../assets/blog-mood-hydration.png";
import summerHydrationImg from "../assets/blog-summer-hydration.png";
import weightLossImg from "../assets/blog-weight-loss.png";
import {
  FaAppleWhole,
  FaArrowRight,
  FaDumbbell,
  FaHeart,
  FaPenToSquare,
  FaSeedling,
  FaUser,
} from "react-icons/fa6";
import { IoWater } from "react-icons/io5";

type BlogPost = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  icon: JSX.Element;
  tone: "blue" | "green" | "purple" | "amber";
  featured?: boolean;
};

const toneClasses: Record<BlogPost["tone"], { pill: string; avatar: string; author: string; border: string }> = {
  blue: {
    pill: "bg-white/90 text-blue-600",
    avatar: "bg-blue-100 text-blue-600",
    author: "text-blue-600",
    border: "border-blue-100",
  },
  green: {
    pill: "bg-white/90 text-emerald-600",
    avatar: "bg-emerald-100 text-emerald-600",
    author: "text-emerald-600",
    border: "border-emerald-100",
  },
  purple: {
    pill: "bg-white/90 text-violet-600",
    avatar: "bg-violet-100 text-violet-600",
    author: "text-violet-600",
    border: "border-violet-100",
  },
  amber: {
    pill: "bg-white/90 text-amber-600",
    avatar: "bg-amber-100 text-amber-600",
    author: "text-amber-600",
    border: "border-amber-100",
  },
};

const blogPosts: BlogPost[] = [
  {
    title: "Why Hydration is Essential for Aging Well",
    excerpt:
      "As we get older, our sense of thirst can diminish, making it easier to become dehydrated without realizing it. Proper hydration is crucial for seniors to maintain energy levels, support cognitive function, and prevent common health issues like urinary tract infections...",
    category: "Wellness",
    date: "Sep 20, 2025",
    author: "DoraDrink Team",
    image: agingHydrationImg,
    icon: <FaSeedling />,
    tone: "blue",
    featured: true,
  },
  {
    title: "5 Tips to Stay Hydrated in the Summer Heat",
    excerpt:
      "Beat the heat and stay healthy with these simple but effective tips to ensure you are drinking enough water throughout the day.",
    category: "Health",
    date: "Sep 15, 2025",
    author: "Emily Chen",
    image: summerHydrationImg,
    icon: <FaHeart />,
    tone: "green",
  },
  {
    title: "Water and Weight Loss: The Unspoken Connection",
    excerpt:
      "Discover the powerful but often overlooked role that consistent water intake plays in a successful weight loss journey.",
    category: "Nutrition",
    date: "Sep 10, 2025",
    author: "Sarah Johnson",
    image: weightLossImg,
    icon: <FaAppleWhole />,
    tone: "purple",
  },
  {
    title: "The Surprising Link Between Hydration and Mood",
    excerpt:
      "Dehydration can have a significant impact on your cognitive function and mood. Learn how drinking more water can make a difference.",
    category: "Wellness",
    date: "Sep 5, 2025",
    author: "DoraDrink Team",
    image: moodHydrationImg,
    icon: <IoWater />,
    tone: "amber",
  },
  {
    title: "Hydration for Athletes: A Performance Guide",
    excerpt:
      "A comprehensive guide on how athletes can optimize their hydration to improve endurance, performance, and recovery.",
    category: "Fitness",
    date: "Aug 28, 2025",
    author: "Mike Anderson",
    image: athleteHydrationImg,
    icon: <FaDumbbell />,
    tone: "blue",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  const tone = toneClasses[post.tone];

  return (
    <article
      className={`group relative min-h-[19rem] overflow-hidden rounded-3xl border bg-white shadow-xl shadow-blue-900/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10 ${tone.border} ${
        post.featured ? "lg:col-span-2" : ""
      }`}
    >
      <img
        src={post.image}
        alt={`${post.title} article image`}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

      <div className={`relative z-10 flex h-full min-h-[19rem] flex-col justify-between p-6 ${post.featured ? "sm:p-8" : ""}`}>
        <div className="max-w-[32rem]">
          <span className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-black uppercase tracking-wide shadow-lg shadow-blue-900/5 ${tone.pill}`}>
            {post.icon}
            {post.category}
          </span>

          <h3 className={`mt-5 max-w-lg font-black leading-tight text-slate-950 ${post.featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
            {post.title}
          </h3>

          <p className={`mt-4 max-w-xl leading-6 text-slate-700 ${post.featured ? "text-base" : "text-sm"}`}>
            {post.excerpt}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
          <span className={`grid h-10 w-10 place-items-center rounded-full text-lg ${tone.avatar}`}>
            <FaUser />
          </span>
          <span>{post.date}</span>
          <span>•</span>
          <span className={`font-semibold ${tone.author}`}>{post.author}</span>
        </div>
      </div>
    </article>
  );
};

const BlogSection = () => {
  return (
    <section id="blogs" className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-blue-700 ring-1 ring-blue-100">
            <FaPenToSquare />
            Blog
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Hydration Insights & News
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Stay up-to-date on the latest health benefits and tips for staying hydrated.
          </p>
          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-blue-600" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="inline-flex h-12 items-center gap-4 rounded-full border border-blue-100 bg-white px-10 text-base font-extrabold text-blue-600 shadow-lg shadow-blue-900/5 transition hover:bg-blue-50">
            View all articles
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
