import React, { useEffect, useState } from "react";
import {
    getLinks,
    createLink,
    updateLink,
    deleteLink,
    reorderLinks,
} from "../services/linkService";
import { toast } from "sonner";

const Links = () => {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch links
    const fetchLinks = async () => {
        try {
            const data = await getLinks();
            setLinks(data);
        } catch (err) {
            toast.error("Failed to fetch links");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLinks();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Your Links</h1>

            {links.length === 0 ? (
                <p>No links found.</p>
            ) : (
                links.map((link) => (
                    <div
                        key={link._id}
                        className="border p-4 mb-4 rounded-lg bg-white/10"
                    >
                        <h2 className="font-semibold">{link.title}</h2>
                        <p className="text-gray-400">{link.url}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Links;
