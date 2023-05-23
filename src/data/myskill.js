const html = `${process.env.PUBLIC_URL}/images/icon_html.png`;
const css = `${process.env.PUBLIC_URL}/images/icon_css.png`;
const sass = `${process.env.PUBLIC_URL}/images/icon_sass.png`;
const javascript = `${process.env.PUBLIC_URL}/images/icon_javascript.png`;
const react = `${process.env.PUBLIC_URL}/images/icon_react.png`;
const redux = `${process.env.PUBLIC_URL}/images/icon_redux.png`;
const typescript = `${process.env.PUBLIC_URL}/images/icon_typescript.png`;
const firebase = `${process.env.PUBLIC_URL}/images/icon_firebase.png`;
const github = `${process.env.PUBLIC_URL}/images/icon_github.png`;
const figma = `${process.env.PUBLIC_URL}/images/icon_figma.png`;


const myskil = [
  {
    class: "html",
    title: "Html5",
    description: "웹접근성, 표준성을 준수하여 시멘틱태그를 이용해 마크업을 할 수 있습니다.",
    image: html
  },
  {
    class: "css",
    title: "Css3",
    description: "position, display를 적절히 사용하여 반응형웹을 적용할 수 있습니다.",
    image: css
  },
  {
    class: "sass",
    title: "Sass",
    description: "SCSS의 문법과 모듈화를 잘 활용하여 스타일 작업을 원활히 할 수 있습니다.",
    image: sass
  },
  {
    class: "javascript",
    title: "Javascript",
    description: "Javascript의 배열, 메소드, DOM을 이해하며 다양한 상황에 적용할 수 있습니다.",
    image: javascript
  },
  {
    class: "react",
    title: "React",
    description: "React 구조와 여러가지 hook들을 잘 알고 있으며, 범용적이고 재사용가능한 컴포넌트 설계를 할 수 있습니다.",
    image: react
  },
  {
    class: "redux",
    title: "Redux",
    description: "React와 함께 사용하여 복잡한 애플리케이션의 상태를 효율적으로 관리할 수 있습니다.",
    image: redux
  },
  {
    class: "typescript",
    title: "Typescript",
    description: "Typescript를 활용하여 코드 작성효율과 코드 유지보수성을 향상시킬 수 있습니다.",
    image: typescript
  },
  {
    class: "firebase",
    title: "Firebase",
    description: "사용자 인증, 데이터베이스, 스토리지와 연결시켜 여러가지 기능을 구현할 수 있습니다.",
    image: firebase
  },
  {
    class: "github",
    title: "Github",
    description: "commit, push, pull, clone 등 git 명령어를 사용하여 레파지토리에 접근할 수 있습니다.",
    image: github
  },
  {
    class: "figma",
    title: "Figma",
    description: "데스크톱, 모바일 UI/UX 시안을 작업 할 수 있으며, 디버깅을 잘 활용할 수 있습니다.",
    image: figma
  }
]

export default myskil;