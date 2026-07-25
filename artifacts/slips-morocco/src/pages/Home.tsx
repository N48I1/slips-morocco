import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { siteContent } from "@/data/content";
import { ArrowRight, Beaker, Droplets, MapPin, Zap, Building2, Anchor, HardHat, Car, Factory, CheckCircle2, ChevronRight } from "lucide-react";
import founderUrl from "@assets/WhatsApp_Image_2026-07-25_at_21.12.49_(1)_1785011519442.jpeg";
import demoVideoUrl from "@assets/WhatsApp_Video_2026-07-25_at_21.12.49_1785011519442.mp4";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

function FadeIn({ children, delay = 0, className = "", direction = "up" }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  
  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yOffset, x: xOffset }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerContainer({ children, className = "" }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StaggerItem({ children, className = "" }: any) {
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ value, label }: { value: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="p-8 rounded-2xl bg-[#0C1220] border border-white/[0.06] text-center relative group overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.5), transparent)' }} />
      <div className="text-4xl md:text-5xl font-heading font-black mb-3 gradient-text group-hover:scale-105 transition-transform duration-500">{value}</div>
      <div className="text-[#8B9EC4] font-medium">{label}</div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* 1. Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center bg-[#050810] overflow-hidden pt-24 pb-20">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.15]" 
               style={{ background: 'radial-gradient(circle, #00C2FF, transparent)', filter: 'blur(80px)', animation: 'pulse 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.1]"
               style={{ background: 'radial-gradient(circle, #00E87A, transparent)', filter: 'blur(60px)', animation: 'pulse 10s ease-in-out infinite reverse' }} />
          {/* Hexagonal Pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }}></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-3xl">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse"></span>
                  <span className="text-[#F0F4FF] text-xs font-semibold tracking-wider">{siteContent.hero.eyebrow}</span>
                </div>
                
                <motion.h1 
                  className="text-5xl md:text-7xl lg:text-[5rem] font-heading font-black leading-[1.05] tracking-tight mb-6"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="text-[#F0F4FF]">Smarter </span>
                  <span style={{ background: 'linear-gradient(135deg, #00C2FF, #00E87A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    surfaces.
                  </span>
                  <br />
                  <span className="text-[#F0F4FF]">Longer-lasting industry.</span>
                </motion.h1>

                <p className="text-[#8B9EC4] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-medium">
                  {siteContent.hero.supporting}
                </p>

                <div className="flex flex-wrap items-center gap-4 mb-12">
                  <Link 
                    href="/technology"
                    className="bg-gradient-to-r from-[#00C2FF] to-[#00E87A] text-[#050810] px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,194,255,0.3)] flex items-center gap-2 group"
                  >
                    Explore the Technology
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link 
                    href="/contact?type=industrial_pilot"
                    className="border border-white/20 text-[#F0F4FF] hover:border-white/40 hover:bg-white/5 px-8 py-4 rounded-full font-bold text-sm transition-all"
                  >
                    Discuss a Pilot
                  </Link>
                </div>

                <div className="flex items-center flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-[#4A5880] border-t border-white/[0.06] pt-6">
                  <span className="flex items-center gap-1.5 text-[#8B9EC4]"><MapPin className="w-3.5 h-3.5" /> Nador, Morocco</span>
                  <span>Pre-Seed DeepTech</span>
                  <span>TRL 2</span>
                  <span>Industrial B2B/B2G</span>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2} direction="left" className="h-full flex items-center justify-center">
              {/* Animated Conceptual SVG Visualization */}
              <div className="relative w-full max-w-md aspect-square bg-[#0C1220] border border-white/[0.06] rounded-3xl p-8 overflow-hidden group">
                <div className="absolute top-4 left-0 w-full text-center text-[10px] text-[#4A5880] uppercase tracking-widest font-mono z-20">
                  Conceptual visualization — not experimental data
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 pb-12 z-10">
                  <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Contaminant droplet with sliding animation */}
                    <g className="animate-drop-slide" style={{ animationDuration: '4s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}>
                      <circle cx="60" cy="50" r="16" fill="#F0F4FF" opacity="0.8" filter="blur(1px)"/>
                      <path d="M60 30 Q70 40 60 66 Q44 60 60 30" fill="#F0F4FF" opacity="0.9"/>
                    </g>
                    
                    {/* Second droplet staggered */}
                    <g className="animate-drop-slide" style={{ animationDuration: '4s', animationDelay: '2s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}>
                      <circle cx="80" cy="30" r="10" fill="#F0F4FF" opacity="0.6" filter="blur(1px)"/>
                      <path d="M80 16 Q88 24 80 40 Q70 36 80 16" fill="#F0F4FF" opacity="0.7"/>
                    </g>

                    {/* Liquid layer surface wave */}
                    <path d="M0 100 Q 50 95 100 100 T 200 100 L 200 140 L 0 140 Z" fill="url(#liquidGrad)" opacity="0.8">
                      <animate attributeName="d" 
                               dur="4s" 
                               repeatCount="indefinite" 
                               values="M0 100 Q 50 95 100 100 T 200 100 L 200 140 L 0 140 Z;
                                       M0 100 Q 50 105 100 100 T 200 100 L 200 140 L 0 140 Z;
                                       M0 100 Q 50 95 100 100 T 200 100 L 200 140 L 0 140 Z"/>
                    </path>

                    {/* Infused layer with shimmering effect */}
                    <rect x="0" y="120" width="200" height="40" fill="url(#infuseGrad)" opacity="0.9"/>

                    {/* Porous substrate honeycomb structure */}
                    <g opacity="0.3">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <path key={`hex1-${i}`} d={`M${i*20} 140 L${i*20+10} 130 L${i*20+20} 140 L${i*20+20} 155 L${i*20+10} 165 L${i*20} 155 Z`} stroke="#00E87A" strokeWidth="1.5" fill="none"/>
                      ))}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <path key={`hex2-${i}`} d={`M${i*20-10} 155 L${i*20} 145 L${i*20+10} 155 L${i*20+10} 170 L${i*20} 180 L${i*20-10} 170 Z`} stroke="#00E87A" strokeWidth="1.5" fill="none"/>
                      ))}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <path key={`hex3-${i}`} d={`M${i*20} 170 L${i*20+10} 160 L${i*20+20} 170 L${i*20+20} 185 L${i*20+10} 195 L${i*20} 185 Z`} stroke="#00E87A" strokeWidth="1.5" fill="none"/>
                      ))}
                    </g>
                    <rect x="0" y="140" width="200" height="60" fill="#0C1220" opacity="0.4"/>
                    
                    <defs>
                      <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.8"/>
                        <stop offset="100%" stopColor="#0076B8" stopOpacity="0.4"/>
                      </linearGradient>
                      <linearGradient id="infuseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.6"/>
                        <stop offset="100%" stopColor="#00E87A" stopOpacity="0.1"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="absolute bottom-6 left-0 w-full flex justify-between px-8 text-xs font-mono z-20">
                  <div className="flex items-center gap-2 text-[#00C2FF]">
                    <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse"></span> Liquid
                  </div>
                  <div className="flex items-center gap-2 text-[#00E87A]">
                    <span className="w-2 h-2 rounded-full bg-[#00E87A]"></span> Substrate
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Subtle section transition */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.2), transparent)' }} />

      {/* 2. Problem Section */}
      <section className="py-32 bg-[#050810] relative">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-6">
                {siteContent.problem.heading}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
            {siteContent.problem.stats.map((stat, i) => (
              <AnimatedCounter key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
          
          <FadeIn>
            <p className="text-center text-xs text-[#4A5880] mb-20 italic max-w-2xl mx-auto">
              Figures presented in the company pitch deck. Add verified source links before public launch.
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.problem.cards.map((card, i) => (
              <StaggerItem key={i}>
                <div className="relative group rounded-2xl p-px h-full" style={{ background: 'linear-gradient(135deg, rgba(0,194,255,0.1), rgba(0,232,122,0.05))' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(0,194,255,0.4), rgba(0,232,122,0.2))' }} />
                  <div className="rounded-2xl bg-[#0C1220] p-8 h-full flex flex-col relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#00C2FF] mb-6 group-hover:scale-110 group-hover:text-[#00E87A] transition-all duration-300">
                      {i === 0 ? <Zap className="w-5 h-5" /> : 
                       i === 1 ? <Droplets className="w-5 h-5" /> : 
                       i === 2 ? <Factory className="w-5 h-5" /> : 
                       <Building2 className="w-5 h-5" />}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#F0F4FF] mb-3">{card.title}</h3>
                    <p className="text-[#8B9EC4] text-sm leading-relaxed flex-1">{card.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.2), transparent)' }} />

      {/* 3. Technology Intro */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-6">
                {siteContent.technology.heading}
              </h2>
              <p className="text-lg text-[#8B9EC4] leading-relaxed mb-10 font-medium">
                {siteContent.technology.explanation}
              </p>
              
              <div className="space-y-8 mb-12">
                {siteContent.technology.features.map((feature, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-[#00E87A]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#00E87A]/20 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#00E87A]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-heading font-bold text-[#F0F4FF] mb-2 group-hover:text-[#00E87A] transition-colors">{feature.title}</h4>
                      <p className="text-sm text-[#8B9EC4] leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/technology" 
                className="inline-flex items-center gap-2 text-[#00C2FF] font-bold text-sm uppercase tracking-wider hover:text-[#00E87A] transition-colors group"
              >
                Deep dive into mechanics <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} direction="left">
              <div className="relative group rounded-3xl p-px" style={{ background: 'linear-gradient(135deg, rgba(0,232,122,0.3), rgba(0,194,255,0.1))' }}>
                <div className="absolute inset-0 bg-[#00E87A]/5 blur-3xl rounded-3xl -z-10 group-hover:bg-[#00E87A]/10 transition-colors duration-500" />
                <div className="rounded-3xl bg-[#0C1220] p-10 h-full relative z-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E87A]/5 rounded-full blur-3xl -z-10" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#00E87A] mb-8">
                    <Beaker className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-4">The Bio-Inspiration</h3>
                  <p className="text-[#8B9EC4] leading-relaxed text-lg">
                    The SLIPS concept was originally inspired by the Nepenthes pitcher plant, whose liquid-lined surface causes insects and other materials to slide away. We aim to translate this elegant natural mechanism into industrial-grade protective coatings.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,232,122,0.2), transparent)' }} />

      {/* 4. Demo Video */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-6">
                Slippery interfaces in action
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
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
          </FadeIn>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,194,255,0.2), transparent)' }} />

      {/* 5. Industries */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] max-w-2xl leading-tight">
                Built for demanding industrial environments.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link 
                href="/industries"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#00C2FF] hover:bg-[#00C2FF]/5 text-[#F0F4FF] px-6 py-3 rounded-full font-bold text-sm transition-all group"
              >
                Explore all industries <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteContent.industries.map((ind, i) => (
              <StaggerItem key={i}>
                <Link href="/industries" className="block h-full group">
                  <div className="h-full p-8 rounded-3xl bg-[#0C1220] border border-white/[0.06] group-hover:border-[#00C2FF]/30 transition-all duration-300 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2FF]/5 rounded-bl-full group-hover:bg-[#00C2FF]/10 transition-colors duration-500" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#8B9EC4] mb-8 group-hover:text-[#00C2FF] group-hover:scale-110 transition-all duration-300">
                      {i === 0 ? <Beaker className="w-6 h-6" /> :
                       i === 1 ? <Anchor className="w-6 h-6" /> :
                       i === 2 ? <HardHat className="w-6 h-6" /> :
                       i === 3 ? <Car className="w-6 h-6" /> :
                       <Building2 className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-[#F0F4FF] mb-4 group-hover:text-[#00C2FF] transition-colors">{ind.name}</h3>
                    <p className="text-[#8B9EC4] text-sm leading-relaxed">{ind.description}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,232,122,0.2), transparent)' }} />

      {/* 6. Why SLIPS Morocco */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF]">
                Why SLIPS Morocco
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteContent.whySlips.map((item, i) => (
              <StaggerItem key={i}>
                <div className="relative group rounded-2xl p-px h-full" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))' }}>
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(0,194,255,0.3), rgba(0,232,122,0.1))' }} />
                  <div className="rounded-2xl bg-[#0C1220] p-8 h-full relative z-10">
                    <div className="w-8 h-1 bg-gradient-to-r from-[#00C2FF] to-[#00E87A] mb-6 rounded-full" />
                    <h3 className="text-xl font-heading font-bold text-[#F0F4FF] mb-4">{item.title}</h3>
                    <p className="text-[#8B9EC4] text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Roadmap */}
      <section className="py-32 bg-[#0C1220] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-white/[0.06]" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-16 text-center">
                From concept to industrial validation.
              </h2>
            </FadeIn>

            <StaggerContainer className="space-y-6 mb-20 relative">
              <div className="absolute left-6 md:left-[8.5rem] top-8 bottom-8 w-px bg-white/[0.06]" />
              {siteContent.roadmap.map((stage, i) => (
                <StaggerItem key={i}>
                  <div className="relative flex flex-col md:flex-row gap-6 md:gap-12 group">
                    <div className="flex items-center gap-4 md:w-32 flex-shrink-0 z-10 md:justify-end">
                      <div className="text-right hidden md:block">
                        <div className="text-xs font-bold text-[#8B9EC4] uppercase tracking-wider">{stage.stage}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${
                        stage.status === 'COMPLETED' ? 'border-[#00E87A] bg-[#00E87A] shadow-[0_0_15px_rgba(0,232,122,0.5)]' : 
                        stage.status.includes('PROGRESS') ? 'border-[#00C2FF] bg-[#050810] shadow-[0_0_15px_rgba(0,194,255,0.4)] animate-pulse' : 
                        'border-white/[0.2] bg-[#050810]'
                      }`} />
                    </div>
                    
                    <div className="bg-[#050810] border border-white/[0.06] p-6 md:p-8 rounded-2xl flex-1 group-hover:border-white/[0.12] transition-colors ml-10 md:ml-0">
                      <div className="md:hidden text-xs font-bold text-[#8B9EC4] uppercase tracking-wider mb-2">{stage.stage}</div>
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="font-heading font-bold text-[#F0F4FF] text-xl">{stage.name}</h4>
                        <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-md ${
                          stage.status === 'COMPLETED' ? 'bg-[#00E87A]/10 text-[#00E87A]' : 
                          stage.status.includes('PROGRESS') ? 'bg-[#00C2FF]/10 text-[#00C2FF]' : 
                          'bg-white/[0.05] text-[#4A5880]'
                        }`}>
                          {stage.status}
                        </span>
                      </div>
                      <p className="text-[#8B9EC4] text-sm leading-relaxed">{stage.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn>
              <div className="relative group rounded-3xl p-px" style={{ background: 'linear-gradient(135deg, rgba(0,194,255,0.3), rgba(91,107,248,0.1))' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C2FF]/10 to-[#5B6BF8]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                <div className="rounded-3xl bg-[#050810] p-10 relative z-10">
                  <h3 className="text-xl font-heading font-bold text-[#F0F4FF] mb-8 flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#00C2FF]" />
                    Exploratory Collaboration Discussions
                  </h3>
                  <ul className="space-y-5 mb-8">
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 text-[#00C2FF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#8B9EC4] text-sm">CNRST UATRS platform approached regarding materials characterization</span>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 text-[#00C2FF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#8B9EC4] text-sm">Fondation MAScIR / MAScIR Valor contacted regarding technical validation</span>
                    </li>
                    <li className="flex gap-4">
                      <ChevronRight className="w-5 h-5 text-[#00C2FF] flex-shrink-0 mt-0.5" />
                      <span className="text-[#8B9EC4] text-sm">UM6P's Materials Science department responded to discuss a possible research collaboration</span>
                    </li>
                  </ul>
                  <div className="text-[#4A5880] text-xs mb-8 italic border-t border-white/[0.06] pt-6">
                    These discussions are early-stage and do not represent formal partnership agreements.
                  </div>
                  <Link 
                    href="/roadmap"
                    className="inline-flex items-center gap-2 text-[#F0F4FF] font-bold text-sm uppercase tracking-wider hover:text-[#00C2FF] transition-colors group"
                  >
                    See full roadmap <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. Founder */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
            <FadeIn className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#0C1220] relative border border-white/[0.06] shadow-2xl z-10 group">
                <img 
                  src={founderUrl} 
                  alt="Mohamed Baltit, Founder" 
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#00C2FF]/20 rounded-full blur-[60px] z-0" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#00E87A]/10 rounded-full blur-[60px] z-0" />
            </FadeIn>
            
            <FadeIn className="lg:col-span-7" delay={0.2}>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-8 leading-tight">
                Founder-led, mission-driven.
              </h2>
              <div className="prose prose-lg text-[#8B9EC4] mb-10 space-y-6">
                <p>
                  Mohamed Baltit is the Founder and CEO of SLIPS Morocco. His background is in psychology and intercultural mediation. He has developed his understanding of SLIPS technology through independent study, scientific conferences, expert exchanges, and outreach to academic and research institutions.
                </p>
                <p>
                  He is currently building the multidisciplinary team required to move SLIPS Morocco from concept formulation to technical validation and industrial commercialization.
                </p>
              </div>
              <div className="bg-[#0C1220] p-8 rounded-2xl border-l-2 border-[#00C2FF]">
                <p className="text-lg font-medium italic text-[#F0F4FF] mb-4">
                  "Our goal is to transform advanced surface science into practical solutions for the industries building Morocco and Africa's future."
                </p>
                <p className="text-xs font-bold text-[#00C2FF] uppercase tracking-widest">— Founder Vision Statement</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 9. Team Building */}
      <section className="py-32 bg-[#0C1220] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(0,194,255,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-6">
                Help build the next stage.
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <FadeIn delay={0.1}>
              <div className="bg-[#050810] border border-white/[0.06] p-10 rounded-3xl h-full flex flex-col hover:border-[#00C2FF]/30 transition-colors">
                <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.06] rounded-2xl flex items-center justify-center text-[#00C2FF] mb-8">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-4">Materials Science Expert</h3>
                <p className="text-[#8B9EC4] mb-8 flex-1 leading-relaxed">
                  A technical specialist capable of leading formulation development, characterization, and validation.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-[#050810] border border-white/[0.06] p-10 rounded-3xl h-full flex flex-col hover:border-[#00E87A]/30 transition-colors">
                <div className="w-14 h-14 bg-white/[0.03] border border-white/[0.06] rounded-2xl flex items-center justify-center text-[#00E87A] mb-8">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#F0F4FF] mb-4">Business & Commercialization</h3>
                <p className="text-[#8B9EC4] mb-8 flex-1 leading-relaxed">
                  A profile capable of supporting industrial partnerships, pilot development, market strategy, and commercialization.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="text-center">
            <FadeIn delay={0.3}>
              <Link 
                href="/contact?type=join_the_team"
                className="inline-flex items-center gap-2 bg-white text-[#050810] hover:bg-[#F0F4FF] px-8 py-4 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-lg shadow-white/10"
              >
                Explore Collaboration Opportunities <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 10. Collaboration CTA */}
      <section className="py-40 bg-[#050810] relative overflow-hidden">
        {/* Deep Tech Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00E87A]/10 rounded-full blur-[120px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#00C2FF]/10 rounded-full blur-[120px] transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#F0F4FF] mb-8 max-w-5xl mx-auto leading-[1.1] tracking-tight">
              Let's validate the future of industrial surfaces.
            </h2>
            <p className="text-xl text-[#8B9EC4] max-w-3xl mx-auto mb-16 font-medium">
              SLIPS Morocco welcomes conversations with research institutions, materials scientists, industrial operators, pilot partners, commercialization experts, and DeepTech ecosystem organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link 
                href="/contact?type=research_collaboration"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00C2FF] to-[#00E87A] text-[#050810] px-10 py-5 rounded-full font-bold text-base transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(0,194,255,0.4)]"
              >
                Propose Research Collaboration
              </Link>
              <Link 
                href="/contact?type=industrial_pilot"
                className="w-full sm:w-auto bg-[#0C1220] border border-white/20 text-[#F0F4FF] hover:border-white/40 hover:bg-white/5 px-10 py-5 rounded-full font-bold text-base transition-all"
              >
                Discuss an Industrial Pilot
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
