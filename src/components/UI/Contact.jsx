import { email, socialLinks } from '../../assets/data/resumeData';

const Contact = () => (
  <section className="section" id="contact" aria-labelledby="contact-title">
    <div className="container">
      <div className="contact-panel">
        <div>
          <span className="section-index">05 / Contact</span>
          <h2 id="contact-title">Have a good problem to solve?</h2>
          <p>
            I&apos;m always glad to connect about applied AI, product engineering, and
            thoughtful software.
          </p>
          <a className="contact-email" href={`mailto:${email}`}>
            <i className="ri-mail-line" aria-hidden="true" /> {email}
          </a>
        </div>
        <div className="contact-side">
          <a className="button button-primary" href={`mailto:${email}?subject=Let%27s%20connect`}>
            Start a conversation <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </a>
          <div className="social-links" aria-label="Social profiles">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                className="social-link"
                href={href}
                key={label}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
              >
                <i className={icon} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
