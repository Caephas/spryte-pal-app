interface LogoProps {
  variant?: "default" | "white";
  className?: string;
}

export default function Logo({
  variant = "default",
  className = "",
}: LogoProps) {
  // Colors based on variant
  const primaryColor = variant === "white" ? "#ffffff" : "#1a0089";
  const secondaryColor = variant === "white" ? "#ffffff" : "#ff5e33";
  const eyeColor = variant === "white" ? "#1a0089" : "#ffffff";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 80"
      className={className}
      aria-label="Spryte Pal Logo"
    >
      <g transform="translate(10, 10)">
        {/* Icon Shape */}
        <path
          d="M28 60 C12 60 2 48 2 32 C2 18 12 8 26 6 C28 2 34 0 40 4 C44 2 50 4 52 10 C58 12 60 18 56 24 C59 32 58 48 46 56 C40 60 34 60 28 60Z"
          fill={primaryColor}
        />
        {/* Eyes */}
        <circle cx="20" cy="35" r="4" fill={eyeColor} />
        <circle cx="36" cy="35" r="4" fill={eyeColor} />
      </g>

      {/* Text: spryte */}
      <text
        x="80"
        y="55"
        fontFamily="'Fredoka', cursive"
        fontWeight="600"
        fontSize="40"
        fill={primaryColor}
      >
        spryte
      </text>

      {/* Text: pal */}
      <text
        x="215"
        y="55"
        fontFamily="'Fredoka', cursive"
        fontWeight="400"
        fontSize="40"
        fill={secondaryColor}
        fontStyle="italic"
      >
        pal
      </text>
    </svg>
  );
}
