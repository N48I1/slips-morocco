import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import founderUrl from "@assets/WhatsApp_Image_2026-07-25_at_21.12.49_(1)_1785011519442.jpeg";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#050810] pt-32 pb-32 text-[#F0F4FF] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00E87A]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00C2FF]/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-7xl font-heading font-black leading-[1.1] tracking-tight mb-10">
                Building the future of industrial surface protection from <span className="gradient-text">Morocco.</span>
              </h1>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-[#F0F4FF] uppercase tracking-wider">
                <span className="px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-full">Pre-seed</span>
                <span className="px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-full">TRL 2</span>
                <span className="px-4 py-2 bg-white/[0.05] border border-white/[0.1] rounded-full">Nador, Morocco</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story, Mission, Vision */}
      <section className="py-32 bg-[#0C1220]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-10">The Company Story</h2>
              <div className="text-lg text-[#8B9EC4] leading-relaxed space-y-6 mb-16">
                <p>
                  SLIPS Morocco was founded to address a massive, silent drain on the industrial economy: surface degradation. Every year, corrosion, fouling, and wear force industries to spend billions on maintenance, harsh chemical cleaning, and equipment replacement.
                </p>
                <p>
                  Recognizing the potential of bio-inspired materials science to solve this issue, we began formulating the concept for a regional DeepTech venture. Based in Nador, Morocco, we are positioning ourselves to develop solutions specifically adapted to the high-salinity coastal environments and intensive chemical processing industries of North Africa.
                </p>
                <p>
                  We are currently at TRL 2 (Technology Readiness Level 2). The theoretical concept is established, and we are actively building the multidisciplinary team and academic partnerships required to move into laboratory validation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#050810] p-10 rounded-3xl border border-white/[0.06] hover:border-[#00C2FF]/30 transition-colors">
                  <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00C2FF]" />
                    Mission
                  </h3>
                  <p className="text-[#8B9EC4] text-lg">
                    Develop bio-inspired surface technologies that can help industries protect equipment, improve operational efficiency, and move toward more durable infrastructure.
                  </p>
                </div>

                <div className="bg-[#050810] p-10 rounded-3xl border border-white/[0.06] hover:border-[#00E87A]/30 transition-colors">
                  <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00E87A]" />
                    Vision
                  </h3>
                  <p className="text-[#8B9EC4] text-lg">
                    Become a recognized African innovator in advanced and sustainable coating solutions.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-10">Core Values</h2>
              <StaggerContainer className="space-y-4">
                {[
                  { title: "Scientific Integrity", desc: "We rely on rigorous testing and transparent reporting. No unverified claims." },
                  { title: "Transparency", desc: "We communicate honestly about our development stage and technical challenges." },
                  { title: "Practical Innovation", desc: "We focus on solutions that can actually survive harsh industrial deployments." },
                  { title: "Sustainability", desc: "We aim to reduce the need for toxic cleaning chemicals and frequent resource replacement." },
                  { title: "Regional Impact", desc: "We are committed to building advanced technological capacity within Morocco and Africa." },
                  { title: "Collaboration", desc: "DeepTech cannot be built in isolation. We actively seek academic and industrial partners." }
                ].map((val, i) => (
                  <StaggerItem key={i}>
                    <div className="flex gap-6 p-6 rounded-2xl bg-[#050810] border border-white/[0.06] hover:border-[#00E87A]/30 transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-6 h-6 text-[#00E87A]" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[#F0F4FF] text-lg mb-2">{val.title}</h4>
                        <p className="text-[#8B9EC4] leading-relaxed">{val.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
            <Reveal className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/[0.06] bg-[#0C1220] relative z-10 group">
                <img 
                  src={founderUrl} 
                  alt="Mohamed Baltit" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#00C2FF]/20 rounded-full blur-[80px] z-0" />
            </Reveal>
            
            <Reveal className="lg:col-span-7" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-[#F0F4FF] mb-4">Mohamed Baltit</h2>
              <p className="text-[#00C2FF] font-bold mb-10 uppercase tracking-widest text-sm">Founder & CEO</p>
              
              <div className="text-[#8B9EC4] text-lg leading-relaxed space-y-6">
                <p>
                  Mohamed brings an unconventional perspective to DeepTech. With a background in psychology and intercultural mediation, he approaches complex problems by focusing on human needs, environmental context, and cross-disciplinary collaboration.
                </p>
                <p>
                  He discovered the potential of Slippery Liquid-Infused Porous Surfaces through independent study of advanced materials science. Recognizing a gap between high-level laboratory research and the immediate, practical needs of Moroccan industries, he founded SLIPS Morocco.
                </p>
                <p>
                  His current focus is entirely on company building: connecting with academic institutions, scoping industrial pain points, and recruiting the specialized technical talent needed to execute the scientific vision.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-white/[0.06]">
                <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-6">Team-Building Plan</h3>
                <p className="text-[#8B9EC4] text-lg mb-8 leading-relaxed">
                  SLIPS Morocco is actively seeking co-founders and early team members with deep expertise in materials science, chemical engineering, and technical business development.
                </p>
                <Link 
                  href="/contact?type=join_the_team"
                  className="inline-flex items-center gap-2 bg-white text-[#050810] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-white/10"
                >
                  Join the Team <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
