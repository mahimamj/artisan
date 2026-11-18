"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  MessageSquare,
  Building2,
  Mail,
  User,
  Phone,
  Globe,
  Layers,
  Calendar,
  Box,
  FileText,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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

export default function InstantFormPage() {
  // Step tracker: 1 = Contact Info, 2 = Qualification Questions, 3 = Review & Submit, 4 = Ending screen
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form data state
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

  // Validate step 1
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

  const handleNextToQuestions = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFinishForm = async () => {
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
          source: "Instant Form Landing Page",
        }),
      });
    } catch (err) {
      console.error("Failed to post enquiry:", err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setCurrentStep(4);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // WhatsApp formatted link
  const selectedTypeLabel = labelType === "Other" && otherLabelType.trim() ? `Other (${otherLabelType})` : labelType;
  const whatsappMessage = `*NEW INSTANT LEAD INQUIRY - ARTISAN VENTURES*
───────────────────────
👤 *CONTACT DETAILS:*
• Name: ${fullName}
• Work Email: ${workEmail}
• Phone: ${phoneNumber}
${website.trim() ? `• Website: ${website}\n` : ""}
🏷️ *QUALIFICATION ANSWERS:*
• Label Type: ${selectedTypeLabel}
• Order Quantity: ${quantity}
• Timeline Required: ${timeline}
───────────────────────
Please connect to discuss specifications, material samples, and provide a quotation.`;

  const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#dededb] pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header Card */}
          <div className="bg-white rounded-[24px] border border-[#cccccc] p-6 sm:p-8 shadow-sm mb-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#81014d]/10 text-[#81014d] border border-[#81014d]/20 mb-3">
              <Sparkles size={14} />
              Artisan Instant Enquiry Form
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1c1e]">
              Custom Label Manufacturing Quotation
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-[#5f6368] max-w-xl mx-auto leading-relaxed">
              Answer 3 quick qualification questions and share your contact details. Our engineering specialists will prepare a direct quotation within 24 hours.
            </p>

            {/* Stepper indicator */}
            {!submitted && (
              <div className="mt-6 flex items-center justify-center gap-2 sm:gap-4 text-xs font-semibold">
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                    currentStep === 1
                      ? "bg-[#81014d] text-white"
                      : "bg-[#f8f8f6] text-[#5f6368] border border-[#e6e6e6]"
                  }`}
                >
                  <span className="flex h-5 w-5 rounded-full bg-white/20 text-xs items-center justify-center font-bold">
                    1
                  </span>
                  <span>Contact Information</span>
                </div>
                <div className="w-6 h-[1px] bg-[#cccccc]" />
                <div
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all ${
                    currentStep === 2
                      ? "bg-[#81014d] text-white"
                      : "bg-[#f8f8f6] text-[#5f6368] border border-[#e6e6e6]"
                  }`}
                >
                  <span className="flex h-5 w-5 rounded-full bg-white/20 text-xs items-center justify-center font-bold">
                    2
                  </span>
                  <span>Qualification Questions</span>
                </div>
              </div>
            )}
          </div>

          {/* MAIN FORM CONTAINER */}
          <div className="bg-white rounded-[24px] border border-[#cccccc] p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* STEP 1: CONTACT INFORMATION */}
            {!submitted && currentStep === 1 && (
              <form onSubmit={handleNextToQuestions} className="space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#1c1c1e] flex items-center gap-2">
                    <User size={18} className="text-[#81014d]" />
                    Step 1: Your Business & Contact Information
                  </h2>
                  
                  {/* Specified Description Notice */}
                  <div className="mt-3 p-4 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] text-xs sm:text-sm text-[#5f6368] leading-relaxed">
                    <p className="font-semibold text-[#1c1c1e] mb-1 flex items-center gap-1.5">
                      <ShieldCheck size={15} className="text-[#81014d]" />
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
                </div>

                <div className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Rajesh Sharma"
                      className="h-11 rounded-xl text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                    {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label htmlFor="workEmail" className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1.5">
                      Work Email * <span className="text-[10px] font-normal text-[#5f6368]">(Verified Business Email)</span>
                    </label>
                    <Input
                      id="workEmail"
                      type="email"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="h-11 rounded-xl text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                    {errors.workEmail && <p className="text-xs text-rose-600 mt-1">{errors.workEmail}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1.5">
                      Phone Number * <span className="text-[10px] font-normal text-[#5f6368]">(Mobile / WhatsApp)</span>
                    </label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="h-11 rounded-xl text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                    {errors.phoneNumber && <p className="text-xs text-rose-600 mt-1">{errors.phoneNumber}</p>}
                  </div>

                  {/* Website (Optional) */}
                  <div>
                    <label htmlFor="website" className="block text-xs font-bold uppercase tracking-wider text-[#1c1c1e] mb-1.5">
                      Company Website <span className="text-[10px] font-normal text-[#5f6368]">(Optional)</span>
                    </label>
                    <Input
                      id="website"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://yourcompany.com"
                      className="h-11 rounded-xl text-sm border-[#cccccc] focus:border-[#81014d]"
                    />
                  </div>
                </div>

                {/* Submit button to Step 2 */}
                <div className="pt-4 border-t border-[#e6e6e6] flex items-center justify-between">
                  <span className="text-xs text-[#5f6368] flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#81014d]" />
                    Guaranteed spam-free & private
                  </span>
                  <Button
                    type="submit"
                    className="bg-[#81014d] hover:bg-[#6b0140] text-white font-bold uppercase tracking-wider text-xs h-11 px-6 rounded-xl flex items-center gap-2"
                  >
                    <span>Proceed to Questions</span>
                    <ArrowRight size={15} />
                  </Button>
                </div>
              </form>
            )}

            {/* STEP 2: QUALIFICATION QUESTIONS */}
            {!submitted && currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-[#1c1c1e] flex items-center gap-2">
                    <Layers size={18} className="text-[#81014d]" />
                    Step 2: Qualification Questions
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5f6368] mt-1">
                    Select the choices that best match your order specifications:
                  </p>
                </div>

                {/* Question 1 */}
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-[#1c1c1e]">
                    Question 1: What type of labels does your business require?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {LABEL_TYPES.map((type) => {
                      const isSelected = labelType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setLabelType(type)}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? "bg-[#81014d]/10 border-[#81014d] text-[#81014d] font-bold shadow-xs"
                              : "bg-[#f8f8f6] border-[#e6e6e6] text-[#3d4045] hover:border-[#81014d]/40"
                          }`}
                        >
                          <span>{type}</span>
                          {isSelected && <CheckCircle2 size={16} className="text-[#81014d] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                  {labelType === "Other" && (
                    <Input
                      value={otherLabelType}
                      onChange={(e) => setOtherLabelType(e.target.value)}
                      placeholder="Please specify your label requirement..."
                      className="mt-2 h-10 rounded-xl text-xs sm:text-sm border-[#cccccc]"
                    />
                  )}
                </div>

                {/* Question 2 */}
                <div className="space-y-3 pt-4 border-t border-[#e6e6e6]">
                  <label className="block text-sm font-bold text-[#1c1c1e] flex items-center gap-2">
                    <Box size={16} className="text-[#81014d]" />
                    Question 2: What is your required order quantity?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {QUANTITY_OPTIONS.map((qty) => {
                      const isSelected = quantity === qty;
                      return (
                        <button
                          key={qty}
                          type="button"
                          onClick={() => setQuantity(qty)}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? "bg-[#81014d]/10 border-[#81014d] text-[#81014d] font-bold shadow-xs"
                              : "bg-[#f8f8f6] border-[#e6e6e6] text-[#3d4045] hover:border-[#81014d]/40"
                          }`}
                        >
                          <span>{qty}</span>
                          {isSelected && <CheckCircle2 size={16} className="text-[#81014d] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Question 3 */}
                <div className="space-y-3 pt-4 border-t border-[#e6e6e6]">
                  <label className="block text-sm font-bold text-[#1c1c1e] flex items-center gap-2">
                    <Calendar size={16} className="text-[#81014d]" />
                    Question 3: When do you need the labels?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {TIMELINE_OPTIONS.map((time) => {
                      const isSelected = timeline === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setTimeline(time)}
                          className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? "bg-[#81014d]/10 border-[#81014d] text-[#81014d] font-bold shadow-xs"
                              : "bg-[#f8f8f6] border-[#e6e6e6] text-[#3d4045] hover:border-[#81014d]/40"
                          }`}
                        >
                          <span>{time}</span>
                          {isSelected && <CheckCircle2 size={16} className="text-[#81014d] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Privacy policy reference */}
                <div className="p-4 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] text-xs text-[#5f6368] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#81014d] shrink-0" />
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
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#e6e6e6] flex items-center justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="text-xs font-semibold h-11 px-4 rounded-xl border border-[#cccccc] bg-white text-[#1c1c1e] hover:bg-black/5 hover:text-[#1c1c1e] transition-colors flex items-center gap-1.5"
                  >
                    <ArrowLeft size={15} className="text-[#1c1c1e]" />
                    <span>Back to Contact Info</span>
                  </Button>

                  <Button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleFinishForm}
                    className="bg-[#81014d] hover:bg-[#6b0140] text-white font-bold uppercase tracking-wider text-xs h-11 px-6 rounded-xl flex items-center gap-2 shadow-md shadow-[#81014d]/20 disabled:opacity-75 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block h-3.5 w-3.5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit & Get Quotation</span>
                        <CheckCircle2 size={16} />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 4: ENDING SCREEN (Matches exact prompt instructions) */}
            {submitted && currentStep === 4 && (
              <div className="py-8 sm:py-12 flex flex-col items-center text-center max-w-lg mx-auto">
                {/* Big check icon */}
                <div className="h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-6">
                  <CheckCircle2 size={44} />
                </div>

                {/* Headline */}
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1c1c1e] tracking-tight">
                  Thank You for Your Enquiry!
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-base text-[#5f6368] leading-relaxed">
                  Our team has received your details. We will contact you to discuss your label specifications, quantities and pricing.
                </p>

                {/* Summary Box */}
                <div className="mt-6 w-full p-4 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] text-left text-xs sm:text-sm space-y-2">
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
                <div className="mt-8 w-full space-y-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 h-13 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 transition-all duration-300"
                  >
                    <MessageSquare size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <p className="text-[11px] text-[#5f6368]">
                    Connecting directly to Artisan Ventures Inquiries (+91 98257 44787)
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#e6e6e6] w-full flex justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setCurrentStep(1);
                    }}
                    className="text-xs font-semibold text-[#81014d] hover:underline"
                  >
                    &larr; Submit Another Requirement
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
