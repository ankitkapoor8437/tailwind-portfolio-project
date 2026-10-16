import { education, recognition, skillGroups } from '../../assets/data/resumeData';

const Skills = () => (
  <section className="section" id="skills" aria-labelledby="skills-title">
    <div className="container">
      <div className="section-heading">
        <span className="section-index">04 / Toolkit</span>
        <h2 id="skills-title">Tools for the whole stack.</h2>
        <p>From data and models to infrastructure and the interfaces people use.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map(({ title, skills }) => (
          <article className="skill-card" key={title}>
            <h3>{title}</h3>
            <p>{skills}</p>
          </article>
        ))}
      </div>

      <div className="credentials-grid">
        <section className="credentials-panel" aria-labelledby="education-title">
          <h3 id="education-title">Education</h3>
          {education.map(({ institution, qualification, period }) => (
            <div className="credential-item" key={institution}>
              <strong>{institution}</strong>
              <span>{qualification} · {period}</span>
            </div>
          ))}
        </section>

        <section className="credentials-panel" aria-labelledby="recognition-title">
          <h3 id="recognition-title">Recognition</h3>
          {recognition.map(({ title, description }) => (
            <div className="credential-item" key={title}>
              <strong>{title}</strong>
              <p>{description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  </section>
);

export default Skills;
