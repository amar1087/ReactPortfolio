import { useState } from "react";
import "./FlipCard.css";

/**
 * A tap/click-to-flip card. Pass `front` and `back` as JSX.
 * Works with mouse, touch, and keyboard (Enter / Space).
 */
export default function FlipCard({ front, back, className = "" }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);

  return (
    <div
      className={`flip-card ${className} ${flipped ? "flipped" : ""}`}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
    >
      <div className="flip-inner">
        <div className="flip-face flip-front">{front}</div>
        <div className="flip-face flip-back">{back}</div>
      </div>
    </div>
  );
}
