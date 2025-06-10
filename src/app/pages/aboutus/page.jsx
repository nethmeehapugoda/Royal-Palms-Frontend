"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Camera,
  Star,
  MapPin,
  Calendar,
  Users,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Import the about us image
import aboutus from "../../../../public/aboutus.jpg";

const features = [
  {
    icon: Heart,
    title: "Authentic Hospitality",
    description:
      "Experience the warmth of Sri Lankan culture, where every guest is treated like family.",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Leaf,
    title: "Sustainable Living",
    description:
      "We are dedicated to eco-friendly practices to preserve our beautiful coastline for generations to come.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Camera,
    title: "Unforgettable Experiences",
    description:
      "From ocean adventures to cultural tours, create stories that will stay with you forever.",
    color: "from-blue-400 to-cyan-500",
  },
];

const stats = [
  { icon: Calendar, label: "Years of Excellence", value: "9+" },
  { icon: Users, label: "Happy Guests", value: "10K+" },
  { icon: Award, label: "Awards Won", value: "15+" },
  { icon: Star, label: "Guest Rating", value: "4.9" },
];

export default function ModernAboutUs() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-amber-700">
            Loading Our Story...
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{ backgroundImage: "url('/background.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl">
            {/* Welcome Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-amber-50 py-10 rounded-2xl mb-8"
              >
                <h1 className="text-5xl md:text-7xl font-extrabold text-amber-700 font-serif drop-shadow-md mb-6">
                  WELCOME TO PARADISE
                </h1>
                <div className="flex items-center justify-center gap-2 text-amber-600">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg font-medium">
                    Sri Lanka's Premier Beach Resort
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                <p className="text-gray-800 text-lg md:text-2xl leading-relaxed">
                  Nestled along the sun-kissed shores of Sri Lanka, our Beach
                  Hotel is a serene escape into tropical bliss. With
                  crystal-clear waters, soft golden sands, and breathtaking
                  sunsets, we invite you to experience true island hospitality
                  in style and comfort.
                </p>
                <p className="text-gray-800 text-lg md:text-2xl leading-relaxed">
                  Our mission is simple: to craft unforgettable memories.
                  Whether you seek adventure, romance, or relaxation, our
                  luxurious amenities, exceptional service, and warm smiles
                  ensure your stay is truly extraordinary.
                </p>
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="bg-white py-16 px-6 md:px-20 rounded-2xl mb-8"
            >
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold text-amber-700 text-center mb-12 font-serif"
                >
                  Why Choose Paradise?
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ y: -10, scale: 1.02 }}
                        className="group relative p-8 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                      >
                        {/* Background Pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 translate-x-8 -translate-y-8">
                          <IconComponent className="w-full h-full text-amber-600" />
                        </div>

                        <div className="relative z-10">
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <IconComponent className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-2xl font-semibold text-amber-700 mb-4 group-hover:text-amber-800 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.section>

            {/* Stats Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 py-12 px-6 rounded-2xl mb-8 text-white"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-8">
                  Our Achievements
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className={`text-center p-4 rounded-xl transition-all duration-300 ${
                          currentStat === index
                            ? "bg-white/20 scale-105"
                            : "bg-white/10"
                        }`}
                      >
                        <IconComponent className="w-8 h-8 mx-auto mb-2" />
                        <div className="text-2xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm opacity-90">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.section>

            {/* Our Story Section */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="py-16 px-6 md:px-20 bg-amber-50 rounded-2xl"
            >
              <div className="max-w-5xl mx-auto">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl text-amber-700 font-serif font-bold mb-8 text-center"
                >
                  OUR STORY
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-gray-800 text-lg md:text-2xl text-center mb-12 leading-relaxed"
                >
                  Founded in 2015, our hotel was born from a deep love for the
                  sea and the vibrant spirit of Sri Lanka. Built with care,
                  respect for nature, and a passion for creating beautiful
                  experiences, we have grown into one of the most cherished
                  coastal resorts on the island.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <Image
                      src={aboutus || "/placeholder.svg"}
                      alt="About Us - Paradise Resort"
                      width={800}
                      height={600}
                      className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating Badge */}
                    <Badge className="absolute top-6 left-6 bg-white/90 text-amber-700 px-4 py-2 text-sm font-semibold">
                      <Calendar className="w-4 h-4 mr-2" />
                      Est. 2015
                    </Badge>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-center mt-12"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Discover Our Paradise
                  </Button>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
