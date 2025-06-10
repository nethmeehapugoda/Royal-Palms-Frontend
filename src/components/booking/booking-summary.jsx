"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Check } from "lucide-react";

export default function BookingSummary({ room, category, bookingData }) {
  const [nights, setNights] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (bookingData.checkInDate && bookingData.checkOutDate) {
      const checkIn = new Date(bookingData.checkInDate);
      const checkOut = new Date(bookingData.checkOutDate);

      // Calculate number of nights
      const diffTime = Math.abs(checkOut - checkIn);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      setNights(diffDays || 1);

      // Calculate total price
      const price = category?.price || 0;
      setTotalPrice(price * diffDays);
    }
  }, [bookingData.checkInDate, bookingData.checkOutDate, category]);

  if (!room) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg border-0 sticky top-4">
        <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
          <CardTitle>Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Room Details */}
            <div>
              <h3 className="font-semibold text-lg text-amber-700 mb-2">
                {category?.name || "Standard Room"}
              </h3>
              <Badge variant="outline" className="mb-2">
                Room {room.roomNumber}
              </Badge>
              <div className="text-sm text-gray-600">
                {room.description ||
                  "Comfortable accommodation with essential amenities."}
              </div>
            </div>

            {/* Booking Details */}
            <div className="space-y-3 border-t border-b border-gray-100 py-4">
              {/* Check-in */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Check-in:</span>
                </div>
                <span className="font-medium">
                  {bookingData.checkInDate
                    ? new Date(bookingData.checkInDate).toLocaleDateString()
                    : "Not selected"}
                </span>
              </div>

              {/* Check-out */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Check-out:</span>
                </div>
                <span className="font-medium">
                  {bookingData.checkOutDate
                    ? new Date(bookingData.checkOutDate).toLocaleDateString()
                    : "Not selected"}
                </span>
              </div>

              {/* Nights */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <span>Duration:</span>
                </div>
                <span className="font-medium">
                  {nights} night{nights !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Guests */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-4 h-4 text-amber-600" />
                  <span>Guests:</span>
                </div>
                <span className="font-medium">
                  {bookingData.numberOfAdults} Adult
                  {bookingData.numberOfAdults !== 1 ? "s" : ""},{" "}
                  {bookingData.numberOfChildren} Child
                  {bookingData.numberOfChildren !== 1 ? "ren" : ""}
                </span>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-gray-700">
                <span>Room Rate:</span>
                <span>
                  LKR {category?.price?.toLocaleString() || "0"} / night
                </span>
              </div>

              <div className="flex items-center justify-between text-gray-700">
                <span>
                  {nights} night{nights !== 1 ? "s" : ""}:
                </span>
                <span>
                  LKR {(category?.price * nights).toLocaleString() || "0"}
                </span>
              </div>

              <div className="flex items-center justify-between text-gray-700">
                <span>Taxes & Fees:</span>
                <span>LKR {Math.round(totalPrice * 0.1).toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between font-bold text-lg text-amber-800 pt-2 border-t">
                <span>Total:</span>
                <span>LKR {Math.round(totalPrice * 1.1).toLocaleString()}</span>
              </div>
            </div>

            {/* Booking Guarantees */}
            <div className="bg-green-50 p-3 rounded-lg">
              <h4 className="font-medium text-green-800 flex items-center gap-1 mb-2">
                <Check className="w-4 h-4" />
                Booking Guarantees
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li className="flex items-center gap-1">
                  <Check className="w-3 h-3 flex-shrink-0" />
                  Free cancellation up to 24 hours before check-in
                </li>
                <li className="flex items-center gap-1">
                  <Check className="w-3 h-3 flex-shrink-0" />
                  Best price guarantee
                </li>
                <li className="flex items-center gap-1">
                  <Check className="w-3 h-3 flex-shrink-0" />
                  Secure payment processing
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
