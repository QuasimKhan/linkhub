import React from "react";

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <div
            className="
                fixed inset-0 z-50 
                flex items-center justify-center
                bg-black/40 backdrop-blur-md
                animate-fadeIn
            "
            onClick={onClose}
        >
            {/* Modal Content */}
            <div
                className="
                    bg-white/20 dark:bg-black/30
                    backdrop-blur-2xl
                    border border-white/20 dark:border-white/10
                    rounded-2xl shadow-2xl p-6 w-full max-w-md
                    animate-scaleIn
                "
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
