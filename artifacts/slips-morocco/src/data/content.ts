import { ContactInputInquiryType } from "@workspace/api-client-react";

export const siteContent = {
  hero: {
    eyebrow: "BIO-INSPIRED SURFACE TECHNOLOGIES · MOROCCO",
    heading: "Smarter surfaces. Longer-lasting industry.",
    supporting: "SLIPS Morocco is developing next-generation liquid-infused coatings designed to address corrosion, fouling, contamination, and costly maintenance across demanding industrial environments.",
  },
  problem: {
    heading: "Industrial surfaces degrade fast — and the cost is enormous.",
    stats: [
      { value: "$2.5 trillion", label: "Estimated annual global cost of corrosion" },
      { value: "$38 billion", label: "Global anti-corrosion coatings market (2025)" }
    ],
    cards: [
      {
        title: "Corrosion",
        description: "Progressive degradation of surfaces exposed to moisture, salt, chemicals, and harsh environments."
      },
      {
        title: "Fouling and biofilms",
        description: "Residue, biological material, and deposits can accumulate and reduce equipment performance."
      },
      {
        title: "High maintenance costs",
        description: "Industrial operators require recurring cleaning, repair, recoating, and replacement interventions."
      },
      {
        title: "Shortened equipment lifespan",
        description: "Surface degradation can reduce the useful operating life of infrastructure and industrial equipment."
      }
    ]
  },
  technology: {
    heading: "Inspired by one of nature's slipperiest surfaces.",
    explanation: "The approach uses a porous surface infused with a compatible lubricating liquid to create a continuously slippery interface. SLIPS Morocco is exploring how this principle could be adapted into industrial coatings for regional operating conditions.",
    features: [
      {
        title: "Ultra-low adhesion",
        description: "The proposed surface architecture is designed to make it more difficult for liquids, deposits, and contaminants to attach."
      },
      {
        title: "Protective barrier",
        description: "The liquid-infused interface is intended to limit direct contact between the underlying material and damaging environmental agents."
      },
      {
        title: "Lower maintenance potential",
        description: "By reducing adhesion and surface exposure, the technology may help reduce cleaning, repair, and recoating requirements after validation."
      }
    ]
  },
  industries: [
    {
      name: "Chemical and phosphate industries",
      description: "Potential applications for protecting tanks, pipes, and processing equipment from aggressive agents."
    },
    {
      name: "Ports and maritime infrastructure",
      description: "Potential applications for reducing bio-fouling and salt-water corrosion on submerged and exposed surfaces."
    },
    {
      name: "Construction and coastal infrastructure",
      description: "Potential applications for extending the life of rebar and concrete structures in high-salinity environments."
    },
    {
      name: "Automotive and manufacturing",
      description: "Potential applications for keeping sensors clean and reducing residue buildup on production lines."
    },
    {
      name: "Public infrastructure",
      description: "Potential applications for reducing maintenance on public works, desalination plants, and water treatment facilities."
    }
  ],
  whySlips: [
    {
      title: "Regional focus",
      description: "Developing solutions around the operating conditions and industrial needs of Morocco and North Africa."
    },
    {
      title: "Bio-inspired innovation",
      description: "Applying principles derived from naturally slippery surfaces to industrial surface protection."
    },
    {
      title: "Sustainability potential",
      description: "Exploring ways to extend equipment lifespan and reduce resource-intensive maintenance cycles."
    },
    {
      title: "Local-to-continental vision",
      description: "Beginning with Moroccan industrial pilots before pursuing expansion across North Africa and Africa."
    }
  ],
  roadmap: [
    { stage: "Stage 1", name: "Concept Formulation", status: "COMPLETED", description: "Technology opportunity, initial markets, and customer segments identified." },
    { stage: "Stage 2", name: "Materials Characterization", status: "IN PROGRESS / PLANNED", description: "Evaluate wettability, roughness, adhesion behavior, corrosion resistance." },
    { stage: "Stage 3", name: "First POC Samples", status: "PLANNED", description: "Develop initial coating formulations and test samples." },
    { stage: "Stage 4", name: "Laboratory Validation", status: "PLANNED", description: "Compare candidate formulations under controlled conditions." },
    { stage: "Stage 5", name: "Industrial Pilot", status: "FUTURE", description: "Work with an industrial operator to evaluate a formulation in a relevant environment." },
    { stage: "Stage 6", name: "Regional Commercialization", status: "FUTURE", description: "Launch in Morocco, expand across North Africa and Africa." }
  ],
  inquiryTypes: [
    { value: ContactInputInquiryType.industrial_pilot, label: "Industrial Pilot" },
    { value: ContactInputInquiryType.research_collaboration, label: "Research Collaboration" },
    { value: ContactInputInquiryType.join_the_team, label: "Join the Team" },
    { value: ContactInputInquiryType.incubator_or_program, label: "Incubator or Program" },
    { value: ContactInputInquiryType.investor_conversation, label: "Investor Conversation" },
    { value: ContactInputInquiryType.general_inquiry, label: "General Inquiry" }
  ]
};
