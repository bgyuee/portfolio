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
                  className={`skill ${(currnetSkill === index) && 'skillRotate'}`}
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
                  <h4>{myskill[currnetSkill].title}</h4>
                  <p>{myskill[currnetSkill].description}</p>
           </div>
        </div>
        <Character />
      </div>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  position: relative;
  border: 1px solid red;
  overflow: hidden;

  .myIntroduce{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    font-size: 50px;
    font-family: 'Nanum Pen Script', cursive;
    text-shadow: 2px 2px 4px #1098F7;
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
          font-size: 20px;
          &.profile_address{
            font-size: 17px;
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
            &.skillRotate{
              border: 3px solid #EE942B;
              box-sizing: border-box;
            }
          }
        }
        .skill_description{
          >h4{
            margin-bottom: 10px;
            font-size: 40px;
            font-weight: 600;
            color: #EE942B;
          }
          >p{
            font-size: 20px;
          }
        }
      }
  }
`

export default Profile;