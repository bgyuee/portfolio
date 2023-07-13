import React, { useEffect, useState } from 'react';
import Character from '../components/Character';
import myskill from '../data/myskill';
import * as S from './Styled';

const profileImg = `${process.env.PUBLIC_URL}/images/profileImg.png`;

function Profile({profileRef, profilePage}) {

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
    <S.ProfileContainer className='background_common' id='profile' ref={profileRef}>
       <h2 className='blind'>Profile</h2>
       <p className={`myIntroduce ${profilePage && "active"}`}>끊임없이 발전하고 성장하기 위해 열정과 끈기로 무장한 개발자 박규엽입니다.</p>
      <div className='profile_content'>
          <div className={`myinfo ${profilePage && "active"}`}>
            <img src={profileImg} alt='profileImg' />
            <div>
              <p className='profile_name'>Name : 박규엽</p>
              <p className='profile_phone'>Phone : 010-6771-5396</p>
              <p className='profile_email'>E-mail : parkgyuyeop@naver.com</p>
              <p className='profile_github'><a href='https://github.com/bgyuee' target='blink'>GitHub : https://github.com/bgyuee</a></p>
            </div>
          </div>
        <div className='skills'>
          <h3 className={`skills_title ${profilePage && "active"}`}>MY SKILLS</h3>
          <ul className={`skill_list ${profilePage && "active"}`}>
          {
            myskill.map((skill, index) => (
                <li 
                  className={`skill ${skill.class} ${(currnetSkill === index) && `skillRotate`}`}
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
          <div className={`skill_description ${profilePage && "active"}`}>
                  <h4 className={myskill[currnetSkill].class}>{myskill[currnetSkill].title}</h4>
                  <p>{myskill[currnetSkill].description}</p>
           </div>
        </div>
        <Character profilePage={profilePage} />
      </div>
    </S.ProfileContainer>
  )
}

export default Profile;