import { Layout } from "@/components/Layout";
import { Link } from "wouter";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { CheckCircle2, CircleDashed, Clock, ChevronRight, BookOpen, FlaskConical, Factory, Coins, Handshake, Droplets } from "lucide-react";
import { siteContent } from "@/data/content";

export default function Roadmap() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#050810] pt-32 pb-32 text-[#F0F4FF] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C2FF]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00E87A]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl text-center mx-auto">
              <h1 className="text-5xl md:text-7xl font-heading font-black leading-[1.1] tracking-tight mb-8">
                Development <span className="gradient-text">Roadmap</span>
              </h1>
              <p className="text-xl text-[#8B9EC4] leading-relaxed font-medium">
                A transparent, step-by-step path from scientific concept to industrial validation. We are currently at Stage 2.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Expanded Timeline */}
      <section className="py-32 bg-[#0C1220]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <StaggerContainer className="relative space-y-12">
              <div className="absolute left-[39px] md:left-[2.4rem] top-8 bottom-8 w-px bg-white/[0.06]" />
              
              {siteContent.roadmap.map((stage, i) => {
                const isCompleted = stage.status === 'COMPLETED';
                const inProgress = stage.status.includes('PROGRESS');
                
                return (
                  <StaggerItem key={i}>
                    <div className="relative pl-24 md:pl-28">
                      {/* Timeline Dot */}
                      <div className={`absolute left-8 md:left-8 top-8 w-5 h-5 rounded-full border-2 transform -translate-x-1/2 flex items-center justify-center z-10 ${
                        isCompleted ? 'border-[#00E87A] bg-[#00E87A] shadow-[0_0_20px_rgba(0,232,122,0.4)]' : 
                        inProgress ? 'border-[#00C2FF] bg-[#050810] shadow-[0_0_20px_rgba(0,194,255,0.4)] animate-pulse' : 
                        'border-white/[0.2] bg-[#050810]'
                      }`} />
                      
                      <div className={`bg-[#050810] p-8 md:p-10 rounded-3xl border ${
                        inProgress ? 'border-[#00C2FF]/50 shadow-[0_8px_30px_rgba(0,194,255,0.1)] relative overflow-hidden' : 'border-white/[0.06] hover:border-white/[0.12] transition-colors'
                      }`}>
                        {inProgress && (
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C2FF] to-[#00E87A]"></div>
                        )}
                        
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                          <div>
                            <span className="text-xs font-bold text-[#8B9EC4] uppercase tracking-wider">{stage.stage}</span>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-[#F0F4FF] mt-2">{stage.name}</h3>
                          </div>
                          
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase ${
                            isCompleted ? 'bg-[#00E87A]/10 text-[#00E87A]' : 
                            inProgress ? 'bg-[#00C2FF]/10 text-[#00C2FF]' : 
                            'bg-white/[0.05] text-[#4A5880]'
                          }`}>
                            {isCompleted ? <CheckCircle2 className="w-4 h-4" /> : 
                             inProgress ? <Clock className="w-4 h-4" /> : 
                             <CircleDashed className="w-4 h-4" />}
                            {stage.status}
                          </div>
                        </div>
                        
                        <p className="text-[#8B9EC4] text-lg leading-relaxed mb-8">{stage.description}</p>
                        
                        {inProgress && (
                          <div className="bg-[#0C1220] p-6 rounded-2xl border border-white/[0.06]">
                            <strong className="text-[#00C2FF] block mb-2 text-sm uppercase tracking-widest">Current Focus</strong>
                            <p className="text-[#F0F4FF] leading-relaxed">Engaging academic partners to secure access to materials characterization equipment (SEM, contact angle goniometers) to validate baseline substrate properties before liquid infusion.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Collaboration Matrix */}
      <section className="py-32 bg-[#050810]">
        <div className="container mx-auto px-4 md:px-6">
          <Reveal>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-[#F0F4FF] mb-6">Collaboration Matrix</h2>
              <p className="text-[#8B9EC4] text-lg max-w-2xl mx-auto">
                We are actively building relationships across these domains to accelerate development.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <BookOpen />, title: "Academic Research", text: "Seeking university partners for fundamental surface science collaboration." },
              { icon: <FlaskConical />, title: "Materials Characterization", text: "Requires access to advanced microscopy and wettability testing." },
              { icon: <Droplets />, title: "Coating Formulation", text: "Seeking chemical engineering expertise to optimize lubricant retention." },
              { icon: <Factory />, title: "Industrial Pilot Sites", text: "Engaging operators willing to test early-stage samples." },
              { icon: <Coins />, title: "Funding & Incubation", text: "Evaluating regional DeepTech support programs." },
              { icon: <Handshake />, title: "Commercial Partnerships", text: "Building relationships for future scale-up and distribution." }
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="p-8 bg-[#0C1220] border border-white/[0.06] rounded-3xl flex flex-col gap-6 h-full hover:border-[#00C2FF]/30 transition-colors group">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#00C2FF] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[#F0F4FF] text-xl mb-3">{item.title}</h4>
                    <p className="text-sm text-[#8B9EC4] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Investor Info */}
      <section className="py-32 bg-[#0C1220] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,194,255,0.05),transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl mx-auto bg-[#050810] border border-white/[0.06] p-12 md:p-16 rounded-[2.5rem] text-center shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00E87A]/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#F0F4FF] mb-8 relative z-10">Investor Information</h2>
              
              <div className="flex justify-center flex-wrap gap-4 mb-10 relative z-10">
                <span className="px-5 py-2 bg-white/[0.03] border border-white/[0.1] rounded-full text-sm font-bold text-[#F0F4FF] uppercase tracking-widest">Pre-revenue</span>
                <span className="px-5 py-2 bg-white/[0.03] border border-white/[0.1] rounded-full text-sm font-bold text-[#F0F4FF] uppercase tracking-widest">Pre-seed</span>
              </div>
              
              <div className="space-y-6 mb-12 text-left md:text-center relative z-10">
                <p className="text-xl text-[#8B9EC4] leading-relaxed">
                  An anticipated $500,000 pre-seed requirement is currently being scoped to fund laboratory operations, core team recruitment, and initial pilot testing.
                </p>
                <p className="text-sm text-[#4A5880] italic">
                  Note: SLIPS Morocco is not currently presenting itself as actively raising external capital until the technical team is solidified and the formulation strategy is finalized.
                </p>
              </div>
              
              <Link 
                href="/contact?type=investor_conversation"
                className="inline-flex items-center gap-2 bg-white text-[#050810] hover:bg-[#F0F4FF] px-10 py-5 rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-white/10 relative z-10"
              >
                Contact for future updates
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
