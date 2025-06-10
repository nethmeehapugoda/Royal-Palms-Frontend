"use client";
import MainLayout from "@/components/Layouts/MainLayout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const router = useRouter();
  const { SignIn, register, loading, error, setError } = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    address: "",
    dob: "",
    city: "",
    state: "",
    contact: "",
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const loggedInUser = await SignIn(loginData.email, loginData.password);

      if (loggedInUser.role === "admin"|| loggedInUser.role=== "Manager-Admin") {
        router.push("/pages/dashboard");
      } else {
        router.push("/pages/requestbooking");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Transform the data to match backend field names
      const transformedData = {
        email: registerData.email,
        password: registerData.password,
        Name: registerData.name,        // name -> Name
        Gender: registerData.gender,    // gender -> Gender
        Address: registerData.address,  // address -> Address
        DOB: registerData.dob,         // dob -> DOB
        City: registerData.city,       // city -> City
        State: registerData.state,     // state -> State
        Contact: registerData.contact, // contact -> Contact
        role: "user" // Default role
      };
 
      await register(transformedData);
      setActiveTab("login");
      setLoginData({
        email: registerData.email,
        password: registerData.password
      });
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  const switchTab = (tab) => {
    setError(null);
    setActiveTab(tab);
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat p-8">
        <div className="backdrop-blur-md bg-white/70 p-10 rounded-2xl shadow-2xl w-full max-w-md">
          <section className="bg-amber-50 py-10 rounded-2xl">
            <h1 className="text-5xl font-extrabold text-center text-amber-700 font-serif mb-6 drop-shadow-sm">
              WELCOME
            </h1>
          </section>

          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`py-2 px-4 font-medium text-sm flex-1 ${
                activeTab === "login"
                  ? "border-b-2 border-amber-500 text-amber-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => switchTab("login")}
            >
              Sign In
            </button>
            <button
              className={`py-2 px-4 font-medium text-sm flex-1 ${
                activeTab === "register"
                  ? "border-b-2 border-amber-500 text-amber-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => switchTab("register")}
            >
              Register
            </button>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {activeTab === "login" && (
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-950 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                  required
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
              </div>

              <div>
                <label className="block text-gray-950 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                  required
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-medium"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          )}

          {activeTab === "register" && (
            <form className="space-y-4" onSubmit={handleRegister}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={registerData.name}
                onChange={handleRegisterChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
              />

              <select
                name="gender"
                value={registerData.gender}
                onChange={handleRegisterChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  name="dob"
                  value={registerData.dob}
                  onChange={handleRegisterChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                />

                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={registerData.contact}
                  onChange={handleRegisterChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={registerData.city}
                  onChange={handleRegisterChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                />

                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={registerData.state}
                  onChange={handleRegisterChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
                />
              </div>

              <textarea
                name="address"
                placeholder="Address"
                value={registerData.address}
                onChange={handleRegisterChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-4 focus:ring-amber-500 focus:border-amber-700 transition outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition font-medium"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Auth;