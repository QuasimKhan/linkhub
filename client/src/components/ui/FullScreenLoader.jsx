import React from "react";

const FullScreenLoader = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#0F0F14] dark:bg-black">
            {/* Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -right-40 w-[430px] h-[430px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>

            {/* Glass Card */}
            <div
                className="
                relative z-10 p-10 rounded-3xl 
                bg-white/30 dark:bg-gray-800/30 
                backdrop-blur-xl border 
                border-white/20 dark:border-white/10 
                shadow-2xl flex flex-col items-center justify-center gap-6
                animate-fade-in
            "
            >
                {/* Logo */}
                <img
                    src="/img/Bunchly-dark.png"
                    alt="Bunchly"
                    className="w-24 mx-auto block dark:hidden"
                />
                <img
                    src="/img/Bunchly-light.png"
                    alt="Bunchly"
                    className="w-24 mx-auto hidden dark:block"
                />

                {/* Loader */}
                <div className="flex flex-col items-center gap-2">
                    <span className="loading loading-ball loading-lg text-indigo-500"></span>
                    <p className="text-gray-800 dark:text-gray-300 text-sm tracking-wide">
                        Loading your experience...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;
