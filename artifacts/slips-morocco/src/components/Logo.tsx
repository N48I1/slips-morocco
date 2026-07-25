export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Water droplet shape */}
      <ellipse cx="28" cy="22" rx="10" ry="13" fill="url(#dropGrad)" opacity="0.95"/>
      <path d="M28 9 Q35 16 35 22 Q35 29 28 35 Q21 29 21 22 Q21 16 28 9Z" fill="url(#dropGrad)"/>
      {/* Leaf */}
      <path d="M32 12 Q42 8 44 18 Q38 20 32 12Z" fill="#00E87A" opacity="0.9"/>
      {/* Hexagonal base surface suggestion */}
      <path d="M14 32 L20 28 L26 32 L26 38 L20 42 L14 38Z" fill="none" stroke="url(#brandGrad)" strokeWidth="1.2" opacity="0.6"/>
      <path d="M24 32 L30 28 L36 32 L36 38 L30 42 L24 38Z" fill="none" stroke="url(#brandGrad)" strokeWidth="1.2" opacity="0.4"/>
      {/* Wave/surface line */}
      <path d="M12 36 Q20 32 28 36 Q36 40 44 36" stroke="url(#brandGrad)" strokeWidth="1.5" fill="none"/>
      {/* SLIPS text */}
      <text x="52" y="26" fontFamily="Sora, sans-serif" fontWeight="800" fontSize="20" fill="#F0F4FF" letterSpacing="-0.5">SLIPS</text>
      {/* MOROCCO text */}
      <text x="52" y="42" fontFamily="Sora, sans-serif" fontWeight="600" fontSize="10" fill="#00C2FF" letterSpacing="3">MOROCCO</text>
      {/* Gradient defs */}
      <defs>
        <linearGradient id="dropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00C2FF"/>
          <stop offset="100%" stopColor="#0076B8"/>
        </linearGradient>
        <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00C2FF"/>
          <stop offset="100%" stopColor="#00E87A"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
