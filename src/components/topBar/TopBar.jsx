import React, { useState } from 'react'
import './TopBar.scss'
import { Person, Mail } from '@material-ui/icons'

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            SiwarFolio.
          </a>
          <div className="itemContainer">
            <span>
              <a href="">About me</a>
            </span>
            <span>
              <a href="/projects">Projects</a>
            </span>
            <span>
              <a href="/testimonials">Comments</a>
            </span>
            <span>
              <a href="/contact">Contact me</a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
