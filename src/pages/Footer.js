import React from 'react';
import styled from 'styled-components';

const github = `${process.env.PUBLIC_URL}/images/project_github.png`;

function Footer({contactRef}) {
  return (
    <FooterContainer className='background_common' id="contact" ref={contactRef}>
      <h2 className='contact_title'>Contact</h2>
      <div className='contact_info'>
        <p className='contact_phonenumber'>Phone : 010-1234-1234</p>
        <p className='contact_email'>E-mail : 1234@naver.com</p>
      </div>
      <div className='contact_github' style={{background : `url(${github}) no-repeat 25% 50%, #373743`}}><a href="https://github.com/bgyuee" target='blank'>GitHub</a></div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
 border: 1px solid red;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 100px;
 box-sizing: border-box;
 
 >.contact_title{
  font-size: 80px;
  font-weight: 600;
  color: #1098F7;
 }
 .contact_info{
  p{
    font-size: 50px;
  }
 }
 .contact_github{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    text-decoration: none;
    color: #fff;
    >a{
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
    }
 }
`

export default Footer