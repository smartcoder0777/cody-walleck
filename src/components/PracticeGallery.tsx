import { useMemo, useState } from 'react'
import {
  workingCategories,
  workingSamples,
  type WorkingCategory,
  type WorkingSample,
} from '../data/working'

export function PracticeGallery() {
  const [filter, setFilter] = useState<(typeof workingCategories)[number]>('All')
  const [active, setActive] = useState<WorkingSample | null>(null)

  const items = useMemo(
    () =>
      filter === 'All'
        ? workingSamples
        : workingSamples.filter((s) => s.category === (filter as WorkingCategory)),
    [filter],
  )

  return (
    <section className="section practice" id="practice">
      <div className="section__head">
        <div>
          <p className="section__label">Technical practice</p>
          <h2 className="section__title">Drawings, analysis & BIM</h2>
        </div>
        <p className="section__lede">
          Working samples beyond finished photos—structural BIM, FEA analysis, clash detection,
          and civil drawings.
        </p>
      </div>

      <div className="practice__filters" role="tablist" aria-label="Filter working samples">
        {workingCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={filter === cat}
            className={`practice__filter${filter === cat ? ' is-active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="practice__grid">
        {items.map((sample) => (
          <li key={sample.id}>
            <button
              type="button"
              className="practice__card"
              onClick={() => setActive(sample)}
              aria-label={`Open ${sample.title}`}
            >
              <span className="practice__visual">
                <img src={sample.src} alt="" loading="lazy" />
              </span>
              <span className="practice__meta">
                <span className="practice__cat">{sample.category}</span>
                <span className="practice__name">{sample.title}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setActive(null)
          }}
        >
          <button type="button" className="lightbox__close" aria-label="Close">
            Close
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.title} />
            <figcaption>
              <strong>{active.title}</strong>
              <span>{active.category}</span>
              <p>{active.caption}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
