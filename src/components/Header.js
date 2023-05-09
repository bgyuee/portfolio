import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components';

function Header({homeRef, profileRef, projectsRef, contactRef}) {

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root:null,
      rootMargin:'0px',
      threshold:0.5,
    }
    );
    observer.observe(homeRef.current);
    observer.observe(profileRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    }
  }, [homeRef, profileRef, projectsRef, contactRef]);

  return (
    <HeaderContainer>
      <div className='Nav'>
        <h1 className='logo'>GYUYEOP</h1>
        <ul className='nav_meun'>
        <li className={activeSection === "home" ? "active" : ""}>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={activeSection === "profile" ? "active" : ""}>
          <Link to="profile" spy={true} smooth={true} duration={500}>
            Profile
          </Link>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>
      </div>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 80px;
  
  .Nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    box-sizing: border-box;
    .logo{
      font-size: 50px;
      font-weight: 600;
      cursor: pointer;
    }

    .nav_meun{
      display: flex;
      justify-content: space-between;
      width: 450px;
      font-size: 25px;
      >li{
        position: relative;
        cursor: pointer;
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #fff;
            transition: width 0.2s ease-in-out 0s;
        }
        &.active{
          &::after{
            width: 100%;
          }
        }
      }
    }
    
  }
`

export default Header;