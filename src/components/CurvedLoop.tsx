import { useMemo } from "react";
import "./CurvedLoop.css";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

const CurvedLoop = ({
  marqueeText = "",
  className,
}: CurvedLoopProps) => {
  const text = useMemo(() => {
    // Keep the non-breaking space for consistent spacing
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    ).replace(/✦/g, '✦ '); // Add space after sparkles
  }, [marqueeText]);

  return (
    <div className="straight-marquee-jacket">
      <div className={`straight-marquee ${className || ''}`}>
        <span className="marquee-content">{text}</span>
      </div>
    </div>
  );
};

export default CurvedLoop;