import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const [openMenu, setOpenMenu] = useState(false); // profile dropdown
    const [mobileMenu, setMobileMenu] = useState(false); // mobile side menu
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const menuRef = useRef(null);

    // CLICK OUTSIDE TO CLOSE PROFILE MENU
    useEffect(() => {
        const close = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target))
                setOpenMenu(false);
        };
        document.addEventListener("mousedown", close);
        return () => document.removeEventListener("mousedown", close);
    }, []);

    const handleLogin = () => navigate("/login");

    return (
        <nav className=" w-full backdrop-blur-xl border-b rounded-3xl border-white/20 bg-white/50 dark:bg-black/30 sticky top-0 z-50 shadow-[0_0_25px_-8px_rgba(0,0,0,0.6)]">
            <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-2 active:scale-95 transition select-none"
                >
                    <img
                        src="/img/Bunchly-dark.png"
                        className="h-10"
                        alt="logo"
                    />
                </Link>

                {/* Desktop Nav Items */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <NavItem to="/features" label="Features" />
                    <NavItem to="/pricing" label="Pricing" />
                    <NavItem to="/templates" label="Templates" />
                    <NavItem to="/support" label="Support" />
                </ul>

                {/* RIGHT SIDE CONTENT */}
                <div className="flex items-center gap-3">
                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>

                    {/* --- If not logged in --- */}
                    {!user && (
                        <Button text="Login / Signup" onClick={handleLogin} />
                    )}

                    {/* --- If logged in show avatar dropdown --- */}
                    {user && (
                        <div ref={menuRef} className="relative">
                            {/* Avatar */}
                            <div
                                onClick={() => setOpenMenu((p) => !p)}
                                className="cursor-pointer active:scale-95 transition"
                            >
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        className="w-10 h-10 rounded-full object-cover border border-white/40 shadow"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold uppercase bg-gradient-to-tr from-indigo-600 to-purple-500 shadow border border-white/20">
                                        {user?.name?.[0] || user?.email?.[0]}
                                    </div>
                                )}
                            </div>

                            {/* Dropdown */}
                            {openMenu && (
                                <div className="absolute top-12 right-0 w-48 p-3 rounded-lg bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-white/10 animate-scaleIn z-50">
                                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-100">
                                        {user?.name || user?.email}
                                    </p>
                                    <hr className="my-2 border-gray-300 dark:border-white/10" />

                                    <div className="flex flex-col gap-2">
                                        <Button
                                            text="Dashboard"
                                            fullWidth
                                            size="sm"
                                            onClick={() =>
                                                navigate("/dashboard")
                                            }
                                        />
                                        <Button
                                            text="Logout"
                                            variant="danger"
                                            fullWidth
                                            size="sm"
                                            onClick={logout}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* MOBILE MENU ICON (opens drawer) */}
                    {!mobileMenu && (
                        <Menu
                            className="w-7 h-7 md:hidden cursor-pointer"
                            onClick={() => setMobileMenu(true)}
                        />
                    )}
                    {mobileMenu && (
                        <div className="">
                            <X
                                className="w-7 h-7 md:hidden cursor-pointer"
                                onClick={() => setMobileMenu(false)}
                            />

                            <div className="absolute flex flex-col right-0 top-18 border w-44 bg-white dark:bg-gray-900 p-6 shadow-xl  justify-center items-center gap-2 animate-slideLeft">
                                <ul className="flex flex-col gap-4 text-center">
                                    <NavItem to="/features" label="Features" />
                                    <NavItem to="/pricing" label="Pricing" />
                                    <NavItem
                                        to="/templates"
                                        label="Templates"
                                    />
                                    <NavItem to="/support" label="Support" />
                                </ul>
                                <ThemeToggle />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

const NavItem = ({ to, label }) => <Link to={to}>{label}</Link>;

export default Navbar;
