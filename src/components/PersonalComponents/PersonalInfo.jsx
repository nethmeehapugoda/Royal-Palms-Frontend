import React from "react";
import { User, Camera } from "lucide-react";
import Image from "next/image";

export default function PersonalInfo({
  formData,
  isEditing,
  handleChange,
  handleDateChange,
  handleProfilePicChange,
  previewImage,
  newPassword,
  setNewPassword,
}) {
  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#F39200] border-b border-[#F5F5F5] pb-2">
        Personal Information
      </h2>

      {/* Profile Picture Section */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-[#F5F5F5] border-2 border-[#E0E0E0]">
            {previewImage ? (
              <Image
                src={previewImage}
                alt="Profile Picture"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <User size={64} className="text-[#F39200]" />
              </div>
            )}
          </div>

          {isEditing && (
            <label
              htmlFor="profile-pic"
              className="absolute bottom-0 right-0 bg-[#F39200] rounded-full p-2 cursor-pointer hover:bg-[#F39200] transition-colors duration-300"
            >
              <Camera size={18} className="text-white" />
              <input
                type="file"
                id="profile-pic"
                className="hidden"
                accept="image/*"
                onChange={handleProfilePicChange}
              />
            </label>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-[#F39200]">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData?.name || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-[#F39200]">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData?.email || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        {/* First Name */}
        <div className="space-y-2">
          <label htmlFor="fname" className="block text-sm font-medium text-[#F39200]">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={formData?.fname || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label htmlFor="lname" className="block text-sm font-medium text-[#F39200]">
            Last Name
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={formData?.lname || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-[#F39200]">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData?.fullName || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        {/* DOB */}
        <div className="space-y-2">
          <label htmlFor="dob" className="block text-sm font-medium text-[#F39200]">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formatDate(formData?.dob)}
            onChange={(e) =>
              handleDateChange("dob", e.target.value ? new Date(e.target.value) : null)
            }
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label htmlFor="gender" className="block text-sm font-medium text-[#F39200]">
            Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={formData?.gender || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Role */}
        <div className="space-y-2">
          <label htmlFor="role" className="block text-sm font-medium text-[#F39200]">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            readOnly
            value={formData?.role || ""}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>
      </div>

      {isEditing && (
        <div className="space-y-2 mt-6">
          <label htmlFor="password" className="block text-sm font-medium text-[#F39200]">
            New Password (optional)
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={newPassword}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2.5 rounded-xl border border-[#E0E0E0] focus:border-[#F39200] focus:ring-2 focus:ring-[#F5F5F5] bg-white transition-all duration-300"
          />
        </div>
      )}
    </div>
  );
};

