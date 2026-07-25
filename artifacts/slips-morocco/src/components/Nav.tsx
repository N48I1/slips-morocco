import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Technology", path: "/technology" },
    { name: "Industries", path: "/industries" },
    { name: "About", path: "/about" },
    { name: "Roadmap", path: "/roadmap" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050810]/80 backdrop-blur-xl border-b border-white/[0.06] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link 
                  href={link.path} 
                  className="text-[#8B9EC4] hover:text-[#F0F4FF] text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link 
            href="/contact?type=industrial_pilot"
            className="border border-[#00C2FF]/50 text-[#00C2FF] hover:bg-[#00C2FF]/10 px-5 py-2 rounded-full text-sm font-medium transition-all"
          >
            Discuss a Pilot
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#F0F4FF] p-2"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Main navigation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#050810]/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0C1220] border-l border-white/[0.06] z-50 p-6 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <Logo className="h-8 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#8B9EC4] hover:text-[#F0F4FF]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      href={link.path} 
                      className="text-[#8B9EC4] hover:text-[#F0F4FF] text-xl font-medium block transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-white/[0.06]">
                <Link 
                  href="/contact?type=industrial_pilot"
                  className="border border-[#00C2FF]/50 text-[#00C2FF] hover:bg-[#00C2FF]/10 px-5 py-3 rounded-full text-center block font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Discuss a Pilot
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
