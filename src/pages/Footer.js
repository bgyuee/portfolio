import React from 'react'
import styled from 'styled-components'

function Footer({contactRef}) {
  return (
    <FooterContainer className='background_common' id="contact" ref={contactRef}>

    </FooterContainer>
  )
}

const FooterContainer = styled.div`
 border: 1px solid red;
`

export default Footer