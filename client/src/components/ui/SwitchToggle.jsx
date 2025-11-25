import React from "react";

const SwitchToggle = ({ checked, onChange }) => {
    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)} // FIXED HERE
                className="sr-only peer"
            />
            <div
                className="
                    w-11 h-6 
                    bg-white/20 dark:bg-white/10 
                    peer-focus:outline-none 
                    rounded-full
                    peer-checked:bg-indigo-600
                    transition-all
                    backdrop-blur-lg
                "
            ></div>
            <span
                className="
                    absolute left-1 top-1 
                    w-4 h-4 
                    bg-white rounded-full 
                    shadow 
                    transform 
                    peer-checked:translate-x-5 
                    transition
                "
            ></span>
        </label>
    );
};

export default SwitchToggle;
