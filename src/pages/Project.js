import React from 'react';
import styled from 'styled-components';
import Validation from '../components/Validation';

const mockupMobile = `${process.env.PUBLIC_URL}/images/mockypPHONE.png`;
const mockupPc = `${process.env.PUBLIC_URL}/images/mockuPC.png`;
const github = `${process.env.PUBLIC_URL}/images/project_github.png`;

function Project({project, validationModal, setValidationModal}) {

  return (
    <ProjectContainer className='background_common' id="projects">
      <h2 className='blind'>Projects</h2>
      <div className='project_content'>
        <div className= {`project_info ${project.class}`}>
          <div className= {`project_video ${project.class}`} style={{
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
          <div className='project_Link'>
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
        <div className='project_description'>
          <div className='project_foreword'>
            <h3 className={`project_title ${project.class}`}>{project.title}</h3>
            <div className={`project_used ${project.class}`}>
              {project.used}
            </div>
          </div>
            <p className={`title_additional ${project.class}`}>개인프로젝트</p>
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
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
  margin: 0 auto;
  padding-top: 200px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width:1275px){
    padding-top: 120px;
  }
  .project_content{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1632px;
    @media (max-width: 1650px) {
      width: 1400px;
    }
    @media (max-width: 1460px) {
      width: 1250px;
    }
    @media (max-width:1275px) {
      width: 600px;
      flex-direction: column;
      align-items: center;
    }
    @media (max-width:680px){
      width: 250px;
    }
    .project_info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 768px;
      height: 550px;

      @media (max-width:1650px){
          width: 600px;
          height: 470px;
        }
      @media (max-width:1275px){
        width: 450px;
        height: 360px;
        margin-bottom: 30px;
      }
      @media (max-width:680px){
        width: 300px;
        height: 290px;
        margin-bottom: 10px;
      }
        
      &.messenger{
        height: 600px;
       }
      .project_video{
        position: relative;
        width: 100%;
        height: 450px;
        background-size: cover !important;
        box-sizing: border-box;
        border-radius: 24px 24px 0 0;
        @media (max-width:1650px){
          height: 360px;
        }
        @media (max-width:1275px){
          height: 270px;
        }
        @media (max-width:680px){
          height: 180px;
          border-radius: 12px 12px 0 0;
        }
        &.messenger{
          width: 288px;
          height: 538px;
          margin-bottom: 20px;
       }
      
        .video_box{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 64px;
          width: 100%;
          height: 91.6%;
          background-color: #1098F7;
          border-radius:  0 0 12px 12px;
          overflow: hidden;
          @media (max-width:1650px){
            top: 53px;
          }
          @media (max-width:1275px){
            top: 40px;
          }
          @media (max-width:680px){
            top: 21px;
          }
          &.messenger{
            top: 56px;
            left: 50%;
            transform: translateX(-50%);
            width: 83.5%;
            height: 76%;
            border-radius: 0 0 0 0;
         }
          >video{
            width: 100%;
            height: 100%;
            object-fit: cover;
           }
        }
      }
      .project_Link{
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-weight: 500;

        @media (max-width:680px){
          flex-direction: column;
          height: 90px;
        }
        .sites{
          display: flex;
          justify-content: space-between;
          width: 360px;

          @media (max-width:1275px) {
            width: 280px;
            font-size : 13px;
          }
          @media (max-width:680px){
            width: 100%;
          }
          >div{
            display: flex;
            justify-content: center;
            width: 170px;
            height : 45px;
            align-items: center;
            border-radius: 12px;
            cursor: pointer;

            @media (max-width:1275px){
              width: 130px;
              height : 40px;
            }
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: #fff;
              }
            &.site_link{
              background: #353A9E;
            }
            &.site_github{
              padding-left: 10%;
              box-sizing: border-box;
            }
          }
        }
        .validation{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 170px;
          height: 45px;
          background: #CF8E1F;
          border-radius: 12px;
          cursor: pointer;
          @media (max-width:1275px){
            width: 130px;
            height : 40px;
            font-size : 13px;
          }
        }
      }
    }
    .project_description{
      position: relative;
      width: 750px;
      height: 400px;
      
      @media (max-width:1650px) {
        width: 600px;
      }
      @media (max-width:680px) {
        width: 370px;
      }
      .project_foreword{
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media (max-width:1275px){
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        @media (max-width:680px){
          margin-bottom: 10px;
        }
        .project_title{
          font-size: 30px;
          font-weight: 600;

          @media (max-width:1650px) {
            font-size: 25px;
            &.movie{
              font-size: 20px;
            }
          }
          @media (max-width:1275px){
            margin-bottom: 15px;
            font-size: 30px;
            &.movie{
              font-size: 30px;
            }
          }
        }
        .project_used{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 500px;
          font-size: 14px;
          @media (max-width:1275px){
            width: 600px !important;
            }
          @media (max-width:680px){
            width: 370px !important;
          }
          &.samsungcnt{
            width: 450px;

            @media (max-width:1275px){
            width: 600px;
            font-size: 16.5px;
            }
            @media (max-width:680px){
              font-size: 12px;
            }
          }
          &.movie{
            width: 530px;
            font-size: 13px;

            @media (max-width:1650px) {
              font-size: 11px;
              width: 460px;
            }
            @media (max-width:1275px){
              font-size: 15px;
            }
            @media (max-width:680px){
              font-size: 12px;
              &>p:nth-of-type(3) {display: none;}
            }
          }
          &.messenger{
            width: 400px;
            font-size: 16px;
          }
          &.cjone{
            width: 450px;
            @media (max-width:1275px){
              font-size: 17px;
            }
            @media (max-width:680px){
              font-size: 12px;
            }
          }
          &.samsungsem{
            width: 450px;
            @media (max-width:1275px){
              font-size: 17px;
            }
            @media (max-width:680px){
              font-size: 12px;
            }
          }
          >p{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            height: 20px;
            border-radius: 12px;
            background: #373743;
          }
        }
      }
    }
    .title_additional{
      margin: 10px 0 20px 0;
      font-size: 15px;
      color: #EE942B;

      @media (max-width:1650px){
        font-size: 14px;
      }
      @media (max-width:1275px){
        position: absolute;
        top: 5px;
        right: 130px;
        font-size: 16px;
        &.movie{
          top: 1px;
          right: 95px;
        }
        &.messenger{
          top: 0;
          right: 110px;
        }
        &.cjone{
          top: 0;
          right: 140px;
        }
      }
      @media (max-width:680px) {
        right: 20px;
        font-size: 14px;
        &.movie{
          top: 1px;
          right: -12px;
        }
        &.messenger{
          top: 0;
          right: 0px;
        }
        &.cjone{
          top: 0;
          right: 30px;
        }
      }
    }
    .project_explanation{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      font-size: 17px;
      @media (max-width:1650px){
        font-size: 15px;
      }
      @media (max-width:1275px){
        font-size: 16px;
      }
      @media (max-width:680px){
        font-size: 13px;
      }
      >p{
        margin-bottom: 20px;

        @media (max-width:1275px){
          margin-bottom: 5px;
        }
        @media (max-width:680px){
          margin-bottom: 2px;
        }
        >span{
          color: #2BEE56;
        }
      }
    }
  }
`
export default Project;