import React from 'react';
import styled from 'styled-components';

const introduceImg = `${process.env.PUBLIC_URL}/images/introduce.png`

function Home({homeRef}) {
  return (
    <>
    <HomeContainer className='background_common' id="home" ref={homeRef}>
      <h2 className='blind'>Home</h2>
      <div className='home_greeting'>
        <span>h</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
      </div>
      <div className='introduce_img'>
          <img src={introduceImg} alt='Introduce' />
        </div>
      <div className='home_introduce'>
        <p>I’m a developer</p>
        <span>armed with passion and persistence.</span>
      </div>
    </HomeContainer>
    </>
  )
}

const HomeContainer = styled.div`
  border: 1px solid red;
  .home_greeting{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 35vw;
    font-weight: 700;
    color: #1098F7;

    @media (max-width:1024px) {
      top: 80px;
    }
  }
  .introduce_img{
      position: absolute;
      bottom: 70px;
      left: 50px;
      width: 250px;
      height: 250px;
      >img{
        width: 100%;
        height: 100%;
      }
      @media (max-width:1024px) {
        bottom: 10px;
      }
    }
  .home_introduce{
    position: absolute;
    bottom: 130px;
    left: 350px;
    display: flex;
    flex-direction: column;
    font-size: 4.25vw;
    font-weight: 600;

    >span{
      font-weight: 400;
    }

    @media (max-width:1024px) {
        bottom: 300px;
        left: 50%;
        width: 725px;
        transform: translateX(-50%);
        font-size: 40px;
      }
  }
`

export default Home;