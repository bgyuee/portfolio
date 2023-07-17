import React, { useEffect, useState } from 'react'
import projects from '../data/projects';
import Project from './Project';
import * as S from '../pages/Styled';
import ProjectPreview from '../components/ProjectPreview';

function Projects({projectsRef, projectPage, activeSection}) {
  useEffect(() => {
    setProjectOrder(null)
  }, [activeSection]);

  const [projectOrder, setProjectOrder] = useState(null);
  const findProject = projects.find(project => project.title === projectOrder);

  return (
   <S.ProjectsContainer className='background_common' id="projects" ref={projectsRef}>
      {
        (!projectOrder | activeSection !== 2)? (
          <div className='ProjectGrop'>
            {
              projects.map((project, index) => (
                  <ProjectPreview
                    project={project} 
                    setProjectOrder={setProjectOrder}
                    key={index}
                  />
              ))
            }
          </div>
        ):(
          <Project
            project={findProject}
            projectPage={projectPage}
            setProjectOrder={setProjectOrder}
          />
        )
      }
   </S.ProjectsContainer> 
  )
}

export default Projects;