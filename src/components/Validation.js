import React from 'react'
import styled from 'styled-components';

function Validation({setValidationModal, validation, title}) {

  return (
    <ValidatonContainer>
      <h3 className='validation_title'>validation</h3>
      <div className='validation_close' onClick={()=> setValidationModal(false)}>
        CLOSE
      </div>
      <div className='validation_images'>
        {validation.map((image, index) => (
          <div className='validation_image' key={index}>
            <img src={image} alt={title} />
          </div>
        ))}
      </div>
    </ValidatonContainer>
  )
}

const ValidatonContainer = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);

  .validation_title{
    position: absolute;
    top: 80px;
    left: 10%;
    transform: translateX(-50%);
    font-size: 50px;
    color: #fff;
  }

  .validation_close{
    position: absolute;
    top: 60px;
    right: 50%;
    transform: translateX(50%);
    font-size: 100px;
    border-radius: 36px;
    cursor: pointer;
    &:hover{
      color: #1098F7;
    }
  }
  .validation_images{
    position: absolute;
    top: 22%;
    left: 15%;
    width: 70%;
    height: 50%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
    grid-column-gap: 20px;
    .validation_image{
      &:hover{
        transform: scale(2);
      }
      >img{
        width: 100%;
        height: 100%;
      }
    }
  }
`
export default Validation;