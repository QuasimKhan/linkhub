import React, { useState } from "react";
import InputField from "../components/ui/InputField";
import SubmitButton from "../components/ui/SubmitButton";
import { Mail, Lock, User } from "lucide-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";
import api from "../lib/api";

const Signup = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    const { signup, authLoading } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({
            name: "",
            email: "",
            password: "",
        });

        let valid = true;

        if (!form.name.trim()) {
            setErrors((prev) => ({ ...prev, name: "Name is required" }));
            valid = false;
        }

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
            await signup(form.name, form.email, form.password);
            toast.success("Account created! Please verify your email ");
            navigate("/verify-email-sent");
        } catch (error) {
            toast.error(
                error?.response?.data?.message ||
                    "Signup failed. Please try again."
            );
        }
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 relative">
            {/* Theme Toggle */}
            <div className="absolute top-4 right-4 z-20">
                <ThemeToggle />
            </div>

            {/* Left Panel */}
            <div
                className="hidden lg:flex items-center justify-center 
                bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600
                relative overflow-hidden text-white"
            >
                <h1 className="text-4xl font-bold drop-shadow-lg">LinkHub</h1>
            </div>

            {/* Right Panel */}
            <div className="flex items-center justify-center p-6">
                <div
                    className="
                    w-full max-w-md
                    bg-white/40 dark:bg-gray-800/40
                    backdrop-blur-xl
                    border border-gray-300 dark:border-gray-700
                    rounded-2xl p-8 shadow-xl
                    transition-colors text-center
                "
                >
                    {/* Title */}
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                        Create your account ✨
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Join LinkHub and build your smart profile
                    </p>

                    {/* FORM */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <InputField
                            label="Name"
                            type="text"
                            name="name"
                            icon={User}
                            placeholder="John Doe"
                            value={form.name}
                            onChange={handleChange}
                            error={errors.name}
                        />

                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            icon={Mail}
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                            error={errors.email}
                        />

                        <InputField
                            label="Password"
                            type="password"
                            name="password"
                            icon={Lock}
                            placeholder="••••••••"
                            value={form.password}
                            onChange={handleChange}
                            error={errors.password}
                        />

                        <SubmitButton
                            text="Create Account"
                            fullWidth
                            loading={authLoading}
                        />
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center justify-center gap-3">
                        <span className="h-px w-20 bg-gray-300 dark:bg-gray-600"></span>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                            Or continue with
                        </span>
                        <span className="h-px w-20 bg-gray-300 dark:bg-gray-600"></span>
                    </div>

                    {/* Google Button */}
                    <button
                        className="
                        w-full py-2 rounded-xl bg-gray-200 dark:bg-gray-700
                        border border-gray-300 dark:border-gray-600
                        flex items-center justify-center gap-3
                        hover:bg-gray-300 dark:hover:bg-gray-600
                        transition
                    "
                    >
                        <img
                            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>

                    {/* Footer */}
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-6">
                        Already have an account?
                        <Link
                            to="/login"
                            className="text-indigo-500 hover:underline ml-1"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
