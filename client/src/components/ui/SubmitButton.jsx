import { Loader2 } from "lucide-react";
import React from "react";

const SubmitButton = ({
    text = "Submit",
    loading = false,
    onClick,
    className = "",
    size = "md",
    fullWidth = false,
}) => {
    const sizeClasses =
        size === "sm"
            ? "text-sm px-3 py-1.5"
            : size === "lg"
            ? "text-lg px-5 py-3"
            : "text-base px-4 py-2";

    return (
        <button
            onClick={onClick}
            type="submit"
            disabled={loading}
            className={`
                rounded-xl font-semibold transition-all duration-200
                active:scale-[0.97]

                /* Light Mode */
                bg-white border border-gray-300 text-gray-900
                hover:bg-gray-50 hover:border-indigo-500

                /* Dark Mode */
                dark:bg-white/5 dark:border-white/10 dark:text-gray-100
                dark:hover:bg-white/10 dark:hover:border-indigo-300

                /* Focus Ring */
                focus:outline-none focus:ring-2
                focus:ring-indigo-500 dark:focus:ring-indigo-300
                focus:ring-offset-2
                focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900

                ${fullWidth ? "w-full" : ""}
                ${sizeClasses}

                ${
                    loading
                        ? "opacity-50 cursor-not-allowed hover:bg-white dark:hover:bg-white/5"
                        : "cursor-pointer"
                }

                ${className}
            `}
        >
            {loading ? (
                <Loader2 className="w-5 h-5 animate-spin mx-auto" />
            ) : (
                text
            )}
        </button>
    );
};

export default SubmitButton;
