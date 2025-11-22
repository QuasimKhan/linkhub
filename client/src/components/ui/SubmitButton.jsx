import { Loader2 } from "lucide-react";
import React from "react";

const SubmitButton = ({
    text = "Submit",
    loading,
    onClick,
    className,
    size = "md",
    fullWidth = false,
}) => {
    return (
        <button
            onClick={onClick}
            className={`bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-xl ${
                fullWidth ? "w-full" : ""
            } active:scale-[0.98] font-semibold shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] text-gray-900 dark:text-gray-100 transition-all duration-200 hover:bg-white/20 dark:hover:bg-white/10 hover:border-indigo-400 dark:hover:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-black/10 dark:focus:ring-offset-white/10 ${
                size === "sm" && "text-sm px-3 py-1.5"
            } ${size === "md" && "text-base px-4 py-2"} ${
                size === "lg" && "text-lg px-5 py-3"
            }   ${
                loading
                    ? "opacity-50 cursor-not-allowed hover:bg-white/10 hover:border-white/20"
                    : "cursor-pointer"
            } ${className}`}
            type="submit"
            disabled={loading}
        >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : text}
        </button>
    );
};

export default SubmitButton;
