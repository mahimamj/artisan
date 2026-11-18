"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { QuoteModal } from "@/components/ui/quote-modal";
import { InstantEnquireModal } from "@/components/forms/instant-enquire-modal";
import { Sparkles, MessageSquare } from "lucide-react";

interface QuoteModalContextType {
  isOpen: boolean;
  selectedCategory: string;
  openQuoteModal: (category?: string) => void;
  closeQuoteModal: () => void;
  isEnquireOpen: boolean;
  openEnquireModal: () => void;
  closeEnquireModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  // Existing QuoteModal state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Pharma Labels");

  // Instant Form Enquiry Modal state
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);

  const openQuoteModal = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  const openEnquireModal = () => {
    setIsEnquireOpen(true);
  };

  const closeEnquireModal = () => {
    setIsEnquireOpen(false);
  };

  // 15-Second Automatic Pop-up Timer
  useEffect(() => {
    // Check if the user has already seen or closed the automatic pop-up during this session
    const alreadySeen = typeof window !== "undefined" && sessionStorage.getItem("artisan_enquire_popup_seen");
    if (alreadySeen) return;

    const timer = setTimeout(() => {
      // Trigger the enquiry modal after 15 seconds
      setIsEnquireOpen(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("artisan_enquire_popup_seen", "true");
      }
    }, 15000); // 15,000ms = 15 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        selectedCategory,
        openQuoteModal,
        closeQuoteModal,
        isEnquireOpen,
        openEnquireModal,
        closeEnquireModal,
      }}
    >
      {children}

      {/* Main Quote Modal */}
      <QuoteModal
        isOpen={isOpen}
        initialCategory={selectedCategory}
        onClose={closeQuoteModal}
      />

      {/* Instant Form Enquiry Modal (Triggered by Enquire Now & 15s Timer) */}
      <InstantEnquireModal
        isOpen={isEnquireOpen}
        onClose={closeEnquireModal}
      />

      {/* Floating Enquire Now Quick Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          type="button"
          onClick={openEnquireModal}
          className="group px-4 sm:px-5 py-3 rounded-full bg-[#81014d] hover:bg-[#6b0140] text-white shadow-2xl shadow-[#81014d]/40 font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 border border-white/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <Sparkles size={16} className="text-amber-300 animate-pulse" />
          <span>Enquire Now</span>
          <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium normal-case">
            Instant Quote
          </span>
        </button>
      </div>
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
