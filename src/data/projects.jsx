import React from 'react';

const samsungcntVideo = `${process.env.PUBLIC_URL}/videos/samsungcnt.mp4`;
const movieVideo = `${process.env.PUBLIC_URL}/videos/movie.mp4`;
const messengerVideo = `${process.env.PUBLIC_URL}/videos/messenger.mp4`;
const cjoneVideo = `${process.env.PUBLIC_URL}/videos/cjone.mp4`;
const samsungsemVideo = `${process.env.PUBLIC_URL}/videos/samsungsem.mp4`;

// 삼성물산 유효성검사
const samsungcntCSS = `${process.env.PUBLIC_URL}/images/samsungcntCSS.jpg`;
const samsungcntHTML = `${process.env.PUBLIC_URL}/images/samsungcntHTML.jpg`;
const samsungcntLightHouse = `${process.env.PUBLIC_URL}/images/samsungcntLightHouse.jpg`;
const samsungcntsub1css = `${process.env.PUBLIC_URL}/images/samsungcntsub1css.jpg`;
const samsungcntsub1html = `${process.env.PUBLIC_URL}/images/samsungcntsub1html.jpg`;
const samsungcntsub1LightHouse = `${process.env.PUBLIC_URL}/images/samsungcntsub1LightHouse.jpg`;
const samsungcntsub2css = `${process.env.PUBLIC_URL}/images/samsungcntsub2css.jpg`;
const samsungcntsub2html = `${process.env.PUBLIC_URL}/images/samsungcntsub2html.jpg`;
const samsungcntsub2LightHouse = `${process.env.PUBLIC_URL}/images/samsungcntsub2LightHouse.jpg`;

// CJONE 유효성검사
const CJONEcss = `${process.env.PUBLIC_URL}/images/CJONEcss.jpg`;
const CJONEhtml = `${process.env.PUBLIC_URL}/images/CJONEhtml.jpg`;
const CJONELightHouse = `${process.env.PUBLIC_URL}/images/CJONELightHouse.jpg`;

// 삼성전기 유효성검사
const samsungsemcss = `${process.env.PUBLIC_URL}/images/samsungsemcss.jpg`;
const samsungsemhtml = `${process.env.PUBLIC_URL}/images/samsungsemhtml.jpg`;
const samsungsemLightHouse = `${process.env.PUBLIC_URL}/images/samsungsemLightHouse.jpg`;
const samsungsemsub1css = `${process.env.PUBLIC_URL}/images/samsungsemsub1css.jpg`;
const samsungsemsub1html = `${process.env.PUBLIC_URL}/images/samsungsemsub1html.jpg`;
const samsungsemsub1LightHouse = `${process.env.PUBLIC_URL}/images/samsungsemsub1LightHouse.jpg`;
const samsungsemsub2css = `${process.env.PUBLIC_URL}/images/samsungsemsub2css.jpg`;
const samsungsemsub2html = `${process.env.PUBLIC_URL}/images/samsungsemsub2html.jpg`;
const samsungsemsub2LightHouse = `${process.env.PUBLIC_URL}/images/samsungsemsub2LightHouse.jpg`;

