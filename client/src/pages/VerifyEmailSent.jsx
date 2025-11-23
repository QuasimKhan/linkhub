import { MailCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function VerifyEmailSent() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <MailCheck className="w-16 h-16 text-indigo-500 mb-4" />

            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Check your email 📩
            </h1>

            <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-md">
                We’ve sent a verification link to your inbox. Please open it to
                activate your account.
            </p>

            <Link
                to="/login"
                className="mt-6 text-indigo-500 hover:underline text-sm"
            >
                Back to Login
            </Link>
        </div>
    );
}
