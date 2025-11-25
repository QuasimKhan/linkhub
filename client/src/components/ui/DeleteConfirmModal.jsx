import React from "react";

const DeleteConfirmModal = ({ open, onClose, onConfirm }) => {
    if (!open) return null;

    return (
        <div
            className="
                fixed inset-0 z-50 flex items-center justify-center
                bg-black/40 backdrop-blur-md animate-fadeIn
            "
            onClick={onClose}
        >
            <div
                className="
                    bg-white/20 dark:bg-black/30
                    backdrop-blur-2xl border border-white/20 dark:border-white/10
                    rounded-2xl shadow-2xl p-6 w-full max-w-sm
                    animate-scaleIn
                "
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-semibold mb-4 text-center">
                    Delete this link?
                </h2>

                <p className="text-gray-200 dark:text-gray-300 text-center mb-6">
                    This action cannot be undone.
                </p>

                <div className="flex items-center justify-between gap-4">
                    <button
                        className="
                            w-full py-2 rounded-xl 
                            bg-white/20 dark:bg-white/10
                            border border-white/20 
                            hover:bg-white/30 transition
                        "
                        onClick={onClose}
                    >
                        Cancel
                    </button>

                    <button
                        className="
                            w-full py-2 rounded-xl 
                            bg-red-600 text-white 
                            shadow-lg shadow-red-500/30 
                            hover:bg-red-700 transition
                        "
                        onClick={onConfirm}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;
