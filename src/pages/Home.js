import React, { useEffect, useState } from 'react';
import * as S from './Styled';

const introduceImg = `${process.env.PUBLIC_URL}/images/introduce.png`

function Home({homeRef}) {

  const [hello, setHello] = useState(false);

  useEffect(() => {
    setHello(true);
  }, []);

  return (
    <>
    <S.HomeContainer className='background_common' id="home" ref={homeRef}>
      <h2 className='blind'>Home</h2>
      <div className={`home_greeting ${hello ? "hello" : ""}`}>
        <div>h</div>
        <div>e</div>
        <div>l</div>
        <div>l</div>
        <div>o</div>
      </div>
      <div className={`introduce_img ${hello ? "hello" : ""}`}>
          <img src={introduceImg} alt='Introduce' />
        </div>
      <div className={`home_introduce ${hello ? "hello" : ""}`}>
        <p>안녕하세요!</p>
        <span>열정과 끈기로 무장한 개발자 박규엽입니다.</span>
      </div>
    </S.HomeContainer>
    </>
  )
}

export default Home;