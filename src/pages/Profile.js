import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Character from '../components/Character';
import myskill from '../data/myskill';

const profileImg = `${process.env.PUBLIC_URL}/images/profileImg.png`;


function Profile({profileRef}) {

  const [currnetSkill, setCurrentSkill]  = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if(!isHovered) {
      const interval = setInterval(() => {
        setCurrentSkill((prevskill) => (prevskill + 1) % myskill.length);
      }, 2500);

      return () => {
        clearInterval(interval);
      }
    }
  }, [isHovered])

  return (
    <ProfileContainer className='background_common' id='profile' ref={profileRef}>
       <h2 className='blind'>Profile</h2>
       <p className='myIntroduce'>끊임없이 발전하고 성장하기 위해 열정과 끈기로 무장한 개발자 박규엽입니다.</p>
      <div className='profile_content'>
          <div className='myinfo'>
            <img src={profileImg} alt='profileImg' />
            <p className='profile_name'>Name : 박규엽</p>
            <p className='profile_age'>Age : 27, 1997.09</p>
            <p className='profile_address'>Address : 서울시 구로구</p>
          </div>
        <div className='skills'>
          <h3 className='skills_title'>MY SKILLS</h3>
          <ul className='skill_list'>
          {
            myskill.map((skill, index) => (
                <li 
                  className={`skill ${(currnetSkill === index) && `skillRotate ${skill.class}`}`}
                  key={index} 
                  style={{background:`url(${skill.image}) no-repeat 50% 50%`}}
                  onMouseEnter={() => {
                    setIsHovered(true);
                    setCurrentSkill(index);
                  }}
                  onMouseLeave={() => {
                    setIsHovered(false);
                  }}
                  >{skill.title}
                  </li>
            ))
          }
          </ul>
          <div className='skill_description'>
                  <h4 className={myskill[currnetSkill].class}>{myskill[currnetSkill].title}</h4>
                  <p>{myskill[currnetSkill].description}</p>
           </div>
        </div>
        <Character />
      </div>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
/* border: 1px solid red; */
  position: relative;
  min-width: 1472px;
  overflow: hidden;
  font-family: 'Do Hyeon', sans-serif;

  .myIntroduce{
    position: absolute;
    top: 100px;
    left: 10%;
    font-size: 40px;
    text-shadow: 2px 2px 4px #1098F7;
    white-space: nowrap;
    overflow: hidden;
    animation: 
    typing 1s steps(30, end)
  }
  .profile_content{
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    justify-content: space-between;

      .myinfo{
        width: 200px;
        >img{
          margin-bottom: 20px;
          width: 100%;
        }
        >p{
          margin-bottom: 10px;
          font-size: 25px;
          &.profile_address{
            font-size: 21px;
          }
        }
      }
      .skills{
        display: flex;
        flex-direction: column;
        width: 700px;
        .skills_title{
          margin-bottom: 20px;
          font-size: 30px;
          font-weight: 900;
          color: #1098F7;
          text-align: center;
        }
        .skill_list{
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-row-gap: 20px;
          grid-column-gap: 20px;
          margin-bottom: 60px;
          width: 100%;
          height: 260px;
          >li{
            text-indent: -9999px;
            overflow: hidden;
            background-size: cover;
            border-radius: 12px;
            cursor: pointer;
            transition: filter 0.3s ease-in-out 0s;
            &.skillRotate{
              &.html{filter: drop-shadow(5px 5px 20px #E44F26);}
              &.css{filter: drop-shadow(5px 5px 20px #1572B6);}
              &.sass{filter: drop-shadow(5px 5px 20px #CC6699);}
              &.javascript{filter: drop-shadow(5px 5px 20px #F0DB4F);}
              &.react{filter: drop-shadow(5px 5px 20px #61DAFB);}
              &.redux{filter: drop-shadow(5px 5px 20px #764ABC);}
              &.typescript{filter: drop-shadow(5px 5px 20px #007ACC);}
              &.firebase{filter: drop-shadow(5px 5px 20px #EEAB37);}
              &.github{filter: drop-shadow(5px 5px 20px #FFFFFF);}
            }
          }
        }
        .skill_description{
          margin-top: 50px;
          >h4{
            margin-bottom: 10px;
            font-size: 50px;
            font-weight: 600;
            &.html{color: #E44F26;}
            &.css{color: #1572B6;}
            &.sass{color: #CC6699;}
            &.javascript{color: #F0DB4F;}
            &.react{color: #61DAFB;}
            &.redux{color: #764ABC;}
            &.typescript{color: #007ACC;}
            &.firebase{color: #EEAB37;}
            &.github{color: #FFFFFF;}
          }
          >p{
            font-size: 25px;
          }
        }
      }
  }

  /* The typing effect */
  @keyframes typing {
      from { width: 0 }
      to { width: 100% }
  }
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
  }
`

export default Profile;