import React, { useState } from 'react'
import styled from 'styled-components';

function Loading({setIsLoading}) {
  const [click, setClick] = useState(true);
  console.log(click);

  const handleChange = (event) => {
    setTimeout(() => {
      setIsLoading(event.target.checked);
    }, 1300);
  };
  const handleClick = (prev) => {
    setClick(!prev);
  };
  return (
    <LoadingContainer>
      {click && <p className='click'>Click</p>}
      <input type="checkbox" id="toggle" onChange={handleChange} onClick={() => handleClick(click)}/>
      <div class="lock">
        <div class="head">
        <div class="notch"></div>
      </div>
      <div class="body"></div>
      </div>
      <div class="key">
        <div class="top"></div>
        <div class="bottom">KEY</div>
      </div>
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .click{
    z-index: 1000;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-600%);
    font-size: 30px;
    animation: click 0.6s linear infinite alternate;
    @keyframes click {
      0%{transform: translateX(-50%) translateY(-600%) scale(1)}
      100%{transform: translateX(-50%) translateY(-600%) scale(1.2)}
    }
  }

  .lock {
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
*:before,
*:after {
  content: "";
  position: absolute;
  display: block;
}
@keyframes lock {
  80% {
    transform: translatey(60px);
  }
  100% {
    transform: translatey(55px);
  }
}
.head {
  width: 150px;
  height: 150px;
  border-radius: 50% 50% 4px 4px;
  background: radial-gradient(#b0bec5, #78909c, #37474f);
  position: absolute;
  z-index: 1;
  animation: lock 1s forwards;
}
.head:before {
  width: 100px;
  height: 135px;
  border-radius: 50% 50% 10% 10%;
  background: black;
  margin: 23px 25px;
  box-shadow: -2px -8px 8px 2px #ccc;
}
.head:after {
  width: 40px;
  height: 30px;
  background: black;
  margin: 120px 122px;
}
.notch {
  position: absolute;
  width: 15px;
  height: 15px;
  background: black;
  margin: 95px 125px;
  border-radius: 0 30% 30% 0;
  box-shadow: inset -4px 2px 2px 0px #bbb;
}
.body {
  width: 190px;
  height: 160px;
  background: linear-gradient(to right, goldenrod, gold, #ff5, gold, goldenrod);
  position: absolute;
  z-index: 3;
  margin-top: 145px;
  border-radius: 10px;
  box-shadow: inset 0px 5px 10px 1px #550, inset 0px -5px 10px 1px #550;
}
@keyframes locked {
  50% {
    opacity: 0;
  }
  60% {
    opacity: 0;
    content: "LOCKED";
  }
  100% {
    opacity: 1;
    content: "LOCKED";
    margin: 30% 25%;
  }
}
.body:before {
  content: "UNLOCKED";
  font-size: 1.6em;
  margin: 30% 15%;
  color: #500;
  animation: locked 1s forwards;
}
.key {
  width: 90px;
  height: 150px;
}
.key .top {
  width: 20px;
  height: 80px;
  background: linear-gradient(to right, #cccccc, #444 30%, #cccccc 40%);
  border-radius: 30% 70% 0 0;
  margin: -40px 35px;
  box-shadow: -4px 0px 2px 1px grey;
}
.key .top:after {
  width: 5px;
  height: 12px;
  border-radius: 70% 0 0 30%;
  background: black;
  margin: 55px 17px;
}
.key .top:before {
  width: 5px;
  height: 12px;
  border-radius: 30% 0 0 70%;
  background: black;
  margin: 42px 17px;
}
.key .bottom {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: radial-gradient(#aaa, #ccc);
  margin: 30px 5px;
  box-shadow: inset 0px 0px 8px 3px grey;
  font-family: "Allerta Stencil", sans-serif;
  color: #500;
  font-size: 1.2em;
  padding: 5px;
  text-align: center;
}
.key .bottom:before {
  width: 40px;
  height: 30px;
  border-radius: 50%;
  background: black;
  margin: 30px 15px;
  box-shadow: 0px 0px 8px 4px #555;
}
#toggle {
  width: 200px;
  height: 300px;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  opacity: 0;
}
@keyframes unlockey {
  20% {
    transform: translatey(-20px);
  }
  60% {
    transform: translatey(-20px) rotatey(180deg);
  }
  90% {
    transform: translatey(-20px) rotatey(359deg);
  }
  100% {
    transform: rotatey(359deg);
  }
}
#toggle:checked ~ .key {
  animation: unlockey 1s forwards;
  transform-origin: center center;
}
@keyframes unlock {
  0% {
    transform: translatey(55px);
  }
  90% {
    transform: translatey(55px);
  }
  100% {
    transform: translatey(0px);
  }
}
#toggle:checked ~ .lock .head {
  animation: unlock 1s forwards;
}
@keyframes unlocked {
  0% {
    content: "LOCKED";
  }
  50% {
    opacity: 0;
    content: "LOCKED";
    margin: 30% 25%;
  }
  60% {
    opacity: 0;
    content: "UNLOCKED";
    margin: 30% 15%;
  }
  100% {
    opacity: 1;
    content: "UNLOCKED";
    margin: 30% 15%;
  }
}
#toggle:checked ~ .lock .body:before {
  animation: unlocked 1s forwards;
}

`;

export default Loading;