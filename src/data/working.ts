export type WorkingCategory =
  | 'Structural BIM'
  | 'Structural Analysis'
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

/** Technical working samples — drawings, analysis, BIM coordination */
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

  s('42.jpg', 'Coordination', 'Revit clash issues', 'Structural clash tracking in Revit with issue pins and assignments.'),
  s('73.jpg', 'Coordination', '4D construction simulation', 'Linked Architecture / Structure models with schedule and clash detective.'),
  s('74.jpg', 'Coordination', 'Phased model coordination', 'Construction sequencing tied to BIM deliverables.'),
  s('75.jpg', 'Coordination', 'Multi-discipline federated model', 'Federated model for structure and systems rough-in coordination.'),
  s('76.jpg', 'Coordination', 'Site & structure 4D', 'Site logistics and structural progression in a time-based model.'),
  s('78.jpg', 'Coordination', 'BIM coordination workspace', 'Clash detection and selection sets across concrete and steel.'),

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
  'Coordination',
  'Drawings & Civil',
]
