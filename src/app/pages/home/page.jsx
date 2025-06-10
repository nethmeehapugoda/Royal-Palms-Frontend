"use client";

{/*import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Grid3X3,
  LayoutGrid,
  Heart,
  Share2,
  Download,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Import images like original code
import home3 from "../../../../public/home3.png";
import home1 from "../../../../public/home1.jpg";
import home2 from "../../../../public/home2.jpg";
import home4 from "../../../../public/home4.jpg";
import home5 from "../../../../public/home5.jpg";
import home6 from "../../../../public/home6.jpg";
import home7 from "../../../../public/home7.jpg";
import home8 from "../../../../public/home8.jpg";
import home9 from "../../../../public/home9.jpg";
import home10 from "../../../../public/home10.jpg";
import home11 from "../../../../public/home11.jpg";
import home12 from "../../../../public/home12.jpg";
import home13 from "../../../../public/home13.jpg";
import home14 from "../../../../public/home14.jpg";
import home16 from "../../../../public/home16.jpg";
import home17 from "../../../../public/home17.jpg";
import home15 from "../../../../public/home15.jpg";
import home22 from "../../../../public/home22.jpg";
import home23 from "../../../../public/home23.jpg";
import home24 from "../../../../public/home24.avif";
import home25 from "../../../../public/home25.webp";
import home26 from "../../../../public/home26.jpg";
import home27 from "../../../../public/home27.avif";
import home28 from "../../../../public/home28.jpg";
import home29 from "../../../../public/home29.jpg";
import home30 from "../../../../public/home30.jpg";
import home31 from "../../../../public/home31.jpg";
import home32 from "../../../../public/home32.jpg";
import home33 from "../../../../public/home33.jpg";
import home34 from "../../../../public/home34.avif";
import home35 from "../../../../public/home35.jpg";
import home36 from "../../../../public/home36.jpg";
import home37 from "../../../../public/home37.jpg";

const galleryItems = [
  {
    id: 1,
    src: home24,
    category: "rooms",
    title: "Luxury Ocean Suite",
    featured: true,
  },
  { id: 2, src: home25, category: "dining", title: "Beachside Restaurant" },
  {
    id: 3,
    src: home22,
    category: "spa",
    title: "Wellness Center",
    featured: true,
  },
  { id: 4, src: home23, category: "beach", title: "Private Beach Access" },
  { id: 5, src: home1, category: "rooms", title: "Garden Villa" },
  { id: 6, src: home2, category: "dining", title: "Rooftop Bar" },
  {
    id: 7,
    src: home4,
    category: "activities",
    title: "Water Sports",
    featured: true,
  },
  { id: 8, src: home5, category: "spa", title: "Infinity Pool" },
  { id: 9, src: home6, category: "beach", title: "Sunset Views" },
  { id: 10, src: home7, category: "rooms", title: "Presidential Suite" },
  {
    id: 11,
    src: home8,
    category: "dining",
    title: "Fine Dining",
    featured: true,
  },
  { id: 12, src: home9, category: "activities", title: "Adventure Tours" },
  { id: 13, src: home10, category: "spa", title: "Meditation Garden" },
  { id: 14, src: home11, category: "beach", title: "Beach Cabanas" },
  { id: 15, src: home12, category: "rooms", title: "Honeymoon Suite" },
  { id: 16, src: home13, category: "dining", title: "Beach Grill" },
  {
    id: 17,
    src: home14,
    category: "spa",
    title: "Spa Treatment",
    featured: true,
  },
  { id: 18, src: home16, category: "beach", title: "Ocean Paradise" },
  { id: 19, src: home17, category: "rooms", title: "Deluxe Suite" },
  { id: 20, src: home15, category: "dining", title: "Tropical Cuisine" },
  { id: 21, src: home26, category: "activities", title: "Beach Activities" },
  {
    id: 22,
    src: home27,
    category: "spa",
    title: "Relaxation Zone",
    featured: true,
  },
  { id: 23, src: home28, category: "rooms", title: "Villa Paradise" },
  { id: 24, src: home29, category: "dining", title: "Sunset Dining" },
  { id: 25, src: home30, category: "beach", title: "Crystal Waters" },
  { id: 26, src: home31, category: "activities", title: "Island Adventures" },
  { id: 27, src: home32, category: "spa", title: "Wellness Retreat" },
  { id: 28, src: home33, category: "rooms", title: "Tropical Haven" },
  {
    id: 29,
    src: home34,
    category: "dining",
    title: "Gourmet Experience",
    featured: true,
  },
  { id: 30, src: home35, category: "beach", title: "Paradise Beach" },
  { id: 31, src: home36, category: "activities", title: "Water Adventures" },
  { id: 32, src: home37, category: "spa", title: "Serenity Spa" },
];

const categories = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "rooms", label: "Rooms", icon: Grid3X3 },
  { id: "dining", label: "Dining", icon: Grid3X3 },
  { id: "spa", label: "Spa & Wellness", icon: Grid3X3 },
  { id: "beach", label: "Beach", icon: Grid3X3 },
  { id: "activities", label: "Activities", icon: Grid3X3 },
];

export default function ModernGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [likedImages, setLikedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedImages(newLiked);
  };

  const getGridClass = (index) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-2 md:row-span-1", // Wide
    ];
    return patterns[index % patterns.length];
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
          <h2 className="text-2xl font-bold text-amber-700">
            Loading Paradise...
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section *
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
          <Image
            src={home3 || "/placeholder.svg"}
            alt="Paradise Resort"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-amber-900 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent font-serif drop-shadow-lg"
          >
            WELCOME TO
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-4xl font-light mb-8 tracking-wider text-amber-800 font-serif"
          >
            PARADISE AWAITS, STEP IN...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-700"
          >
            Blue skies, warm sands and blazing sunsets… another day in paradise?
            At one of the finest beach hotels in Sri Lanka it sure is.
          </motion.p>
        </motion.div>
      </section>

      {/* Video Showcase Section *
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent font-serif">
              EXPERIENCE PARADISE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the beauty and tranquility of our resort
              through this exclusive glimpse into paradise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group max-w-6xl mx-auto"
          >
            {/* Glow Effect *
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

            {/* Video Container *
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <video
                  src="/videohome.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video Overlay *
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Play Button Overlay *
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </motion.div>

                {/* Video Info Badge *
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-gray-800 font-semibold">
                      Live from Paradise
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements *
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-15 blur-2xl"
            />
          </motion.div>

          {/* Video Stats *
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { label: "Ocean Views", value: "360°" },
              { label: "Luxury Suites", value: "50+" },
              { label: "Beach Access", value: "Private" },
              { label: "Guest Rating", value: "5★" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section *
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header *
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent font-serif">
              OUR COLLECTION
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seeing is believing? So why not scroll through our gallery and
              take a look at what we have waiting here for you. See how you will
              see the sea from our balconies. See the cosy spaces ready to
              welcome you.
            </p>
          </motion.div>

          {/* Search and Filter Controls *
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search *
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-amber-50 border-amber-200 text-gray-700 placeholder:text-gray-500 focus:border-amber-400"
                />
              </div>

              {/* Category Filters *
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30"
                          : "bg-amber-100 text-amber-700 hover:bg-amber-200 border border-amber-200"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {category.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Gallery Grid *
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${getGridClass(
                    index
                  )} ${item.featured ? "ring-2 ring-amber-400/50" : ""}`}
                  onClick={() => setSelectedImage(item)}
                  whileHover={{ y: -8 }}
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay *
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content *
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 text-sm capitalize font-medium">
                        {item.category}
                      </span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(item.id);
                          }}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              likedImages.has(item.id)
                                ? "fill-red-500 text-red-500"
                                : "text-white"
                            }`}
                          />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <Share2 className="h-4 w-4 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge 
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      Featured
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results *
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🏝️</div>
              <h3 className="text-2xl font-semibold text-amber-700 mb-2">
                No images found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal *
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />

              {/* Close Button *
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Image Info *
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-amber-300 capitalize font-medium">
                    {selectedImage.category}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
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
}*/}


