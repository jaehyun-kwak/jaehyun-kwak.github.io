import "./App.css";
import { profile, news, publications } from "./data";

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
      <img
        src={profile.photo}
        alt={profile.name}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href="#about" className="site-title">
          {profile.name}
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#news">News</a>
          <a href="#research">Research</a>
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
  return (
    <>
      <Header />
      <main className="page">
        <About />
        <News />
        <Research />
      </main>
    </>
  );
}
