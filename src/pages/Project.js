import React from 'react'
import styled from 'styled-components';

const mockupMobile = `${process.env.PUBLIC_URL}/images/mockypPHONE.png`;
const mockupPc = `${process.env.PUBLIC_URL}/images/mockuPC.png`;
const github = `${process.env.PUBLIC_URL}/images/project_github.png`;

function Project({project}) {

  return (
    <ProjectContainer className='background_common' id="projects">
      <h2 className='project_subject'>Projects</h2>
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
              <div className='site_github' style={{background : `url(${github}) no-repeat 25% 50%, #373743`}}><a href={`${project.github}`} target='blank'>GitHub</a></div>
            </div>
            <div className='validation'>유효성 검사</div>
          </div>
        </div>
        <div className='project_description'>
          <div className='project_foreword'>
            <h3 className='project_title'>{project.title}</h3>
            <div className={`project_used ${project.class}`}>
              {project.used}
            </div>
          </div>
            <p className='title_additional'>개인프로젝트</p>
            <div className='project_explanation'>
              {project.explanation}
            </div>
        </div>
      </div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  margin: 0 auto;
  border: 1px solid red;
  width: 100%;

  .project_subject{
    margin-top: 90px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 80px;
    font-weight: 600;
    color: #1098F7;
  }

  .project_content{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 85%;

    .project_info{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 800px;
      height: 650px;
      &.messenger{
        
       }

      .project_video{
        position: relative;
        width: 100%;
        min-width: 560px;
        height: 76%;
        background-size: cover;
        &.messenger{
          transform: translateY(-30px);
       }
      
        .video_box{
          position: absolute;
          left: 50%;
          top: 5.5%;
          transform: translateX(-50%);
          width: 500.8px;
          height: 300.34px;
          background-color: #1098F7;
          &.messenger{
            top: 7%;
            width: 210px;
            height: 430px;
            border-radius: 12px;
            overflow: hidden;
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
        width: 72%;
        justify-content: space-between;
        font-weight: 500;
        .sites{
          display: flex;
          justify-content: space-between;
          width: 350px;
          >div{
            display: flex;
            justify-content: center;
            width: 170px;
            height: 45px;
            align-items: center;
            border-radius: 12px;
            cursor: pointer;
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
        }
      }
    }
    .project_description{
      width: 750px;
      height: 400px;
      /* border: 1px solid blue; */
      .project_foreword{
        display: flex;
        justify-content: space-between;
        width: 100%;
        .project_title{
          font-size: 30px;
          font-weight: 600;
        }
        .project_used{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 500px;
          font-size: 14px;
          &.samsungcnt{
            width: 450px;
          }
          &.movie{
            width: 530px;
            font-size: 13px;
          }
          &.messenger{
            width: 400px;
            font-size: 16px;
          }
          &.cjone{
            width: 450px;
          }
          &.samsungsem{
            width: 450px;
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
    }
    .project_explanation{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      font-size: 17px;
      >p{
        margin-bottom: 20px;
        >span{
          color: #2BEE56;
        }
      }
    }
  }
`
export default Project;