import ProfileWidget from "./components/ProfileWidget"
import GalleryWidget from "./components/GalleryWidget"

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left side - empty but responsive */}
        <div className="hidden lg:flex lg:w-1/2" style={{ backgroundColor: "#2a2a2a" }} />

        {/* Right side - widgets */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 overflow-y-auto" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="space-y-4 sm:space-y-6 max-w-full">
            <ProfileWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  )
}
