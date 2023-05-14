import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import * as S from '../pages/Styled';

const drawerMenu = `${process.env.PUBLIC_URL}/images/drawerMenu.png`;
const drawerMenuClose = `${process.env.PUBLIC_URL}/images/drawerMenuClose.png`;

function Header({ 
  homeRef, 
  profileRef, 
  projectsRef, 
  contactRef, 
  setAppActiveSection
}) {
  
  const [activeSection, setActiveSection] = useState('home');
  const [drawerMenuModal, setDrawerMenuModal] = useState(false);

  const drawerModal = () => setDrawerMenuModal(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActiveSection(entry.target.id);
          setAppActiveSection(
            entry.target.id === `home` ? 0 :
            entry.target.id === 'profile' ? 1  :
            entry.target.id === 'projects' ? 2 :
            entry.target.id === 'contact' ? 3 : 0
          );
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
    <S.HeaderContainer>
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
    </S.HeaderContainer>
  )
}

export default Header;