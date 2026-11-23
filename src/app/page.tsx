
import Image from "next/image";

const subjects = [
  {
    number: "01",
    icon: "⌘",
    title: "Computer Science",
    description:
      "Explore programming, artificial intelligence, databases, and computing fundamentals.",
    color: "blue",
    href: "/quiz/computer-science",
  },
  {
    number: "02",
    icon: "∑",
    title: "Mathematics",
    description:
      "Strengthen your mathematical thinking with quizzes on essential concepts and problem-solving.",
    color: "purple",
    href: "#about",
  },
  {
    number: "03",
    icon: "⚛",
    title: "Biology & Science",
    description:
      "Discover biology, chemistry, physics, and the fascinating world of science.",
    color: "teal",
    href: "#about",
  },
  {
    number: "04",
    icon: "Aa",
    title: "English Grammar",
    description:
      "Improve your grammar, vocabulary, sentence structure, and communication skills.",
    color: "orange",
    href: "#about",
  },
  {
    number: "05",
    icon: "✦",
    title: "General Knowledge",
    description:
      "Expand your knowledge of history, geography, current affairs, and the world.",
    color: "pink",
    href: "#about",
  },
  {
    number: "06",
    icon: "◎",
    title: "Competitive Exams",
    description:
      "Prepare for CSS, PMS, PPSC, FPSC, and other competitive examinations.",
    color: "indigo",
    href: "#about",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Inquoria home">
          <Image
            src="/inquoria-logo.png"
            alt="Inquoria — Learn. Explore. Evolve."
            width={500}
            height={250}
            priority
            className="brand-logo"
          />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="#subjects">Explore subjects</a>
          <a href="#about">About</a>
        </nav>

        <a className="header-cta" href="#subjects">
          Explore quizzes <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              YOUR AI-POWERED LEARNING SPACE
            </div>

            <h1>
              Knowledge
              <br />
              begins
              <br />
              with <span>curiosity.</span>
            </h1>

            <p className="hero-description">
              Discover new ideas, challenge what you know, and make every
              learning moment count. Your next discovery starts here.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#subjects">
                Explore subjects <span>→</span>
              </a>

              <a className="secondary-button" href="#about">
                Discover Inquoria
              </a>
            </div>

            <p className="hero-note">
              <span className="note-star">✦</span>
              Learn at your pace. Grow your way.
            </p>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-center">
              <span className="visual-symbol">i.</span>
              <span className="visual-caption">
                THINK · LEARN · GROW
              </span>
            </div>

            <div className="floating-card floating-card-top">
              <span className="floating-icon">✦</span>
              Stay curious
            </div>

            <div className="floating-card floating-card-bottom">
              <span className="floating-icon">✓</span>
              Make progress
            </div>
          </div>
        </section>

        <section className="subjects-section" id="subjects">
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                EXPLORE AND DISCOVER
              </span>
              <h2>Find your next subject.</h2>
              <p>
                Explore different fields, test your knowledge, and keep
                discovering something new.
              </p>
            </div>

            <span className="section-count">
              06 LEARNING AREAS
            </span>
          </div>

          <div className="subject-grid">
            {subjects.map((subject) => (
              <a
                className={`subject-card subject-${subject.color}`}
                href={subject.href}
                key={subject.number}
              >
                <div className="subject-card-top">
                  <span className="subject-icon">
                    {subject.icon}
                  </span>
                  <span className="subject-number">
                    {subject.number}
                  </span>
                </div>

                <h3>{subject.title}</h3>
                <p>{subject.description}</p>

                <span className="subject-arrow">
                  Explore subject <span>→</span>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-content">
            <span className="section-kicker">
              ABOUT INQUORIA
            </span>

            <h2>
              Learn more.
              <br />
              <span>Become more.</span>
            </h2>

            <p>
              Inquoria is an AI-powered learning space designed to make
              knowledge exploration engaging and accessible. Our vision
              is to help learners discover their potential, practise
              what they know, and grow with every learning experience.
            </p>
          </div>

          <div className="about-decoration" aria-hidden="true">
            <span>i.</span>
            <span>✦</span>
            <span>✧</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a
          className="brand footer-brand"
          href="/"
          aria-label="Inquoria home"
        >
          <Image
            src="/inquoria-logo.png"
            alt="Inquoria — Learn. Explore. Evolve."
            width={500}
            height={250}
            className="brand-logo footer-logo"
          />
        </a>

        <p>Learn. Explore. Evolve.</p>

        <span className="copyright">
          © {new Date().getFullYear()} Inquoria. All rights reserved.
        </span>
      </footer>
    </>
  );
}
