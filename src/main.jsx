import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const AS = '/assets';

const testimonials = [
  ['testimonial-01.png', 'Abhishek M.', 'GTM Engineer at Backblaze', 'Sean made the Backblaze interview process positive, transparent, and reassuring during offer delays.'],
  ['testimonial-02.png', 'Bernard Beltran', 'Security Delivery Team Lead', 'Sean is hands-on, consistent with updates, and attentive to reasonable applicant needs.'],
  ['testimonial-03.png', 'Adrian Tolentino', 'Solution Architect / Data Engineer', 'Sean is strategic and technically attuned, with strong understanding of data, cloud, and infrastructure hiring.'],
  ['testimonial-04.png', 'Jezimeel Amon', 'Senior Consultant - DevOps', 'Sean is approachable, dedicated, proactive, and makes the recruitment journey smooth and stress-free.'],
  ['testimonial-05.png', 'Joshua Louis Isanan', 'Senior Data Architect', 'Sean processed requirements quickly and provided proactive, timely updates throughout hiring.'],
  ['testimonial-06.png', 'Jason Picones', 'Senior MSSQL & Azure DBA', 'Sean provided invaluable guidance, fast responses, and support during negotiations.'],
  ['testimonial-07.png', 'Algene Mora', 'Senior Azure DevOps Engineer', 'Sean is hands-on, responsive to recruitment questions, and very approachable.'],
  ['testimonial-08.png', 'Myrtle Pua', 'Senior Database Administrator', 'Sean provided clear communication, timely updates, thoughtful guidance, and genuine candidate care.'],
  ['testimonial-09.png', 'Jonnalyn A. Paca', 'Lead Consultant - Software Engineering', 'Sean understood career goals, matched aligned opportunities, and guided the process at every stage.'],
  ['testimonial-10.png', 'Romel Dela Cruz', 'Business Intelligence Developer', 'Sean was transparent about the process, gave timely updates, and helped candidates make informed decisions.'],
  ['testimonial-11.png', 'Raniel Quirante', 'C# .NET Developer', 'Sean asks the right questions, communicates clearly, and makes recruitment smooth and respectful.'],
  ['testimonial-12.png', 'Lincoln Grant Ng', 'Lead Consultant - Software Engineer', 'Sean showed consistent follow-through, professionalism, and commitment to going above and beyond.'],
  ['testimonial-13.png', 'Jayr Abawag', 'Cloud Engineer / Azure DevOps Engineer', 'Sean understands candidate goals and takes time to learn how technical work applies in the real world.'],
  ['testimonial-15.png', 'Oliver Velasco', 'Cloud Transformation Architecture and Design', 'Sean provided guidance, timely updates, encouragement, and a smooth hiring experience.'],
  ['testimonial-16.png', 'Reymart Evangelista', 'Azure / IT Specialist', 'Sean is approachable, understanding, and guides candidates through the full process until day one.'],
  ['testimonial-17.png', 'Pitt Duena', 'Cloud Platform Leader', 'Sean created a smooth and effective process with a professional and personal touch.'],
  ['testimonial-18.png', 'Lennard Leocadio', 'Lead / Manager / Data Engineer', 'Sean is approachable, dedicated, responsive, and a rare resource every company should have.'],
  ['testimonial-19.png', 'Jerome Clerino', 'DevOps-SRE / Cloud Platform Engineering', 'Sean identifies and attracts top technical talent with strong communication and professionalism.'],
  ['testimonial-20.png', 'Joseph Ibanez', 'Senior Technical Recruiter / Full Stack Developer', 'Sean is a highly skilled recruiter with strong technical industry understanding and talent identification ability.'],
].map(([image, name, role, quote], id) => ({ id, image, name, role, quote }));

const toolLogos = [
  ['greenhouse.png', 'Greenhouse'],
  ['salesforce.png', 'Salesforce'],
  ['gem.png', 'Gem'],
  ['seekout.png', 'SeekOut'],
  ['dice.png', 'Dice'],
  ['monster.png', 'Monster'],
  ['fieldglass.png', 'SAP Fieldglass'],
  ['beeline.png', 'Beeline'],
  ['rippling.png', 'Rippling'],
  ['deel.png', 'Deel'],
  ['compass.png', 'Compass'],
  ['erecruit.png', 'Erecruit'],
  ['juicebox.png', 'Juicebox'],
  ['manus.png', 'Manus'],
  ['claude.png', 'Claude'],
  ['chatgpt.png', 'ChatGPT'],
];

