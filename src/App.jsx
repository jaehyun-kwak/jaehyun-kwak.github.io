import { useEffect, useState } from "react";
import "./App.css";
import { profile, news, publications } from "./data";

const navSections = [
  { id: "about", label: "About" },
  { id: "news", label: "News" },
  { id: "research", label: "Research" },
];

function useActiveSection() {
  const [activeSection, setActiveSection] = useState(navSections[0].id);

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      const headerHeight =
        document.querySelector(".site-header")?.getBoundingClientRect().height ??
        0;
      const activationLine = headerHeight + 32;
      const activeId =
        navSections
          .map(({ id }) => {
            const section = document.getElementById(id);

            return section
              ? { id, top: section.getBoundingClientRect().top }
              : null;
          })
          .filter(Boolean)
          .reverse()
          .find(({ top }) => top <= activationLine)?.id ?? navSections[0].id;

      setActiveSection(activeId);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return activeSection;
}

function ProfilePhoto() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="photo-wrap">
      <span className="photo-fallback" aria-hidden="true">
        {initials}
      </span>
      <picture>
        {profile.photoSources?.map((source) => (
          <source key={source.srcSet} srcSet={source.srcSet} type={source.type} />
        ))}
        <img
          src={profile.photo}
          alt={profile.name}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
      </picture>
    </div>
  );
}

function Header({ activeSection }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#about" className="site-title">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          {navSections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "is-active" : undefined}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
          <a href={profile.links.cv} target="_blank" rel="noreferrer">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}

function AuthorList({ authors }) {
  const name = profile.name;
  const parts = authors.split(name);

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {index > 0 && <span className="author-me">{name}</span>}
      {part}
    </span>
  ));
}

function About() {
  return (
    <section id="about" className="about">
      <ProfilePhoto />

      <div className="bio">
        <h1>{profile.name}</h1>

        <p className="lead">
          I am a Ph.D. student in the Graduate School of AI at{" "}
          <a href={profile.links.kaist} target="_blank" rel="noreferrer">
            KAIST
          </a>
          {", advised by "}
          <a href={profile.links.advisor} target="_blank" rel="noreferrer">
            {profile.advisor}
          </a>
          {" in the "}
          <a href={profile.links.lab} target="_blank" rel="noreferrer">
            OSI Lab
          </a>
          . My research interests include {profile.interests}.{" "}
          {profile.researchFocus}
        </p>

        <p>
          Previously, I received my M.S. and B.S. degrees in Electrical
          Engineering from KAIST.
        </p>

        <div className="contact" aria-label="Profile links">
          <a href={profile.links.cv} target="_blank" rel="noreferrer">
            CV
          </a>
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.links.scholar} target="_blank" rel="noreferrer">
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
    </div>
  );
}

function News() {
  return (
    <section id="news">
      <SectionTitle>News</SectionTitle>
      <div className="news">
        {news.map(([date, text]) => (
          <div className="news-row" key={`${date}-${text}`}>
            <div className="news-date">{date}</div>
            <div>{text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Research() {
  return (
    <section id="research">
      <SectionTitle>Research</SectionTitle>

      <div className="pubs">
        {publications.map((pub) => (
          <article className="pub" key={pub.title}>
            <div className="pub-main">
              <h3>{pub.title}</h3>
              <p className="authors">
                <AuthorList authors={pub.authors} />
              </p>
              <p className="venue">{pub.venue}</p>
            </div>

            {pub.note && <p className="note">{pub.note}</p>}

            <div className="paper-links">
              {Object.entries(pub.links).map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const activeSection = useActiveSection();

  return (
    <>
      <Header activeSection={activeSection} />
      <main className="page">
        <About />
        <News />
        <Research />
      </main>
    </>
  );
}
