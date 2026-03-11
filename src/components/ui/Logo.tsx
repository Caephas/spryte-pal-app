import BlueSpryteBlob from "../../assets/blue-spryte.png";

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

  // When variant is white (usually on dark background), we invert the brightness
  // to make the image pure white, and use mix-blend-screen to hide the black background.
  // When default (usually on light background), we use mix-blend-multiply to hide the white background.
  const imageFilter =
    variant === "white" ? "grayscale(1) invert(1) brightness(100)" : "none";
  const imageBlend = variant === "white" ? "screen" : "multiply";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 80"
      className={className}
      aria-label="Spryte Pal Logo"
    >
      <g transform="translate(10, 10)">
        <image
          href={BlueSpryteBlob}
          x="-5"
          y="-5"
          width="70"
          height="70"
          preserveAspectRatio="xMidYMid slice"
          style={{
            filter: imageFilter,
            mixBlendMode: imageBlend,
          }}
        />
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
        Spryte
      </text>

      {/* Text: pal */}
      <text
        x="210"
        y="55"
        fontFamily="'Fredoka', cursive"
        fontWeight="600"
        fontSize="40"
        fill={secondaryColor}
        fontStyle="italic"
      >
        Pal
      </text>
    </svg>
  );
}
