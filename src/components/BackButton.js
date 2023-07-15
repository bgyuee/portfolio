import React from 'react';
export default function BackButton({setProjectOrder}) {

  const BackButton = `${process.env.PUBLIC_URL}/images/backbutton.png`;

  return (
    <button 
        style={{background : `url(${BackButton})`}}
        onClick={() => setProjectOrder(null)}
    >
        뒤로가기
    </button>
  )
}
