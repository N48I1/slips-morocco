import { Link } from "wouter";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-[#050810] pt-16 pb-8 border-t border-white/[0.06]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Logo className="h-10 w-auto" />
            </Link>
            <h3 className="text-[#F0F4FF] font-heading text-xl font-semibold mb-2">
              Bio-Inspired Surface Technologies
            </h3>
            <p className="text-[#8B9EC4] max-w-sm text-sm leading-relaxed mb-6">
              Cleaner Surfaces | Greater Efficiency | Sustainable Future
            </p>
            <p className="text-[#4A5880] text-sm">
              Nador, Morocco
            </p>
          </div>
          
          <div>
            <h4 className="text-[#F0F4FF] font-semibold mb-4 text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/technology" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm">Technology</Link></li>
              <li><Link href="/industries" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm">Industries</Link></li>
              <li><Link href="/about" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm">About</Link></li>
              <li><Link href="/roadmap" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F0F4FF] font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:Momobaltit30@gmail.com" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm block">
                  Momobaltit30@gmail.com
                </a>
              </li>
              <li><Link href="/contact" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm">Contact Form</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4A5880] text-sm">
            © {new Date().getFullYear()} SLIPS Morocco. All rights reserved.
          </p>
          <p className="text-[#4A5880] text-xs">
            Concept visualizations — not experimental data.
          </p>
        </div>
      </div>
    </footer>
  );
}
