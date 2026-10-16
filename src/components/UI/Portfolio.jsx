import { projects } from '../../assets/data/resumeData';

const ProjectPreview = ({ visual }) => {
  if (visual === 'sentiment') {
    return (
      <div className="project-preview" aria-hidden="true">
        <span className="mono-label">70K IMDb reviews</span>
        <div className="preview-bars">
          {[1, 2, 3, 4, 5].map((bar) => <span key={bar} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview" aria-hidden="true">
      <span className="mono-label">{visual === 'knowledge' ? 'RAG PIPELINE' : 'FULL-STACK'}</span>
      <span className="preview-line">
        <i className={visual === 'knowledge' ? 'ri-node-tree' : 'ri-code-s-slash-line'} />
        {visual === 'knowledge' ? 'retrieve · ground · generate' : 'React × Node.js'}
      </span>
    </div>
  );
};

const Portfolio = () => (
  <section className="section" id="projects" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-heading">
        <span className="section-index">03 / Selected projects</span>
        <h2 id="projects-title">A few things I&apos;ve built.</h2>
        <p>Personal projects exploring retrieval, language technology, and full-stack product development.</p>
      </div>

      <div className="project-grid">
        {projects.map(({ title, category, description, technologies, visual, liveUrl }) => (
          <article className="project-card" key={title}>
            <div className={`project-visual project-visual--${visual}`}>
              <ProjectPreview visual={visual} />
            </div>
            <div className="project-body">
              <span className="mono-label">{category}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tag-list" aria-label={`${title} technologies`}>
                {technologies.map((technology) => (
                  <span className="tag" key={technology}>{technology}</span>
                ))}
              </div>
              {liveUrl && (
                <a
                  className="project-live-link"
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${title} live`}
                >
                  View live project <i className="ri-arrow-right-up-line" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;
