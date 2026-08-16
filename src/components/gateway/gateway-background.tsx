"use client";

import { motion } from "framer-motion";

export function GatewayBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f8f8f6]">
      {/* Light base background */}
      <div className="absolute inset-0 bg-[#f8f8f6]" />

      {/* Left Magenta Soft Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -left-[15%] top-[-10%] w-[55vw] h-[75vh] rounded-full blur-[140px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(162,1,96,0.12) 0%, rgba(213,0,127,0.04) 55%, transparent 75%)",
        }}
      />

      {/* Right Blue Soft Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute -right-[15%] bottom-[-10%] w-[55vw] h-[75vh] rounded-full blur-[140px] opacity-70"
        style={{
          background:
            "radial-gradient(circle, rgba(2,132,199,0.12) 0%, rgba(22,135,255,0.04) 55%, transparent 75%)",
        }}
      />

      {/* Center Subtle Gold Warmth */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vh] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Flowing Light Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] stroke-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-200 400 C 200 200, 600 600, 1000 300 C 1200 150, 1500 500, 1700 350"
          strokeWidth="1.5"
          strokeDasharray="8 8"
        />
        <path
          d="M-100 650 C 300 450, 700 800, 1100 500 C 1300 350, 1600 700, 1800 550"
          strokeWidth="1"
        />
      </svg>

      {/* Light Dot Grid Overlay */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-60" />
    </div>
  );
}