import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Grid3X3,
  LayoutGrid,
  Heart,
  Share2,
  Download,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Import images like original code
import home3 from "../../../../public/home3.png";
import home1 from "../../../../public/home1.jpg";
import home2 from "../../../../public/home2.jpg";
import home4 from "../../../../public/home4.jpg";
import home5 from "../../../../public/home5.jpg";
import home6 from "../../../../public/home6.jpg";
import home7 from "../../../../public/home7.jpg";
import home8 from "../../../../public/home8.jpg";
import home9 from "../../../../public/home9.jpg";
import home10 from "../../../../public/home10.jpg";
import home11 from "../../../../public/home11.jpg";
import home12 from "../../../../public/home12.jpg";
import home13 from "../../../../public/home13.jpg";
import home14 from "../../../../public/home14.jpg";
import home16 from "../../../../public/home16.jpg";
import home17 from "../../../../public/home17.jpg";
import home15 from "../../../../public/home15.jpg";
import home22 from "../../../../public/home22.jpg";
import home23 from "../../../../public/home23.jpg";
import home24 from "../../../../public/home24.avif";
import home25 from "../../../../public/home25.webp";
import home26 from "../../../../public/home26.jpg";
import home27 from "../../../../public/home27.avif";
import home28 from "../../../../public/home28.jpg";
import home29 from "../../../../public/home29.jpg";
import home30 from "../../../../public/home30.jpg";
import home31 from "../../../../public/home31.jpg";
import home32 from "../../../../public/home32.jpg";
import home33 from "../../../../public/home33.jpg";
import home34 from "../../../../public/home34.avif";
import home35 from "../../../../public/home35.jpg";
import home36 from "../../../../public/home36.jpg";
import home37 from "../../../../public/home37.jpg";


