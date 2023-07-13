import React, { useEffect, useState } from 'react'
import projects from '../data/projects';
import * as S from './Styled';

function Loading({setIsLoading}) {
  
  const [lock, setlock] = useState(false);
  const [door, setDoor] = useState(false);
  const [videofilter, setvideofilter] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
      setlock(true);
      doorOpen();
      endLoading();
    }, 1000);
  },[lock]);

  const doorOpen = () => {
    setTimeout(() => {
      setDoor(true);
      filter();
    }, 1500);
  }

  const filter = () => {
    setTimeout(() => {
      setvideofilter(true);
    }, 1500);
  }

  const endLoading = () => {
    setTimeout(() => {
      setIsLoading(lock);
    }, 4500)};

  return (
    <S.LoadingContainer>
      <div className={`Loading_background ${videofilter? "filterNone" : null}`}>
        <div key={projects[0].class} className='Load_video'>
          <video autoPlay muted loop>
            <source src={projects[0].videos} type='video/mp4' />
          </video>
        </div>
        <div key={projects[1].class} className='Load_video'>
          <video autoPlay muted loop>
            <source src={projects[1].videos} type='video/mp4' />
          </video>
        </div>
        <div key={projects[3].class} className='Load_video'>
          <video autoPlay muted loop>
            <source src={projects[3].videos} type='video/mp4' />
          </video>
        </div>
        <div key={projects[4].class} className='Load_video'>
          <video autoPlay muted loop>
            <source src={projects[4].videos} type='video/mp4' />
          </video>
        </div>
      </div>
      <div className='door'>
        <div className={`door_left ${door? "door_open" : null}`}></div>
        <div className={`door_right ${door? "door_open" : null}`}></div>
      </div>
      <div className='lockBox' style={{ display: door ? "none" : null }}>
          <input type="checkbox" id="toggle" checked={lock} />
          <div className="lock">
            <div className="head">
            <div className="notch"></div>
          </div>
          <div className="body"></div>
          
        </div>
        <div className="key">
            <div className="top"></div>
            <div className="bottom">KEY</div>
        </div>
      </div>
    </S.LoadingContainer>
  )
}



export default Loading;