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
        <p>I’m a developer</p>
        <span>armed with passion and persistence.</span>
      </div>
    </S.HomeContainer>
    </>
  )
}

export default Home;