const galleryItems = [
  {
    id: 1,
    src: home24,
    category: "rooms",
    title: "Luxury Ocean Suite",
    featured: true,
  },
  { id: 2, src: home25, category: "dining", title: "Beachside Restaurant" },
  {
    id: 3,
    src: home22,
    category: "spa",
    title: "Wellness Center",
    featured: true,
  },
  { id: 4, src: home23, category: "beach", title: "Private Beach Access" },
  { id: 5, src: home1, category: "rooms", title: "Garden Villa" },
  { id: 6, src: home2, category: "dining", title: "Rooftop Bar" },
  {
    id: 7,
    src: home4,
    category: "activities",
    title: "Water Sports",
    featured: true,
  },
  { id: 8, src: home5, category: "spa", title: "Infinity Pool" },
  { id: 9, src: home6, category: "beach", title: "Sunset Views" },
  { id: 10, src: home7, category: "rooms", title: "Presidential Suite" },
  {
    id: 11,
    src: home8,
    category: "dining",
    title: "Fine Dining",
    featured: true,
  },
  { id: 12, src: home9, category: "activities", title: "Adventure Tours" },
  { id: 13, src: home10, category: "spa", title: "Meditation Garden" },
  { id: 14, src: home11, category: "beach", title: "Beach Cabanas" },
  { id: 15, src: home12, category: "rooms", title: "Honeymoon Suite" },
  { id: 16, src: home13, category: "dining", title: "Beach Grill" },
  {
    id: 17,
    src: home14,
    category: "spa",
    title: "Spa Treatment",
    featured: true,
  },
  { id: 18, src: home16, category: "beach", title: "Ocean Paradise" },
  { id: 19, src: home17, category: "rooms", title: "Deluxe Suite" },
  { id: 20, src: home15, category: "dining", title: "Tropical Cuisine" },
  { id: 21, src: home26, category: "activities", title: "Beach Activities" },
  {
    id: 22,
    src: home27,
    category: "spa",
    title: "Relaxation Zone",
    featured: true,
  },
  { id: 23, src: home28, category: "rooms", title: "Villa Paradise" },
  { id: 24, src: home29, category: "dining", title: "Sunset Dining" },
  { id: 25, src: home30, category: "beach", title: "Crystal Waters" },
  { id: 26, src: home31, category: "activities", title: "Island Adventures" },
  { id: 27, src: home32, category: "spa", title: "Wellness Retreat" },
  { id: 28, src: home33, category: "rooms", title: "Tropical Haven" },
  {
    id: 29,
    src: home34,
    category: "dining",
    title: "Gourmet Experience",
    featured: true,
  },
  { id: 30, src: home35, category: "beach", title: "Paradise Beach" },
  { id: 31, src: home36, category: "activities", title: "Water Adventures" },
  { id: 32, src: home37, category: "spa", title: "Serenity Spa" },
];

const categories = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "rooms", label: "Rooms", icon: Grid3X3 },
  { id: "dining", label: "Dining", icon: Grid3X3 },
  { id: "spa", label: "Spa & Wellness", icon: Grid3X3 },
  { id: "beach", label: "Beach", icon: Grid3X3 },
  { id: "activities", label: "Activities", icon: Grid3X3 },
];

