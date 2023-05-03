import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <HeaderContainer>
      <div className='Nav'>
        <h1 className='logo'>GYUYEOP</h1>
        <ul className='nav_meun'>
          <li className='nav_Home'>Home</li>
          <li className='nav_Profile'>Profile</li>
          <li className='nav_Projects'>Projects</li>
          <li className='Contact'>Contact</li>
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
        cursor: pointer;
      }
    }
    
  }
`

export default Header;