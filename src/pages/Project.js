import React, { useState } from 'react';
import Validation from '../components/Validation';
import * as S from './Styled';
import ProjectContent from '../components/ProjectContent';
import 'animate.css';


function Project({project, projectPage, setProjectOrder}) {
  const [validationModal, setValidationModal] = useState(false);
  return (
    <S.ProjectContainer className='background_common animate__animated animate__fadeInUp'>
      <h2 className='blind'>Projects</h2>
      <ProjectContent 
        project={project} 
        projectPage={projectPage} 
        setValidationModal={setValidationModal}
        setProjectOrder={setProjectOrder}
      />
      {validationModal && 
      <Validation 
        setValidationModal={setValidationModal} 
        validation={project.validation} 
        title={project.title}
      />}
    </S.ProjectContainer>
  )
}

export default Project;