import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PracticeGallery } from '../components/PracticeGallery'
import { profile, projects, shortLocation } from '../data/projects'

export function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="hero__media">
          <img
            src="/working/2.jpg"
            alt="3D structural steel BIM model"
            fetchPriority="high"
          />
        </div>
        <div className="hero__veil" aria-hidden="true" />
        <div className="hero__content">
          <h1 className="hero__brand">{profile.name}</h1>
          <p className="hero__headline">{profile.title}</p>
          <p className="hero__support">{profile.intro}</p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#practice">
              View practice
            </a>
            <a className="btn btn--ghost" href="#work">
              Built projects
            </a>
          </div>
        </div>
      </section>

      <PracticeGallery />

      <section className="section" id="work">
        <div className="section__head">
          <div>
            <p className="section__label">Built projects</p>
            <h2 className="section__title">Delivered across practice</h2>
          </div>
          <p className="section__lede">
            Structural, MEP, civil, and BIM coordination on hospitality, residential, civic, and
            mixed-use work with Lake Flato, Valley Quest Design, and RC Monkeys.
          </p>
        </div>

        <ul className="work-list">
          {projects.map((project) => (
            <li key={project.id} className="work-item">
              <div className="work-item__meta">
                <div className="work-item__top">
                  <span>{project.firm}</span>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                  <span>{shortLocation(project.location)}</span>
                </div>
                <h3 className="work-item__title">
                  <Link to={`/work/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="work-item__summary">{project.summary}</p>
                <p className="work-item__roles">{project.roles.slice(0, 4).join(' · ')}</p>
                <Link className="work-item__link" to={`/work/${project.id}`}>
                  View project <span aria-hidden="true">→</span>
                </Link>
              </div>
              <Link
                className="work-item__visual"
                to={`/work/${project.id}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src={project.cover} alt="" loading="lazy" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="about" id="about">
        <div className="section">
          <div className="section__head">
            <div>
              <p className="section__label">About</p>
              <h2 className="section__title">Practice & path</h2>
            </div>
          </div>
          <div className="about__grid">
            <div className="about__copy">
              <p>
                {profile.fullName} is a {profile.title.toLowerCase()} based in {profile.location},
                focused on structural modeling and analysis, MEP design coordination, civil/site
                support, cost estimating, and BIM/VDC documentation.
              </p>
              <p>
                Work spans Valley Quest Design, Lake Flato, and RC Monkeys—pairing analysis and
                systems design with construction-ready deliverables.
              </p>
            </div>
            <div className="about__lists">
              <div className="about__block">
                <h3>Experience</h3>
                <ul className="timeline">
                  {profile.experience.map((job) => (
                    <li key={job.firm}>
                      <div className="timeline__main">
                        {'url' in job && job.url ? (
                          <a href={job.url} target="_blank" rel="noreferrer">
                            {job.firm}
                          </a>
                        ) : (
                          <span>{job.firm}</span>
                        )}
                        <span>{job.years}</span>
                      </div>
                      <div className="timeline__sub">{job.place}</div>
                      <div className="timeline__sub">{job.address}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="about__block">
                <h3>Education</h3>
                <ul className="timeline">
                  {profile.education.map((ed) => (
                    <li key={ed.degree}>
                      <div className="timeline__main">
                        <a href={ed.url} target="_blank" rel="noreferrer">
                          {ed.degree}
                        </a>
                        <span>{ed.years}</span>
                      </div>
                      <div className="timeline__sub">
                        {ed.school} · {ed.place}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="section__label">Contact</p>
        <h2 className="section__title">Start a conversation</h2>
        <p className="contact__email">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <p className="contact__place">{profile.location}</p>
        <a className="btn btn--ink" href={`mailto:${profile.email}`}>
          Email Cody
        </a>
      </section>
    </>
  )
}
