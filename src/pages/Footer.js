import React from 'react';
import * as S from './Styled';

const github = `${process.env.PUBLIC_URL}/images/project_github.png`;

function Footer({contactRef, contactPage}) {
  return (
    <S.FooterContainer className='background_common' id="contact" ref={contactRef}>
      <div className={`contact_container ${contactPage && "active"}`}>
        <h2 className='contact_title'>Contact</h2>
          <div className='contact_info'>
            <p className='contact_phonenumber'>Phone : 010-6771-5396</p>
            <p className='contact_email'>E-mail : <span>parkgyuyeop@naver.com</span></p>
        </div>
        <div className='contact_github' style={{background : `url(${github}) no-repeat 25% 50%, #373743`}}><a href="https://github.com/bgyuee" target='blank'>GitHub</a></div>
      </div>
    </S.FooterContainer>
  )
}

export default Footer