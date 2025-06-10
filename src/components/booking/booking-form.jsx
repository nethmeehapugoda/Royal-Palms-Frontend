"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Users,
  CreditCard,
  User,
  MapPin,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function BookingForm({
  selectedRoom,
  bookingData,
  onBookingDataChange,
  onBillingChange,
  onBack,
  onSubmit,
}) {
  const [activeTab, setActiveTab] = useState("dates");

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    onBookingDataChange({ [name]: value });
  };

  const handleGuestsChange = (name, value) => {
    onBookingDataChange({ [name]: Number.parseInt(value) });
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    onBillingChange({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleNextTab = () => {
    if (activeTab === "dates") setActiveTab("personal");
    else if (activeTab === "personal") setActiveTab("payment");
  };

  const handlePrevTab = () => {
    if (activeTab === "payment") setActiveTab("personal");
    else if (activeTab === "personal") setActiveTab("dates");
    else onBack();
  };

  return (
    <Card className="shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-t-lg">
        <CardTitle className="text-2xl">Complete Your Booking</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger
              value="dates"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Dates & Guests
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <User className="w-4 h-4 mr-2" />
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-800"
            >
              <CreditCard className="w-4 h-4 mr-2" />
              Payment
            </TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="dates" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="checkInDate"
                      className="text-lg font-medium flex items-center gap-2"
                    >
                      <Calendar className="w-5 h-5 text-amber-600" />
                      Check-in Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="checkInDate"
                      name="checkInDate"
                      type="date"
                      value={bookingData.checkInDate}
                      onChange={handleDateChange}
                      required
                      className="mt-2 h-12"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="checkOutDate"
                      className="text-lg font-medium flex items-center gap-2"
                    >
                      <Calendar className="w-5 h-5 text-amber-600" />
                      Check-out Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="checkOutDate"
                      name="checkOutDate"
                      type="date"
                      value={bookingData.checkOutDate}
                      onChange={handleDateChange}
                      required
                      className="mt-2 h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="adults"
                      className="text-lg font-medium flex items-center gap-2"
                    >
                      <Users className="w-5 h-5 text-amber-600" />
                      Adults <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={bookingData.numberOfAdults.toString()}
                      onValueChange={(value) =>
                        handleGuestsChange("numberOfAdults", value)
                      }
                    >
                      <SelectTrigger id="adults" className="mt-2 h-12">
                        <SelectValue placeholder="Select number of adults" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Adult{num > 1 ? "s" : ""}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label
                      htmlFor="children"
                      className="text-lg font-medium flex items-center gap-2"
                    >
                      <Users className="w-5 h-5 text-amber-600" />
                      Children
                    </Label>
                    <Select
                      value={bookingData.numberOfChildren.toString()}
                      onValueChange={(value) =>
                        handleGuestsChange("numberOfChildren", value)
                      }
                    >
                      <SelectTrigger id="children" className="mt-2 h-12">
                        <SelectValue placeholder="Select number of children" />
                      </SelectTrigger>
                      <SelectContent>
                        {[0, 1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Child" : "Children"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevTab}
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Rooms
                  </Button>

                  <Button
                    type="button"
                    onClick={handleNextTab}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="personal" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="text-lg font-medium flex items-center gap-2"
                    >
                      <User className="w-5 h-5 text-amber-600" />
                      Full Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={bookingData.billing.fullName}
                      onChange={handleBillingChange}
                      required
                      className="mt-2 h-12"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-lg font-medium flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5 text-amber-600" />
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={bookingData.billing.email}
                      onChange={handleBillingChange}
                      required
                      className="mt-2 h-12"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="address"
                    className="text-lg font-medium flex items-center gap-2"
                  >
                    <MapPin className="w-5 h-5 text-amber-600" />
                    Address <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="address"
                    name="address"
                    value={bookingData.billing.address}
                    onChange={handleBillingChange}
                    required
                    className="mt-2 h-12"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <Label htmlFor="city" className="text-lg font-medium">
                      City <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={bookingData.billing.city}
                      onChange={handleBillingChange}
                      required
                      className="mt-2 h-12"
                      placeholder="Enter your city"
                    />
                  </div>

                  <div>
                    <Label htmlFor="state" className="text-lg font-medium">
                      State <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={bookingData.billing.state}
                      onChange={handleBillingChange}
                      required
                      className="mt-2 h-12"
                      placeholder="Enter your state"
                    />
                  </div>

                  <div>
                    <Label htmlFor="zip" className="text-lg font-medium">
                      ZIP Code <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="zip"
                      name="zip"
                      value={bookingData.billing.zip}
                      onChange={handleBillingChange}
                      required
                      className="mt-2 h-12"
                      placeholder="Enter your ZIP code"
                    />
                  </div>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevTab}
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Dates
                  </Button>

                  <Button
                    type="button"
                    onClick={handleNextTab}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                  >
                    Continue to Payment
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="payment" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div>
                  <Label
                    htmlFor="cardNumber"
                    className="text-lg font-medium flex items-center gap-2"
                  >
                    <CreditCard className="w-5 h-5 text-amber-600" />
                    Card Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="cardNumber"
                    name="cardNumber"
                    value={bookingData.billing.cardNumber}
                    onChange={handleBillingChange}
                    required
                    className="mt-2 h-12"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="expiry" className="text-lg font-medium">
                      Expiry Date <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="expiry"
                      name="expiry"
                      placeholder="MM/YY"
                      className="mt-2 h-12"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="cvv" className="text-lg font-medium">
                      CVV <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="cvv"
                      name="cvv"
                      type="password"
                      placeholder="123"
                      className="mt-2 h-12"
                      required
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <p className="text-amber-800">
                    By completing this booking, you agree to our terms and
                    conditions. Your card will be charged upon confirmation.
                  </p>
                </div>

                <div className="flex justify-between pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevTab}
                    className="border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back to Personal Info
                  </Button>

                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    Complete Booking
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          </form>
        </Tabs>
      </CardContent>
    </Card>
  );
}