const experience = [
  ['backblaze.png', 'Recruitment Specialist, Backblaze', 'Dec 2025 - Present | Remote | California, United States', 'End-to-end technical and non-technical hiring across US, LATAM, and APAC, with EOR support through Deel and Rippling.'],
  ['3cloud.avif', 'Senior Technical Recruiter, 3Cloud', 'Jul 2024 - Nov 2025 | Remote | Makati, Philippines', 'Microsoft-stack recruiting across software, data, DevOps, infrastructure, security, database, Power Platform, and leadership.'],
  ['cornerstone.webp', 'Senior Technical Recruiter / Desk Assistant, CornerStone', 'Aug 2023 - Jul 2024 | Remote | Dallas, Texas', 'Early member of a growing tech staffing team, supporting software, hardware, networking, database, CAD, COBOL, and AS400 searches.'],
  ['eliassen.jpg', 'Senior Technical Recruiter, Eliassen Group', 'Sep 2018 - Aug 2023 | Remote | US clients', 'Promoted from Recruitment Specialist while supporting enterprise clients across delivery, engineering, UX, cyber, systems, and leadership.'],
];

function Logo({ color = 'var(--blue)' }) {
  return (
    <span className="brand-logo" style={{ color }}>
      <span className="hex-container" aria-hidden="true">
        <svg viewBox="0 0 84 96">
          <g transform="translate(-8 -2)"><g transform="translate(11 5)">
            <polygon stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23" fill="currentColor" />
          </g></g>
        </svg>
      </span>
      <span className="logo-container">
        <svg viewBox="0 0 84 96" role="img" aria-label="S logo">
          <g transform="translate(-8 -2)"><g transform="translate(11 5)">
            <polygon stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23" />
            <text x="39" y="61" textAnchor="middle">S</text>
          </g></g>
        </svg>
      </span>
    </span>
  );
}

