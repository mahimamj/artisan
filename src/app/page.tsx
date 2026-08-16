import { GatewayBackground } from "@/components/gateway/gateway-background";
import { GatewayNavbar } from "@/components/gateway/gateway-navbar";
import { GatewaySelector } from "@/components/gateway/gateway-selector";
import { GatewayFooter } from "@/components/gateway/gateway-footer";

export default function GatewayPage() {
  return (
    <main className="relative min-h-screen bg-[#f8f8f6] text-[#1c1c1e] flex flex-col justify-between overflow-x-hidden">
      {/* Abstract Premium Light Background */}
      <GatewayBackground />

      {/* Minimal Navigation Bar */}
      <GatewayNavbar />

      {/* Hero & Two Business Cards Selection Panel */}
      <GatewaySelector />

      {/* Minimal Corporate Footer */}
      <GatewayFooter />
    </main>
  );
}
