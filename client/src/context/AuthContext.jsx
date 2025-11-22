import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/api.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authLoading, setAuthLoading] = useState(false);

    const fetchMe = async () => {
        try {
            const res = await api.get("/api/auth/me");
            setUser(res.data?.user);
        } catch (error) {
            if (error.response?.status === 401) {
                setUser(null);
                return;
            }
        } finally {
            setLoading(false);
        }
    };

    const login = async (email, password) => {
        try {
            setAuthLoading(true);
            const res = await api.post("/api/auth/login", {
                email,
                password,
            });
            await fetchMe();
        } catch (error) {
            throw error?.response?.data?.message || "Login failed";
        } finally {
            setAuthLoading(false);
        }
    };

    const logout = async () => {
        await api.post("/api/auth/logout");
        setUser(null);
    };

    useEffect(() => {
        fetchMe();
    }, []);

    if (loading)
        return (
            <div className="text-center py-8">
                <span className="loading loading-ball loading-xs"></span>
            </div>
        );

    return (
        <AuthContext.Provider
            value={{ user, loading, authLoading, login, logout, fetchMe }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
