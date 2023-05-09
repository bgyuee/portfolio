import React from 'react';
import styled from 'styled-components';

const github = `${process.env.PUBLIC_URL}/images/project_github.png`;

function Footer({contactRef}) {
  return (
    <FooterContainer className='background_common' id="contact" ref={contactRef}>
      <h2 className='contact_title'>Contact</h2>
      <div className='contact_info'>
        <p className='contact_phonenumber'>Phone : 010-6771-5396</p>
        <p className='contact_email'>E-mail : <span>parkgyuyeop@naver.com</span></p>
      </div>
      <div className='contact_github' style={{background : `url(${github}) no-repeat 25% 50%, #373743`}}><a href="https://github.com/bgyuee" target='blank'>GitHub</a></div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
 /* border: 1px solid red; */
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 box-sizing: border-box;
 
 .contact_title{
  margin-bottom: 20px;

  font-size: 80px;
  font-weight: 600;
  color: #1098F7;
 }
 .contact_info{
  font-family: 'Do Hyeon', sans-serif;
  margin-bottom: 50px;
  p{
    font-size: 40px;
    &.contact_phonenumber{
      margin-bottom: 20px;
    }
    &.contact_email{
      display: flex;
      align-items: center;
      >span{
        margin-left: 10px;
        font-size: 25px;
      }
    }
  }
 }
 .contact_github{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    text-decoration: none;
    color: #fff;
    border-radius: 12px;
    opacity: 0.8;
    &:hover{
      opacity: 1;
    }
    >a{
      display: flex;
      align-items: center;
      margin-left: 65px;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #fff;
    }
 }
`

export default Footer