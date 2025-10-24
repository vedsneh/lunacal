"use client"

import { useState } from "react"

type TabType = "about" | "experiences" | "recommended"

interface TabContent {
  about: string
  experiences: string
  recommended: string
}

const tabContent: TabContent = {
  about:
    "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
  experiences:
    "Senior Sales Representative at Salesforce (2021-Present)\n\nLed multiple enterprise deals and managed key client relationships. Achieved 150% of quota in 2023.",
  recommended: "Check out these amazing resources and people in the industry that I recommend following!",
}

export default function ProfileWidget() {
  const [activeTab, setActiveTab] = useState<TabType>("about")

  return (
    <div
      className="w-full rounded-2xl"
      style={{
        backgroundColor: "#363c43",
        border: "1px solid #2a2f35",
        borderRadius: "20px",
        padding: "0px",
        minHeight: "auto",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Header with help icon and tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 pb-4 sm:pb-6">
        {/* Help icon */}
        <button className="flex-shrink-0 transition-colors" style={{ color: "#7a8a9a" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </button>

        {/* Tabs in pill-shaped container */}
        <div
          className="flex gap-1 sm:gap-2 p-2 sm:p-3 rounded-full flex-wrap sm:flex-nowrap"
          style={{
            backgroundColor: "#1a1a1a",
            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          <button
            onClick={() => setActiveTab("about")}
            className="px-4 sm:px-8 py-2 rounded-full font-medium transition-all text-xs sm:text-sm whitespace-nowrap"
            style={{
              backgroundColor: activeTab === "about" ? "#0f0f0f" : "transparent",
              color: activeTab === "about" ? "#ffffff" : "#8a9aaa",
              boxShadow: activeTab === "about" ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "none",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab("experiences")}
            className="px-4 sm:px-8 py-2 rounded-full font-medium transition-all text-xs sm:text-sm whitespace-nowrap"
            style={{
              backgroundColor: activeTab === "experiences" ? "#0f0f0f" : "transparent",
              color: activeTab === "experiences" ? "#ffffff" : "#8a9aaa",
              boxShadow: activeTab === "experiences" ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "none",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveTab("recommended")}
            className="px-4 sm:px-8 py-2 rounded-full font-medium transition-all text-xs sm:text-sm whitespace-nowrap"
            style={{
              backgroundColor: activeTab === "recommended" ? "#0f0f0f" : "transparent",
              color: activeTab === "recommended" ? "#ffffff" : "#8a9aaa",
              boxShadow: activeTab === "recommended" ? "0 4px 12px rgba(0, 0, 0, 0.3)" : "none",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Recommended
          </button>
        </div>
      </div>

      {/* Content area with scrollbar */}
      <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
        {/* Grid icon on left */}
        <div className="flex-shrink-0 pt-1" style={{ color: "#7a8a9a" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </div>

        {/* Content area */}
        <div
          className="flex-1 rounded-xl p-4 sm:p-6 max-h-40 sm:max-h-48 overflow-y-auto leading-relaxed text-xs sm:text-sm"
          style={{
            backgroundColor: "#2a2f35",
            color: "#b0b8c0",
            fontFamily: "Plus Jakarta Sans, sans-serif",
          }}
        >
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  )
}
