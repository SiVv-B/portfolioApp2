import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contact from '../contact/Contact'
import Intro from '../intro/Intro'
import Projects from '../projects/Projects'
import Testimonials from '../testimonials/Testimonials'

const IndexRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default IndexRoutes
