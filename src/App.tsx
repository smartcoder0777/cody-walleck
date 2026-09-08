import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { ProjectPage } from './pages/ProjectPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </>
  )
}
