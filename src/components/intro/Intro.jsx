import './Intro.scss'
import { init } from 'ityped'
import React, { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'

export default function Intro() {
  const textRef = useRef()
  const introBackground = 'img/red_keyboard_developer.mp4'

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 100,
      loop: true,
      strings: ['Full Stack', 'Front End', 'Back End'],
    })
  }, [])

  return (
    <div className="intro">
      <div className="left">
        <div className="imgContainer">
          <div className="videoBackground">
            <ReactPlayer
              url={introBackground}
              controls
              playing
              muted
              loop
              height="100vh"
              width="100vw"
            />
          </div>
          <img src="img/webDeveloper.png" alt="web developer" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hello, my name is</h3>
          <h2 style={{ color: 'rgb(238, 218, 226, 0.795)' }}>Siwar</h2>
          <h4 style={{ color: 'rgba(226, 173, 192, 0.685)' }}>I am a </h4>
          <h2>
            <span ref={textRef} style={{ color: '#FFDAEC' }}></span> Web
            Developer
          </h2>
        </div>

        <a href="/projects">
          <img src="img/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
