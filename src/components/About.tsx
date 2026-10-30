import { Fragment } from 'react';
import Section from './Section';
import TagRow from './TagRow';
import { about } from '../data/profile';

export default function About() {
  return (
    <Section id="about">
      <p className="eyebrow">About</p>
      <div className="about-grid">
        <div className="about-copy">
          <h2>A bit about me</h2>
          <p className="role-line">{about.roleLine}</p>
          {about.paragraphs.map((text) => (
            <p key={text.slice(0, 24)}>{text}</p>
          ))}
          <div className="box">
            <h3>Hobbies</h3>
            <TagRow tags={about.hobbies} />
          </div>
        </div>

        <div className="side-col">
          <div className="box">
            <h3>language</h3>
            {about.skills.map((group, i) => (
              <Fragment key={group.label ?? `group-${i}`}>
                {group.label && <p className="sub-label">{group.label}</p>}
                <TagRow tags={group.items} />
              </Fragment>
            ))}
          </div>
          <div className="box">
            <h3>Interested in</h3>
            <TagRow tags={about.interests} />
          </div>
        </div>
      </div>
    </Section>
  );
}
