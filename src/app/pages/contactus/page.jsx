"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  Globe,
  CheckCircle,
  User,
  AtSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

// Import contact image
import Contact from "../../../../public/Contact.png";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Speak with our team",
    details: ["+94 11 220 8000", "+94 11 220 8001", "+94 77 339 9479"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "Send us a message",
    details: ["info@royalpalms.com"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    isEmail: true,
  },
  {
    icon: MapPin,
    title: "Visit Us",
    subtitle: "Come see us in person",
    details: [
      "Royal Palms Hotel",
      "No:07, Meepe, Ingiriya Road, Padukka, Sri Lanka",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "24/7 Reception" },
  { day: "Saturday - Sunday", hours: "24/7 Reception" },
  { day: "Check-in", hours: "2:00 PM onwards" },
  { day: "Check-out", hours: "12:00 PM" },
];

export default function ModernContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

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
          <h2 className="text-2xl font-bold text-amber-700">Connecting...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-amber-50 py-12 rounded-3xl mb-8 shadow-lg"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-amber-700 font-serif drop-shadow-md mb-4">
                TALK TO US
              </h1>
              <div className="flex items-center justify-center gap-2 text-amber-600">
                <MessageCircle className="w-6 h-6" />
                <span className="text-xl font-medium">We're Here to Help</span>
                <MessageCircle className="w-6 h-6" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              At Royal Palms Hotel we love staying in touch with everyone who
              steps into our world, online or otherwise. We hope you'd like to
              as well.
            </motion.p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex justify-center mb-16"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              <Image
                src={Contact || "/placeholder.svg"}
                alt="Contact Royal Palms Hotel"
                width={800}
                height={600}
                className="relative rounded-3xl shadow-2xl object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 font-serif mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred way to reach us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                    <CardContent className={`p-8 ${info.bgColor} relative`}>
                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-10 transform rotate-12 translate-x-4 -translate-y-4">
                        <IconComponent className="w-full h-full text-gray-600" />
                      </div>

                      <div className="relative z-10 text-center">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className="w-full h-full text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-amber-700 mb-2">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{info.subtitle}</p>

                        <div className="space-y-2">
                          {info.details.map((detail, detailIndex) => (
                            <div key={detailIndex}>
                              {info.isEmail ? (
                                <a
                                  href={`mailto:${detail}`}
                                  className="text-lg text-gray-700 hover:text-amber-600 transition-colors font-medium"
                                >
                                  {detail}
                                </a>
                              ) : (
                                <p className="text-lg text-gray-700 font-medium">
                                  {detail}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Business Hours */}
      <section className="py-16 px-4 md:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-amber-700 mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h4 className="text-2xl font-bold text-green-600 mb-2">
                          Message Sent!
                        </h4>
                        <p className="text-gray-600">
                          Thank you for contacting us. We'll be in touch soon.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        initial={{ opacity: 1 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            Your Name
                          </label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            className="h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            <AtSign className="w-4 h-4 inline mr-2" />
                            Email Address
                          </label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            className="h-12 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            <MessageCircle className="w-4 h-4 inline mr-2" />
                            Your Message
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Tell us how we can help you..."
                            rows={5}
                            className="border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                          ) : (
                            <Send className="w-5 h-5 mr-2" />
                          )}
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-700">
                      Business Hours
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-700">
                          {schedule.day}
                        </span>
                        <span className="text-amber-600 font-semibold">
                          {schedule.hours}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-700">
                      Quick Info
                    </h3>
                  </div>

                  <div className="space-y-4 text-center">
                    <div>
                      <p className="text-gray-600 mb-1">Response Time</p>
                      <p className="font-semibold text-gray-800">
                        Within 24 hours
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Languages</p>
                      <p className="font-semibold text-gray-800">
                        English, Sinhala, Tamil
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 mb-1">Emergency Contact</p>
                      <p className="font-semibold text-gray-800">
                        24/7 Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-amber-700 font-serif mb-4">
              Find Us on Map
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Padukka, Sri Lanka
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126738.34762911282!2d79.9300204!3d6.9094301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fef2c2db49c5%3A0x410e2cc7e764ec30!2sRoyal%20Palms%20Beach%20Hotel!5e0!3m2!1sen!2slk!4v1714280000000"
              width="100%"
              height="450"
              className="relative rounded-3xl shadow-2xl w-full"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
