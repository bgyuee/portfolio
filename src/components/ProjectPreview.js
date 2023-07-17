import React from 'react';
import * as s from '../pages/Styled';

function ProjectPreview({project, setProjectOrder, order}) {
    const { title, image } = project; //비디오대신 사진넣기

  return (
    <s.ProjectPreviewContainer 
      onClick={() => setProjectOrder(title)}
      style={{backgroundImage: `url(${image})`}}
    >
      <div>카드배경</div>
      <h3>{title}</h3>
    </s.ProjectPreviewContainer>
  )
}

export default ProjectPreview;