import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

function AppLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-secondary-100">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <Header
          isMobile={true}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 sm:w-64 bg-secondary-0 z-50 transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-3 border-b border-secondary-200 flex justify-between items-center">
            <span className="font-semibold text-secondary-900">منو</span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-secondary-600 hover:text-secondary-900 p-1 rounded"
            >
              ✕
            </button>
          </div>
          {children}
        </div>

        {/* Mobile Content */}
        <div className="p-3 sm:p-4 md:p-6">
          <div className="max-w-screen-xl mx-auto">
            <Outlet />
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-[15rem_1fr] lg:h-screen">
        <Header />
        {children}
        <div className="bg-secondary-100 p-8 overflow-y-auto">
          <div className="max-w-screen-lg mx-auto flex flex-col gap-y-12">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
