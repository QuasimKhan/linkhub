import React, { useState, useRef } from "react";
import {
    GripVertical,
    Pencil,
    Trash2,
    Copy,
    ExternalLink,
    BarChart2,
} from "lucide-react";
import SwitchToggle from "../ui/SwitchToggle";
import { toast } from "sonner";

/**
 * Premium LinkCard
 * Parent owns all state (recommended)
 */

const platformMap = [
    { key: "youtube", match: /youtube\.com|youtu\.be/, label: "YouTube" },
    { key: "instagram", match: /instagram\.com/, label: "Instagram" },
    { key: "facebook", match: /facebook\.com/, label: "Facebook" },
    { key: "twitter", match: /twitter\.com|x\.com/, label: "X/Twitter" },
    { key: "linkedin", match: /linkedin\.com/, label: "LinkedIn" },
];

const PlatformIcon = ({ url }) => {
    if (!url) return null;
    const found = platformMap.find((p) => p.match.test(url.toLowerCase()));
    if (!found) return <ExternalLink className="w-4 h-4 text-indigo-300" />;

    return (
        <div className="text-xs font-medium px-2 py-0.5 rounded-full bg-white/6 text-indigo-200 border border-white/6">
            {found.label}
        </div>
    );
};

const Favicon = ({ url, size = 32 }) => {
    if (!url) return null;

    let hostname;
    try {
        hostname = new URL(url).hostname;
    } catch {
        hostname = null;
    }

    const src = hostname
        ? `https://www.google.com/s2/favicons?domain=${hostname}&sz=${size}`
        : null;

    return (
        <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white/6 border border-white/8">
            {src ? (
                <img
                    src={src}
                    alt="favicon"
                    className="w-6 h-6 object-contain"
                />
            ) : (
                <ExternalLink className="w-4 h-4 text-gray-300" />
            )}
        </div>
    );
};

const Sparkline = ({ points = [] }) => {
    if (!points || points.length === 0) {
        return <div className="text-xs text-gray-400">—</div>;
    }

    const max = Math.max(...points);
    const min = Math.min(...points);
    const height = 26;
    const width = Math.max(60, points.length * 8);
    const step = width / (points.length - 1 || 1);

    const normalize = (v) =>
        max === min ? height / 2 : height - ((v - min) / (max - min)) * height;

    const d = points
        .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${normalize(p)}`)
        .join(" ");

    return (
        <svg width={width} height={height} className="inline-block">
            <path
                d={d}
                stroke="rgba(99,102,241,0.9)"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const LinkCard = ({ link, onToggle, onEdit, onDelete }) => {
    const titleRef = useRef(null);
    const [copying, setCopying] = useState(false);
    const [dragging, setDragging] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link.url);
            setCopying(true);
            toast.success("URL copied");
            setTimeout(() => setCopying(false), 1200);
        } catch {
            toast.error("Copy failed");
        }
    };

    const handleToggle = (checked) => {
        onToggle({ ...link, isActive: checked });
    };

    return (
        <div
            className={`relative w-full p-5 rounded-2xl bg-white/8 dark:bg-black/30 backdrop-blur-2xl border border-white/10 shadow-lg transition-all duration-200 ${
                dragging ? "scale-[1.02] shadow-2xl" : "hover:scale-[1.01]"
            }`}
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
        >
            <div className="flex items-start gap-4">
                {/* drag handle & favicon */}
                <div className="flex-shrink-0 flex items-center gap-3 pr-2">
                    <div className="pr-2 text-gray-400 dark:text-gray-500 cursor-grab select-none">
                        <GripVertical className="w-5 h-5" />
                    </div>
                    <Favicon url={link.url} />
                </div>

                {/* content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                            <h3 className="font-semibold text-lg truncate">
                                {link.title}
                            </h3>

                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-400 truncate">
                                <span className="truncate">{link.url}</span>

                                <button
                                    onClick={handleCopy}
                                    className="ml-2 p-1 rounded-md hover:bg-white/6 transition"
                                >
                                    <Copy className="w-4 h-4 text-gray-300" />
                                </button>

                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="ml-1 p-1 rounded-md hover:bg-white/6 transition"
                                >
                                    <ExternalLink className="w-4 h-4 text-gray-300" />
                                </a>
                            </div>
                        </div>

                        {/* right info */}
                        <div className="flex-shrink-0 flex flex-col items-end gap-2">
                            <PlatformIcon url={link.url} />

                            <div className="text-xs text-gray-400 flex items-center gap-2">
                                <BarChart2 className="w-4 h-4 text-indigo-300" />
                                <span>{link.clickCount ?? 0}</span>
                            </div>
                        </div>
                    </div>

                    {/* bottom row */}
                    <div className="mt-3 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <span
                                className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full transition-all duration-300 ${
                                    link.isActive
                                        ? "bg-green-500/20 text-green-400 border border-green-400/20"
                                        : "bg-gray-500/20 text-gray-300 border border-gray-400/20"
                                }`}
                            >
                                {link.isActive ? "Active" : "Hidden"}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden sm:block">
                                <Sparkline points={link.clicks ?? []} />
                            </div>

                            {/* actions */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onEdit(link)}
                                    className="p-2 rounded-lg bg-white/6 hover:bg-white/10 transition shadow-sm"
                                >
                                    <Pencil className="w-4 h-4 text-gray-200" />
                                </button>

                                <button
                                    onClick={() => onDelete(link._id)}
                                    className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition shadow-sm"
                                >
                                    <Trash2 className="w-4 h-4 text-red-400" />
                                </button>

                                <SwitchToggle
                                    checked={link.isActive}
                                    onChange={(e) =>
                                        handleToggle(e.target.checked)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LinkCard;
