import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-black dark:via-gray-900 dark:to-gray-950">
            {/* NAVBAR — now 20px from top independently */}
            <Navbar />

            {/* ================= HERO SECTION ================= */}
            <section className="mt-20 px-6 md:px-12 max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-fade-in">
                    Bunchly — Your Digital Identity, One Link.
                </h1>

                <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up">
                    A premium bio-link platform like Linktree for creators,
                    professionals & brands. Showcase everything you do in one
                    beautiful profile.
                </p>

                <div className="flex justify-center gap-4 mt-8 animate-slide-up">
                    <button className="px-7 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-[1.05] transition shadow-lg font-semibold">
                        Create Your Page 🚀
                    </button>
                    <button className="px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/10 transition font-semibold">
                        Live Demo
                    </button>
                </div>

                <div className="relative mt-16 flex justify-center animate-float">
                    <img
                        src="/img/mockup_phone.png"
                        alt="Bunchly Preview"
                        className="w-72 md:w-96 rounded-3xl shadow-2xl border border-white/20"
                    />
                </div>
            </section>

            {/* ================= FEATURE GRID ================= */}
            <section className="max-w-6xl mx-auto mt-28 px-6">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Bunchly?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <FeatureCard
                        title="Unlimited Links"
                        desc="One place for your social links, website, offers and more."
                    />
                    <FeatureCard
                        title="Premium Themes"
                        desc="Choose animated, neon, gradient or minimal themes to match your vibe."
                    />
                    <FeatureCard
                        title="Analytics Dashboard"
                        desc="Track link clicks, conversion + traffic breakdown — instantly."
                    />
                    <FeatureCard
                        title="Custom Domain"
                        desc="Use your own domain like you.me instead of default."
                    />
                    <FeatureCard
                        title="Smart Link Prioritization"
                        desc="AI automatically boosts your most important links."
                    />
                    <FeatureCard
                        title="Fast + Secure"
                        desc="Optimized with Vercel + CDN + Auth protection for creators."
                    />
                </div>
            </section>

            {/* ================= LIVE PAGE EXAMPLE ================= */}
            <section className="mt-28 flex flex-col items-center px-6 pb-24">
                <h3 className="text-xl font-semibold opacity-80">
                    How Your Page Looks
                </h3>

                <div
                    className="mt-8 w-full max-w-md bg-white/60 dark:bg-white/5 backdrop-blur-xl 
                        border border-white/20 shadow-xl rounded-2xl p-6 space-y-4 animate-fade-in"
                >
                    <div className="flex flex-col items-center gap-3">
                        <img
                            src="/img/profile.jpg"
                            className="w-20 h-20 rounded-full shadow-md"
                        />
                        <h2 className="text-xl font-bold">John Carter</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Digital Creator | Photographer | Marketer
                        </p>
                    </div>

                    <LinkBtn text="Instagram" />
                    <LinkBtn text="YouTube" />
                    <LinkBtn text="Portfolio Website" />
                    <LinkBtn text="Get In Touch" />
                </div>
            </section>

            {/* ================= PRICING ================= */}
            <section className="px-6 mt-24 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Pricing Plans</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Start free, upgrade anytime.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <PriceCard
                        plan="Free"
                        price="$0"
                        features={[
                            "Unlimited links",
                            "Basic themes",
                            "Analytics limited",
                            "No custom domain",
                        ]}
                    />

                    <PriceCard
                        highlight
                        plan="Pro"
                        price="$9/mo"
                        features={[
                            "Unlimited links",
                            "Premium themes",
                            "Full analytics",
                            "Custom domain support",
                        ]}
                    />

                    <PriceCard
                        plan="Business"
                        price="$29/mo"
                        features={[
                            "Multiple profiles",
                            "Team analytics",
                            "Advanced AI link boost",
                            "Priority support",
                        ]}
                    />
                </div>
            </section>

            {/* ================= TESTIMONIALS ================= */}
            <section className="px-6 mt-24 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Trusted By Creators</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
                    <ReviewCard
                        name="Alicia Gray"
                        text="Bunchly boosted my clicks by 230%. The UI is stunning."
                    />
                    <ReviewCard
                        name="Ron Patel"
                        text="I replaced Linktree. This is cleaner, faster and more premium."
                    />
                    <ReviewCard
                        name="Lara Kim"
                        text="The themes make my links look professional instantly."
                    />
                </div>
            </section>

            {/* ================= FAQ ================= */}
            <section className="px-6 mt-24 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center">FAQ</h2>

                <FAQ
                    q="Is Bunchly free to use?"
                    a="Yes! Free plan available forever with option to upgrade."
                />
                <FAQ
                    q="Can I use my own domain?"
                    a="Yes, with the Pro plan you can connect custom domain."
                />
                <FAQ
                    q="Is analytics included?"
                    a="Basic is free, full metrics available in Pro."
                />
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="mt-24 pb-10 border-t border-white/10 pt-10 text-center text-sm opacity-60">
                Bunchly © {new Date().getFullYear()} — All Rights Reserved.
            </footer>
        </div>
    );
};

export default Home;

/* ================= COMPONENTS ================= */

const FeatureCard = ({ title, desc }) => (
    <div className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-center hover:scale-[1.03] transition">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
);

const LinkBtn = ({ text }) => (
    <button className="w-full py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-[1.03] active:scale-95 transition shadow-lg">
        {text}
    </button>
);

const PriceCard = ({ plan, price, features, highlight }) => (
    <div
        className={`p-7 rounded-2xl border shadow-lg
    ${
        highlight
            ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white scale-[1.03]"
            : "bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
    }
  `}
    >
        <h3 className="text-2xl font-bold">{plan}</h3>
        <p className="text-4xl font-extrabold mt-3">{price}</p>
        <ul className="mt-5 space-y-2">
            {features.map((f) => (
                <li key={f}>{f}</li>
            ))}
        </ul>
        <button
            className={`mt-6 w-full py-2 rounded-xl font-semibold transition
      ${highlight ? "bg-white text-black" : "bg-indigo-600 text-white"}
    `}
        >
            Get Started
        </button>
    </div>
);

const ReviewCard = ({ name, text }) => (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
        <p className="italic text-gray-600 dark:text-gray-300 mb-3">"{text}"</p>
        <p className="font-semibold">{name}</p>
    </div>
);

const FAQ = ({ q, a }) => (
    <details className="border-b border-gray-300 dark:border-gray-700 py-4 cursor-pointer">
        <summary className="font-semibold">{q}</summary>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{a}</p>
    </details>
);
