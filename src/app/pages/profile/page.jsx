"use client";
{/*import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUploadProfilePictureMutation,
 
} from "@/app/Redux/features/authApiSlice";
import { selectAuth } from "@/app/Redux/features/authSlice";
import {
  Loader2,
  User,
  Home,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { toast } from "react-hot-toast";

import PersonalInfo from "./PersonalComponents/PersonalInfo";
import ContactInfo from "./PersonalComponents/ContactInfo";
import ProfileHeader from "./PersonalComponents/ProfileHeader";
import ProfileSidebar from "./PersonalComponents/ProfileSidebar";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [currentSection, setCurrentSection] = useState("personal");
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, token } = useSelector(selectAuth);

  const {
    data: profile,
    isLoading,
    isError,
    refetch,
  } = useGetUserProfileQuery();
  const [updateProfile] = useUpdateUserProfileMutation();
  const [uploadProfilePicture] = useUploadProfilePictureMutation();
 

  const sections = [
    { id: "personal", label: "Personal Info", icon: <User size={18} /> },
    { id: "contact", label: "Contact Info", icon: <Home size={18} /> },
  
  ];
   

  useEffect(() => {
    if (profile) {
      setFormData(profile);
      setDisplayData(profile);
      if (profile.profilePic?.url) setPreviewImage(profile.profilePic.url);
    } else if (user && user.profilePic) {
      setFormData(user);
      setDisplayData(user);
      if (user.profilePic.url) setPreviewImage(user.profilePic.url);
    }
  }, [profile, user]);

  const validateFormData = () => {
    if (!formData) {
      setUpdateError("No form data available");
      return false;
    }
    if (!formData.fname || !formData.lname) {
      setUpdateError("First and last name are required");
      return false;
    }
    if (newPassword && newPassword.length < 6) {
      setUpdateError("Password must be at least 6 characters");
      return false;
    }
    setUpdateError(null);
    return true;
  };

  const handleEdit = () => {
    setIsEditing(true);
    setNewPassword("");
    setUpdateError(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData(displayData);
    setNewPassword("");
    setUpdateError(null);
    setPreviewImage(displayData?.profilePic?.url || null);
    setProfileImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (!prev) return prev;
      if (name.includes(".")) {
        const [section, field] = name.split(".");
        return {
          ...prev,
          [section]: {
            ...(prev[section] || {}),
            [field]: value,
          },
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleDateChange = (name, date) => {
    if (!date) return;
    setFormData((prev) => {
      if (!prev) return prev;
      if (name.includes(".")) {
        const [section, field] = name.split(".");
        return {
          ...prev,
          [section]: {
            ...(prev[section] || {}),
            [field]: date,
          },
        };
      }
      return { ...prev, [name]: date };
    });
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUpdateError(null);

    if (!validateFormData()) {
      setIsSubmitting(false);
      return;
    }

    if (!token || !formData) {
      setUpdateError("User is not authenticated or data is missing");
      setIsSubmitting(false);
      return;
    }

    try {
      let updatedProfilePic = formData.profilePic;
      if (profileImage) {
        try {
          const uploadResult = await uploadProfilePicture(
            profileImage
          ).unwrap();
          updatedProfilePic = uploadResult.profilePic;
          toast.success("Profile picture updated");
        } catch (uploadError) {
          console.error("Profile picture upload failed:", uploadError);
          toast.error("Failed to upload profile picture");
        }
      }

      const userUpdate = {
        ...formData,
        profilePic: updatedProfilePic,
        ...(newPassword ? { password: newPassword } : {}),
      };

      const result = await updateProfile(userUpdate).unwrap();
      setDisplayData(userUpdate);
      setIsEditing(false);
      setNewPassword("");
      setProfileImage(null);
      await refetch();
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Full error:", error);
      let errorMessage = "Failed to update profile";

      if (typeof error === "object" && error !== null) {
        if (error.data?.message) {
          errorMessage = error.data.message;
        } else if (error.data?.error) {
          errorMessage = error.data.error;
        } else if (error.error) {
          errorMessage = error.error;
        } else if (error.message) {
          errorMessage = error.message;
        }
      }

      setUpdateError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateSection = (direction) => {
    const currentIndex = sections.findIndex(
      (section) => section.id === currentSection
    );
    if (direction === "next" && currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1].id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-pax-gray-light">
        <Loader2 className="w-8 h-8 animate-spin text-pax-orange" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 bg-pax-gray-light h-screen flex items-center justify-center">
        Error loading profile. Please try again later.
      </div>
    );
  }

  const renderSection = () => {
    if (!formData) return null;

    switch (currentSection) {
      case "personal":
        return (
          <PersonalInfo
            formData={formData}
            isEditing={isEditing}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
            handleProfilePicChange={handleProfilePicChange}
            previewImage={previewImage}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
          />
        );
      case "contact":
        return (
          <ContactInfo
            formData={formData}
            isEditing={isEditing}
            handleChange={handleChange}
          />
        );
      
      
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-pax-gray-light p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <ProfileHeader
          displayData={displayData}
          isEditing={isEditing}
          isSubmitting={isSubmitting}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />

        <div className="flex flex-col md:flex-row">
          <ProfileSidebar
            sections={sections}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />

          <div className="flex-1 p-6">
            {updateError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {updateError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {renderSection()}

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => navigateSection("prev")}
                  className={`flex items-center gap-2 px-4 py-2 border border-pax-orange rounded-xl ${
                    currentSection === sections[0].id
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-pax-orange hover:bg-pax-orange/10"
                  }`}
                  disabled={currentSection === sections[0].id}
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>

                <button
                  type="button"
                  onClick={() => navigateSection("next")}
                  className={`flex items-center gap-2 px-4 py-2 border border-pax-orange rounded-xl ${
                    currentSection === sections[sections.length - 1].id
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-pax-orange hover:bg-pax-orange/10"
                  }`}
                  disabled={currentSection === sections[sections.length - 1].id}
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;*/}


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Loader2,
  User,
  Home,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { toast } from "react-hot-toast";

