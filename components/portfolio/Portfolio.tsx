import Link from "next/link";
import type { PortfolioContent } from "@/data/portfolio";
import { shared } from "@/data/portfolio";

type Props = {
  content: PortfolioContent;
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v12H3zM3 7l9 7 9-7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.5 3H5a2 2 0 0 0-2 2c0 8.8 7.2 16 16 16a2 2 0 0 0 2-2v-3.5l-4-1-1.3 2.6a14 14 0 0 1-8.8-8.8L9.5 7l-1-4Z" />
    </svg>
  );
}

function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p className="kicker">
        <span />
        {kicker}
      </p>
      <h2>{title}</h2>
    </div>
  );
}

export default function Portfolio({ content }: Props) {
  const { labels, nav, hero } = content;
  const otherLocale = content.locale === "es" ? "en" : "es";
  const cvHref =
    content.locale === "es"
      ? "/cv/juan-pablo-sanabria-cv-es.pdf"
      : "/cv/juan-pablo-sanabria-cv-en.pdf";

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        {content.locale === "es"
          ? "Saltar al contenido"
          : "Skip to content"}
      </a>

      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Juan Pablo — Home">
            JP<span>.</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#about">{nav.about}</a>
            <a href="#experience">{nav.experience}</a>
            <a href="#projects">{nav.projects}</a>
            <a href="#skills">{nav.skills}</a>
          </nav>

          <div className="header-actions">
            <Link
              className="language-switcher"
              href={`/${otherLocale}/`}
              hrefLang={otherLocale}
              aria-label={labels.switchLanguage}
            >
              <span className={content.locale === "es" ? "active" : ""}>ES</span>
              <i />
              <span className={content.locale === "en" ? "active" : ""}>EN</span>
            </Link>
            <a className="contact-pill desktop-contact" href="#contact">
              {nav.contact}
              <ArrowIcon />
            </a>
            <details className="mobile-menu">
              <summary aria-label={labels.openMenu}>
                <span />
                <span />
              </summary>
              <nav aria-label="Mobile navigation">
                <a href="#about">{nav.about}</a>
                <a href="#experience">{nav.experience}</a>
                <a href="#projects">{nav.projects}</a>
                <a href="#skills">{nav.skills}</a>
                <a href="#contact">{nav.contact}</a>
              </nav>
            </details>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />

          <div className="hero-content">
            <p className="availability">
              <span />
              {hero.availability}
            </p>
            <p className="hero-eyebrow">{hero.eyebrow}</p>
            <h1>
              Juan Pablo
              <br />
              <span>{hero.role}</span>
            </h1>
            <p className="hero-summary">{hero.summary}</p>
            <div className="hero-actions">
              <a className="primary-button" href="#experience">
                {hero.primaryCta}
                <ArrowIcon />
              </a>
              <a className="text-link" href="#contact">
                {hero.secondaryCta}
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-aside" aria-hidden="true">
            <span className="code-label">&lt;developer&gt;</span>
            <div className="monogram">JP</div>
            <span className="code-label">&lt;/developer&gt;</span>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span />
            SCROLL
          </div>
        </section>

        <section className="technology-strip section-wrap" id="skills">
          <SectionHeading kicker={labels.stackKicker} title={labels.stack} />
          <div
            className="tech-carousel"
            aria-label={
              content.locale === "es"
                ? "Carrusel de tecnologías"
                : "Technology carousel"
            }
          >
            <div className="tech-track">
              {[...shared.technologies, ...shared.technologies].map(
                (technology, index) => (
                  <div
                    className="tech-card"
                    aria-hidden={index >= shared.technologies.length}
                    key={`${technology}-${index}`}
                  >
                    <span className="tech-mark" aria-hidden="true">
                      &lt;/&gt;
                    </span>
                    <span>{technology}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading kicker={labels.aboutKicker} title={labels.about} />
          <div className="about-layout">
            <p className="about-lead">{content.profile}</p>
            <div className="about-facts">
              <div>
                <span>01</span>
                <p>{labels.location}</p>
                <strong>{shared.contact.location}</strong>
              </div>
              <div>
                <span>02</span>
                <p>{labels.languages}</p>
                <strong>
                  {content.languages.map((item) => item.language).join(" · ")}
                </strong>
              </div>
            </div>
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <SectionHeading
            kicker={labels.experienceKicker}
            title={labels.experience}
          />
          <div className="timeline">
            {content.experience.map((job, index) => (
              <article className="timeline-item" key={job.company}>
                <div className="timeline-marker">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="timeline-main">
                  <p className="timeline-period">{job.period}</p>
                  <h3>{job.company}</h3>
                  <h4>{job.role}</h4>
                  <p className="timeline-description">{job.description}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {job.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="projects-heading-row">
            <SectionHeading
              kicker={labels.projectsKicker}
              title={labels.projects}
            />
            <p>{labels.projectsNote}</p>
          </div>
          <div className="project-grid">
            {content.projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span>{project.number}</span>
                  <span>{project.status}</span>
                </div>
                <div className="project-placeholder" aria-hidden="true">
                  <span>{project.category}</span>
                  <div className="project-lines">
                    <i />
                    <i />
                    <i />
                  </div>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap">
          <div className="skills-column">
            <SectionHeading
              kicker={labels.educationKicker}
              title={labels.education}
            />
            <div className="education-list">
              {content.education.map((item) => (
                <article key={item.institution}>
                  <p>{item.period}</p>
                  <div>
                    <h3>{item.institution}</h3>
                    <span>{item.program}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="skills-column soft-skills">
            <h3>{labels.strengths}</h3>
            <ul>
              {content.skills.map((skill) => (
                <li key={skill}>
                  <span>+</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-column language-panel">
            <h3>{labels.languages}</h3>
            {content.languages.map((item) => (
              <div key={item.language}>
                <span>{item.language}</span>
                <strong>{item.level}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-glow" aria-hidden="true" />
          <p className="kicker contact-kicker">
            <span />
            {labels.contactKicker}
          </p>
          <h2>{labels.contactTitle}</h2>
          <p className="contact-copy">{labels.contactCopy}</p>
          <a
            className="contact-email"
            href={`mailto:${shared.contact.email}`}
          >
            {shared.contact.email}
            <ArrowIcon />
          </a>
          <div className="contact-actions">
            <a className="primary-button" href={cvHref} download>
              {labels.downloadCv}
              <DownloadIcon />
            </a>
            <a
              className="icon-button"
              href={`mailto:${shared.contact.email}`}
              aria-label={`${labels.email}: ${shared.contact.email}`}
            >
              <MailIcon />
            </a>
            <a
              className="icon-button"
              href={`tel:${shared.contact.phoneHref}`}
              aria-label={`${labels.phone}: ${shared.contact.phoneDisplay}`}
            >
              <PhoneIcon />
            </a>
          </div>
          <div className="contact-meta">
            <span>
              <PinIcon />
              {shared.contact.location}
            </span>
            <a href={`tel:${shared.contact.phoneHref}`}>
              <PhoneIcon />
              {shared.contact.phoneDisplay}
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#top" aria-label="Back to top">
          JP<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {shared.contact.name}
        </p>
        <p>Next.js · TypeScript · Medellín</p>
      </footer>
    </div>
  );
}
