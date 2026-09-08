import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects'

export function ProjectPage() {
  const { id } = useParams()
  const project = id ? getProject(id) : undefined

  if (!project) {
    return (
      <div className="missing">
        <h1 className="section__title">Project not found</h1>
        <p style={{ margin: '1rem 0 1.5rem', color: 'var(--muted)' }}>
          That project is not in the portfolio.
        </p>
        <Link className="btn btn--ink" to="/">
          Back home
        </Link>
      </div>
    )
  }

  const index = projects.findIndex((p) => p.id === project.id)
  const next = projects[(index + 1) % projects.length]

  return (
    <article>
      <header className="project-hero">
        <div className="project-hero__inner">
          <Link className="project-hero__back" to="/#work">
            <span aria-hidden="true">←</span> All work
          </Link>
          <div className="project-hero__meta">
            <span>{project.firm}</span>
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          <h1 className="project-hero__title">{project.title}</h1>
          <p className="project-hero__summary">{project.summary}</p>
          <p className="project-hero__location">{project.location}</p>
        </div>
        <div className="project-cover">
          <img src={project.cover} alt={`${project.title} cover`} />
        </div>
      </header>

      <section className="project-detail">
        <div className="project-detail__roles">
          <h2 className="project-detail__label">Role</h2>
          <ul className="role-list">
            {project.roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
        </div>
        <div className="project-detail__scope">
          <h2 className="project-detail__label">Scope</h2>
          <ul className="scope-list">
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="gallery">
        {project.images.map((src, i) => (
          <figure
            key={src}
            className="gallery__item"
            style={{ animationDelay: `${Math.min(i * 0.06, 0.4)}s` }}
          >
            <img
              src={src}
              alt={`${project.title} — view ${i + 1}`}
              loading={i < 2 ? 'eager' : 'lazy'}
            />
          </figure>
        ))}
      </div>

      <div className="project-next">
        <div>
          <p className="project-next__label">Next project</p>
          <Link className="project-next__title" to={`/work/${next.id}`}>
            {next.title}
          </Link>
        </div>
        <Link className="btn btn--line" to={`/work/${next.id}`}>
          View <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  )
}