import PersonalInfo from "../../../components/PersonalComponents/PersonalInfo.jsx";
import ContactInfo from "../../../components/PersonalComponents/ContactInfo.jsx";
import ProfileHeader from "../../../components/PersonalComponents/ProfileHeader.jsx";
import ProfileSidebar from "../../../components/PersonalComponents/ProfileSidebar.jsx";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(null);
  const [displayData, setDisplayData] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [currentSection, setCurrentSection] = useState("personal");
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [updateError, setUpdateError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const sections = [
    { id: "personal", label: "Personal Info", icon: <User size={18} /> },
    { id: "contact", label: "Contact Info", icon: <Home size={18} /> },
  ];

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get("/api/profile", {
        headers: { Authorization: Bearer `${token}` },
      });
      const profile = res.data;
      setFormData(profile);
      setDisplayData(profile);
      if (profile.profilePic?.url) setPreviewImage(profile.profilePic.url);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading profile:", error);
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const validateFormData = () => {
    if (!formData) {
      setUpdateError("No form data available");
      return false;
    }
    if (!formData.fname || !formData.lname) {
      setUpdateError("First and last name are required");
      return false;
    }
    if (newPassword && newPassword.length < 6) {
      setUpdateError("Password must be at least 6 characters");
      return false;
    }
    setUpdateError(null);
    return true;
  };

  const handleEdit = () => {
    setIsEditing(true);
    setNewPassword("");
    setUpdateError(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
      // If the new password is being set but is invalid,
      // set the updateError state to an error message.
    setFormData(displayData);
    setNewPassword("");
    setUpdateError(null);

    // If all checks pass, set the updateError state to null
    // and return true.
    if (displayData?.profilePic?.url) {
      setPreviewImage(displayData.profilePic.url);
    } else {
      setPreviewImage(null);
    }
    setProfileImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (!prev) return prev;
      if (name.includes(".")) {
        const [section, field] = name.split(".");
        return {
          ...prev,
          [section]: {
            ...(prev[section] || {}),
            [field]: value,
          },
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleDateChange = (name, date) => {
    if (!date) return;
    setFormData((prev) => {
      if (!prev) return prev;
      if (name.includes(".")) {
        const [section, field] = name.split(".");
        return {
          ...prev,
          [section]: {
            ...(prev[section] || {}),
            [field]: date,
          },
        };
      }
      return { ...prev, [name]: date };
    });
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setUpdateError(null);

    if (!validateFormData()) {
      setIsSubmitting(false);
      return;
    }

    if (!token || !formData) {
      setUpdateError("User is not authenticated or data is missing");
      setIsSubmitting(false);
      return;
    }

    try {
      let updatedProfilePic = formData.profilePic;

      if (profileImage) {
        const picForm = new FormData();
        picForm.append("profilePic", profileImage);

        try {
          const uploadRes = await axios.post("/api/upload-profile-pic", picForm, {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: Bearer `${token}`,
            },
          });
          updatedProfilePic = uploadRes.data.profilePic;
          toast.success("Profile picture updated");
        } catch (uploadErr) {
          console.error("Upload failed:", uploadErr);
          toast.error("Failed to upload profile picture");
        }
      }

      const userUpdate = {
        ...formData,
        profilePic: updatedProfilePic,
        ...(newPassword ? { password: newPassword } : {}),
      };

      await axios.put("/api/profile", userUpdate, {
        headers: { Authorization: Bearer `${token}`},
      });

      setDisplayData(userUpdate);
      setIsEditing(false);
      setNewPassword("");
      setProfileImage(null);
      toast.success("Profile updated successfully");
    } catch (err) {
      console.error("Update error:", err);
      let errorMessage = "Failed to update profile";
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
      setUpdateError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigateSection = (direction) => {
    const currentIndex = sections.findIndex((section) => section.id === currentSection);
    if (direction === "next" && currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1].id);
    } else if (direction === "prev" && currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1].id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-pax-gray-light">
        <Loader2 className="w-8 h-8 animate-spin text-pax-orange" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 bg-pax-gray-light h-screen flex items-center justify-center">
        Error loading profile. Please try again later.
      </div>
    );
  }

  const renderSection = () => {
    if (!formData) return null;

    switch (currentSection) {
      case "personal":
        return (
          <PersonalInfo
            formData={formData}
            isEditing={isEditing}
            handleChange={handleChange}
            handleDateChange={handleDateChange}
            handleProfilePicChange={handleProfilePicChange}
            previewImage={previewImage}
            newPassword={newPassword}
            setNewPassword={setNewPassword}
          />
        );
      case "contact":
        return (
          <ContactInfo
            formData={formData}
            isEditing={isEditing}
            handleChange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-pax-gray-light p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <ProfileHeader
          displayData={displayData}
          isEditing={isEditing}
          isSubmitting={isSubmitting}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
        <div className="flex flex-col md:flex-row">
          <ProfileSidebar
            sections={sections}
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
          />
          <div className="flex-1 p-6">
            {updateError && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                {updateError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderSection()}
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => navigateSection("prev")}
                  className={`flex items-center gap-2 px-4 py-2 border border-pax-orange rounded-xl ${
                    currentSection === sections[0].id
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-pax-orange hover:bg-pax-orange/10"
                  }`}
                  disabled={currentSection === sections[0].id}
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => navigateSection("next")}
                  className={`flex items-center gap-2 px-4 py-2 border border-pax-orange rounded-xl ${
                    currentSection === sections[sections.length - 1].id
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-pax-orange hover:bg-pax-orange/10"
                  }`}
                  disabled={currentSection === sections[sections.length - 1].id}
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

