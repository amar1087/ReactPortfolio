import { education, languages } from "../data/content";
import "./Education.css";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <h2 className="section-title">Education &amp; languages</h2>
        <div className="split-grid">
          <div>
            <h3>Education &amp; certifications</h3>
            {education.map((item) => (
              <div className="cred" key={item.what}>
                <span className="when">{item.when}</span>
                <p className="what">{item.what}</p>
                {item.where && <p className="where">{item.where}</p>}
              </div>
            ))}
          </div>
          <div>
            <h3>Languages</h3>
            {languages.map((lang) => (
              <div className="lang-row" key={lang.name}>
                <span>{lang.name}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
