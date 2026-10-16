const About = () => (
  <section className="section" id="about" aria-labelledby="about-title">
    <div className="container about-grid">
      <div className="section-heading">
        <span className="section-index">01 / About</span>
        <h2 id="about-title">Engineering useful intelligence.</h2>
      </div>
      <div className="about-copy">
        <p className="body-copy">
          I build and ship AI-enabled products, from retrieval-augmented generation and
          agent workflows to APIs and interfaces teams use every day. My work spans applied
          AI, backend platform engineering, and full-stack product development.
        </p>
        <p className="body-copy">
          I currently work at Fractal AI. Previously, at Network18, I worked on products
          that bring AI into editorial and analytics workflows. Before that, I built APIs
          and customer-facing features for a distribution CRM at Pantheon India.
        </p>
        <div className="impact-card">
          <strong className="impact-value">10M+</strong>
          <p>Documents served by RAG pipelines built with embeddings, metadata, and vector databases.</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
