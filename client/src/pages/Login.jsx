import React, { useState } from "react";
import InputField from "../components/ui/InputField";
import { Lock, Mail } from "lucide-react";
import SubmitButton from "../components/ui/SubmitButton";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const { login, authLoading } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //reset errors
        setErrors({ email: "", password: "" });

        let valid = true;
        if (!form.email.trim()) {
            setErrors((prev) => ({ ...prev, email: "Email is required" }));
            valid = false;
        }
        if (!form.password.trim()) {
            setErrors((prev) => ({
                ...prev,
                password: "Password is required",
            }));
            valid = false;
        }

        if (!valid) return;

        try {
            await login(form.email, form.password);
            toast.success("Logged in successfully");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error);
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_API_URL
        }/api/auth/google`;
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Panel  */}
            <div className="hidden lg:flex items-center justify-center bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
                Left
            </div>

            {/* Right Panel  */}
            <div className="flex items-center justify-center p-6">
                <div
                    className="
        w-full max-w-md
        bg-white/10 dark:bg-white/5 
        backdrop-blur-xl
        border border-white/20 dark:border-white/10 
        rounded-2xl 
        p-8 
        shadow-xl 
        text-center
    "
                >
                    <div>
                        {/* Branding Title */}
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            Welcome Back 👋
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-700/80 dark:text-gray-300/80 mb-6">
                            Login to your LinkHub account
                        </p>

                        {/* Form Container */}
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            {/* Email Field - we will replace with InputField next */}
                            <InputField
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                icon={Mail}
                                value={form.email}
                                onChange={handleChange}
                                error={errors.email}
                            />

                            {/* Password Field */}
                            <InputField
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                icon={Lock}
                                value={form.password}
                                onChange={handleChange}
                                error={errors.password}
                            />

                            {/* Submit Button */}
                            <SubmitButton
                                text="Login"
                                fullWidth
                                size="md"
                                loading={authLoading}
                            />
                        </form>

                        {/* Divider */}
                        <div className="my-6 flex items-center justify-center gap-3">
                            <span className="h-px w-20 bg-white/20"></span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                                Or continue with
                            </span>
                            <span className="h-px w-20 bg-white/20"></span>
                        </div>

                        {/* Google OAuth Button */}
                        <button
                            onClick={handleGoogleLogin}
                            className="w-full py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 flex items-center justify-center gap-3 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 transition-all cursor-pointer"
                        >
                            <img
                                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>

                        {/* Footer */}
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-6">
                            Don’t have an account?
                            <a
                                href="/signup"
                                className="text-indigo-400 hover:underline ml-1"
                            >
                                Create one
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