export default function ModernGallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const [likedImages, setLikedImages] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleLike = (id) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedImages(newLiked);
  };

  const getGridClass = (index) => {
    const patterns = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-2 md:row-span-1", // Wide
    ];
    return patterns[index % patterns.length];
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
          <h2 className="text-2xl font-bold text-amber-700">
            Loading Paradise...
          </h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
          <Image
            src={home3 || "/placeholder.svg"}
            alt="Paradise Resort"
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-amber-900 px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent font-serif drop-shadow-lg"
          >
            WELCOME TO
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-2xl md:text-4xl font-light mb-8 tracking-wider text-amber-800 font-serif"
          >
            PARADISE AWAITS, STEP IN...
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-700"
          >
            Blue skies, warm sands and blazing sunsets… another day in paradise?
            At one of the finest beach hotels in Sri Lanka it sure is.
          </motion.p>
        </motion.div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent font-serif">
              EXPERIENCE PARADISE
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Immerse yourself in the beauty and tranquility of our resort
              through this exclusive glimpse into paradise
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group max-w-6xl mx-auto"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />

            {/* Video Container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <video
                  src="/videohome.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </motion.div>

                {/* Video Info Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    <span className="text-gray-800 font-semibold">
                      Live from Paradise
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-20 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full opacity-15 blur-2xl"
            />
          </motion.div>

          {/* Video Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
          >
            {[
              { label: "Ocean Views", value: "360°" },
              { label: "Luxury Suites", value: "50+" },
              { label: "Beach Access", value: "Private" },
              { label: "Guest Rating", value: "5★" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-2xl md:text-3xl font-bold text-amber-700 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent font-serif">
              OUR COLLECTION
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Seeing is believing? So why not scroll through our gallery and
              take a look at what we have waiting here for you. See how you will
              see the sea from our balconies. See the cosy spaces ready to
              welcome you.
            </p>
          </motion.div>

          {/* Search and Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-amber-50 border-amber-200 text-gray-700 placeholder:text-gray-500 focus:border-amber-400"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30"
                          : "bg-amber-100 text-amber-700 hover:bg-amber-200 border border-amber-200"
                      }`}
                    >
                      <IconComponent className="h-4 w-4" />
                      {category.label}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          {/*<motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${getGridClass(
                    index
                  )} ${item.featured ? "ring-2 ring-amber-400/50" : ""}`}
                  onClick={() => setSelectedImage(item)}
                  whileHover={{ y: -8 }}
                >
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay *
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content *
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-amber-300 text-sm capitalize font-medium">
                        {item.category}
                      </span>
                      <div className="flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(item.id);
                          }}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <Heart
                            className={`h-4 w-4 ${
                              likedImages.has(item.id)
                                ? "fill-red-500 text-red-500"
                                : "text-white"
                            }`}
                          />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                        >
                          <Share2 className="h-4 w-4 text-white" />
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge *
                  {item.featured && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      Featured
                    </div>
                  )}
                </motion.div></section>
              ))}
            </AnimatePresence>
          </motion.div>*/}
          {/* Gallery Grid - Modified Section */}
<motion.div
  layout
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
>
  <AnimatePresence>
    {filteredItems.map((item, index) => (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 ${item.featured ? "ring-2 ring-amber-400/50" : ""}`}
        onClick={() => setSelectedImage(item)}
        whileHover={{ y: -8 }}
      >
        {/* Image Container with Fixed Aspect Ratio */}
        <div className="aspect-[4/3] w-full bg-gray-100">
          <Image
            src={item.src || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg mb-2">
            {item.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-amber-300 text-sm capitalize font-medium">
              {item.category}
            </span>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(item.id);
                }}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <Heart
                  className={`h-4 w-4 ${
                    likedImages.has(item.id)
                      ? "fill-red-500 text-red-500"
                      : "text-white"
                  }`}
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              >
                <Share2 className="h-4 w-4 text-white" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-semibold rounded-full shadow-lg">
            Featured
          </div>
        )}
      </motion.div>
    ))}
  </AnimatePresence>
</motion.div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🏝️</div>
              <h3 className="text-2xl font-semibold text-amber-700 mb-2">
                No images found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl"
              />

              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-amber-300 capitalize font-medium">
                    {selectedImage.category}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
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

