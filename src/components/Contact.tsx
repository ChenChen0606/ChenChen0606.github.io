import Section from './Section';
import Icon from './Icon';
import { contacts } from '../data/profile';

export default function Contact() {
  return (
    <Section id="contact" wrapClassName="contact-center">
      <p className="eyebrow">Contact</p>
      <h2>Let's connect</h2>
      <div className="contact-list">
        {contacts.map((c) => (
          <a
            key={c.label}
            className="c-row"
            href={c.href}
            {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <Icon name={c.icon} />
            <span className="c-key mono">{c.label}</span>
            <span className="c-val mono">{c.value}</span>
          </a>
        ))}
      </div>
    </Section>
  );
}
