import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const introduceImg = `${process.env.PUBLIC_URL}/images/introduce.png`

function Home({homeRef}) {
  const [hello, setHello] = useState(false);
  useEffect(() => {
    setHello(true);
  }, [])

  return (
    <>
    <HomeContainer className='background_common' id="home" ref={homeRef}>
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
    </HomeContainer>
    </>
  )
}

const HomeContainer = styled.div`
  /* border: 1px solid red; */
  .home_greeting{
    position: absolute;
    top: 0;
    left: 50%;
    display: flex;
    transform: translateX(-50%);
    font-size: 34vw;
    font-weight: 700;
    color: #1098F7;
    >div{
      transform: translateY(-500px);
      opacity: 0;
      &:nth-of-type(1){transition: transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;}
      &:nth-of-type(2){transition: transform 0.5s ease-in-out 0.3s, opacity 0.5s ease-in-out 0.3s;}
      &:nth-of-type(3){transition: transform 0.5s ease-in-out 0.6s, opacity 0.5s ease-in-out 0.6s;}
      &:nth-of-type(4){transition: transform 0.5s ease-in-out 0.9s, opacity 0.5s ease-in-out 0.9s;}
      &:nth-of-type(5){transition: transform 0.5s ease-in-out 1.2s, opacity 0.5s ease-in-out 1.2s;}
    }
    &.hello{
      >div{
      transform: translateY(0);
      opacity: 1;
    }
    }

    @media (max-width:1400px) {
      top: 100px;
    }
    @media (max-width:1024px) {
      top: 80px;
    }
    @media (max-width:910px) {
      top: 130px;
      font-size: 300px;
    }
    @media (max-width:725px) {
      top: 140px;
      font-size: 210px;
    }
  }
  .introduce_img{
      position: absolute;
      bottom: 70px;
      left: 50px;
      width: 250px;
      height: 250px;
      opacity: 0;
      transform: translateX(-100px);
      transition: transform 0.5s ease-in-out 1.2s, opacity 0.5s ease-in-out 1.2s;
      &.hello{
        transform: translateX(0);
        opacity: 1;
      }
      >img{
        width: 100%;
        height: 100%;
      }
      @media (max-width:1024px) {
        bottom: 10px;
      }
      @media (max-width:725px) {
        bottom: 20px;
      }
    }
  .home_introduce{
    position: absolute;
    bottom: 130px;
    left: 350px;
    display: flex;
    flex-direction: column;
    font-size: 3.8vw;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0s linear 2s;
    >span{
      font-weight: 400;
      opacity: 0;
      transition: opacity 0s linear 2.6s;
    }
    &.hello{
      opacity: 1;
      >p{
        white-space: nowrap;
        overflow: hidden;
        animation: typing 1s steps(30, end) 2s;
      }
      >span{
        opacity: 1;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 1s steps(30, end) 2.6s;
      }
    }
    @media (max-width:1024px) {
        bottom: 300px;
        left: 50%;
        width: 725px;
        transform: translateX(-50%);
        font-size: 40px;
      }
     @media (max-width:725px) {
      bottom: 400px;
      left: 74%;
      font-size: 27px;
    }
  }
    /* The typing effect */
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white }
    }
`

export default Home;