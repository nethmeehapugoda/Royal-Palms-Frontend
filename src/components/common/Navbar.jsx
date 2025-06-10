"use client"
{/*import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

const Navbar = () => {
  const { user, SignOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  const handleLogout = () => {
    SignOut()
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    router.push("/")
  }

  const navLinks = [
    { href: "/pages/home", label: "Home" },
    { href: "/pages/aboutus", label: "About Us" },
    { href: "/pages/room", label: "Room" },
    { href: "/pages/contactus", label: "Contact Us" },
    { href: "/pages/requestbooking", label: "Request Booking" },
  ]

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <nav className="bg-amber-200 shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Link href="/pages/home">
            <div className="relative w-20 h-20 cursor-pointer transition-transform hover:scale-105">
              <Image src="/newlogo.jpg" alt="Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation *
        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <div className="relative px-4 py-2 rounded-lg group">
                  <span
                    className={`text-black text-lg font-bold transition-all duration-300 ${
                      isActive(link.href) ? "text-amber-800" : "group-hover:text-amber-700"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Active indicator *
                  {isActive(link.href) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}

                  {/* Hover effect *
                  <div className="absolute inset-0 bg-amber-300 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}

          {user ? (
            <motion.div
              className="relative ml-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-black text-lg font-bold hover:bg-amber-300/20 transition-colors duration-300 focus:outline-none"
              >
                <span>Hello, {user.name || user.email?.split("@")[0]}</span>
                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-10 overflow-hidden"
                  >
                    <Link
                      href="/pages/profile"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-100 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/pages/mybookings"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-100 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            >
              <Link
                href="/pages/auth"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
              >
                Login
              </Link>
            </motion.div>
          )}
        </div>

        {/* Mobile Menu Button *
        <motion.div
          className="md:hidden z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none p-2 rounded-lg hover:bg-amber-300/20 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <X className="w-6 h-6 text-amber-800" /> : <Menu className="w-6 h-6 text-amber-800" />}
            </motion.div>
          </button>
        </motion.div>

        {/* Mobile Menu *
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-24 right-0 left-0 bg-amber-200 shadow-lg z-10 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-3 max-h-[calc(100vh-6rem)] overflow-y-auto">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        isActive(link.href) ? "bg-amber-300/40 font-bold" : "hover:bg-amber-300/20"
                      }`}
                    >
                      <span className="text-black text-lg font-bold">{link.label}</span>
                      {isActive(link.href) && <div className="h-1 w-12 bg-amber-500 mt-1 rounded-full" />}
                    </div>
                  </Link>
                ))}

                {user ? (
                  <>
                    <div className="py-3 border-t border-amber-300">
                      <p className="text-black font-medium">Hello, {user.name || user.email?.split("@")[0]}</p>
                    </div>
                    <Link
                      href="/pages/profile"
                      className="p-3 rounded-lg text-black text-lg font-bold hover:bg-amber-300/20 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      href="/pages/mybookings"
                      className="p-3 rounded-lg text-black text-lg font-bold hover:bg-amber-300/20 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="text-left text-white bg-red-600 hover:bg-red-700 text-lg font-bold py-3 px-4 rounded-lg transition-colors duration-300 mt-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/pages/auth"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-center mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar;*/}

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"

const Navbar = () => {
  const { user, SignOut } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
 console.log(user)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target
      if (isMenuOpen && !target.closest("nav")) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMenuOpen])

  const handleLogout = () => {
    SignOut()
    setIsMenuOpen(false)
    setIsDropdownOpen(false)
    router.push("/")
  }

  const navLinks = [
    { href: "/pages/home", label: "Home" },
    { href: "/pages/aboutus", label: "About Us" },
    { href: "/pages/room", label: "Room" },
    { href: "/pages/contactus", label: "Contact Us" },
    { href: "/pages/requestbooking", label: "Request Booking" },
     ...(user?.role === "admin" ? [{ href: "/pages/dashboard", label: "Dashboard" }] : []),
     ...(user?.role === "Manager-Admin" ? [{ href: "/pages/dashboard", label: "Dashboard" }] : []),
  ]

   console.log(user?.role)

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <nav className="bg-amber-200 shadow-md sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <Link href="/pages/home">
            <div className="relative w-20 h-20 cursor-pointer transition-transform hover:scale-105">
              <Image src="/newlogo.jpg" alt="Logo" fill className="object-contain" priority />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={link.href}>
                <div className="relative px-4 py-2 rounded-lg group">
                  <span
                    className={`text-black text-lg font-bold transition-all duration-300 ${
                      isActive(link.href) ? "text-amber-800" : "group-hover:text-amber-700"
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Active indicator */}
                  {isActive(link.href) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500 rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-amber-300 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}

          {user ? (
            <motion.div
              className="relative ml-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-black text-lg font-bold hover:bg-amber-300/20 transition-colors duration-300 focus:outline-none"
              >
                <span>Hello, {user.name || user.email?.split("@")[0]}</span>
                <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-10 overflow-hidden"
                  >
                    {/* <Link
                      href="/pages/profile"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-100 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Profile
                    </Link> */}
                    {/* <Link
                      href="/pages/mybookings"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-amber-100 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      My Bookings
                    </Link> */}
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-sm text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.1 }}
            >
              <Link
                href="/pages/auth"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0"
              >
                Login
              </Link>
            </motion.div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.div
          className="md:hidden z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none p-2 rounded-lg hover:bg-amber-300/20 transition-colors duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div animate={{ rotate: isMenuOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
              {isMenuOpen ? <X className="w-6 h-6 text-amber-800" /> : <Menu className="w-6 h-6 text-amber-800" />}
            </motion.div>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-24 right-0 left-0 bg-amber-200 shadow-lg z-10 overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-3 max-h-[calc(100vh-6rem)] overflow-y-auto">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${
                        isActive(link.href) ? "bg-amber-300/40 font-bold" : "hover:bg-amber-300/20"
                      }`}
                    >
                      <span className="text-black text-lg font-bold">{link.label}</span>
                      {isActive(link.href) && <div className="h-1 w-12 bg-amber-500 mt-1 rounded-full" />}
                    </div>
                  </Link>
                ))}

                {user ? (
                  <>
                    <div className="py-3 border-t border-amber-300">
                      <p className="text-black font-medium">Hello, {user.name || user.email?.split("@")[0]}</p>
                    </div>
                    {/* <Link
                      href="/pages/profile"
                      className="p-3 rounded-lg text-black text-lg font-bold hover:bg-amber-300/20 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Profile
                    </Link> */}
                    {/* <Link
                      href="/pages/mybookings"
                      className="p-3 rounded-lg text-black text-lg font-bold hover:bg-amber-300/20 transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Bookings
                    </Link> */}
                    <button
                      onClick={handleLogout}
                      className="text-left text-white bg-red-600 hover:bg-red-700 text-lg font-bold py-3 px-4 rounded-lg transition-colors duration-300 mt-2"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/pages/auth"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 text-center mt-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar;
