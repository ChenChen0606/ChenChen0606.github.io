import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <p className="eyebrow">Hi, I'm</p>
          <h1 className="name">
            {profile.firstName} <span className="accent">{profile.lastName}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-para">{profile.intro}</p>
          <a href="#work" className="btn">See my work →</a>
        </div>
        <div className="hero-photo">
          <img src={`${import.meta.env.BASE_URL}${profile.photo}`} alt={profile.photoAlt} />
        </div>
      </div>
    </section>
  );
}
