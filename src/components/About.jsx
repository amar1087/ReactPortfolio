import { about } from "../data/content";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="stat-grid">
            {about.stats.map((s) => (
              <div className="stat-tile" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
