import React from 'react'

export default function MouseWheelup({setHomeMove}) {
    const wheelUp = `${process.env.PUBLIC_URL}/images/wheelUp.png`;
  return (
    <div className='mosemove mouseWheelUp'>
              <div className='mouseWheelUp' style={{background:`url(${wheelUp}) no-repeat 50% 50%`}}
              onClick={() => setHomeMove(true)}
              />
    </div>
  )
}
