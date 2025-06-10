"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Bed,
  Star,
  Wifi,
  Tv,
  Coffee,
  Bath,
  Wind,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export default function RoomSelection({
  rooms: initialRooms,
  categories: initialCategories,
  onSelectRoom,
}) {
  const [rooms, setRooms] = useState(initialRooms || []);
  const [categories, setCategories] = useState(initialCategories || []);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter();

  const [filters, setFilters] = useState({
    category: "all", // Updated default value to "all"
    minPrice: "",
    maxPrice: "",
    status: "available",
  });

  useEffect(() => {
    // Check authentication
    if (!user) {
      setTimeout(() => {
        router.push("/pages/auth");
      }, 1500);
      return;
    }

    // Fetch rooms and categories
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // Updated API endpoint to match your backend
        const roomsResponse = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"
          }/room`
        );

        if (!roomsResponse.ok) {
          throw new Error("Failed to fetch rooms");
        }

        const roomsData = await roomsResponse.json();

        // Extract unique categories from rooms
        const uniqueCategories = roomsData
          .map((room) => room.category)
          .filter(
            (category, index, self) =>
              category &&
              self.findIndex((c) => c._id === category._id) === index
          );

        setRooms(roomsData);
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
        // You might want to show an error message to the user
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, router]);

  // Filter rooms based on criteria
  const filteredRooms = rooms.filter((room) => {
    // Only show available rooms
    if (room.status !== "available") return false;

    // Filter by category if selected
    if (filters.category !== "all" && room.category?._id !== filters.category)
      return false;

    // Filter by price range if set
    const price = room.category?.price || 0;
    if (filters.minPrice && price < Number.parseInt(filters.minPrice))
      return false;
    if (filters.maxPrice && price > Number.parseInt(filters.maxPrice))
      return false;

    return true;
  });

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Get room features based on category
  const getRoomFeatures = (room) => {
    const category = room.category?.name?.toLowerCase() || "";

    const features = [
      { icon: Bed, label: "Comfortable bed" },
      { icon: Wifi, label: "Free Wi-Fi" },
    ];

    if (category.includes("deluxe")) {
      features.push(
        { icon: Bath, label: "Private Jacuzzi" },
        { icon: Coffee, label: "Mini bar" },
        { icon: Tv, label: "Smart TV" }
      );
    } else if (category.includes("premium")) {
      features.push(
        { icon: Coffee, label: "Coffee maker" },
        { icon: Tv, label: "Smart TV" }
      );
    } else if (category.includes("a/c") || category.includes("ac")) {
      features.push({ icon: Wind, label: "Air conditioning" });
    }

    return features;
  };

  // Get gradient colors based on category
  const getCategoryStyle = (room) => {
    const category = room.category?.name?.toLowerCase() || "";

    if (category.includes("deluxe")) {
      return {
        gradient: "from-amber-500 to-orange-500",
        bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      };
    } else if (category.includes("premium")) {
      return {
        gradient: "from-blue-500 to-cyan-500",
        bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      };
    } else if (category.includes("a/c") || category.includes("ac")) {
      return {
        gradient: "from-green-500 to-emerald-500",
        bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      };
    } else {
      return {
        gradient: "from-purple-500 to-pink-500",
        bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
      };
    }
  };

  return (
    <div>
      {/* Filters */}
      <Card className="mb-8 shadow-lg border-0">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="category">Room Category</Label>
              <Select
                value={filters.category}
                onValueChange={(value) => handleFilterChange("category", value)}
              >
                <SelectTrigger id="category">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>{" "}
                  {/* Updated value prop */}
                  {categories.map((category) => (
                    <SelectItem key={category._id} value={category._id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="minPrice">Min Price</Label>
              <Input
                id="minPrice"
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="maxPrice">Max Price</Label>
              <Input
                id="maxPrice"
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
              />
            </div>

            <div className="flex items-end">
              <Button className="w-full bg-amber-600 hover:bg-amber-700">
                <Search className="mr-2 h-4 w-4" />
                Filter Rooms
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Room List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => {
            const { gradient, bgColor } = getCategoryStyle(room);
            const features = getRoomFeatures(room);
            const isPopular = room.category?.name
              ?.toLowerCase()
              .includes("deluxe");

            return (
              <motion.div
                key={room._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card
                  className={`h-full border-0 shadow-lg hover:shadow-xl transition-all ${bgColor}`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Room Image */}
                    <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                      {room.images && room.images.length > 0 ? (
                        <Image
                          src={room.images[0] || "/placeholder.svg"}
                          alt={`Room ${room.roomNumber}`}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src="/placeholder.svg?height=200&width=400"
                          alt={`Room ${room.roomNumber}`}
                          fill
                          className="object-cover"
                        />
                      )}

                      {/* Popular Badge */}
                      {isPopular && (
                        <Badge className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}

                      {/* Room Number Badge */}
                      <Badge className="absolute bottom-2 left-2 bg-black/70 text-white">
                        Room {room.roomNumber}
                      </Badge>
                    </div>

                    {/* Room Details */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-amber-700 mb-2">
                        {room.category?.name || "Standard Room"}
                      </h3>

                      <div className="space-y-3 mb-4">
                        {/* Features */}
                        {features.map((feature, i) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <div
                                className={`p-1 rounded bg-gradient-to-r ${gradient}`}
                              >
                                <FeatureIcon className="w-3 h-3 text-white" />
                              </div>
                              <span>{feature.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Price */}
                      <div className="mb-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-amber-700">
                            LKR{" "}
                            {room.category?.price?.toLocaleString() || "N/A"}
                          </span>
                          <span className="text-gray-500 text-sm">/ night</span>
                        </div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <Button
                      onClick={() => onSelectRoom(room, room.category)}
                      className={`w-full bg-gradient-to-r ${gradient} hover:opacity-90 text-white font-semibold`}
                    >
                      Select Room
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <h3 className="text-xl font-medium text-gray-600">
              No rooms available matching your criteria
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your filters or check back later
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
