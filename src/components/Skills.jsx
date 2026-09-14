import { skillGroups } from "../data/content";
import FlipCard from "./FlipCard";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <h2 className="section-title">Skills</h2>
        <p className="lede">Grouped by area. Tap a card to expand.</p>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <FlipCard
              key={group.name}
              className="skill-card"
              front={
                <>
                  <span className="skill-icon">{group.icon}</span>
                  <h3 className="skill-name">{group.name}</h3>
                  <span className="skill-count">{group.items.length} tools</span>
                </>
              }
              back={
                <div className="chip-row">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
