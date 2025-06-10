import React from "react";
import { Edit, Save, X, Loader2 } from "lucide-react";

export default function ProfileHeader({
  displayData,
  isEditing,
  isSubmitting,
  handleEdit,
  handleCancel,
  handleSubmit,
}) {
  return (
    <div className="bg-pax-yellow-light p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-pax-orange">
            Profile Settings
          </h1>
          <p className="text-pax-blue mt-1">
            {displayData?.role} • {displayData?.verified}
          </p>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-white px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-pax-orange/10 transition-all duration-300 shadow-sm"
          >
            <Edit size={18} className="text-pax-orange" />
            <span className="text-pax-orange">Edit Profile</span>
          </button>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="bg-pax-orange text-white px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-pax-orange/90 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" size={18} />
              ) : (
                <Save size={18} />
              )}
              <span>Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="bg-white text-pax-orange px-6 py-2.5 rounded-xl flex items-center gap-2 hover:bg-pax-orange/10 transition-all duration-300"
            >
              <X size={18} />
              <span>Cancel</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

