import React from "react";

export default function ContactInfo({
  formData,
  isEditing,
  handleChange,
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#F39200] border-b border-[#F5F5F5] pb-2">
        Contact Information
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-[#F39200]">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData?.phone || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#F5F5F5] focus:border-[#00A0D2] focus:ring-2 focus:ring-[#00A0D2] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="ownContact" className="block text-sm font-medium text-[#F39200]">
            Personal Contact
          </label>
          <input
            type="tel"
            id="ownContact"
            name="ownContact"
            value={formData?.ownContact || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#F5F5F5] focus:border-[#00A0D2] focus:ring-2 focus:ring-[#00A0D2] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="emgencyContact" className="block text-sm font-medium text-[#F39200]">
            Emergency Contact
          </label>
          <input
            type="tel"
            id="emgencyContact"
            name="emgencyContact"
            value={formData?.emgencyContact || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#F5F5F5] focus:border-[#00A0D2] focus:ring-2 focus:ring-[#00A0D2] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nic" className="block text-sm font-medium text-[#F39200]">
            National ID (NIC)
          </label>
          <input
            type="text"
            id="nic"
            name="nic"
            value={formData?.nic || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#F5F5F5] focus:border-[#00A0D2] focus:ring-2 focus:ring-[#00A0D2] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="passport" className="block text-sm font-medium text-[#F39200]">
            Passport Number
          </label>
          <input
            type="text"
            id="passport"
            name="passport"
            value={formData?.passport || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full px-4 py-2.5 rounded-xl border border-[#F5F5F5] focus:border-[#00A0D2] focus:ring-2 focus:ring-[#00A0D2] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="address" className="block text-sm font-medium text-[#F39200]">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData?.address || ""}
          onChange={handleChange}
          disabled={!isEditing}
          rows={3}
          className="w-full px-4 py-2.5 rounded-xl border border-[#F5F5F5] focus:border-[#00A0D2] focus:ring-2 focus:ring-[#00A0D2] bg-white disabled:bg-[#FFFDF0] transition-all duration-300"
        />
      </div>
    </div>
  );
};

