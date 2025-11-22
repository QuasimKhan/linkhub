import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";

const OAuthCallback = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { fetchMe } = useAuth();

    const searchParams = new URLSearchParams(location.search);
    const error = searchParams.get("error");

    useEffect(() => {
        const handleOAuth = async () => {
            if (error === "provider_mismatch") {
                toast.error(
                    "This email is registered with password login. Use Email Login instead."
                );
                return navigate("/login");
            }

            try {
                await fetchMe();
                navigate("/dashboard");
            } catch (err) {
                toast.error("Authentication failed");
                navigate("/login");
            }
        };

        handleOAuth();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-gray-600 dark:text-gray-300">
                Signing you in...
            </p>
        </div>
    );
};

export default OAuthCallback;
