import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components';

const drawerMenu = `${process.env.PUBLIC_URL}/images/drawerMenu.png`;
const drawerMenuClose = `${process.env.PUBLIC_URL}/images/drawerMenuClose.png`;

function Header({ homeRef, profileRef, projectsRef, contactRef }) {

  const [activeSection, setActiveSection] = useState('home');
  const [drawerMenuModal, setDrawerMenuModal] = useState(false);

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

  const drawerModal = () => setDrawerMenuModal(false);

  return (
    <HeaderContainer>
      <div className='Nav'>
        <h1 className='logo'>GYUYEOP</h1>
          <ul className={`nav_meun ${!drawerMenuModal ? "nav_none" : ""}`}>
          <li className={activeSection === "home" ? "active" : ""}>
            <Link to="home" spy={true} smooth={true} duration={500} onClick={drawerModal}>
              Home
            </Link>
          </li>
          <li className={activeSection === "profile" ? "active" : ""}>
            <Link to="profile" spy={true} smooth={true} duration={500} onClick={drawerModal}>
              Profile
            </Link>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <Link to="projects" spy={true} smooth={true} duration={500} onClick={drawerModal}>
              Projects
            </Link>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <Link to="contact" spy={true} smooth={true} duration={500} onClick={drawerModal}>
              Contact
            </Link>
          </li>
          </ul>
        
        <div className='mobile_Nav' 
        // style={{background : `url(${drawerMenu}) no-repeat 50% 50%`}} 
        style = {!drawerMenuModal ? {background : `url(${drawerMenu}) no-repeat 50% 50%`} 
                : {background : `url(${drawerMenuClose}) no-repeat 50% 50%`}}
        onClick={() => setDrawerMenuModal(prev => !prev)}
        />
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

    @media (max-width:760px) {
      padding: 0 10px;
    }

    .logo{
      font-size: 50px;
      font-weight: 600;
      cursor: pointer;
      @media (max-width:760px) {
        font-size: 25px;
    }
    }

    .nav_meun{
      display: flex;
      justify-content: space-between;
      width: 450px;
      font-size: 25px;

      @media (max-width:1090px) {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);

        &.nav_none{
          display: none !important;
        }

        >li{
          margin: 30px 0;
          a{
          font-size: 75px;
          }
        }
       }
      >li>a{
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
    .mobile_Nav{
      width: 50px;
      height: 50px;
      background-size: cover !important;
      display: none;
      @media (max-width:1090px) {
        position: fixed;
        right: 20px;
        display: block;
        cursor: pointer;
       }
    }
  }
`

export default Header;