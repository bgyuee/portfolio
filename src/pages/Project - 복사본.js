import React from 'react'
import styled from 'styled-components';

const mockupMobile = `${process.env.PUBLIC_URL}/images/mockypPHONE.png`;
const mockupPc = `${process.env.PUBLIC_URL}/images/mockuPC.png`;
const samsungcntVideo = `${process.env.PUBLIC_URL}/videos/samsungcnt.mp4`;
const github = `${process.env.PUBLIC_URL}/images/project_github.png`;

function Project() {
  return (
    <ProjectContainer className='background_common'>
      <h2 className='project_subject'>Projects</h2>
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
              <div className='site_github' style={{background : `url(${github}) no-repeat 15% 50%, #373743`}}>GitHub</div>
            </div>
            <div className='validation'>유효성 검사</div>
          </div>
        </div>
        <div className='project_description'>
          <div className='project_foreword'>
            <h3 className='project_title'>삼성물산</h3>
            <div className='project_used'>
              <p>#Html</p>
              <p>#Css</p>
              <p>#Javascript</p>
              <p>#반응형</p>
              <p>#웹표준 준수</p>
            </div>
          </div>
            <p className='title_additional'>개인프로젝트</p>
            <div className='project_explanation'>
              <p>
                삼성물산 홈페이지를 <span>figma</span>를 이용해서 Layout을 정하고, 퍼블리싱
                반응형 웹으로 Pc, Tablet, Mobile 환경에서 사용가능 
              </p>
              <p>
                Css <span>animation</span> 속성과 마우스 <span>Hover</span> 인터렉션 구현
              </p>
              <p>
                Javascript <span>settimeout함수</span>를 이용해서 무한 슬라이드 구현
              </p>
            </div>
        </div>
      </div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  border: 1px solid red;

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
    width: 80%;

    .project_info{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 800px;
      height: 650px;
      border: 1px solid blue;

      .project_video{
        position: relative;
        width: 100%;
        min-width: 560px;
        height: 76%;
        background-size: cover;
        .video_box{
          position: absolute;
          left: 50%;
          top: 5.5%;
          transform: translateX(-50%);
          width: 500.8px;
          height: 300.34px;
          background-color: #1098F7;
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
            &.site_link{
              background: #353A9E;
            }
            &.site_github{
              
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
      width: 700px;
      height: 400px;
      border: 1px solid blue;
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
          width: 530px;
          font-size: 14px;
          >p{
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