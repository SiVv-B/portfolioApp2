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
          src="https://cdnb.artstation.com/p/assets/images/images/021/893/913/original/linda-hovde-02.gif?1573340277"
          alt="bakcground"
        />
      </div>

      <div className="pl-texts">
        <p className="pl-desc">
          I create and edit MERN applications.
          {/*     Front End: React / React redux 
        Back End: Node JS, MongoDB, CRUD API */}
        </p>
        <h1 className="pl-title">My projects</h1>
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
            backgroundColor: ' rgba(71, 2, 34, 0.774) ',
            color: 'rgba(228, 212, 218, 0.966',
          }}
        >
          Show more projects
        </button>
      </div>
      {/*  <div className="arrow">
        <a href="/testimonials">
          <img src="img/down.png" alt="arrow" />
        </a>
      </div> */}
    </div>
  )
}

export default Projects
