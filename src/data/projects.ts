export type Project = {
  id: string
  title: string
  firm: string
  category: string
  location: string
  year: string
  summary: string
  scope: string[]
  roles: string[]
  cover: string
  images: string[]
}

const w = (path: string) => `/work/${path}`

export const projects: Project[] = [
  {
    id: 'hotel-saint-augustine',
    title: 'Hotel Saint Augustine',
    firm: 'Lake Flato',
    category: 'Hotel',
    location: '4110 Loretto Drive, Houston, TX 77006',
    year: '2023–2024',
    summary:
      'Boutique hospitality with structural and site coordination across guest rooms, dining, event spaces, and landscaped courtyards.',
    scope: [
      'Structural design/modeling and coordination for building framing, foundations, steel/timber elements, exterior stairs, bridges/walkways, and structural connections.',
      'Site grading, utilities, drainage, stormwater management, paving, site accessibility, and coordination with the landscaped courtyard environment.',
      'Quantity takeoffs, material quantities, cost-estimating support, value engineering, and construction budget coordination.',
      'BIM/Revit modeling, construction documents, plans, elevations, sections, details, schedules, and interdisciplinary coordination.',
      'Coordination of courtyards, pathways, mature trees, planting, drainage, and outdoor guest spaces.',
    ],
    roles: [
      'Structural Designer',
      'Civil Engineer',
      'Budget/Cost',
      'Documentation',
      'BIM/VDC Coordination',
    ],
    cover: w('Lake Flato/Hotel/Hotel Saint Augustine/1.jpg'),
    images: [
      w('Lake Flato/Hotel/Hotel Saint Augustine/1.jpg'),
      w('Lake Flato/Hotel/Hotel Saint Augustine/2.jpg'),
      w('Lake Flato/Hotel/Hotel Saint Augustine/3.jpg'),
      w('Lake Flato/Hotel/Hotel Saint Augustine/4.jpg'),
      w('Lake Flato/Hotel/Hotel Saint Augustine/5.jpg'),
      w('Lake Flato/Hotel/Hotel Saint Augustine/6.jpg'),
      w('Lake Flato/Hotel/Hotel Saint Augustine/7.jpg'),
      w('Lake Flato/Hotel/Hotel Saint Augustine/8.jpg'),
    ],
  },
  {
    id: 'high-meadow-residence',
    title: 'High Meadow Residence — Aspen',
    firm: 'Lake Flato',
    category: 'Residential',
    location: 'Aspen, CO',
    year: '2024',
    summary:
      'Mountain residence with timber and steel structure and careful integration into the meadow landscape.',
    scope: [
      'Structural design/modeling and coordination for timber framing, steel elements, wood framing, foundations, long-span beams, catwalks, and structural connections. The documented structural engineer was KL&A.',
      'Site coordination including grading, drainage, stormwater management, utilities, and integration of the residence with the sensitive meadow landscape.',
      'Model-based quantity takeoffs, material quantities, cost-estimating support, value engineering, and construction coordination.',
      'BIM/Revit modeling, construction documents, plans, elevations, sections, details, schedules, and consultant coordination.',
      'Coordination with landscape architects to preserve existing aspen and spruce trees, restore native meadow areas, and integrate hydrology and bioretention strategies.',
    ],
    roles: [
      'Structural Designer',
      'Civil Engineer',
      'Budget/Cost',
      'Documentation',
      'Landscape/Site Coordination',
    ],
    cover: w('Lake Flato/residential/High Meadow Residence-Aspen/1.jpg'),
    images: [
      w('Lake Flato/residential/High Meadow Residence-Aspen/1.jpg'),
      w('Lake Flato/residential/High Meadow Residence-Aspen/2.jpg'),
      w('Lake Flato/residential/High Meadow Residence-Aspen/3.jpg'),
      w('Lake Flato/residential/High Meadow Residence-Aspen/4.jpg'),
      w('Lake Flato/residential/High Meadow Residence-Aspen/5.jpg'),
    ],
  },
  {
    id: 'soto-building',
    title: 'Soto Building (The Soto)',
    firm: 'Lake Flato',
    category: 'Office',
    location: '711 Broadway, San Antonio, TX 78215',
    year: '2020',
    summary:
      'Mass-timber workplace with DLT panels, glulam framing, and coordinated masonry façade delivery.',
    scope: [
      'Structural modeling and coordination of the mass-timber system, including DLT floor and roof panels, glulam columns and beams, concrete podium/foundation, structural connections, and cantilevered roof elements.',
      'Site utilities, grading, drainage, stormwater infrastructure, paving, and coordination with the surrounding mixed-use development.',
      'Model-based quantity takeoffs, material quantities, mass-timber procurement coordination, cost-estimating support, and value engineering. StructureCraft was involved early in design and provided early pricing support for the timber system.',
      'BIM/Revit model development, structural and architectural coordination, construction documentation, plans, sections, elevations, details, schedules, and consultant coordination.',
      'Coordination between architecture, concrete structure, mass timber, masonry façade, and prefabricated timber components.',
    ],
    roles: [
      'Structural Designer/Modeler',
      'Civil Engineer',
      'Budget/Cost Support',
      'Documentation',
      'BIM/VDC Coordination',
    ],
    cover: w('Lake Flato/Office/Soto Building/1.jpg'),
    images: [
      w('Lake Flato/Office/Soto Building/1.jpg'),
      w('Lake Flato/Office/Soto Building/2.jpg'),
      w('Lake Flato/Office/Soto Building/3.jpg'),
      w('Lake Flato/Office/Soto Building/4.jpg'),
      w('Lake Flato/Office/Soto Building/5.jpg'),
      w('Lake Flato/Office/Soto Building/6.jpg'),
      w('Lake Flato/Office/Soto Building/7.jpg'),
    ],
  },
  {
    id: 'amy-gutmann-hall',
    title: 'University of Pennsylvania — Amy Gutmann Hall',
    firm: 'Lake Flato',
    category: 'Education',
    location: '3333 Chestnut Street, Philadelphia, PA 19104',
    year: '2022–2024',
    summary:
      'Academic building with mass-timber structure and campus infrastructure integration.',
    scope: [
      'Structural design and coordination of the innovative mass timber structural system, foundations, connections, stairs, elevator cores, and integration with architectural systems.',
      'Site utilities, grading, drainage, stormwater, streetscape, and campus infrastructure coordination.',
      'Cost planning, procurement coordination, value engineering, construction cost monitoring, and material coordination. Early integrated procurement reportedly helped the project finish under budget.',
      'BIM/Revit coordination, construction documents, plans, sections, elevations, details, schedules, specifications, and multidisciplinary coordination.',
      'Coordination between the mass timber structure, architectural envelope, laboratory spaces, and prefabricated components.',
    ],
    roles: [
      'Structural Designer',
      'Civil Engineer',
      'Budget/Cost',
      'Documentation',
      'BIM/VDC Coordination',
    ],
    cover: w('Lake Flato/Education/University of Pennsylvania-Amy Gutmann/1.jpg'),
    images: [
      w('Lake Flato/Education/University of Pennsylvania-Amy Gutmann/1.jpg'),
      w('Lake Flato/Education/University of Pennsylvania-Amy Gutmann/2.jpg'),
      w('Lake Flato/Education/University of Pennsylvania-Amy Gutmann/3.jpg'),
      w('Lake Flato/Education/University of Pennsylvania-Amy Gutmann/4.webp'),
      w('Lake Flato/Education/University of Pennsylvania-Amy Gutmann/5.jpg'),
    ],
  },
  {
    id: 'patios-at-the-rail',
    title: 'The Patios at the Rail',
    firm: 'Valley Quest Design',
    category: 'Commercial Development',
    location: '7511 Main St, Frisco, TX 75034',
    year: '2017–2020',
    summary:
      'Commercial development with structural, civil, and BIM documentation supporting estimating and interdisciplinary coordination.',
    scope: [
      'Structural modeling and coordination for foundations, columns, beams, slabs, framing, stairs, and other structural components.',
      'Site modeling and documentation including grading, utilities, drainage, paving, parking, sidewalks, and site infrastructure.',
      'Model-based quantity extraction, material takeoffs, design option comparisons, and support for cost estimating.',
      'Revit/BIM model development, construction documents, plans, sections, elevations, details, schedules, sheet setup, and interdisciplinary coordination.',
    ],
    roles: [
      'Structural Designer',
      'Civil Engineer',
      'Budget/Quantity Takeoff',
      'Documentation',
    ],
    cover: w('Valley Quest Design/Commercial Development/The Patios at the Rail/1.webp'),
    images: [
      w('Valley Quest Design/Commercial Development/The Patios at the Rail/1.webp'),
      w('Valley Quest Design/Commercial Development/The Patios at the Rail/2.webp'),
      w('Valley Quest Design/Commercial Development/The Patios at the Rail/3.jpg'),
      w('Valley Quest Design/Commercial Development/The Patios at the Rail/4.jpg'),
    ],
  },
  {
    id: 'towers-at-the-rail',
    title: 'The Towers at the Rail',
    firm: 'Valley Quest Design',
    category: 'Multifamily and Mixed Use Development',
    location: '8763 7th St, Frisco, TX 75034',
    year: '2018–2022',
    summary:
      'Mixed-use towers with structural framing, site development, landscape coordination, and BIM documentation.',
    scope: [
      'Structural modeling and coordination for foundations, structural framing, columns, beams, floor systems, stairs, and rooftop elements.',
      'Site development coordination including grading, drainage, stormwater, utilities, paving, parking, and accessibility.',
      'Model-based quantity takeoffs, material quantities, cost-estimating support, and design-change tracking.',
      'Development of BIM/Revit models, construction drawings, plans, elevations, sections, details, schedules, and interdisciplinary coordination.',
      'Site planning, tree survey and mitigation, landscape design, open-space development, and coordination with city approval requirements.',
    ],
    roles: [
      'Structural Designer',
      'Civil Engineer',
      'Budget/Quantity Takeoff',
      'Documentation/BIM',
      'Landscape/Site Planning',
    ],
    cover: w(
      'Valley Quest Design/Multifamily and Mixed Use Development/The Towers at the Rail/1.webp',
    ),
    images: [
      w('Valley Quest Design/Multifamily and Mixed Use Development/The Towers at the Rail/1.webp'),
      w('Valley Quest Design/Multifamily and Mixed Use Development/The Towers at the Rail/2.webp'),
      w('Valley Quest Design/Multifamily and Mixed Use Development/The Towers at the Rail/3.webp'),
      w('Valley Quest Design/Multifamily and Mixed Use Development/The Towers at the Rail/4.webp'),
    ],
  },
  {
    id: 'oak-grove-softball',
    title: 'Oak Grove Softball Complex Renovation',
    firm: 'Valley Quest Design',
    category: 'Sports Field',
    location: '2700 Dove Loop Rd, Grapevine, TX 76051',
    year: '2018–2020',
    summary:
      'Sports complex renovation spanning structure, civil, landscape, cost estimating, and construction administration as prime consultant support.',
    scope: [
      'Structural design and detailing for shade structures, grandstands, concession/restroom buildings, maintenance facilities, foundations, and supporting structural elements.',
      'Site grading, drainage, stormwater management, parking layout, utility infrastructure, paving, accessibility, and site development.',
      'Construction cost estimates, material quantities, budget tracking, value engineering, and coordination with the City and contractor. Public reporting indicates the main construction agreement was approximately $6.77 million, with additional approved shade/roof and restroom components.',
      'Preparation and coordination of construction documents, drawings, specifications, design revisions, consultant coordination, and construction administration documentation.',
      'Master planning, sports field layout, planting, irrigation, hardscape, amenities, and construction administration. Valley Quest states it guided the project from beginning to completion as prime consultant.',
    ],
    roles: [
      'Structural Designer',
      'Civil Engineer',
      'Budget/Cost Estimation',
      'Documentation/BIM',
      'Landscape/Site Design',
    ],
    cover: w('Valley Quest Design/Sprots Field/Oak Grove Softball Complex Renovation/1.webp'),
    images: [
      w('Valley Quest Design/Sprots Field/Oak Grove Softball Complex Renovation/1.webp'),
      w('Valley Quest Design/Sprots Field/Oak Grove Softball Complex Renovation/2.webp'),
      w('Valley Quest Design/Sprots Field/Oak Grove Softball Complex Renovation/3.webp'),
      w('Valley Quest Design/Sprots Field/Oak Grove Softball Complex Renovation/4.webp'),
    ],
  },
  {
    id: 'georgia-state-capitol',
    title: 'Georgia State Capitol',
    firm: 'RC Monkeys',
    category: 'Government Building',
    location: '206 Washington Street SW, Atlanta, GA 30334',
    year: '2024–2027',
    summary:
      'Historic civic restoration with Scan-to-BIM, structural repair coordination, and preservation documentation.',
    scope: [
      'Existing-condition structural modeling, coordination of historic masonry, dome components, structural repairs, temporary support/scaffolding, and integration of new construction with historic elements.',
      'Site utilities, drainage, accessibility improvements, exterior infrastructure, and coordination with the Capitol campus.',
      'Quantity takeoffs, restoration cost estimating, phased construction budgeting, value engineering, and tracking of specialized historic restoration work.',
      'Laser scanning, existing-condition documentation, Scan-to-BIM, historic architectural documentation, Revit/BIM models, restoration drawings, and construction documents.',
      'Documentation and preservation of historic plaster, ornamental finishes, woodwork, masonry, decorative elements, and historically significant spaces.',
    ],
    roles: [
      'Structural Designer/Modeler',
      'Civil Engineer',
      'Budget/Cost Support',
      'Documentation',
      'Historic Preservation Coordination',
    ],
    cover: w('RC Monkeys/Govenment Building/Georgia State Capitol/1.webp'),
    images: [
      w('RC Monkeys/Govenment Building/Georgia State Capitol/1.webp'),
      w('RC Monkeys/Govenment Building/Georgia State Capitol/2.avif'),
      w('RC Monkeys/Govenment Building/Georgia State Capitol/3.webp'),
      w('RC Monkeys/Govenment Building/Georgia State Capitol/4.webp'),
      w('RC Monkeys/Govenment Building/Georgia State Capitol/5.webp'),
      w('RC Monkeys/Govenment Building/Georgia State Capitol/6.webp'),
      w('RC Monkeys/Govenment Building/Georgia State Capitol/7.webp'),
      w('RC Monkeys/Govenment Building/Georgia State Capitol/8.webp'),
    ],
  },
  {
    id: 'wadsworth-chapel',
    title: 'Wadsworth Chapel',
    firm: 'RC Monkeys',
    category: 'Historic',
    location: '11301 Wilshire Blvd, Los Angeles, CA 90073',
    year: '2026',
    summary:
      'Historic chapel rehabilitation with seismic retrofit coordination and Victorian fabric preservation.',
    scope: [
      'Existing-condition structural modeling, seismic retrofit coordination, foundation repairs, structural strengthening, roof and framing rehabilitation, and integration of new structural systems with historic fabric.',
      'Site utilities, drainage, accessibility improvements, pathways, grading, and coordination with the larger VA campus infrastructure.',
      'Existing-condition quantity takeoffs, restoration cost estimating, phasing, specialized historic material evaluation, and construction cost coordination.',
      'Laser scanning, Scan-to-BIM, existing-condition documentation, Revit modeling, historic preservation drawings, demolition/repair documentation, and construction documents.',
      'Documentation and preservation of original Victorian architectural elements, masonry, windows, roof elements, bell tower, interior features, and other historically significant components.',
    ],
    roles: [
      'Structural Designer/Modeler',
      'Civil Engineer',
      'Budget/Cost Support',
      'Documentation',
      'Historic Preservation',
    ],
    cover: w('RC Monkeys/Historic/Wadsworth Chapel/1.webp'),
    images: [
      w('RC Monkeys/Historic/Wadsworth Chapel/1.webp'),
      w('RC Monkeys/Historic/Wadsworth Chapel/2.webp'),
      w('RC Monkeys/Historic/Wadsworth Chapel/3.webp'),
      w('RC Monkeys/Historic/Wadsworth Chapel/4.webp'),
      w('RC Monkeys/Historic/Wadsworth Chapel/5.webp'),
      w('RC Monkeys/Historic/Wadsworth Chapel/6.webp'),
      w('RC Monkeys/Historic/Wadsworth Chapel/7.webp'),
      w('RC Monkeys/Historic/Wadsworth Chapel/8.webp'),
    ],
  },
  {
    id: 'five-points-marta',
    title: 'Five Points MARTA Station',
    firm: 'RC Monkeys',
    category: 'Station',
    location: 'Atlanta, GA',
    year: '2025–2028',
    summary:
      'Transit station renovation with canopy replacement, temporary structure, and phased construction sequencing.',
    scope: [
      'Structural modeling and coordination for the demolition/deconstruction of the existing concrete canopy, temporary structural support, new canopy structure, steel framing, connections, foundations, and structural interfaces with the existing station.',
      'Site infrastructure, bus hub layout, pedestrian circulation, streetscape improvements, utilities, drainage, grading, paving, and accessibility coordination.',
      'Quantity takeoffs, cost estimating, construction sequencing, value engineering, procurement support, and tracking costs associated with the complex phased construction.',
      'BIM/Revit modeling, existing-condition documentation, demolition drawings, construction documents, plans, sections, details, schedules, and multidisciplinary coordination.',
      'Coordination between existing transit infrastructure, structural demolition, new canopy construction, civil/site improvements, and construction sequencing.',
    ],
    roles: [
      'Structural Designer/Modeler',
      'Civil Engineer',
      'Budget/Cost Support',
      'Documentation',
      'BIM/VDC Coordination',
    ],
    cover: w('RC Monkeys/Station/Five Points MARTA Station/1.avif'),
    images: [
      w('RC Monkeys/Station/Five Points MARTA Station/1.avif'),
      w('RC Monkeys/Station/Five Points MARTA Station/2.avif'),
      w('RC Monkeys/Station/Five Points MARTA Station/3.avif'),
      w('RC Monkeys/Station/Five Points MARTA Station/4.avif'),
      w('RC Monkeys/Station/Five Points MARTA Station/5.avif'),
      w('RC Monkeys/Station/Five Points MARTA Station/6.avif'),
      w('RC Monkeys/Station/Five Points MARTA Station/7.avif'),
      w('RC Monkeys/Station/Five Points MARTA Station/8.avif'),
    ],
  },
]

