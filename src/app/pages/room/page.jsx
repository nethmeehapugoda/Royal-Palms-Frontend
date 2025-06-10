"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bed,
  Wifi,
  Tv,
  Coffee,
  Bath,
  Wind,
  Star,
  Users,
  Calendar,
  CreditCard,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

// Import room images
import D1 from "../../../../public/D1.jpg";
import D2 from "../../../../public/D2.jpg";
import D7 from "../../../../public/D7.jpg";
import D8 from "../../../../public/D8.jpg";
import p15 from "../../../../public/p15.jpg";
import p11 from "../../../../public/p11.jpg";
import p10 from "../../../../public/p10.jpg";
import p12 from "../../../../public/p12.jpeg";
import n5 from "../../../../public/n5.jpg";
import n3 from "../../../../public/n3.jpg";
import n4 from "../../../../public/n4.jpg";
import n2 from "../../../../public/n2.jpg";
import non4 from "../../../../public/non4.jpg";
import non3 from "../../../../public/non3.jpg";
import non5 from "../../../../public/non5.jpg";
import non6 from "../../../../public/non6.jpg";

const roomTypes = [
  {
    id: "deluxe",
    title: "DELUXE ROOM",
    subtitle: "Ultimate Luxury Experience",
    price: "75,000",
    currency: "LKR",
    period: "night",
    images: [D1, D2, D7, D8],
    description:
      "Welcome to our Deluxe Room where elegance, comfort, and thoughtful design come together to create a truly relaxing retreat. Spacious and stylish, this room features premium furnishings, plush bedding, and modern amenities to make your stay effortlessly enjoyable.",
    amenities: [
      { icon: Bed, label: "King-size bed" },
      { icon: Bath, label: "Private Jacuzzi & Bar" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "High-speed Wi-Fi" },
      { icon: Users, label: "Butler service" },
    ],
    featured: true,
    gradient: "from-amber-500 to-orange-500",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    id: "premium",
    title: "PREMIUM ROOM",
    subtitle: "Enhanced Comfort & Style",
    price: "55,000",
    currency: "LKR",
    period: "night",
    images: [p15, p11, p10, p12],
    description:
      "Experience elevated comfort in our Premium Room where timeless design meets modern luxury. Thoughtfully curated for travelers who seek more, this room offers extra space, enhanced amenities, and an ambiance of quiet sophistication.",
    amenities: [
      { icon: Bed, label: "Queen-size bed" },
      { icon: Coffee, label: "Mini-fridge & Workspace" },
      { icon: Coffee, label: "Complimentary breakfast" },
      { icon: Tv, label: "Smart TV" },
      { icon: Wifi, label: "Wi-Fi" },
    ],
    featured: false,
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    id: "normal",
    title: "STANDARD ROOM",
    subtitle: "Comfort & Value Combined",
    price: "30,000",
    currency: "LKR",
    period: "night",
    images: [n5, n3, n4, n2],
    description:
      "Welcome to our Standard A/C Room, the perfect blend of comfort, simplicity, and value. Designed for a relaxing stay, this room features all the essentials, including a cozy bed, private bathroom, and efficient air conditioning.",
    amenities: [
      { icon: Bed, label: "Double bed" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Tv, label: "TV" },
      { icon: Wifi, label: "Wi-Fi" },
    ],
    featured: false,
    gradient: "from-green-500 to-emerald-500",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    id: "budget",
    title: "BUDGET ROOM",
    subtitle: "Simple & Affordable",
    price: "18,000",
    currency: "LKR",
    period: "night",
    images: [non4, non3, non5, non6],
    description:
      "Our Non-A/C Room offers a clean, comfortable space for travelers who appreciate simplicity and affordability. Designed with natural ventilation and thoughtful touches, it provides a peaceful atmosphere for rest and relaxation.",
    amenities: [
      { icon: Wind, label: "Ceiling fan" },
      { icon: Bed, label: "Basic furnishings" },
      { icon: Coffee, label: "Free bottled water" },
    ],
    featured: false,
    gradient: "from-purple-500 to-pink-500",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  },
];

