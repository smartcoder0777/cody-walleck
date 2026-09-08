export type WorkingCategory =
  | 'Structural BIM'
  | 'Structural Analysis'
  | 'MEP Design'
  | 'Coordination'
  | 'Drawings & Civil'

export type WorkingSample = {
  id: string
  file: string
  src: string
  category: WorkingCategory
  title: string
  caption: string
}

const s = (file: string, category: WorkingCategory, title: string, caption: string): WorkingSample => ({
  id: file.replace('.jpg', ''),
  file,
  src: `/working/${file}`,
  category,
  title,
  caption,
})

/** Technical working samples — drawings, analysis, MEP, BIM coordination */
export const workingSamples: WorkingSample[] = [
  s('2.jpg', 'Structural BIM', 'Steel frame BIM model', '3D structural steel framing with cellular beams, bracing, and foundations.'),
  s('5.jpg', 'Structural BIM', 'Structural framing study', 'Detailed structural BIM assembly for building frame coordination.'),
  s('6.jpg', 'Structural BIM', 'Structural model overview', 'Large-span structural model with framing and support systems.'),

  s('3.jpg', 'Structural Analysis', 'Global deformation map', 'FEA heat map of global deformations across a multi-story frame.'),
  s('4.jpg', 'Structural Analysis', 'ETABS structural model', 'Multi-view ETABS model with plan, 3D, and section coordination.'),
  s('31.jpg', 'Structural Analysis', 'Tower & podium analysis', 'High-rise ETABS model with story response and lateral systems.'),
  s('33.jpg', 'Structural Analysis', 'Analysis model study', 'Structural analysis model for gravity and lateral load paths.'),
  s('101.jpg', 'Structural Analysis', 'High-rise FEA mesh', 'Tall building finite-element model with displacement color mapping.'),
  s('102.jpg', 'Structural Analysis', 'Lateral response study', 'Structural analysis output for tower lateral performance.'),
  s('103.jpg', 'Structural Analysis', 'Core & frame analysis', 'Shear wall and frame interaction under design loads.'),
  s('104.jpg', 'Structural Analysis', 'Story drift evaluation', 'Analytical model used for story drift and stiffness checks.'),
  s('105.jpg', 'Structural Analysis', 'Load path visualization', 'Color-mapped structural response for design verification.'),
  s('106.jpg', 'Structural Analysis', 'Seismic / wind model', 'Tall structure analysis for lateral force-resisting systems.'),

  s('82.jpg', 'MEP Design', 'MEP cutaway coordination', 'Color-coded HVAC ducts and hydronic piping within the structural shell.'),
  s('83.jpg', 'MEP Design', 'MEP routing study', 'Floor-by-floor mechanical and piping distribution.'),
  s('84.jpg', 'MEP Design', 'System layout model', 'Integrated MEP layout for spatial clearance and access.'),
  s('85.jpg', 'MEP Design', 'Duct & pipe corridors', 'Primary distribution corridors coordinated with structure.'),
  s('86.jpg', 'MEP Design', 'Vertical shaft coordination', 'Riser and shaft MEP organization across stories.'),
  s('87.jpg', 'MEP Design', 'Rooftop mechanical plant', 'Roof-level AHUs and primary duct connections.'),
  s('88.jpg', 'MEP Design', 'Full-building MEP model', 'Dense multi-system BIM coordination across an industrial/commercial volume.'),
  s('89.jpg', 'MEP Design', 'Piping network detail', 'Hydronic and domestic piping coordination detail.'),
  s('90.jpg', 'MEP Design', 'HVAC distribution model', 'Primary and secondary air distribution throughout floor plates.'),
  s('91.jpg', 'MEP Design', 'MEP zone coordination', 'Zone-level mechanical systems with structural interfaces.'),
  s('92.jpg', 'MEP Design', 'Fire / wet systems layout', 'Fire protection and wet-system routing coordination.'),
  s('93.jpg', 'MEP Design', 'Ceiling plenum systems', 'Plenum packing of ducts, pipes, and structure.'),
  s('94.jpg', 'MEP Design', 'MEP as-coordinated model', 'Final coordinated MEP model for construction readiness.'),

  s('42.jpg', 'Coordination', 'Revit clash issues', 'Structural–MEP clash tracking in Revit with issue pins and assignments.'),
  s('73.jpg', 'Coordination', '4D construction simulation', 'Linked Architecture / Structure / MEP models with schedule and clash detective.'),
  s('74.jpg', 'Coordination', 'Phased model coordination', 'Construction sequencing tied to BIM deliverables.'),
  s('75.jpg', 'Coordination', 'Multi-discipline federated model', 'Federated model for structure and MEP rough-in coordination.'),
  s('76.jpg', 'Coordination', 'Site & structure 4D', 'Site logistics and structural progression in a time-based model.'),
  s('78.jpg', 'Coordination', 'BIM coordination workspace', 'Clash detection and selection sets across concrete, steel, and MEP.'),

  s('54.jpg', 'Drawings & Civil', 'Highway interchange plan', 'Civil CAD plan for cloverleaf interchange, contours, and parcel layout.'),
  s('56.jpg', 'Drawings & Civil', 'Site / roadway drawing', 'Technical civil drawing for roadway and site infrastructure.'),
  s('57.jpg', 'Drawings & Civil', 'Civil plan sheet', 'Annotated civil engineering plan with grading and alignment.'),
  s('58.jpg', 'Drawings & Civil', 'Infrastructure layout', 'Road and site development drawing for large-scale infrastructure.'),
  s('61.jpg', 'Drawings & Civil', 'Topographic civil plan', 'Contour-driven civil design with roadway geometry.'),
]

export const workingCategories: Array<WorkingCategory | 'All'> = [
  'All',
  'Structural BIM',
  'Structural Analysis',
  'MEP Design',
  'Coordination',
  'Drawings & Civil',
]
