import React, { useState } from "react";
import InputField from "../components/ui/InputField";
import { Lock, Mail } from "lucide-react";
import SubmitButton from "../components/ui/SubmitButton";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
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
                        <form className="space-y-4">
                            {/* Email Field - we will replace with InputField next */}
                            <InputField
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                icon={Mail}
                                value={form.email}
                                onChange={handleChange}
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
                            />

                            {/* Submit Button */}
                            <SubmitButton
                                text="Login"
                                fullWidth
                                size="md"
                                loading={false}
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
                        <button className="w-full py-2 rounded-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 flex items-center justify-center gap-3 backdrop-blur-md hover:bg-white/20 dark:hover:bg-white/10 transition-all">
                            GOOGLE BUTTON
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
