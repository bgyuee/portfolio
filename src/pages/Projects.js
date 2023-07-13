import React, { useState } from 'react'
import projects from '../data/projects';
import Project from '../components/Project';
import * as S from '../pages/Styled';
import ProjectPreview from '../components/ProjectPreview';

function Projects({projectsRef, projectPage}) {

  const {projectOrder, setProjectOrder} = useState("");

  return (
   <S.ProjectsContainer className='background_common' id="projects" ref={projectsRef}>
      <div className='ProjectGrop'>
        {
          projects.map(project => (
              <ProjectPreview 
                project={project} 
                setProjectOrder={setProjectOrder} 
                projectPage={projectPage}
              />
          ))
        }
        {/* 버튼클릭시 setProjectOrder=해당배열번호로 바꾸기 */}
      </div>
    {/* <Project 
      project={projects[projectOrder]} 
      projectPage={projectPage} 
    /> */}
   </S.ProjectsContainer> 
  )
}

export default Projects;