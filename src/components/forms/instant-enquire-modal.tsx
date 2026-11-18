"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  X,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  User,
  Box,
  Layers,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LABEL_TYPES = [
  "Pharmaceutical labels",
  "FMCG product labels",
  "Cosmetics and personal care labels",
  "Food and beverage labels",
  "Industrial labels",
  "Other",
];

const QUANTITY_OPTIONS = [
  "Below 5,000 labels",
  "5,000–10,000 labels",
  "10,001–25,000 labels",
  "25,001–50,000 labels",
  "Above 50,000 labels",
];

const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 30 days",
  "Within 1–3 months",
  "Just exploring options",
];

interface InstantEnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InstantEnquireModal({ isOpen, onClose }: InstantEnquireModalProps) {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form states
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");

  const [labelType, setLabelType] = useState<string>("Pharmaceutical labels");
  const [otherLabelType, setOtherLabelType] = useState("");
  const [quantity, setQuantity] = useState<string>("10,001–25,000 labels");
  const [timeline, setTimeline] = useState<string>("Within 30 days");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Business WhatsApp destination
  const businessPhone = "919825744787";

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const validateStep1 = () => {
    const err: Record<string, string> = {};
    if (!fullName.trim()) err.fullName = "Full name is required";
    if (!workEmail.trim()) {
      err.workEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail)) {
      err.workEmail = "Please enter a valid work email address";
    }
    if (!phoneNumber.trim()) {
      err.phoneNumber = "Phone number is required";
    } else if (phoneNumber.replace(/\D/g, "").length < 8) {
      err.phoneNumber = "Please enter a valid phone number (at least 8 digits)";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const selectedType =
        labelType === "Other" && otherLabelType.trim() ? `Other (${otherLabelType})` : labelType;

      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          workEmail,
          phoneNumber,
          website,
          labelType: selectedType,
          quantity,
          timeline,
          source: "Enquire Now Pop-up Modal",
        }),
      });
    } catch (err) {
      console.error("Error submitting enquiry:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setCurrentStep(4);
    }
  };

  const handleResetAndClose = () => {
    onClose();
  };

  // WhatsApp formatted link
  const selectedTypeLabel =
    labelType === "Other" && otherLabelType.trim() ? `Other (${otherLabelType})` : labelType;
  const whatsappMessage = `*NEW ENQUIRY - ARTISAN VENTURES*
───────────────────────
👤 *CONTACT DETAILS:*
• Name: ${fullName}
• Work Email: ${workEmail}
• Phone: ${phoneNumber}
${website.trim() ? `• Website: ${website}\n` : ""}
🏷️ *QUALIFICATION SPECIFICATIONS:*
• Label Type: ${selectedTypeLabel}
• Order Quantity: ${quantity}
• Need By: ${timeline}
───────────────────────
Please share specifications, samples and quotation.`;

  const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white border border-[#cccccc] rounded-[24px] sm:rounded-[28px] shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col z-10"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#e6e6e6] bg-[#f8f8f6] flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-full bg-[#81014d]/10 flex items-center justify-center text-[#81014d]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-[#1c1c1e] tracking-tight">
                    Enquire Now &bull; Custom Label Quotation
                  </h2>
                  <p className="text-[11px] sm:text-xs text-[#5f6368]">
                    Artisan Ventures Private Limited &bull; 24h Response
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close enquiry modal"
                className="h-8 w-8 rounded-full bg-white border border-[#cccccc] flex items-center justify-center text-[#5f6368] hover:text-[#1c1c1e] hover:bg-black/5 transition-colors focus:outline-none"
              >
                <X size={16} />
              </button>
            </div>

            {/* Stepper Indicator */}
            {!submitted && (
              <div className="px-6 py-2.5 bg-white border-b border-[#f0f0f0] flex items-center justify-center gap-3 text-[11px] font-semibold text-[#5f6368]">
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${
                    currentStep === 1
                      ? "bg-[#81014d] text-white"
                      : "bg-[#f8f8f6] text-[#5f6368] border border-[#e6e6e6]"
                  }`}
                >
                  <span className="flex h-4 w-4 rounded-full bg-white/20 text-[10px] items-center justify-center font-bold">
                    1
                  </span>
                  <span>Contact Information</span>
                </div>
                <div className="w-4 h-[1px] bg-[#cccccc]" />
                <div
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${
                    currentStep === 2
                      ? "bg-[#81014d] text-white"
                      : "bg-[#f8f8f6] text-[#5f6368] border border-[#e6e6e6]"
                  }`}
                >
                  <span className="flex h-4 w-4 rounded-full bg-white/20 text-[10px] items-center justify-center font-bold">
                    2
                  </span>
                  <span>Qualification Questions</span>
                </div>
              </div>
            )}

            {/* Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              {/* STEP 1: CONTACT INFORMATION */}
              {!submitted && currentStep === 1 && (
                <form onSubmit={handleNext} className="space-y-4">
                  {/* Notice Box */}
                  <div className="p-3.5 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] text-xs text-[#5f6368] leading-relaxed">
                    <p className="font-semibold text-[#1c1c1e] mb-1 flex items-center gap-1">
                      <ShieldCheck size={14} className="text-[#81014d]" />
                      Data Usage Notice
                    </p>
                    We will use your information to contact you regarding your label manufacturing requirements, discuss specifications and order quantities, and provide a quotation. Your information will be handled according to our{" "}
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      className="text-[#81014d] font-semibold underline hover:text-[#a20160]"
                    >
                      privacy policy
                    </Link>
                    .
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="modal-fullName"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="modal-fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="h-10 rounded-xl text-xs sm:text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label
                      htmlFor="modal-workEmail"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1"
                    >
                      Work Email * <span className="text-[10px] font-normal text-[#5f6368]">(Verified Business Email)</span>
                    </label>
                    <Input
                      id="modal-workEmail"
                      type="email"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="h-10 rounded-xl text-xs sm:text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                    {errors.workEmail && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.workEmail}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="modal-phoneNumber"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1"
                    >
                      Phone Number * <span className="text-[10px] font-normal text-[#5f6368]">(Mobile / WhatsApp)</span>
                    </label>
                    <Input
                      id="modal-phoneNumber"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="h-10 rounded-xl text-xs sm:text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>

                  {/* Website (Optional) */}
                  <div>
                    <label
                      htmlFor="modal-website"
                      className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1"
                    >
                      Website <span className="text-[10px] font-normal text-[#5f6368]">(Optional)</span>
                    </label>
                    <Input
                      id="modal-website"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="h-10 rounded-xl text-xs sm:text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-[#e6e6e6] flex items-center justify-between">
                    <span className="text-[11px] text-[#5f6368] flex items-center gap-1">
                      <ShieldCheck size={13} className="text-[#81014d]" />
                      Strictly Confidential
                    </span>
                    <Button
                      type="submit"
                      className="bg-[#81014d] hover:bg-[#6b0140] text-white font-bold uppercase tracking-wider text-xs h-10 px-5 rounded-xl flex items-center gap-1.5"
                    >
                      <span>Next: Questions</span>
                      <ArrowRight size={14} />
                    </Button>
                  </div>
                </form>
              )}

              {/* STEP 2: QUALIFICATION QUESTIONS */}
              {!submitted && currentStep === 2 && (
                <div className="space-y-5">
                  {/* Question 1 */}
                  <div className="space-y-2">
                    <label className="block text-xs sm:text-sm font-bold text-[#1c1c1e] flex items-center gap-1.5">
                      <Layers size={14} className="text-[#81014d]" />
                      Question 1: What type of labels does your business require?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {LABEL_TYPES.map((type) => {
                        const isSelected = labelType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setLabelType(type)}
                            className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center justify-between transition-all ${
                              isSelected
                                ? "bg-[#81014d]/10 border-[#81014d] text-[#81014d] font-bold shadow-xs"
                                : "bg-[#f8f8f6] border-[#e6e6e6] text-[#3d4045] hover:border-[#81014d]/40"
                            }`}
                          >
                            <span>{type}</span>
                            {isSelected && (
                              <CheckCircle2 size={14} className="text-[#81014d] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                    {labelType === "Other" && (
                      <Input
                        value={otherLabelType}
                        onChange={(e) => setOtherLabelType(e.target.value)}
                        placeholder="Please specify label type..."
                        className="mt-1 h-9 rounded-xl text-xs border-[#cccccc]"
                      />
                    )}
                  </div>

                  {/* Question 2 */}
                  <div className="space-y-2 pt-3 border-t border-[#e6e6e6]">
                    <label className="block text-xs sm:text-sm font-bold text-[#1c1c1e] flex items-center gap-1.5">
                      <Box size={14} className="text-[#81014d]" />
                      Question 2: What is your required order quantity?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {QUANTITY_OPTIONS.map((qty) => {
                        const isSelected = quantity === qty;
                        return (
                          <button
                            key={qty}
                            type="button"
                            onClick={() => setQuantity(qty)}
                            className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center justify-between transition-all ${
                              isSelected
                                ? "bg-[#81014d]/10 border-[#81014d] text-[#81014d] font-bold shadow-xs"
                                : "bg-[#f8f8f6] border-[#e6e6e6] text-[#3d4045] hover:border-[#81014d]/40"
                            }`}
                          >
                            <span>{qty}</span>
                            {isSelected && (
                              <CheckCircle2 size={14} className="text-[#81014d] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className="space-y-2 pt-3 border-t border-[#e6e6e6]">
                    <label className="block text-xs sm:text-sm font-bold text-[#1c1c1e] flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#81014d]" />
                      Question 3: When do you need the labels?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {TIMELINE_OPTIONS.map((time) => {
                        const isSelected = timeline === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setTimeline(time)}
                            className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center justify-between transition-all ${
                              isSelected
                                ? "bg-[#81014d]/10 border-[#81014d] text-[#81014d] font-bold shadow-xs"
                                : "bg-[#f8f8f6] border-[#e6e6e6] text-[#3d4045] hover:border-[#81014d]/40"
                            }`}
                          >
                            <span>{time}</span>
                            {isSelected && (
                              <CheckCircle2 size={14} className="text-[#81014d] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Privacy Policy link notice */}
                  <div className="p-3 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] text-[11px] text-[#5f6368] flex items-center gap-2">
                    <ShieldCheck size={14} className="text-[#81014d] shrink-0" />
                    <span>
                      Review our published{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="font-bold text-[#81014d] underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      regarding quotation handling.
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="pt-3 border-t border-[#e6e6e6] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-xs font-semibold h-10 px-3.5 rounded-xl border border-[#cccccc] bg-white text-[#1c1c1e] hover:bg-black/5 transition-colors flex items-center gap-1.5"
                    >
                      <ArrowLeft size={14} className="text-[#1c1c1e]" />
                      <span>Back to Contact Info</span>
                    </button>

                    <Button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="bg-[#81014d] hover:bg-[#6b0140] text-white font-bold uppercase tracking-wider text-xs h-10 px-5 rounded-xl flex items-center gap-1.5 shadow-md shadow-[#81014d]/20 disabled:opacity-75 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="inline-block h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                          <span>Sending Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit & Get Quotation</span>
                          <CheckCircle2 size={15} />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 4: ENDING SCREEN */}
              {submitted && currentStep === 4 && (
                <div className="py-6 flex flex-col items-center text-center max-w-md mx-auto">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] tracking-tight">
                    Thank You for Your Enquiry!
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#5f6368] leading-relaxed">
                    Our team has received your details. We will contact you to discuss your label specifications, quantities and pricing.
                  </p>

                  {/* Brief summary */}
                  <div className="mt-4 w-full p-3.5 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] text-left text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-[#5f6368]">Contact Name:</span>
                      <span className="font-semibold text-[#1c1c1e]">{fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5f6368]">Work Email:</span>
                      <span className="font-semibold text-[#1c1c1e]">{workEmail}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5f6368]">Phone:</span>
                      <span className="font-semibold text-[#1c1c1e]">{phoneNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5f6368]">Label Type:</span>
                      <span className="font-semibold text-[#81014d]">{selectedTypeLabel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5f6368]">Quantity:</span>
                      <span className="font-semibold text-[#1c1c1e]">{quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#5f6368]">Timeline:</span>
                      <span className="font-semibold text-[#1c1c1e]">{timeline}</span>
                    </div>
                  </div>

                  {/* WhatsApp Action Button */}
                  <div className="mt-5 w-full space-y-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all duration-300"
                    >
                      <MessageSquare size={16} />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <p className="text-[10px] text-[#5f6368]">
                      Connects directly to Artisan Ventures Inquiries (+91 98257 44787)
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#e6e6e6] w-full flex justify-between items-center text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setCurrentStep(1);
                      }}
                      className="font-semibold text-[#81014d] hover:underline"
                    >
                      &larr; Submit Another Requirement
                    </button>
                    <button
                      type="button"
                      onClick={handleResetAndClose}
                      className="text-[#5f6368] hover:text-[#1c1c1e]"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
