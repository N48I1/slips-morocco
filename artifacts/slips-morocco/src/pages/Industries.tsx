import { Layout } from "@/components/Layout";
import { Link, useLocation } from "wouter";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/Reveal";
import { ArrowRight, Factory, Anchor, HardHat, Car, Settings, Building2 } from "lucide-react";

export default function Industries() {
  const [, setLocation] = useLocation();

  const industries = [
    {
      id: "chemical",
      name: "Chemical & Phosphate",
      icon: <Factory className="w-8 h-8" />,
      challenge: "Aggressive chemical exposure and mineral scaling leading to frequent equipment replacement.",
      role: "Designed to form a chemically inert barrier that resists scaling and protects underlying tanks and pipes.",
      opportunity: "Testing performance against specific local phosphate slurry compositions."
    },
    {
      id: "maritime",
      name: "Maritime & Ports",
      icon: <Anchor className="w-8 h-8" />,
      challenge: "Severe bio-fouling (barnacles, algae) and salt-water corrosion on ship hulls and port infrastructure.",
      role: "Aims to provide an ultra-low adhesion surface that prevents bio-organisms from anchoring securely.",
      opportunity: "Submerged panel testing in coastal Moroccan waters."
    },
    {
      id: "construction",
      name: "Coastal Infrastructure",
      icon: <HardHat className="w-8 h-8" />,
      challenge: "Chloride ingress causing rebar corrosion and concrete spalling in coastal environments.",
      role: "Intended to block water and chloride penetration into structural components.",
      opportunity: "Exposed atmospheric testing in high-salinity coastal zones."
    },
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car className="w-8 h-8" />,
      challenge: "Contamination of external sensors, cameras, and surfaces reducing autonomous capabilities.",
      role: "Aims to keep critical optical and sensor surfaces clear of mud, dust, and water droplets.",
      opportunity: "Validation of optical clarity and self-cleaning performance."
    },
    {
      id: "manufacturing",
      name: "General Manufacturing",
      icon: <Settings className="w-8 h-8" />,
      challenge: "Residue buildup on production lines requiring frequent chemical cleaning and downtime.",
      role: "Designed to allow viscous materials to slide freely without leaving residue.",
      opportunity: "Pilot application on specific high-maintenance conveyor segments."
    },
    {
      id: "public",
      name: "Public Infrastructure",
      icon: <Building2 className="w-8 h-8" />,
      challenge: "High lifecycle maintenance costs for desalination plants and water treatment facilities.",
      role: "Potential to reduce bio-film formation and scaling in filtration and pumping systems.",
      opportunity: "Long-term flow loop testing with untreated water."
    }
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-[#050810] pt-32 pb-32 text-[#F0F4FF] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00E87A]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Reveal>
            <div className="max-w-4xl">
              <Link href="/" className="text-[#8B9EC4] hover:text-[#F0F4FF] transition-colors text-sm font-bold mb-8 inline-flex items-center gap-2 uppercase tracking-wider">
                ← Back to Home
              </Link>
              <h1 className="text-5xl md:text-7xl font-heading font-black leading-[1.1] tracking-tight mb-8">
                Target <span className="gradient-text">Industries</span>
              </h1>
              <p className="text-xl text-[#8B9EC4] leading-relaxed font-medium">
                Industrial environments face unique degradation challenges. SLIPS Morocco is exploring applications across key sectors driving the regional economy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-[#0C1220]">
        <div className="container mx-auto px-4 md:px-6">
          <StaggerContainer className="space-y-16">
            {industries.map((ind, i) => (
              <StaggerItem key={ind.id}>
                <div className="bg-[#050810] rounded-[2.5rem] p-10 md:p-16 border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00C2FF]/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="flex flex-col xl:flex-row gap-12 relative z-10">
                    <div className="xl:w-1/3">
                      <div className="w-20 h-20 rounded-3xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[#00C2FF] mb-8 group-hover:scale-110 group-hover:text-[#00E87A] transition-all duration-300">
                        {ind.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#F0F4FF] mb-6 leading-tight">{ind.name}</h2>
                      <button
                        onClick={() => setLocation(`/contact?type=industrial_pilot&org=${ind.name}`)}
                        className="text-[#00C2FF] font-bold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#00E87A] transition-colors group/btn"
                      >
                        Discuss this application <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    
                    <div className="xl:w-2/3 grid md:grid-cols-2 gap-10">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8B9EC4]" />
                          <h4 className="text-xs font-bold text-[#8B9EC4] uppercase tracking-widest">Typical Surface Challenge</h4>
                        </div>
                        <p className="text-[#F0F4FF] text-lg leading-relaxed">{ind.challenge}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                          <h4 className="text-xs font-bold text-[#00C2FF] uppercase tracking-widest">Potential Role of Coating</h4>
                        </div>
                        <p className="text-[#F0F4FF] text-lg leading-relaxed">{ind.role}</p>
                      </div>
                      <div className="md:col-span-2 bg-[#0C1220] p-8 rounded-2xl border border-white/[0.06] group-hover:border-[#00E87A]/30 transition-colors">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#00E87A]" />
                          <h4 className="text-xs font-bold text-[#00E87A] uppercase tracking-widest">Pilot Project Opportunity</h4>
                        </div>
                        <p className="text-[#8B9EC4] text-lg">{ind.opportunity}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <Reveal className="mt-24 text-center">
            <p className="text-[#4A5880] text-sm max-w-2xl mx-auto italic">
              Note: All performance statements describe the intended design function of the technology. SLIPS Morocco is currently at TRL 2 and does not claim current industrial deployments or verified numeric performance improvements.
            </p>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
