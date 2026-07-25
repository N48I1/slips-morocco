import { Layout } from "@/components/Layout";
import { Link, useLocation } from "wouter";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Info, Layers, Droplets, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import demoVideoUrl from "@assets/WhatsApp_Video_2026-07-25_at_21.12.49_1785011519442.mp4";

export default function Technology() {
  const [, setLocation] = useLocation();

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#050810] pt-32 pb-32 text-[#F0F4FF] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C2FF]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl">
              <Link href="/" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm font-bold mb-8 inline-flex items-center gap-2 uppercase tracking-wider">
                ← Back to Home
              </Link>
              <h1 className="text-5xl md:text-7xl font-heading font-black leading-[1.1] tracking-tight mb-8">
                Advanced Liquid-Infused <span className="gradient-text">Coatings</span>
              </h1>
              <p className="text-xl text-[#8B9EC4] leading-relaxed font-medium">
                Exploring bio-inspired Slippery Liquid-Infused Porous Surfaces (SLIPS) for demanding industrial environments.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Concept */}
      <section className="py-32 bg-[#0C1220]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-[#00E87A] text-xs font-bold mb-8 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Nature's Model
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-8 leading-tight">
                What are Slippery Liquid-Infused Porous Surfaces?
              </h2>
              <div className="space-y-6 text-lg text-[#8B9EC4] leading-relaxed">
                <p>
                  SLIPS represents a paradigm shift in materials science. Instead of relying on static, solid surface treatments (like traditional Teflon or superhydrophobic coatings), SLIPS creates a dynamic, fluid interface.
                </p>
                <p>
                  The concept is inspired by the Nepenthes pitcher plant, which uses a micro-textured surface infused with a lubricating liquid to create an exceptionally slippery rim, causing insects to slide into the plant. We aim to translate this exact mechanism to industrial applications.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="left">
              <div className="bg-[#050810] rounded-3xl p-10 border border-white/[0.06] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/5 to-[#00E87A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-10 text-center relative z-10">Three-Component Architecture</h3>
                
                <div className="space-y-6 relative z-10">
                  {/* Step 1 */}
                  <div className="bg-[#0C1220] p-6 rounded-2xl border border-white/[0.06] flex gap-5 shadow-lg relative overflow-hidden group-hover:border-[#00E87A]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#00E87A]/10 flex items-center justify-center text-[#00E87A] flex-shrink-0">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[#F0F4FF] text-lg">1. Porous Substrate</h4>
                      <p className="text-sm text-[#8B9EC4] mt-2 leading-relaxed">A micro/nano-structured solid matrix that locks the liquid in place.</p>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="bg-[#0C1220] p-6 rounded-2xl border border-white/[0.06] flex gap-5 shadow-lg relative ml-6 overflow-hidden group-hover:border-[#00C2FF]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-[#00C2FF]/10 flex items-center justify-center text-[#00C2FF] flex-shrink-0">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[#F0F4FF] text-lg">2. Liquid Infusion</h4>
                      <p className="text-sm text-[#8B9EC4] mt-2 leading-relaxed">A chemically compatible lubricant that fills the pores.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-[#0C1220] p-6 rounded-2xl border border-white/[0.06] flex gap-5 shadow-lg relative ml-12 overflow-hidden group-hover:border-white/[0.12] transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.05] flex items-center justify-center text-[#F0F4FF] flex-shrink-0">
                      <Zap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-[#F0F4FF] text-lg">3. Slippery Interface</h4>
                      <p className="text-sm text-[#8B9EC4] mt-2 leading-relaxed">An ultra-smooth, continuous fluid layer that repels contaminants.</p>
                    </div>
                  </div>
                </div>

                <p className="text-center text-[10px] text-[#4A5880] mt-8 uppercase tracking-widest font-mono relative z-10">
                  Concept illustration — not experimental data
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.2), transparent)' }} />

      {/* Demo Video */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-6">
                Demonstration of the concept
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden bg-[#0C1220] aspect-video border border-white/[0.06] shadow-2xl p-2 group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C2FF]/10 to-[#00E87A]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0" />
                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden bg-black">
                  <video 
                    className="w-full h-full object-contain"
                    controls
                    muted
                    preload="metadata"
                  >
                    <source src={demoVideoUrl} type="video/mp4" />
                  </video>
                </div>
              </div>
              <div className="mt-8 text-center px-4">
                <p className="text-[#F0F4FF] text-lg font-medium mb-4">
                  Concept demonstration showing how a liquid-infused surface can help a viscous material slide more easily from a container.
                </p>
                <p className="text-[#4A5880] text-xs max-w-2xl mx-auto">
                  This footage is shown for illustrative purposes only. It does not represent a SLIPS Morocco laboratory test. Third-party attribution may apply — confirm usage rights before public launch.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.2), transparent)' }} />

      {/* Mechanisms & Validation */}
      <section className="py-32 bg-[#0C1220]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-8">Potential Mechanisms</h2>
              <div className="space-y-6 text-lg text-[#8B9EC4] leading-relaxed">
                <p>The technology is designed to address two primary industrial challenges:</p>
                <ul className="space-y-6 mt-6">
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00C2FF]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00C2FF]" />
                    </div>
                    <div>
                      <strong className="text-[#F0F4FF] block mb-1">Anti-Corrosion</strong>
                      Aims to create an immiscible liquid barrier that blocks water, salts, and corrosive chemicals from reaching the underlying substrate.
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-[#00E87A]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00E87A]" />
                    </div>
                    <div>
                      <strong className="text-[#F0F4FF] block mb-1">Anti-Fouling</strong>
                      Designed to provide an ultra-low adhesion surface where bio-organisms, scaling, and deposits struggle to attach, allowing them to slide off under gravity or minimal fluid flow.
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-[#050810] border border-white/[0.06] p-10 rounded-3xl relative overflow-hidden group hover:border-[#5B6BF8]/30 transition-colors">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B6BF8]/5 rounded-full blur-3xl -z-10 group-hover:bg-[#5B6BF8]/10 transition-colors duration-500" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#5B6BF8]/10 flex items-center justify-center text-[#5B6BF8]">
                    <Info className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#F0F4FF]">Current Status: TRL 2</h3>
                </div>
                <p className="text-[#8B9EC4] text-lg leading-relaxed mb-8">
                  The technology concept has been formulated. SLIPS Morocco is currently seeking academic and laboratory partners to begin materials characterization and initial proof-of-concept testing. No laboratory validation has been completed yet.
                </p>
                <button 
                  onClick={() => setLocation('/roadmap')}
                  className="text-[#F0F4FF] font-bold text-sm uppercase tracking-wider hover:text-[#5B6BF8] transition-colors flex items-center gap-2 group/btn"
                >
                  View development roadmap <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-12 text-center">Validation Methodology Requirements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Coating adhesion to industrial substrates",
                "Lubricant retention under shear flow",
                "Durability and operational lifespan",
                "Corrosion resistance (salt spray testing)",
                "Fouling resistance (bio-adhesion assays)",
                "Chemical compatibility",
                "Mechanical wear and abrasion resistance",
                "Environmental impact and toxicity",
                "Cost, scalability, and application methods"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 bg-[#050810] p-6 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] transition-colors items-center">
                  <CheckCircle2 className="w-5 h-5 text-[#00C2FF] flex-shrink-0" />
                  <span className="text-[#F0F4FF] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-[#050810] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-white/[0.06]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,255,0.05),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-[#F0F4FF] mb-8">Interested in characterizing this technology?</h2>
            <p className="text-[#8B9EC4] text-lg max-w-2xl mx-auto mb-12">We are actively seeking materials science laboratories and academic researchers to collaborate on Stage 2 and 3 validation.</p>
            <Link 
              href="/contact?type=research_collaboration"
              className="inline-flex bg-white text-[#050810] px-10 py-5 rounded-full font-bold hover:bg-[#F0F4FF] transition-all hover:scale-105 shadow-lg shadow-white/10"
            >
              Propose a Research Collaboration
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
