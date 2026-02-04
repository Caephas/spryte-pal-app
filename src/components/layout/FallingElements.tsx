import { useEffect, useState } from "react";

type Shape = "flower" | "sunburst" | "leaf" | "star";
type Color = "primary" | "secondary" | "accent" | "cream";

interface Element {
  id: number;
  shape: Shape;
  color: Color;
  left: number; // 0-100%
  animationDuration: number; // seconds
  animationDelay: number; // seconds
  size: number; // pixels
  rotation: number; // initial rotation degrees
}

const FallingElements = () => {
  const [elements, setElements] = useState<Element[]>([]);

  useEffect(() => {
    // Generate initial set of elements
    const elementCount = 8;
    const newElements: Element[] = [];

    for (let i = 0; i < elementCount; i++) {
      // Divide screen into 8 sections (100 / 8 = 12.5%)
      // Place each element in its own section with some random variation
      const sectionWidth = 100 / elementCount;
      const randomOffset = Math.random() * (sectionWidth - 5); // Keep inside section roughly
      const left = i * sectionWidth + randomOffset;

      newElements.push(generateElement(i, left));
    }

    setElements(newElements);
  }, []);

  const generateElement = (id: number, specificLeft?: number): Element => {
    const shapes: Shape[] = ["flower", "sunburst", "leaf", "star"];
    const colors: Color[] = ["primary", "secondary", "accent", "cream"];

    // Weighted random for better distribution if needed, but simple is fine for now

    return {
      id,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      // Use specific left if provided, otherwise random (fallback)
      left: specificLeft ?? Math.random() * 95,
      animationDuration: 12 + Math.random() * 12, // 12-24s slow fall
      animationDelay: Math.random() * 20,
      size: 24 + Math.random() * 24, // 24-48px (slightly larger for detail)
      rotation: Math.random() * 360,
    };
  };

  const getColorHex = (color: Color) => {
    switch (color) {
      case "primary":
        return "#8FA4FF"; // Pastel Blue
      case "secondary":
        return "#FFB099"; // Pastel Orange
      case "accent":
        return "#D9E89E"; // Pastel Green
      case "cream":
        return "#FFFFFF"; // White
      default:
        return "#8FA4FF";
    }
  };

  const getShapeStyles = (element: Element) => {
    const style: React.CSSProperties = {
      left: `${element.left}%`,
      width: `${element.size}px`,
      height: `${element.size}px`,
      animation: `fall ${element.animationDuration}s linear infinite ${element.animationDelay * -1}s, sway ${element.animationDuration / 2}s ease-in-out infinite alternate`,
      top: "-60px",
      opacity: 0.6, // Subtle
      zIndex: 40,
      color: getColorHex(element.color),
    };

    const SvgWrapper = ({ children }: { children: React.ReactNode }) => (
      <div
        className="absolute"
        style={{ ...style, transform: `rotate(${element.rotation}deg)` }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="currentColor"
          className="w-full h-full"
        >
          {children}
        </svg>
      </div>
    );

    if (element.shape === "flower") {
      // 8-petaled flower (from image top left)
      return (
        <SvgWrapper key={element.id}>
          {/* 8 petals rotated */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse
              key={deg}
              cx="50"
              cy="20"
              rx="10"
              ry="20"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          <circle cx="50" cy="50" r="15" />
        </SvgWrapper>
      );
    }

    if (element.shape === "sunburst") {
      // Sunburst (from image top right)
      return (
        <SvgWrapper key={element.id}>
          <circle cx="50" cy="50" r="25" />
          {/* Rays */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
            (deg) => (
              <rect
                key={deg}
                x="45"
                y="0"
                width="10"
                height="20"
                transform={`rotate(${deg} 50 50)`}
              />
            ),
          )}
        </SvgWrapper>
      );
    }

    if (element.shape === "leaf") {
      // Leaf/Drop shape (from image bottom middle)
      return (
        <SvgWrapper key={element.id}>
          <path d="M50 5 C 50 5, 95 30, 95 65 A 45 45 0 0 1 5 65 C 5 30, 50 5, 50 5 Z" />
        </SvgWrapper>
      );
    }

    if (element.shape === "star") {
      // 4-point star (from image bottom right)
      return (
        <SvgWrapper key={element.id}>
          <path d="M50 0 C 60 40, 60 40, 100 50 C 60 60, 60 60, 50 100 C 40 60, 40 60, 0 50 C 40 40, 40 40, 50 0 Z" />
        </SvgWrapper>
      );
    }

    return null;
  };

  return (
    <>
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(-60px); }
            100% { transform: translateY(110vh); }
          }
          @keyframes sway {
            0% { margin-left: -20px; }
            100% { margin-left: 20px; }
          }
        `}
      </style>
      <div
        className="fixed inset-0 pointer-events-none z-40 overflow-hidden select-none"
        aria-hidden="true"
      >
        {elements.map((el) => getShapeStyles(el))}
      </div>
    </>
  );
};

export default FallingElements;
