import { profile } from "../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-inner">
        <div>
          <h2 className="section-title" style={{ marginBottom: "0.4rem" }}>
            Let&apos;s talk
          </h2>
          <p>Open to Senior Full Stack, Tech Lead, and AI Engineering roles. Based in {profile.location} — open to remote.</p>
        </div>
        <div className="contact-links">
          <a className="link-underline strong" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="link-underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            {profile.linkedinLabel}
          </a>
        </div>
      </div>
    </section>
  );
}
