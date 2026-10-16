import portrait from '../../assets/images/main-image.jpeg';
import { email } from '../../assets/data/resumeData';

const Hero = () => (
  <section className="hero" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <div className="current-role">
          <span className="role-dot" aria-hidden="true" />
          Forward Deployed Engineer (AI/ML Engineer) · Fractal AI
        </div>
        <span className="eyebrow">Applied AI · Full-stack engineering</span>
        <h1 id="hero-title">I build AI systems <span>that ship.</span></h1>
        <p className="hero-intro">
          I&apos;m Ankit Kapoor — a software engineer working across RAG, agentic workflows,
          backend platforms, and the products that bring them to people.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <i className="ri-arrow-down-line" aria-hidden="true" />
          </a>
          <a className="button button-quiet" href={`mailto:${email}`}>
            Get in touch <i className="ri-mail-line" aria-hidden="true" />
          </a>
        </div>
        <div className="hero-meta" aria-label="Areas of focus">
          <span><i className="ri-node-tree" aria-hidden="true" /> RAG &amp; AI agents</span>
          <span><i className="ri-stack-line" aria-hidden="true" /> APIs &amp; platforms</span>
          <span><i className="ri-code-s-slash-line" aria-hidden="true" /> Full-stack products</span>
        </div>
      </div>

      <div className="portrait-wrap">
        <img className="portrait" src={portrait} alt="Ankit Kapoor" />
        <div className="portrait-caption">
          <div>
            <strong>Ankit Kapoor</strong>
            <span>Forward Deployed Engineer (AI/ML Engineer)</span>
          </div>
          <i className="ri-sparkling-2-line" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
