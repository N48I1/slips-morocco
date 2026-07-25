import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/toaster";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col font-sans bg-[#050810] text-[#F0F4FF]">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-[#F0F4FF] px-4 py-3 font-semibold text-[#050810] focus:not-sr-only"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