export default function ModernRooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const intervals = {};
    roomTypes.forEach((room) => {
      intervals[room.id] = setInterval(() => {
        setCurrentImageIndex((prev) => ({
          ...prev,
          [room.id]: ((prev[room.id] || 0) + 1) % room.images.length,
        }));
      }, 4000);
    });

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
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
            Preparing Your Stay...
          </h2>
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
                THE ART OF THE STAY
              </h1>
              <div className="flex items-center justify-center gap-2 text-amber-600">
                <Sparkles className="w-6 h-6" />
                <span className="text-xl font-medium">Luxury Redefined</span>
                <Sparkles className="w-6 h-6" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            >
              Curl up, stretch out, wind down, or sleep in. Feel the most
              comfortable and yourself you have ever been, in rooms and suites
              designed for gentle restoration.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {roomTypes.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div
                      className={`grid lg:grid-cols-2 gap-0 ${
                        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                      }`}
                    >
                      {/* Images Section */}
                      <div
                        className={`relative h-96 lg:h-auto ${
                          index % 2 === 1 ? "lg:col-start-2" : ""
                        }`}
                      >
                        <div className="grid grid-cols-2 gap-2 h-full p-4">
                          {room.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className="relative overflow-hidden rounded-xl group cursor-pointer"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                              onClick={() =>
                                setSelectedRoom({ room, imageIndex: imgIndex })
                              }
                            >
                              <Image
                                src={image || "/placeholder.svg"}
                                alt={`${room.title} ${imgIndex + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white/90 rounded-full p-2">
                                  <ArrowRight className="w-5 h-5 text-amber-700" />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Featured Badge */}
                        {room.featured && (
                          <Badge className="absolute top-6 left-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-sm font-semibold">
                            <Star className="w-4 h-4 mr-1" />
                            Most Popular
                          </Badge>
                        )}
                      </div>

                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <motion.div
                          initial={{
                            opacity: 0,
                            x: index % 2 === 1 ? 50 : -50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <div className="mb-6">
                            <h3 className="text-3xl lg:text-4xl font-bold text-amber-700 font-serif mb-2">
                              {room.title}
                            </h3>
                            <p className="text-lg text-amber-600 font-medium">
                              {room.subtitle}
                            </p>
                          </div>

                          <p className="text-gray-700 text-lg leading-relaxed mb-8">
                            {room.description}
                          </p>

                          {/* Amenities */}
                          <div className="mb-8">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">
                              Room Features
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {room.amenities.map((amenity, amenityIndex) => {
                                const IconComponent = amenity.icon;
                                return (
                                  <motion.div
                                    key={amenityIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                      duration: 0.4,
                                      delay: amenityIndex * 0.1,
                                    }}
                                    className="flex items-center gap-3 text-gray-700"
                                  >
                                    <div
                                      className={`p-2 rounded-lg bg-gradient-to-r ${room.gradient}`}
                                    >
                                      <IconComponent className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="font-medium">
                                      {amenity.label}
                                    </span>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Pricing and CTA */}
                          <div className="flex items-center justify-between">
                            <div className="text-left">
                              <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-bold text-amber-700">
                                  {room.currency} {room.price}
                                </span>
                                <span className="text-gray-600">
                                  / {room.period}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">
                                Taxes and fees included
                              </p>
                            </div>

                            <Button
                              size="lg"
                              className={`bg-gradient-to-r ${room.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white px-8 py-3 rounded-full font-semibold`}
                            >
                              <Calendar className="w-5 h-5 mr-2" />
                              Book Now
                            </Button>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={
                  selectedRoom.room.images[selectedRoom.imageIndex] ||
                  "/placeholder.svg"
                }
                alt={selectedRoom.room.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />

              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                onClick={() => setSelectedRoom(null)}
              >
                ×
              </Button>

              {/* Room Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {selectedRoom.room.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-amber-300 font-medium">
                    {selectedRoom.room.subtitle}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <CreditCard className="h-4 w-4 mr-2" />
                      Book Room
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