const projects = [
  {
    class : "samsungcnt",
    title : "삼성물산",
    used : [
      <>
        <p>#Html</p>
        <p>#Css</p>
        <p>#Javascript</p>
        <p>#반응형</p>
        <p>#웹표준 준수</p>
      </>
    ],
    explanation : [
      <p>
      삼성물산 홈페이지를 <span>figma</span>를 이용해서 Layout을 정하고, 퍼블리싱
      반응형 웹으로 Pc, Tablet, Mobile 환경에서 사용가능 
      </p>,
       <p>
       Css <span>animation</span> 속성과 마우스 <span>Hover</span> 인터렉션 구현
     </p>,
      <p>
      Javascript <span>settimeout함수</span>를 이용해서 무한 롤링슬라이드 구현
    </p>
    ],
    site : 'https://bgyuee.github.io/samsungcnt_project/',
    github: 'https://github.com/bgyuee/samsungcnt_project',
    videos : samsungcntVideo,
    validation : [
      samsungcntCSS, samsungcntHTML, samsungcntLightHouse, samsungcntsub1css, samsungcntsub1html,
      samsungcntsub1LightHouse, samsungcntsub2css, samsungcntsub2html, samsungcntsub2LightHouse
    ]
  },
  {
    class : "movie",
    title : "What’s Movie",
    used : [
      <>
        <p>#React</p>
        <p>#Scss</p>
        <p>#Styled-Components</p>
        <p>#Firebase</p>
        <p>#Github</p>
        <p>#반응형</p>
      </>
    ],
    explanation : [
      <>
        <p><span>Axios</span>를 사용한 API호출로 데이터 전달</p>
        <p><span>Swipe</span> 라이브러리로 영화배열의 스와이프 기능 구현</p>
        <p><span>Hook</span> 함수(useEffect / useState)를 사용해 데이터 전달 및 관리</p>
        <p>
        검색 창에 키보드 타이핑이 끝날 때 까지 기다리는 <span>Debouncing 사용자 함수</span> 생성<br/>
        모달 창 밖을 클릭하면 닫히는 <span>onClickOutside 사용자 함수</span> 생성
        </p>
        <p>
        <span>Cloud Firestore와</span> 연동<br />
        &nbsp;-좋아요, 찜하기 기능  구현<br />
        &nbsp;-해당 영화를 좋아요한 유저들의 Uid를 문서안에 배열로 모아 이 배열의 Length를 <br />
        &nbsp;구하고 해당 영화의 하트안에 숫자로 표현<br />
        &nbsp;-찜한 영화리스트 데이터들을 불러와 Mypage 화면에 표현해주는 기능을 구현
        </p>
      </>
      
    ],
    site : 'https://bgyuee.github.io/movie_webapp/',
    github: 'https://github.com/bgyuee/movie_webapp',
    videos : movieVideo,
    validation : []
  },
  {
    class : "messenger",
    title : "Messenger",
    used : [
      <>
        <p>#React</p>
        <p>#Scss</p>
        <p>#Firebase</p>
        <p>#Github</p>
      </>
    ],
    explanation : [
      <>
        <p><span>Axios</span>를 사용한 API호출로 데이터 전달</p>
        <p><span>Hook 함수(useEffect / useState)</span>를 사용해 데이터 전달 및 관리</p>
        <p><span>인증서비스</span>를 사용해 이메일 및 소셜 로그인 기능 구현</p>
        <p>
        <span>Cloud Firestore</span>와 연동<br />
          &nbsp;-마이프로필의 닉네임, 상태메세지, 프로필사진, 배경화면 변경가능
        </p>
        <p>
        <span>Storage</span>와 연동<br />
          &nbsp;-배경이미지는 UserData에 못담기 때문에 따로 Storage에 넣어서<br />
          &nbsp;&nbsp;Storage속 이미지파일의 URL을 가져와서 사용
        </p>
     </>
    ],
    site : 'https://bgyuee.github.io/Chattingwebapp/',
    github: 'https://github.com/bgyuee/Chattingwebapp',
    videos : messengerVideo,
    validation : []
  },
  {
    class : "cjone",
    title : "CJONE",
    used : [
      <>
        <p>#Html</p>
        <p>#Css</p>
        <p>#Javascript</p>
        <p>#반응형</p>
        <p>#웹표준 준수</p>
      </>
    ],
    explanation : [
      <>
        <p>CJONE 홈페이지를 <span>figma</span>를 이용해서 Layout을 정하고, 퍼블리싱</p>
        <p>반응형 웹으로 Pc, Tablet, Mobile 환경에서 사용가능</p>
        <p><span>CSS animation</span> 속성과 마우스 <span>Hover</span> 인터렉션 구현</p>
        <p><span>Javascript의 배열</span>을 이용해서 gif파일을 이용해서 애니메이션 구현</p>
    </>
    ],
    site : 'https://bgyuee.github.io/CJONE_project/',
    github: 'https://github.com/bgyuee/CJONE_project',
    videos : cjoneVideo,
    validation : [
      CJONEcss, CJONEhtml, CJONELightHouse
    ]
  },
  {
    class : "samsungsem",
    title : "삼성전기",
    used : [
      <>
        <p>#Html</p>
        <p>#Css</p>
        <p>#Javascript</p>
        <p>#반응형</p>
        <p>#웹표준 준수</p>
      </>
    ],
    explanation : [
      <>
        <p>삼성전기 홈페이지를 <span>figma</span>를 이용해서 Layout을 정하고, 퍼블리싱</p>
        <p><span>CSS animation</span> 속성과 마우스 <span>Hover</span> 인터렉션 구현</p>
      </>
    ],
    site : 'https://bgyuee.github.io/samsungsem/',
    github: 'https://github.com/bgyuee/samsungsem',
    videos : samsungsemVideo,
    validation : [
      samsungsemcss, samsungsemhtml, samsungsemLightHouse, samsungsemsub1css, samsungsemsub1html,
      samsungsemsub1LightHouse, samsungsemsub2css, samsungsemsub2html, samsungsemsub2LightHouse
    ]
  }
  
]

export default projects;