export const profile = {
  name: 'Cody Walleck',
  fullName: 'Cody Lane Walleck',
  title: 'Structural Engineer & BIM Specialist',
  location: 'Gonzales, Texas',
  email: 'cody.walleck1995@gmail.com',
  phone: '+14099954200',
  education: [
    {
      school: 'University of Texas at Austin',
      degree: 'Master of Architecture',
      years: '9/2015 – 10/2017',
      place: 'Austin, TX',
      url: 'https://www.utexas.edu',
    },
    {
      school: 'University of Texas at Austin',
      degree: 'Bachelor of Architecture',
      years: '9/2010 – 8/2015',
      place: 'Austin, TX',
      url: 'https://www.utexas.edu',
    },
  ],
  experience: [
    {
      firm: 'RC Monkeys',
      place: 'Atlanta, GA',
      years: '9/2024 – 9/2026',
      address: '2310 Parklake Drive NE, Suite 530, Atlanta, GA 30345',
    },
    {
      firm: 'Lake Flato',
      place: 'San Antonio, TX',
      years: '2/2020 – 9/2024',
      address: '311 Third Street, San Antonio, TX 78205',
      url: 'https://www.lakeflato.com',
    },
    {
      firm: 'Valley Quest Design',
      place: 'Denton, TX',
      years: '12/2017 – 1/2020',
      address: '222 S Elm St, Suite 201, Denton, TX 76201',
      url: 'https://www.vq-design.com',
    },
  ],
  intro:
    'Structural engineering and BIM—analysis models, coordination, drawings, and deliverables that fit structure and construction.',
}

export function getProject(id: string) {
  return projects.find((p) => p.id === id)
}

/** Short city label for list views */
export function shortLocation(location: string) {
  const parts = location.split(',').map((p) => p.trim())
  if (parts.length >= 2) {
    const last = parts[parts.length - 1]
    const state = last.split(' ')[0]
    const city = parts[parts.length - 2]
    if (/^[A-Z]{2}$/.test(state) || /^\d/.test(last) === false) {
      return `${city}, ${state}`
    }
  }
  return location
}
