import { experience } from '../../assets/data/resumeData';

const Experience = () => (
  <section className="section" id="experience" aria-labelledby="experience-title">
    <div className="container">
      <div className="section-heading">
        <span className="section-index">02 / Experience</span>
        <h2 id="experience-title">Where I&apos;ve made an impact.</h2>
        <p>Building production systems, dependable platforms, and experiences around emerging technology.</p>
      </div>

      <div className="timeline">
        {experience.map(({ role, company, location, period, highlights }) => (
          <article className="experience-card" key={company}>
            <div className="experience-date">
              <span className="mono-label">{period}</span>
              {location && <span>{location}</span>}
            </div>
            <div>
              <div className="experience-title">
                <div>
                  <h3>{role}</h3>
                  <p>{company}</p>
                </div>
              </div>
              {highlights.length > 0 && (
                <ul className="highlight-list">
                  {highlights.map((highlight) => (
                    <li key={typeof highlight === 'string' ? highlight : highlight.text}>
                      {typeof highlight === 'string' ? highlight : highlight.text}
                      {typeof highlight !== 'string' && (
                        <a
                          className="highlight-project-link"
                          href={highlight.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {highlight.liveLabel}
                          <i className="ri-arrow-right-up-line" aria-hidden="true" />
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
