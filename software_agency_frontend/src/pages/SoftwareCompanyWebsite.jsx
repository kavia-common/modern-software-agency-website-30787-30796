import React, { useEffect, useRef } from 'react';
import '../App.css';
import '../assets/softwarecompanywebsite-1-377.css';

// PUBLIC_INTERFACE
export default function SoftwareCompanyWebsite() {
  /**
   * Render the Ocean Professional themed Software Company layout.
   * Includes: nav, hero, services, portfolio, team, contact, footer.
   * JS behaviors (mobile nav toggle, current year, scroll reveal) are implemented via React effects.
   * Accessibility: semantic landmarks, focus management, ARIA attributes.
   * Assets: all images from /figmaimages with lazy loading and decoding hints.
   */
  const navMenuRef = useRef(null);
  const navToggleRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    // Initialize current year in footer
    if (yearRef.current) {
      yearRef.current.textContent = String(new Date().getFullYear());
    }

    // Mobile nav toggle
    const toggleEl = navToggleRef.current;
    const menuEl = navMenuRef.current;
    if (toggleEl && menuEl) {
      const setExpanded = (val) => {
        toggleEl.setAttribute('aria-expanded', String(val));
        menuEl.classList.toggle('open', !!val);
      };
      const onToggle = () => setExpanded(toggleEl.getAttribute('aria-expanded') !== 'true');
      toggleEl.addEventListener('click', onToggle);

      const closeOnEsc = (e) => {
        if (e.key === 'Escape') setExpanded(false);
      };
      document.addEventListener('keydown', closeOnEsc);

      const closeOnLink = (e) => {
        const target = e.target;
        if (target && target.tagName === 'A') setExpanded(false);
      };
      menuEl.addEventListener('click', closeOnLink);

      return () => {
        toggleEl.removeEventListener('click', onToggle);
        document.removeEventListener('keydown', closeOnEsc);
        menuEl.removeEventListener('click', closeOnLink);
      };
    }
  }, []);

  useEffect(() => {
    // IntersectionObserver reveal on scroll (respect reduced motion)
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = Array.from(document.querySelectorAll('.reveal'));
    if (prefersReduced || !('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header" role="banner">
        <div className="container nav-container">
          <a className="brand" href="#" aria-label="Software Company Home">
            <img
              className="brand-mark"
              src="/figmaimages/figma_image_1_611.png"
              width="32"
              height="32"
              alt=""
              aria-hidden="true"
            />
            <span className="brand-name">OceanSoft</span>
          </a>

          <nav className="primary-nav" aria-label="Primary">
            <button
              className="nav-toggle"
              id="navToggle"
              aria-expanded="false"
              aria-controls="navMenu"
              aria-label="Toggle navigation"
              ref={navToggleRef}
            >
              <span className="bar" aria-hidden="true"></span>
              <span className="bar" aria-hidden="true"></span>
              <span className="bar" aria-hidden="true"></span>
            </button>
            <ul id="navMenu" className="menu" ref={navMenuRef} role="menubar">
              <li role="none"><a role="menuitem" href="#services">Services</a></li>
              <li role="none"><a role="menuitem" href="#portfolio">Work</a></li>
              <li role="none"><a role="menuitem" href="#team">Team</a></li>
              <li role="none"><a role="menuitem" href="#contact" className="btn btn-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero section-gradient" id="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Software Agency</p>
              <h1 id="hero-title">We design and build reliable digital products</h1>
              <p className="lede">
                From concept to launch — scalable web and mobile solutions engineered for growth.
              </p>
              <div className="cta-row">
                <a href="#contact" className="btn btn-primary">Start a project</a>
                <a href="#portfolio" className="btn btn-ghost">View our work</a>
              </div>
              <ul className="trust-logos" aria-label="Trusted by">
                <li>
                  <img
                    src="/figmaimages/figma_image_1_612.png"
                    alt="Client 1"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                  />
                </li>
                <li>
                  <img
                    src="/figmaimages/figma_image_1_613.png"
                    alt="Client 2"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                  />
                </li>
                <li>
                  <img
                    src="/figmaimages/figma_image_1_614.png"
                    alt="Client 3"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                  />
                </li>
                <li>
                  <img
                    src="/figmaimages/figma_image_1_616.png"
                    alt="Client 4"
                    loading="lazy"
                    decoding="async"
                    width="120"
                    height="40"
                  />
                </li>
              </ul>
            </div>
            <div className="hero-visual">
              <img
                className="hero-illustration"
                src="/figmaimages/figma_image_1_760_315_746_1105_2393.png"
                alt="Product mockups"
                width="680"
                height="480"
                sizes="(max-width: 1024px) 92vw, 520px"
                decoding="async"
              />
              <img
                className="hero-float a"
                src="/figmaimages/figma_image_1_760_315_724.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width="220"
                height="160"
              />
              <img
                className="hero-float b"
                src="/figmaimages/figma_image_1_678_312_690.png"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                width="220"
                height="160"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services" aria-labelledby="services-title">
          <div className="container">
            <header className="section-header">
              <h2 id="services-title">Services</h2>
              <p className="section-subtitle">Strategy, design, and engineering for modern platforms</p>
            </header>
            <div className="cards services-grid">
              <article className="card reveal">
                <img
                  className="icon"
                  src="/figmaimages/figma_image_1_803.png"
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
                <h3>Product Strategy</h3>
                <p>Discovery, roadmapping, and validation to align business goals with user needs.</p>
                <a href="#" className="link">Learn more</a>
              </article>
              <article className="card reveal">
                <img
                  className="icon"
                  src="/figmaimages/figma_image_1_805.png"
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
                <h3>UX/UI Design</h3>
                <p>Human-centered design systems and accessible interfaces that delight.</p>
                <a href="#" className="link">Learn more</a>
              </article>
              <article className="card reveal">
                <img
                  className="icon"
                  src="/figmaimages/figma_image_1_806.png"
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
                <h3>Web Development</h3>
                <p>Robust, scalable applications with modern stacks and best practices.</p>
                <a href="#" className="link">Learn more</a>
              </article>
              <article className="card reveal">
                <img
                  className="icon"
                  src="/figmaimages/figma_image_1_807.png"
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  loading="lazy"
                  decoding="async"
                />
                <h3>Mobile Apps</h3>
                <p>High-performance native and cross-platform experiences for iOS and Android.</p>
                <a href="#" className="link">Learn more</a>
              </article>
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section section-alt" id="portfolio" aria-labelledby="portfolio-title">
          <div className="container">
            <header className="section-header">
              <h2 id="portfolio-title">Selected Work</h2>
              <p className="section-subtitle">A snapshot of recent projects</p>
            </header>
            <div className="portfolio-grid">
              <figure className="work-card reveal">
                <img
                  src="/figmaimages/figma_image_1_532.png"
                  alt="Project dashboard"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Analytics Dashboard</h3>
                  <p>Data visualization platform for enterprise insights.</p>
                </figcaption>
              </figure>
              <figure className="work-card reveal">
                <img
                  src="/figmaimages/figma_image_1_702.png"
                  alt="E-commerce storefront"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>E‑commerce</h3>
                  <p>Headless storefront with lightning-fast performance.</p>
                </figcaption>
              </figure>
              <figure className="work-card reveal">
                <img
                  src="/figmaimages/figma_image_1_704.png"
                  alt="Finance mobile app"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>Mobile Finance</h3>
                  <p>Secure money management app with delightful UX.</p>
                </figcaption>
              </figure>
              <figure className="work-card reveal">
                <img
                  src="/figmaimages/figma_image_1_766.png"
                  alt="SaaS admin UI"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>
                  <h3>SaaS Admin</h3>
                  <p>Design system and admin UX for B2B SaaS.</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section" id="team" aria-labelledby="team-title">
          <div className="container">
            <header className="section-header">
              <h2 id="team-title">Our Team</h2>
              <p className="section-subtitle">Experienced product designers and engineers</p>
            </header>
            <div className="team-grid">
              <article className="person reveal">
                <img
                  src="/figmaimages/figma_image_1_820.png"
                  alt="Portrait of team member"
                  loading="lazy"
                  decoding="async"
                />
                <div className="person-info">
                  <h3>Alex Kim</h3>
                  <p className="role">Product Designer</p>
                </div>
              </article>
              <article className="person reveal">
                <img
                  src="/figmaimages/figma_image_1_823.png"
                  alt="Portrait of team member"
                  loading="lazy"
                  decoding="async"
                />
                <div className="person-info">
                  <h3>Jordan Lee</h3>
                  <p className="role">Frontend Engineer</p>
                </div>
              </article>
              <article className="person reveal">
                <img
                  src="/figmaimages/figma_image_1_834.png"
                  alt="Portrait of team member"
                  loading="lazy"
                  decoding="async"
                />
                <div className="person-info">
                  <h3>Riley Chen</h3>
                  <p className="role">Mobile Engineer</p>
                </div>
              </article>
              <article className="person reveal">
                <img
                  src="/figmaimages/figma_image_1_845.png"
                  alt="Portrait of team member"
                  loading="lazy"
                  decoding="async"
                />
                <div className="person-info">
                  <h3>Sam Patel</h3>
                  <p className="role">Tech Lead</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section section-alt" id="contact" aria-labelledby="contact-title">
          <div className="container">
            <header className="section-header">
              <h2 id="contact-title">Let’s work together</h2>
              <p className="section-subtitle">Tell us about your project and timeline</p>
            </header>
            <form className="contact-form" noValidate>
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" required />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Project brief"></textarea>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Send message</button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#">
              <img
                className="brand-mark"
                src="/figmaimages/figma_image_1_611.png"
                width="32"
                height="32"
                alt=""
                aria-hidden="true"
              />
              <span className="brand-name">OceanSoft</span>
            </a>
            <p className="small">Building dependable software since 2014.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <h3 className="footer-heading">Company</h3>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </nav>
          <nav className="footer-nav" aria-label="Resources">
            <h3 className="footer-heading">Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </nav>
          <div className="footer-cta">
            <h3 className="footer-heading">Start your project</h3>
            <a href="#contact" className="btn btn-primary">Contact us</a>
          </div>
        </div>
        <div className="container copyright">
          <p className="small">© <span id="year" ref={yearRef}></span> OceanSoft. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
