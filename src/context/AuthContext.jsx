"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import axios from "axios";
import BASE_URL from "@/API/config";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");
        if (token && userData) {
          setUser(JSON.parse(userData));
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const register = async (userData) => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/user/reg`, userData);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const SignIn = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });
      const { token, user } = response.data;
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      return user;
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const SignOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, setError, register, SignIn, SignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
