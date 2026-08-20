"use client";

import React, { createContext, useContext, useState } from "react";
import { QuoteModal } from "@/components/ui/quote-modal";

interface QuoteModalContextType {
  isOpen: boolean;
  selectedCategory: string;
  openQuoteModal: (category?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Pharma Labels");

  const openQuoteModal = (category?: string) => {
    if (category) {
      setSelectedCategory(category);
    }
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
  };

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, selectedCategory, openQuoteModal, closeQuoteModal }}
    >
      {children}
      <QuoteModal
        isOpen={isOpen}
        initialCategory={selectedCategory}
        onClose={closeQuoteModal}
      />
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
