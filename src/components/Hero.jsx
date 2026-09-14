import { useEffect, useState } from "react";
import { profile } from "../data/content";
import "./Hero.css";

function useClock(timezone) {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const [time, setTime] = useState(fmt.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(fmt.format(new Date())), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timezone]);

  return time;
}

export default function Hero() {
  const time = useClock(profile.timezone);

  return (
    <section className="hero" id="top" style={{ borderTop: "none" }}>
      <div className="wrap">
        <div className="hero-top">
          <div className="status-line">
            <span className="dot" />
            {profile.openToRoles} — <span id="clock">{time}</span> {profile.timezoneLabel}, {profile.location.split(",")[0]}
          </div>
          <div className="hero-portrait">
            <img src={profile.photoFile} alt={`Portrait of ${profile.name}`} />
          </div>
        </div>

        <h1 className="name">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className="role">{profile.role}</p>
        <p className="pitch">{profile.pitch}</p>

        <div className="hero-actions">
          <a className="link-underline strong" href={`mailto:${profile.email}`}>
            Email me
          </a>
          <a className="link-underline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className="link-underline" href={profile.resumeFile} target="_blank" rel="noopener noreferrer">
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
