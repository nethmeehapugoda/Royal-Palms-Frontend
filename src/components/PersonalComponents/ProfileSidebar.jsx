import React from "react";

export default function ProfileSidebar({
  sections,
  currentSection,
  setCurrentSection,
}) {
  return (
    <div className="w-full md:w-64 bg-pax-gray-light p-4 border-r border-pax-gray-medium">
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setCurrentSection(section.id)}
            className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 ${
              currentSection === section.id
                ? "bg-pax-orange text-white"
                : "text-pax-gray-dark hover:bg-pax-orange/10"
            }`}
          >
            <span className="mr-3">{section.icon}</span>
            <span className="font-medium">{section.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

