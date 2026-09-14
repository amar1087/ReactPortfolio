import { marqueeTags } from "../data/content";
import "./Marquee.css";

export default function Marquee() {
  const track = (
    <span>
      {marqueeTags.map((tag) => (
        <em key={tag}>{tag}</em>
      ))}
    </span>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </div>
  );
}
