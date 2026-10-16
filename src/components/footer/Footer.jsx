import { socialLinks } from '../../assets/data/resumeData';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p>© {new Date().getFullYear()} Ankit Kapoor</p>
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
      <a className="footer-top" href="#top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
