import React from 'react'
import styled from 'styled-components';
import mockupPc from '../images/mockuPC.png';
import mockupMobile from '../images/mockypPHONE.png';
import samsungcntVideo from '../videos/samsungcnt.mp4';

function Project() {
  return (
    <ProjectContainer className='background_common'>
      <h2 className='project_title'>Projects</h2>
      <div className='project_content'>
        <div className='project_info'>
          <div className='project_video' style={{background : `url(${mockupPc}) no-repeat 50% 50%`}}>
            <div className='video_box'>
              <video autoPlay muted loop>
                <source src={samsungcntVideo} type='video/mp4' />
              </video>
            </div>
          </div>
          <div className='project_Link'>
            <div className='sites'>
              <div className='site_link'>사이트 바로가기</div>
              <div className='site_github'>GitHub</div>
            </div>
            <div className='validation'>유효성 검사</div>
          </div>
        </div>
        <div className='project_description'></div>
        <div></div>
      </div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  border: 1px solid red;

  .project_title{
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
    width: 80%;

    .project_info{
      width: 800px;
      height: 650px;
      border: 1px solid blue;

      .project_video{
        position: relative;
        width: 100%;
        height: 500px;
        background-size: cover;
        .video_box{
          position: absolute;
          left: 50%;
          top: 5.5%;
          transform: translateX(-50%);
          width: 63.5%;
          height: 60.8%;
          background-color: #1098F7;
          >video{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        }
      }
    }
    .project_description{
      width: 300px;
      height: 400px;
      border: 1px solid blue;
    }
  }
`
export default Project;