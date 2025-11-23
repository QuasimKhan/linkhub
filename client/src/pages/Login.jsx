import React, { useState } from "react";
import InputField from "../components/ui/InputField";
import { Lock, Mail } from "lucide-react";
import SubmitButton from "../components/ui/SubmitButton";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import ThemeToggle from "../components/ThemeToggle";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    const { login, authLoading } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({ email: "", password: "" });

        let valid = true;

        if (!form.email.trim()) {
            setErrors((p) => ({ ...p, email: "Email is required" }));
            valid = false;
        }

        if (!form.password.trim()) {
            setErrors((p) => ({ ...p, password: "Password is required" }));
            valid = false;
        }

        if (!valid) return;

        try {
            await login(form.email, form.password);
            toast.success("Logged in successfully");
            navigate("/dashboard");
        } catch (error) {
            toast.error(error?.response?.data?.message || "Login failed");
        }
    };

    const handleGoogleLogin = () => {
        window.location.href = `${
            import.meta.env.VITE_API_URL
        }/api/auth/google`;
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-2 relative">
            {/* Theme Toggle */}
            <div className="absolute top-4 right-4 z-50">
                <ThemeToggle />
            </div>

            {/* Left Panel */}
            <div
                className="hidden lg:flex items-center justify-center 
                      bg-gradient-to-b from-purple-600 via-indigo-600 to-blue-600"
            >
                <h1 className="text-white text-4xl font-bold">LinkHub</h1>
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
                    <h1 className="text-3xl font-bold mb-2">Welcome Back 👋</h1>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                        Login to your LinkHub account
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit}>
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

                        <SubmitButton
                            text="Login"
                            fullWidth
                            size="md"
                            loading={authLoading}
                        />
                    </form>

                    <div className="my-6 flex items-center justify-center gap-3">
                        <span className="h-px w-20 bg-gray-300 dark:bg-gray-600"></span>
                        <span className="text-gray-600 dark:text-gray-300">
                            Or continue with
                        </span>
                        <span className="h-px w-20 bg-gray-300 dark:bg-gray-600"></span>
                    </div>

                    <button
                        onClick={handleGoogleLogin}
                        className="
              w-full py-2 rounded-xl
              bg-gray-200 dark:bg-gray-700
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

                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-6">
                        Don’t have an account?
                        <Link to="/signup" className="ml-1 text-indigo-500">
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
