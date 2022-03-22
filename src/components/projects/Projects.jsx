import React, { useState } from 'react'
import './Projects.scss'
import SingleProject from '../singleProject/SingleProject'
import { projects } from '../../data'

const Projects = () => {
  const [showMore, setShowMore] = useState(3)

  const handleShowMore = () => {
    setShowMore(showMore + showMore)
  }
  return (
    <div className="pl" id="projects">
      <div className="imgBackground">
        <img
          /*           src="https://cdnb.artstation.com/p/assets/images/images/021/893/913/original/linda-hovde-02.gif?1573340277"
           */

          src="https://cdn.dribbble.com/users/3565709/screenshots/6458487/db_axion_04_preview_800x600.gif"
          alt="bakcground"
          width="20%"
          height="20%"
        />
      </div>
      <div className="pl-texts">
        <h1 className="pl-title">My projects</h1>
        <p className="pl-desc">
          I create FrontEnd applications with React, BackEnd applications with
          Node.js and MongoDB as well as FullStack MERN applications
        </p>
      </div>
      <div className="myProjects">
        <div className="pl-list">
          {projects.slice(0, showMore).map((item) => (
            <SingleProject key={item.id} img={item.img} link={item.link} />
          ))}
        </div>
      </div>
      <div className="showmore">
        <button
          onClick={handleShowMore}
          style={{
            backgroundColor: 'rgba(49, 0, 23, 0.986)',
          }}
        >
          Show more projects
        </button>
      </div>
      <div className="arrow">
        <a href="#testimonials">
          <img src="img/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  )
}

export default Projects
