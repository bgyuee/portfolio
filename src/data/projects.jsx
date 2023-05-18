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
    period : "2주",
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
     </p>,
     <p>
       <span>AJAX</span>의 최신 Fetch API 사용해서 html 문서안에서 다른 html문서 불러옴
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
    period : "2주",
    explanation : [
      <>
        <p><span>Axios</span>를 사용한 API호출로 데이터 전달</p>
        <p><span>Swipe 라이브러리</span>로 영화배열의 스와이프 기능 구현</p>
        <p>Hook 함수 <span>(useEffect / useState)</span>를 사용해 데이터 전달 및 관리 및 <span>(useCallback / useMemo)</span>를 사용해 성능최적화</p>
        <p>
        검색 창에 키보드 타이핑이 끝날 때 까지 기다리는 <span>Debouncing 사용자 함수</span> 생성<br/>
        모달 창 밖을 클릭하면 닫히는 <span>onClickOutside 사용자 함수</span> 생성
        </p>
        <p>
        Firebase의 <span>Cloud Firestore와</span> 연동<br />
        -좋아요, 찜하기 기능  구현<br />
        -해당 영화를 좋아요한 유저들의 Uid를 문서안에 배열로 모아 이것의 Length를 <br />
        구하고 해당 영화의 하트안에 숫자로 표현<br />
        -찜한 영화리스트 데이터들을 Firestore에 저장하여 이데이터들을 불러와 Mypage 화면에 있는 찜목록에 표현해주는 기능을 구현
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
    period : "2주",
    explanation : [
      <>
        <p><span>Axios</span>를 사용한 API호출로 데이터 전달</p>
        <p>Hook 함수 <span>(useEffect / useState)</span>를 사용해 데이터 전달 및 관리 및 <span>(useCallback / useMemo)</span>를 사용해 성능최적화</p>
        <p>Firebase의<span> 인증서비스</span>를 사용해 이메일 및 소셜 로그인 기능 구현</p>
        <p>
        Firebase의 <span>Cloud Firestore</span>와 연동<br />
          -마이프로필의 닉네임, 상태메세지, 프로필사진, 배경화면 변경가능
        </p>
        <p>
        Firebase의 <span>Storage</span>와 연동<br />
          -배경이미지는 용량이 커서 UserData에 못담기 때문에 따로 Storage에 넣어서<br />
          Storage속 이미지파일의 URL을 가져와서 사용
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
    period : "1주",
    explanation : [
      <>
        <p>CJONE 홈페이지를 <span>figma</span>를 이용해서 Layout을 정하고, 퍼블리싱</p>
        <p>반응형 웹으로 Pc, Tablet, Mobile 환경에서 사용가능</p>
        <p><span>CSS animation</span> 속성과 마우스 <span>Hover</span> 인터렉션 구현</p>
        <p><span>Javascript의 배열</span>을 이용해서 gif파일을 이용해서 애니메이션 구현</p>
        <p><span>AJAX</span>의 최신 Fetch API 사용해서 html 문서안에서 다른 html문서 불러옴</p> 
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
    period : "1주",
    explanation : [
      <>
        <p>삼성전기 홈페이지를 <span>figma</span>를 이용해서 Layout을 정하고, 퍼블리싱</p>
        <p><span>CSS animation</span> 속성과 마우스 <span>Hover</span> 인터렉션 구현</p>
        <p><span>AJAX</span>의 최신 Fetch API 사용해서 html 문서안에서 다른 html문서 불러옴</p> 
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