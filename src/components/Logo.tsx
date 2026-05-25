import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({
  className = "",
  size = 40,
}: LogoProps) {
  return (
    <div className="flex items-center gap-4">
      
      {/* Logo */}
      <img
        src="/image/LOGO-removebg-preview.png"
        alt="Rapid Business Consultancy Logo"
        width={size}
        height={size}
        className={`object-contain ${className}`}
      />

      {/* Company Text */}
      <div className="flex flex-col leading-tight">
        <h1 className="text-[#2F58A8] font-extrabold uppercase tracking-tight text-[24px] sm:text-[28px]">
          RAPID BUSINESS CONSULTANCY
        </h1>

        <p className="text-[#C49A63] font-bold uppercase tracking-[1px] text-[12px] sm:text-[13px] mt-1">
          SEEING YOU SUCCEEDING IS OUR PRIDE
        </p>
      </div>
    </div>
  );
}