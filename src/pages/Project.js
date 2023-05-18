import React from 'react';
import Validation from '../components/Validation';
import * as S from './Styled';
const mockupMobile = `${process.env.PUBLIC_URL}/images/mockypPHONE.png`;
const mockupPc = `${process.env.PUBLIC_URL}/images/mockuPC.png`;
const github = `${process.env.PUBLIC_URL}/images/project_github.png`;

function Project({
  project, 
  validationModal, 
  setValidationModal,
  projectPage
}) {

  return (
    <S.ProjectContainer className='background_common' id="projects">
      <h2 className='blind'>Projects</h2>
      <div className='project_content'>
        <div className= {`project_info ${project.class}`}>
          <div className= {`project_video ${project.class} ${projectPage && "active"}`} style={{
            background : (project.title === 'Messenger') 
            ? (`url(${mockupMobile}) no-repeat 50% 50%`) 
            : (`url(${mockupPc}) no-repeat 50% 50%`)
            }}>
            <div className= {`video_box ${project.class}`}>
              <video autoPlay muted loop>
                <source src={project.videos} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className={`project_Link ${projectPage && "active"}`}>
            <div className='sites'>
              <div className='site_link'><a href={`${project.site}`} target='blank'>사이트 바로가기</a></div>
              <div className='site_github' style={{background : `url(${github}) no-repeat 25% 50%, #373743`}}>
                <a href={`${project.github}`} target='blank'>GitHub</a>
              </div>
            </div>
            {project.class !== "movie" && project.class !== "messenger" &&
            <div className='validation' onClick={() => setValidationModal(prev => (!prev))}>유효성 검사</div>
            }
            
          </div>
        </div>
        <div className={`project_description ${projectPage && "active"}`}>
          <div className='project_foreword'>
            <h3 className={`project_title ${project.class}`}>{project.title}</h3>
            <div className={`project_used ${project.class}`}>
              {project.used}
            </div>
          </div>
            <p className={`title_additional ${project.class}`}>개인프로젝트</p>
            <p className='project_period'>작업기간 : {project.period}</p>
            <div className='project_explanation'>
              {project.explanation}
            </div>
        </div>
      </div>
      {validationModal && <Validation 
        setValidationModal={setValidationModal} 
        validation={project.validation} 
        title={project.title}
        />}
    </S.ProjectContainer>
  )
}

export default Project;