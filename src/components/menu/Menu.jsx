import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss'

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
       <ul>
       <li onClick={()=>setMenuOpen(false)}>
          <a href="/">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/projects">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/testimonials">Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="/contact">Contact</a>
        </li>
      </ul> 
    </div>
  )
}
