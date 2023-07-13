import React from 'react'

export default function Mousemove() {
    const mouse = `${process.env.PUBLIC_URL}/images/mouse.png`;
    const wheelDown = `${process.env.PUBLIC_URL}/images/wheelDown.png`;
  return (
    <div className="mosemove">
              <div className='mouse'  style={{background:`url(${mouse}) no-repeat 50% 50%`}} />
              <div className='mouseWheelDown' style={{background:`url(${wheelDown}) no-repeat 50% 50%`}} />
    </div>
  )
}
