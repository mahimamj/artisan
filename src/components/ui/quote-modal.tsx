"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Upload,
  CheckCircle2,
  Sparkles,
  FileText,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface QuoteModalProps {
  isOpen: boolean;
  initialCategory: string;
  onClose: () => void;
}

const CATEGORY_OPTIONS = [
  "Pharma Labels",
  "Perfume Labels",
  "FMCG Packaging Labels",
  "Cosmetic Labels",
  "Pharmaceutical Compliance",
  "Sachet Printing",
  "Liquor and Beverages",
  "Food & Beverage Labels",
  "Other",
];

const MATERIAL_OPTIONS = [
  "Select Material...",
  "Paper",
  "PP (Polypropylene)",
  "PET (Polyester)",
  "Vinyl",
  "Transparent Film",
  "Metallic / Silver PP",
  "Other",
];

const FINISHING_OPTIONS = [
  "Matte",
  "Gloss",
  "Metallic Foil",
  "Embossing",
  "Spot UV",
  "Die Cut",
  "Waterproof",
  "Custom",
];

export function QuoteModal({ isOpen, initialCategory, onClose }: QuoteModalProps) {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [quantity, setQuantity] = useState("");
  const [labelSize, setLabelSize] = useState("");
  const [material, setMaterial] = useState("");
  const [finishing, setFinishing] = useState<string[]>([]);
  const [delivery, setDelivery] = useState("");
  const [additionalReqs, setAdditionalReqs] = useState("");
  const [artworkFile, setArtworkFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync category when initialCategory prop changes
  useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory, isOpen]);

  // Lock background body scrolling when modal is open
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

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Reset form state when closed
  const handleClose = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  const toggleFinishing = (opt: string) => {
    setFinishing((prev) =>
      prev.includes(opt) ? prev.filter((item) => item !== opt) : [...prev, opt]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 25 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          file: "File size exceeds 25MB limit. Please select a smaller file.",
        }));
        return;
      }
      setErrors((prev) => ({ ...prev, file: "" }));
      setArtworkFile(file);
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!companyName.trim()) {
      newErrors.companyName = "Please enter your company / brand name.";
    }

    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone / WhatsApp number.";
    } else if (phone.replace(/[^\d+]/g, "").length < 8) {
      newErrors.phone = "Please enter a valid phone or WhatsApp number.";
    }

    if (!category.trim()) {
      newErrors.category = "Please select a label category.";
    }

    if (!quantity.trim()) {
      newErrors.quantity = "Please enter the required quantity.";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = "Please enter a valid business email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const businessPhone = (
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919825744787"
    ).replace(/[^\d]/g, "");

    const formattedMessage = `Hello, I would like to request a quotation for custom labels.

📋 *PRINTING REQUIREMENT*
• *Category:* ${category}
• *Company/Brand:* ${companyName}
• *Quantity:* ${quantity}
${labelSize.trim() ? `• *Label Size:* ${labelSize}\n` : ""}${material.trim() ? `• *Material:* ${material}\n` : ""}${finishing.length > 0 ? `• *Finishing:* ${finishing.join(", ")}\n` : ""}${delivery.trim() ? `• *Expected Delivery:* ${delivery}\n` : ""}
👤 *CONTACT DETAILS*
• *Name:* ${fullName}
• *Phone:* ${phone}
${email.trim() ? `• *Email:* ${email}\n` : ""}
${additionalReqs.trim() ? `💬 *ADDITIONAL REQUIREMENTS:*\n${additionalReqs}\n\n` : ""}📎 *ARTWORK / DESIGN:*
${artworkFile ? `File Selected: ${artworkFile.name} (I will attach this file manually in WhatsApp)` : "I will attach my artwork/design in WhatsApp."}

Please share the available options and quotation.`;

    const whatsappUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    setGeneratedWhatsAppUrl(whatsappUrl);
    setIsSubmitted(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/65 backdrop-blur-sm"
          />

          {/* Modal Card Drawer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white border border-[#e6e6e6] rounded-[24px] sm:rounded-[28px] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#e6e6e6] bg-[#f8f8f6] flex items-center justify-between shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#a20160]/10 text-[#a20160] border border-[#a20160]/20 flex items-center gap-1">
                    <Sparkles size={11} />
                    Requirement: {category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1c1c1e] tracking-tight">
                  Get a Custom Quote
                </h2>
                <p className="text-xs sm:text-sm text-[#5f6368] mt-0.5">
                  Tell us about your printing requirement and our team will help you find the right solution.
                </p>
              </div>

              <button
                onClick={handleClose}
                aria-label="Close quote modal"
                className="h-9 w-9 rounded-full bg-white border border-[#e6e6e6] flex items-center justify-center text-[#5f6368] hover:text-[#1c1c1e] hover:bg-black/5 transition-colors focus:outline-none shrink-0"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {isSubmitted ? (
                /* SUCCESS / CONFIRMATION STATE */
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center mb-5">
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1c1c1e] tracking-tight">
                    Requirement Prepared
                  </h3>

                  <p className="mt-2.5 text-sm text-[#5f6368] max-w-md leading-relaxed">
                    Your printing requirement for <strong className="text-[#1c1c1e]">{category}</strong> has been formatted for WhatsApp. Please review the details and press Send in WhatsApp.
                  </p>

                  <div className="mt-4 p-4 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] text-xs text-[#5f6368] max-w-md text-left flex items-start gap-2.5">
                    <ShieldCheck size={18} className="text-[#a20160] shrink-0 mt-0.5" />
                    <span>
                      <strong>Artwork Note:</strong> If you selected an artwork file ({artworkFile?.name || "design file"}), please attach it directly in the WhatsApp chat window after sending.
                    </span>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                    <a
                      href={generatedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/25"
                    >
                      <MessageSquare size={16} />
                      <span>Re-Open WhatsApp Chat ↗</span>
                    </a>

                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full h-11 text-xs font-bold uppercase tracking-wider rounded-xl border-[#e6e6e6]"
                    >
                      Edit Requirements
                    </Button>
                  </div>
                </div>
              ) : (
                /* QUOTATION ENQUIRY FORM */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Section 1: Contact Details */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#a20160] mb-3 flex items-center gap-1.5">
                      <span>01. Contact Details</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-fullname" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Full Name <span className="text-[#a20160]">*</span>
                        </label>
                        <Input
                          id="modal-fullname"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Rahul Sharma"
                          className={`bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm ${
                            errors.fullName ? "border-rose-500 ring-1 ring-rose-500" : ""
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-[11px] font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="modal-company" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Company / Brand Name <span className="text-[#a20160]">*</span>
                        </label>
                        <Input
                          id="modal-company"
                          type="text"
                          required
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="ABC Pharma / Brand Name"
                          className={`bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm ${
                            errors.companyName ? "border-rose-500 ring-1 ring-rose-500" : ""
                          }`}
                        />
                        {errors.companyName && (
                          <p className="mt-1 text-[11px] font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.companyName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="modal-phone" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Phone / WhatsApp Number <span className="text-[#a20160]">*</span>
                        </label>
                        <Input
                          id="modal-phone"
                          type="tel"
                          inputMode="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm ${
                            errors.phone ? "border-rose-500 ring-1 ring-rose-500" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-[11px] font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="modal-email" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Business Email <span className="text-[#5f6368] font-normal">(Optional)</span>
                        </label>
                        <Input
                          id="modal-email"
                          type="email"
                          inputMode="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rahul@abcpharma.com"
                          className={`bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm ${
                            errors.email ? "border-rose-500 ring-1 ring-rose-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Printing Requirement Specs */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#a20160] mb-3 flex items-center gap-1.5">
                      <span>02. Printing Requirement Specs</span>
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="modal-category" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Label Category <span className="text-[#a20160]">*</span>
                        </label>
                        <select
                          id="modal-category"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full bg-[#f8f8f6] border border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm px-3 focus:outline-none focus:ring-2 focus:ring-[#a20160]/30 transition-all font-medium"
                        >
                          {CATEGORY_OPTIONS.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <p className="mt-1 text-[11px] font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.category}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="modal-quantity" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Quantity Required <span className="text-[#a20160]">*</span>
                        </label>
                        <Input
                          id="modal-quantity"
                          type="text"
                          inputMode="numeric"
                          required
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                          placeholder="e.g. 10,000 labels"
                          className={`bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm ${
                            errors.quantity ? "border-rose-500 ring-1 ring-rose-500" : ""
                          }`}
                        />
                        {errors.quantity && (
                          <p className="mt-1 text-[11px] font-medium text-rose-500 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {errors.quantity}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="modal-size" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Label Size <span className="text-[#5f6368] font-normal">(Optional)</span>
                        </label>
                        <Input
                          id="modal-size"
                          type="text"
                          value={labelSize}
                          onChange={(e) => setLabelSize(e.target.value)}
                          placeholder="e.g. 100 × 50 mm"
                          className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="modal-material" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                          Material Substrate <span className="text-[#5f6368] font-normal">(Optional)</span>
                        </label>
                        <select
                          id="modal-material"
                          value={material}
                          onChange={(e) => setMaterial(e.target.value)}
                          className="w-full bg-[#f8f8f6] border border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm px-3 focus:outline-none focus:ring-2 focus:ring-[#a20160]/30 transition-all font-medium"
                        >
                          {MATERIAL_OPTIONS.map((mat) => (
                            <option key={mat} value={mat === "Select Material..." ? "" : mat}>
                              {mat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Finishing & Embellishments */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1c1c1e] mb-2">
                      Printing / Finishing Options <span className="text-[#5f6368] font-normal">(Select all that apply)</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {FINISHING_OPTIONS.map((opt) => {
                        const isChecked = finishing.includes(opt);
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => toggleFinishing(opt)}
                            className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all border text-left flex items-center justify-between ${
                              isChecked
                                ? "bg-[#a20160]/10 border-[#a20160] text-[#a20160]"
                                : "bg-[#f8f8f6] border-[#e6e6e6] text-[#5f6368] hover:border-[#1c1c1e]/30"
                            }`}
                          >
                            <span>{opt}</span>
                            {isChecked && <CheckCircle2 size={13} className="text-[#a20160] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 4: Expected Delivery & Additional Notes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-delivery" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                        Expected Delivery <span className="text-[#5f6368] font-normal">(Optional)</span>
                      </label>
                      <Input
                        id="modal-delivery"
                        type="text"
                        value={delivery}
                        onChange={(e) => setDelivery(e.target.value)}
                        placeholder="e.g. Urgent / Within 7 Days"
                        className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] h-11 rounded-xl text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-artwork" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                        Upload Artwork / Design <span className="text-[#5f6368] font-normal">(Max 25MB)</span>
                      </label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.ai,.psd,.cdr,.png,.jpg,.jpeg"
                        className="hidden"
                      />
                      {artworkFile ? (
                        <div className="h-11 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center justify-between">
                          <span className="truncate flex items-center gap-1.5">
                            <FileText size={14} className="shrink-0 text-emerald-600" />
                            {artworkFile.name}
                          </span>
                          <button
                            type="button"
                            onClick={() => setArtworkFile(null)}
                            className="text-emerald-700 hover:text-emerald-950 p-1"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full h-11 px-3 rounded-xl bg-[#f8f8f6] border border-[#e6e6e6] hover:border-[#a20160]/40 text-[#5f6368] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                        >
                          <Upload size={14} className="text-[#a20160]" />
                          <span>Choose PDF, AI, PSD, CDR, PNG, JPG</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {artworkFile && (
                    <p className="text-[11px] text-[#5f6368] bg-[#f8f8f6] p-2.5 rounded-lg border border-[#e6e6e6]">
                      🔒 <strong>Note:</strong> Please attach your artwork manually in WhatsApp after sending your requirement details.
                    </p>
                  )}

                  <div>
                    <label htmlFor="modal-reqs" className="block text-xs font-semibold text-[#1c1c1e] mb-1.5">
                      Additional Requirements & Notes
                    </label>
                    <Textarea
                      id="modal-reqs"
                      value={additionalReqs}
                      onChange={(e) => setAdditionalReqs(e.target.value)}
                      rows={3}
                      placeholder="Tell us about your product, artwork, finish, adhesive, barcode, special requirements, etc."
                      className="bg-[#f8f8f6] border-[#e6e6e6] text-[#1c1c1e] rounded-xl text-sm p-3"
                    />
                  </div>

                  {/* Primary CTA Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#a20160] text-white hover:bg-[#880150] font-bold uppercase tracking-wider text-xs sm:text-sm h-12 rounded-xl shadow-lg shadow-[#a20160]/20 flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Send size={16} />
                      <span>SEND REQUIREMENT ON WHATSAPP ↗</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