function Loader({ done }) {
  return (
    <div className={`loader ${done ? 'hide' : ''}`}>
      <svg id="logo-loader" className="loader-logo" viewBox="0 0 100 100" aria-hidden="true">
        <text id="loader-letter" x="50" y="63" textAnchor="middle">S</text>
        <path className="loader-outline" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z" />
      </svg>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      setHidden(current > last && current > 120);
      last = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''} ${hidden ? 'is-hidden' : ''}`}>
      <a className="brand" href="#home" aria-label="Sean Del Rosario home"><Logo /></a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#systems">Systems</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
        <a className="resume-nav" href="#resume">Resume</a>
      </nav>
      <div className="socials">
        <a href="https://github.com/githubsean07" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/sean-del-rosario" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </header>
  );
}

function Portrait() {
  return (
    <div className="portrait-card">
      <div className="portrait">
        <img src={`${AS}/profile/sean-del-rosario.png`} alt="Sean Del Rosario" />
      </div>
    </div>
  );
}

function Marquee({ items, direction = 'left', speed = 30 }) {
  return (
    <div className="tool-marquee" style={{ '--duration': `${speed}s` }}>
      <div className={`tool-marquee-track ${direction === 'right' ? 'reverse' : ''}`}>
        {[...items, ...items].map(([image, name], index) => (
          <div className="tool-logo-item" key={`${name}-${index}`}>
            <img src={`${AS}/tools/${image}`} alt={`${name} logo`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolStack() {
  return (
    <section className="tools" id="tools">
      <div className="tools-copy">
        <p className="kicker">Tools I Use</p>
        <h2>Recruiting systems I use to source, sequence, track, and close technical talent.</h2>
      </div>
      <div className="tool-marquee-shell" aria-label="Recruiting tools Sean uses">
        <Marquee items={toolLogos} speed={34} />
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const active = testimonials[index];
  const previous = () => setIndex((current) => (current - 1 + total) % total);
  const next = () => setIndex((current) => (current + 1) % total);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(next, 5200);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonial-heading">
        <div>
          <p className="kicker">Testimonials</p>
          <h2>Trusted feedback from candidates and technical leaders Sean has guided through high-stakes hiring.</h2>
        </div>
        <div className="testimonial-controls">
          <button type="button" onClick={() => { setPaused(true); previous(); }} aria-label="Previous testimonial">‹</button>
          <button type="button" onClick={() => { setPaused(true); next(); }} aria-label="Next testimonial">›</button>
        </div>
      </div>

      <div className="testimonial-stage" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="testimonial-image-panel" key={active.image}>
          <img src={`${AS}/testimonials/${active.image}`} alt={`LinkedIn recommendation from ${active.name} for Sean Del Rosario`} />
        </div>
        <aside className="testimonial-context">
          <span className="quote-mark">“</span>
          <p>{active.quote}</p>
          <div>
            <strong>{active.name}</strong>
            <span>{active.role}</span>
          </div>
          <small>{String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</small>
        </aside>
      </div>

    </section>
  );
}

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 3200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader done={loaded} />
      <Header />
      <main id="home">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Senior Technical Recruiter</p>
            <h1>Hi, my name is Sean. I turn complex hiring needs into the right technical matches.</h1>
            <p>Seven-plus years across agency, staffing, consulting, and in-house recruiting, focused on cloud, software, data, infrastructure, security, and leadership hiring.</p>
            <div className="hero-actions">
              <a className="primary" href="#experience">View Experience</a>
              <a className="secondary" href="https://www.linkedin.com/in/sean-del-rosario" target="_blank" rel="noreferrer">Connect</a>
            </div>
          </div>
          <Portrait />
        </section>

        <section className="metrics">
          <article><strong>7+</strong><span>years in recruiting</span></article>
          <article><strong>US / LATAM / APAC</strong><span>regional hiring support</span></article>
          <article><strong>Cloud + AI</strong><span>technical hiring focus</span></article>
        </section>

        <section className="split" id="about">
          <div><p className="kicker">About</p><h2>Technical recruiting with product-level attention to signal.</h2></div>
          <div className="copy-stack">
            <p>I enjoy working with technical things and helping companies hire the right people. My work starts with understanding the real requirement, then building a search plan that balances speed, precision, candidate experience, and hiring-manager trust.</p>
            <p>I have recruited across backend, frontend, full stack, UX, cloud, data, DevOps, infrastructure, network, cybersecurity, database, Power Platform, and technical leadership roles.</p>
          </div>
        </section>

        <ToolStack />

        <section className="experience" id="experience">
          <p className="kicker">Experience</p>
          <h2>Four chapters across technical hiring.</h2>
          <div className="timeline">
            {experience.map(([logo, title, meta, body]) => (
              <article key={title}>
                <img src={`${AS}/company/${logo}`} alt="" />
                <div><span>{meta}</span><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="systems" id="systems">
          <div><p className="kicker">Recruiting Systems</p><h2>What Sean brings into a hiring team.</h2></div>
          <div className="system-grid">
            <article><span>01</span><h3>Role Calibration</h3><p>Clean intake, market reality checks, must-have clarity, and hiring-manager alignment before sourcing begins.</p></article>
            <article><span>02</span><h3>Signal-Based Sourcing</h3><p>LinkedIn Recruiter, Google X-Ray, Gem, SeekOut, Dice, Monster, and AI-assisted outreach for sharper candidate discovery.</p></article>
            <article><span>03</span><h3>Candidate Experience</h3><p>Responsive communication, interview coordination, offer support, onboarding awareness, and post-start follow-through.</p></article>
            <article><span>04</span><h3>Recruiting Operations</h3><p>ATS hygiene, interview documentation, analytics, EOR coordination, VMS workflows, and scalable process improvements.</p></article>
          </div>
        </section>

        <Testimonials />

        <section className="certs">
          <p className="kicker">Certifications</p>
          <div className="cert-list">
            <span>Career Essentials in Generative AI</span><span>AI for Organizational Leaders</span><span>Generative AI for Business Leaders</span><span>Preparing HR Teams for Agentic AI</span><span>Generative AI, Recruiting, and Talent Acquisition</span><span>Tech Recruitment Certified Professional</span>
          </div>
        </section>

        <section className="resume-download" id="resume">
          <p className="kicker">Resume</p>
          <h2>Download Sean's senior technical recruiter profile.</h2>
          <p>This draft resume is based on the LinkedIn details and experience notes provided. It is ready as a placeholder and easy to replace later when the final wording is ready.</p>
          <a className="primary" href={`${AS}/resume/Sean_Del_Rosario_Resume.pdf`} download>Download Resume</a>
        </section>

        <section className="contact" id="contact">
          <p className="kicker">Contact</p>
          <h2>Hiring technical talent? Start with a sharper search.</h2>
          <a className="primary" href="https://www.linkedin.com/in/sean-del-rosario" target="_blank" rel="noreferrer">Connect on LinkedIn</a>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
