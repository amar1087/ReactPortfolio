import { work } from "../data/content";
import FlipCard from "./FlipCard";
import "./Work.css";

export default function Work() {
  return (
    <section id="work">
      <div className="wrap">
        <h2 className="section-title">Featured work</h2>
        <p className="lede">Four projects that span where I've been and where I'm headed. Tap for stack details.</p>
        <div className="work-grid">
          {work.map((item) => (
            <FlipCard
              key={item.title}
              className="work-card"
              front={
                <>
                  <div>
                    <p className="work-sub">{item.tag}</p>
                    <h3 className="work-title">{item.title}</h3>
                  </div>
                  <span className="flip-hint">&#8635;</span>
                </>
              }
              back={
                <>
                  <p>{item.description}</p>
                  <div className="tag-row">
                    {item.stack.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
