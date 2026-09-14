import { experience } from "../data/content";
import FlipCard from "./FlipCard";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2 className="section-title">Experience</h2>
        <p className="lede">Tap a card to see what actually shipped.</p>
        <div className="exp-grid">
          {experience.map((role) => (
            <FlipCard
              key={role.role}
              className="exp-card"
              front={
                <>
                  <span className="exp-dates">{role.dates}</span>
                  <h3 className="exp-role">{role.role}</h3>
                  <p className="exp-company">{role.company}</p>
                  <span className="exp-flag">tap to see the work &rarr;</span>
                  <span className="flip-hint">&#8635;</span>
                </>
              }
              back={
                <ul>
                  {role.highlights.map((h, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: h }} />
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
