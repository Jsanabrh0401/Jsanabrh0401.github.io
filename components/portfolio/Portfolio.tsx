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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.8v5.7M8 7.6v.01M12.2 16.5v-3.4c0-1.1.8-1.9 1.9-1.9s1.9.8 1.9 1.9v3.4" />
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

function ProjectPreview({
  type,
  logo,
  mark,
}: {
  type: "web" | "mobile";
  logo: string;
  mark: string;
}) {
  const isMobile = type === "mobile";

  return (
    <div
      className={
        isMobile ? "project-preview project-preview-mobile" : "project-preview"
      }
    >
      <img
        src={isMobile ? mark : logo}
        alt=""
        width={isMobile ? 96 : 220}
        height={isMobile ? 96 : 76}
      />
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
            <a href="#top">{nav.home}</a>
            <a href="#stack">{nav.stack}</a>
            <a href="#about">{nav.about}</a>
            <a href="#experience">{nav.experience}</a>
            <a href="#projects">{nav.projects}</a>
            <a href="#education">{nav.education}</a>
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
                <a href="#top">{nav.home}</a>
                <a href="#stack">{nav.stack}</a>
                <a href="#about">{nav.about}</a>
                <a href="#experience">{nav.experience}</a>
                <a href="#projects">{nav.projects}</a>
                <a href="#education">{nav.education}</a>
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

          <div className="hero-aside">
            <div className="hero-portrait">
              <img
                src="/profile/image.png"
                alt="Caricatura de Juan Pablo Sanabria"
                width={640}
                height={800}
              />
            </div>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span />
            SCROLL
          </div>
        </section>

        <section className="technology-strip section-wrap" id="stack">
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
                    key={`${technology.name}-${index}`}
                  >
                    <span
                      className={[
                        "tech-mark",
                        technology.invert ? "tech-mark-invert" : "",
                        technology.scale === "lg" ? "tech-mark-lg" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-hidden="true"
                    >
                      <img
                        src={technology.icon}
                        alt=""
                        width={technology.scale === "lg" ? 42 : 28}
                        height={technology.scale === "lg" ? 42 : 28}
                      />
                    </span>
                    <span>{technology.name}</span>
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
                  <div className="timeline-place">
                    <span className="timeline-logo">
                      <img src={job.logo} alt="" width={64} height={64} />
                    </span>
                    <div className="timeline-heading">
                      <h3>{job.company}</h3>
                      <h4>{job.role}</h4>
                      <p className="timeline-period">{job.period}</p>
                    </div>
                  </div>
                  <div className="timeline-body">
                    <p className="timeline-description">{job.description}</p>
                    <ul className="tag-list" aria-label="Technologies">
                      {job.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
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
                  <span className="project-status">{project.status}</span>
                </div>
                <ProjectPreview
                  type={project.preview}
                  logo={project.logo}
                  mark={project.mark}
                />
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-copy">{project.description}</p>
                <ul className="project-tech" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                {project.href ? (
                  <a
                    className="project-cta"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {labels.viewProject}
                    <ArrowIcon />
                  </a>
                ) : (
                  <span className="project-cta">
                    {labels.viewProject}
                    <ArrowIcon />
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="education">
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
              href={shared.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={labels.linkedin}
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="contact-meta">
            <span>
              <PinIcon />
              {shared.contact.location}
            </span>
            <a
              href={shared.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              LinkedIn
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
        <a
          className="footer-linkedin"
          href={shared.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
