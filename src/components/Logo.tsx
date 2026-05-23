import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "w-12 h-12", size = 48 }: LogoProps) {
  // Generate 12 clock tick marks around the perimeter
  const ticks = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const rOuter = 44;
    const rInner = 39;
    const x1 = 50 + rOuter * Math.cos(angle);
    const y1 = 50 + rOuter * Math.sin(angle);
    const x2 = 50 + rInner * Math.cos(angle);
    const y2 = 50 + rInner * Math.sin(angle);
    return { x1, y1, x2, y2 };
  });

  return (
    <svg
      id="rapid-brand-clock-logo"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Bezel Circle */}
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="#020C1B"
        stroke="#C5A059"
        strokeWidth="2.5"
      />
      
      {/* Dial Face (warm elegant gold-cream) */}
      <circle
        cx="50"
        cy="50"
        r="44"
        fill="#F9F4EB"
      />

      {/* Decorative Clock Ticks */}
      {ticks.map((t, idx) => (
        <line
          key={idx}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke="#C5A059"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      ))}

      {/* Inner dotted dial ring */}
      <circle
        cx="50"
        cy="50"
        r="36"
        stroke="#C5A059"
        strokeWidth="0.8"
        strokeDasharray="2 2"
        opacity="0.6"
      />

      {/* Letter "R" (Rapid) sits at 12 o'clock */}
      <text
        x="50"
        y="25"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#0A192F"
        fontSize="15"
        fontWeight="900"
        fontFamily="serif"
      >
        R
      </text>

      {/* Center Row: Horizontal axis of initials: B, [O/Cogwheel], C */}
      
      {/* "B" (Business) Badge in corporate blue circle */}
      <circle
        cx="25"
        cy="54"
        r="9"
        fill="#0A192F"
        stroke="#C5A059"
        strokeWidth="1"
      />
      <text
        x="25"
        y="54"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#E0C188"
        fontSize="10"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        B
      </text>

      {/* Beautiful Golden Central Cogwheel / Compass ("O" structure) */}
      {/* Cog teeth */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 50 + 9 * Math.cos(angle);
        const y1 = 54 + 9 * Math.sin(angle);
        const x2 = 50 + 13 * Math.cos(angle);
        const y2 = 54 + 13 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#C5A059"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
      
      {/* Outer gear ring */}
      <circle
        cx="50"
        cy="54"
        r="10"
        fill="#C5A059"
        stroke="#A3803B"
        strokeWidth="1"
      />
      
      {/* Inner gear white circle */}
      <circle
        cx="50"
        cy="54"
        r="6.5"
        fill="#FFFFFF"
      />
      
      {/* Compass center pin */}
      <circle
        cx="50"
        cy="54"
        r="1.8"
        fill="#0A192F"
      />
      
      {/* Clock hands/Compass pointers styled inside */}
      <line
        x1="50"
        y1="54"
        x2="50"
        y2="50"
        stroke="#0A192F"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="50"
        y1="54"
        x2="54"
        y2="54"
        stroke="#0A192F"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* "C" (Consultancy) Badge in corporate blue circle */}
      <circle
        cx="75"
        cy="54"
        r="9"
        fill="#0A192F"
        stroke="#C5A059"
        strokeWidth="1"
      />
      <text
        x="75"
        y="54"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#E0C188"
        fontSize="10"
        fontWeight="bold"
        fontFamily="sans-serif"
      >
        C
      </text>
    </svg>
  );
}
