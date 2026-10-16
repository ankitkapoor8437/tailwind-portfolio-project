import { useState } from 'react';
import { email, socialLinks } from '../../assets/data/resumeData';

const apiBaseUrl = import.meta.env.VITE_CONTACT_API_URL;

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatusMessage(null);

    if (!apiBaseUrl) {
      setStatusMessage({
        type: 'error',
        text: 'The contact form is not configured yet. Please email me directly instead.',
      });
      setSubmitting(false);
      return;
    }

    const form = event.currentTarget;
    const submission = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`${apiBaseUrl.replace(/\/+$/, '')}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        setStatusMessage({
          type: 'error',
          text: response.status === 422
            ? 'Please check the form fields and try again.'
            : 'Your message could not be sent. Please try again or email me directly.',
        });
        return;
      }

      const result = await response.json();
      form.reset();
      setStatusMessage({ type: 'success', text: result.message });
    } catch {
      setStatusMessage({
        type: 'error',
        text: 'Could not reach the contact service. Please try again or email me directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="section-index">05 / Contact</span>
            <h2 id="contact-title">Have a good problem to solve?</h2>
            <p>
              I&apos;m always glad to connect about applied AI, product engineering, and
              thoughtful software.
            </p>
            <a className="contact-email" href={`mailto:${email}`}>
              <i className="ri-mail-line" aria-hidden="true" /> {email}
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                maxLength={100}
                required
                disabled={submitting}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                maxLength={254}
                required
                disabled={submitting}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                maxLength={150}
                required
                disabled={submitting}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                maxLength={5000}
                required
                disabled={submitting}
              />
            </div>
            <button className="button button-primary form-submit" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send message'}
              {!submitting && <i className="ri-arrow-right-up-line" aria-hidden="true" />}
            </button>
            {statusMessage && (
              <p
                className={`form-status form-status--${statusMessage.type}`}
                role={statusMessage.type === 'error' ? 'alert' : 'status'}
              >
                {statusMessage.text}
                {statusMessage.type === 'error' && (
                  <>
                    {' '}
                    <a href={`mailto:${email}`}>Email me</a>
                  </>
                )}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
