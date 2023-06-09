import styled from "styled-components";

export const HeaderContainer = styled.div`
  z-index: 1000;
  position: fixed;
  width: 100%;
  height: 80px;
  
  .Nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 80px;
    box-sizing: border-box;

    @media (max-width:760px) {
      padding: 0 10px;
    }

    .logo{
      font-size: 50px;
      font-weight: 600;
      cursor: pointer;
      @media (max-width:760px) {
        font-size: 25px;
    }
    }

    .nav_meun{
      display: flex;
      justify-content: space-between;
      width: 450px;
      font-size: 25px;

      @media (max-width:1090px) {
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);

        &.nav_none{
          display: none !important;
        }

        >li{
          margin: 30px 0;
          transition: transform 0.2s linear 0s;
          &:hover{
            transform: scale(1.2);
           }

          a{
           font-size: 60px;
          }
        }
       }
      >li>a{
        position: relative;
        cursor: pointer;
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: #fff;
            transition: width 0.2s ease-in-out 0s;
        }
        &.active{
          &::after{
            width: 100%;
          }
        }
      }
    }
    .mobile_Nav{
      width: 50px;
      height: 50px;
      background-size: cover !important;
      display: none;
      @media (max-width:1090px) {
        position: fixed;
        right: 20px;
        display: block;
        cursor: pointer;
       }
    }
  }
`;

export const LoadingContainer = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .Loading_background{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2. 1fr);
    width: 100%;
    height: 100%;
    filter: blur(5px) grayscale(0.5);
    transition: filter 1s linear 0s;
    &.filterNone{
      filter: none;
    }
    .Load_video{
      video{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .lockBox {
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
        .lock {
      width: 200px;
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    *:before,
    *:after {
      content: "";
      position: absolute;
      display: block;
    }
    @keyframes lock {
      80% {
        transform: translatey(60px);
      }
      100% {
        transform: translatey(55px);
      }
    }
    .head {
      width: 150px;
      height: 150px;
      border-radius: 50% 50% 4px 4px;
      background: radial-gradient(#b0bec5, #78909c, #37474f);
      position: absolute;
      z-index: 1;
      animation: lock 1s forwards;
    }
    .head:before {
      width: 100px;
      height: 135px;
      border-radius: 50% 50% 10% 10%;
      background: transparent;
      margin: 23px 25px;
      box-shadow: -2px -8px 8px 2px #ccc;
    }
    .head:after {
      width: 40px;
      height: 30px;
      background: transparent;
      margin: 120px 122px;
    }
    .notch {
      position: absolute;
      width: 15px;
      height: 15px;
      background: #252525;
      margin: 95px 125px;
      border-radius: 0 30% 30% 0;
      box-shadow: inset -4px 2px 2px 0px #bbb;
    }
    .body {
      width: 190px;
      height: 160px;
      background: linear-gradient(to right, goldenrod, gold, #ff5, gold, goldenrod);
      position: absolute;
      z-index: 3;
      margin-top: 145px;
      border-radius: 10px;
      box-shadow: inset 0px 5px 10px 1px #550, inset 0px -5px 10px 1px #550;
    }
    @keyframes locked {
      50% {
        opacity: 0;
      }
      60% {
        opacity: 0;
        content: "LOCKED";
      }
      100% {
        opacity: 1;
        content: "LOCKED";
        margin: 30% 25%;
      }
    }
    .body:before {
      content: "UNLOCKED";
      font-size: 1.6em;
      margin: 30% 15%;
      color: #500;
      animation: locked 1s forwards;
    }
    .key {
      width: 90px;
      height: 150px;
    }
    .key .top {
      width: 20px;
      height: 80px;
      background: linear-gradient(to right, #cccccc, #444 30%, #cccccc 40%);
      border-radius: 30% 70% 0 0;
      margin: -40px 35px;
      box-shadow: -4px 0px 2px 1px grey;
    }
    .key .top:after {
      width: 5px;
      height: 12px;
      border-radius: 70% 0 0 30%;
      background: #252525;
      margin: 55px 17px;
    }
    .key .top:before {
      width: 5px;
      height: 12px;
      border-radius: 30% 0 0 70%;
      background: #252525;
      margin: 42px 17px;
    }
    .key .bottom {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: radial-gradient(#aaa, #ccc);
      margin: 30px 5px;
      box-shadow: inset 0px 0px 8px 3px grey;
      font-family: "Allerta Stencil", sans-serif;
      color: #500;
      font-size: 1.2em;
      padding: 5px;
      text-align: center;
    }
    .key .bottom:before {
      width: 40px;
      height: 30px;
      border-radius: 50%;
      background: #252525;
      margin: 30px 15px;
      box-shadow: 0px 0px 8px 4px #555;
    }
    #toggle {
      width: 200px;
      height: 300px;
      cursor: pointer;
      position: absolute;
      z-index: 10;
      opacity: 0;
    }
    @keyframes unlockey {
      20% {
        transform: translatey(-20px);
      }
      60% {
        transform: translatey(-20px) rotatey(180deg);
      }
      90% {
        transform: translatey(-20px) rotatey(359deg);
      }
      100% {
        transform: rotatey(359deg);
      }
    }
    #toggle:checked ~ .key {
      animation: unlockey 1s forwards;
      transform-origin: center center;
    }
    @keyframes unlock {
      0% {
        transform: translatey(55px);
      }
      90% {
        transform: translatey(55px);
      }
      100% {
        transform: translatey(0px);
      }
    }
    #toggle:checked ~ .lock .head {
      animation: unlock 1s forwards;
    }
    @keyframes unlocked {
      0% {
        content: "LOCKED";
      }
      50% {
        opacity: 0;
        content: "LOCKED";
        margin: 30% 25%;
      }
      60% {
        opacity: 0;
        content: "UNLOCKED";
        margin: 30% 15%;
      }
      100% {
        opacity: 1;
        content: "UNLOCKED";
        margin: 30% 15%;
      }
    }
    #toggle:checked ~ .lock .body:before {
      animation: unlocked 1s forwards;
    }
  }
  .door{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: perspective(2000px);
    >div{
      position: absolute;
      top: 0;
      width: 50%;
      height: 100%;
      background-color: #252525;
      transform-style: preserve-3d;
      transition: transform 2.5s linear 0s;

        &.door_left{
        left: 0;
        transform-origin: left;
        &.door_open{
          transform: rotateY(-180deg);
        }
        }
        &.door_right{
          right: 0;
          transform-origin: right;
          &.door_open{
          transform: rotateY(180deg);
        }
        }
    }
    
  }

`;

export const HomeContainer = styled.div`
  /* border: 1px solid red; */
  .home_greeting{
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translateX(-50%) translateY(-65%);
    font-size: 34vw;
    font-weight: 700;
    color: #1098F7;
    text-shadow: 5px 5px 10px #105FF7;
    >div{
      transform: translateY(-500px);
      opacity: 0;
      &:nth-of-type(1){transition: transform 0.5s ease-in-out 0s, opacity 0.5s ease-in-out 0s;}
      &:nth-of-type(2){transition: transform 0.5s ease-in-out 0.3s, opacity 0.5s ease-in-out 0.3s;}
      &:nth-of-type(3){transition: transform 0.5s ease-in-out 0.6s, opacity 0.5s ease-in-out 0.6s;}
      &:nth-of-type(4){transition: transform 0.5s ease-in-out 0.9s, opacity 0.5s ease-in-out 0.9s;}
      &:nth-of-type(5){transition: transform 0.5s ease-in-out 1.2s, opacity 0.5s ease-in-out 1.2s;}
    }
    &.hello{
      >div{
      transform: translateY(0);
      opacity: 1;
    }
    }

    @media (max-width:1400px) {
      transform: translateX(-50%) translateY(-65%);
    }
    @media (max-width:1024px) {
      transform: translateX(-50%) translateY(-80%);
    }
    @media (max-width:910px) {
      transform: translateX(-50%) translateY(-85%);
      font-size: 300px;
    }
    @media (max-width:725px) {
      transform: translateX(-50%) translateY(-130%);
      font-size: 190px;
    }
  }
  .introduce_img{
      position: absolute;
      bottom: 70px;
      left: 50px;
      width: 250px;
      height: 250px;
      opacity: 0;
      transform: translateX(-100px);
      transition: transform 0.5s ease-in-out 1.2s, opacity 0.5s ease-in-out 1.2s;
      &.hello{
        transform: translateX(0);
        opacity: 1;
      }
      >img{
        width: 100%;
        height: 100%;
      }
      @media (max-width:1024px) {
        bottom: 10px;
      }
      @media (max-width:725px) {
        bottom: 60px;
      }
    }
  .home_introduce{
    position: absolute;
    bottom: 130px;
    left: 350px;
    display: flex;
    flex-direction: column;
    font-size: 3vw;
    font-weight: 600;
    text-shadow: 2px 2px 4px #1098F7;
    opacity: 0;
    transition: opacity 0s linear 2s;
    >span{
      opacity: 0;
      transition: opacity 0s linear 2.6s;
    }
    &.hello{
      opacity: 1;
      >p{
        white-space: nowrap;
        overflow: hidden;
        animation: typing 1s steps(30, end) 2s;
      }
      >span{
        opacity: 1;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 1s steps(30, end) 2.6s;
      }
    }
    @media (max-width:1024px) {
        bottom: 300px;
        left: 50%;
        width: 725px;
        transform: translateX(-50%);
        font-size: 33px;
      }
     @media (max-width:725px) {
      bottom: 380px;
      text-align: left;
      width: 450px;
      font-size: 20px;
    }
  }
    /* The typing effect */
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white }
    }
`;

export const ProfileContainer = styled.div`
/* border: 1px solid red; */
  position: relative;
  overflow: hidden;
  font-family: 'Do Hyeon', sans-serif;

  .myIntroduce{
    position: absolute;
    top: 100px;
    left: 10%;
    font-size: 40px;
    white-space: nowrap;
    transform: translateY(-40%);
    opacity: 0;
    transition: transform 0.5s linear 0.5s, opacity  0.5s linear 0.5s;
    &.active{
      transform: translateY(0);
      opacity: 1;
    }

    @media (max-width: 1230px) {
      font-size: 33px;
    }
    @media (max-width: 1089px) {
      top: 90px;
      left: 50%;
      transform: translateX(-46%) !important;
      font-size: 24px;
    }
    @media (max-width: 720px) {
      left: 50%;
      transform: translateX(-54.5%) !important;
      font-size: 20px;
    }
    @media (max-width: 600px) {
      left: 50%;
      transform: translateX(-49%) !important;
      font-size: 16px;
    }
  }
  .profile_content{
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1089px) {
      top: 130px;
      flex-direction: column;
      align-items: center;
      width: 95%;
    }
      .myinfo{
        width: 250px;
        transform: translateX(-30%);
        opacity: 0;
        transition: transform 0.5s linear 0.7s, opacity 0.5s linear 0.7s;
        &.active{
          transform: translateX(0);
          opacity: 1;
        }
        >img{
          margin-bottom: 20px;
          width: 80%;
        }
        >div{
          >p{
            margin-bottom: 10px;
            font-size: 20px;
            &.profile_email{
              font-size: 16px;
            }
            &.profile_github{
              font-size: 16px;
              a{
                color: #fff;
                text-decoration: none;
                &:hover{
                  color: #1098F7;
                }
              }
            }
         }
        }
       
        @media (max-width: 1089px) {
          display: flex;
          width: 600px;
          margin-bottom: 0;
          >img{
            margin-bottom: 0;
            margin-right: 50px;
            width: 29%;
          }
          >div{
            >p{
              margin-bottom: 20px !important;
              font-size: 30px;
              &.profile_email{
                font-size: 25px;
              }
              &.profile_github{
                font-size: 25px;
              }
            }
          }
        }
        @media (max-width: 600px) {
          display: flex;
          width: 450px;
          margin-bottom: 30px;
          >img{
            margin-bottom: 0;
            margin-right: 20px;
            width: 34%;
          }
          >div{
            >p{
              margin-bottom: 0;
              font-size: 20px;
              &.profile_email{
                font-size: 16px;
              }
              &.profile_github{
                font-size: 16px;
              }
            }
          }
        }
      }
      .skills{
        display: flex;
        flex-direction: column;
        width: 700px;
        @media (max-width: 1089px) {
           width: 600px;
        }
        .skills_title{
          margin-bottom: 20px;
          font-size: 30px;
          font-weight: 900;
          color: #1098F7;
          text-align: center;
          transform: translateY(-30%);
          opacity: 0;
          transition: transform 0.5s linear 1s, opacity 0.5s linear 1s;
          &.active{
            transform: translateY(0);
            opacity: 1;
          }
        }
        @media (max-width: 600px) {
            width: 450px;
          }
        .skill_list{
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-row-gap: 2px;
          grid-column-gap: 2px;
          margin-bottom: 0;
          width: 100%;
          height: 260px;
          transform: translateY(20%);
          opacity: 0;
          transition: transform 0.5s linear 1.3s, opacity 0.5s linear 1.3s;
          &.active{
            transform: translateY(0);
            opacity: 1;
          }

          @media (max-width: 600px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-row-gap: 0;
            grid-column-gap: 0;
            margin-bottom: 0;
            width: 100%;
            height: 120px;
          }
          >li{
            text-indent: -9999px;
            overflow: hidden;
            background-size: cover;
            border-radius: 12px;
            cursor: pointer;
            transition: filter 0.3s ease-in-out 0s;

            @media (max-width: 600px) {
              display: flex;
              justify-content: center;
              align-items: center;
              text-indent: 0;
              overflow: visible;
              background: none !important;
              font-size: 30px;

              &.skillRotate{
                transform: scale(1.2);
                &.html{color: #E44F26;}
                &.css{color: #1572B6;}
                &.sass{color: #CC6699;}
                &.javascript{color: #F0DB4F;}
                &.react{color: #61DAFB;}
                &.redux{color: #764ABC;}
                &.typescript{color: #007ACC;}
                &.firebase{color: #EEAB37;}
                &.github{color: #FFFFFF;}
                &.figma{color: #FF7262;}
              }
            }

            &.skillRotate{
              &.html{filter: drop-shadow(5px 5px 20px #E44F26);}
              &.css{filter: drop-shadow(5px 5px 20px #1572B6);}
              &.sass{filter: drop-shadow(5px 5px 20px #CC6699);}
              &.javascript{filter: drop-shadow(5px 5px 20px #F0DB4F);}
              &.react{filter: drop-shadow(5px 5px 20px #61DAFB);}
              &.redux{filter: drop-shadow(5px 5px 20px #764ABC);}
              &.typescript{filter: drop-shadow(5px 5px 20px #007ACC);}
              &.firebase{filter: drop-shadow(5px 5px 20px #EEAB37);}
              &.github{filter: drop-shadow(5px 5px 20px #FFFFFF);}
              &.figma{filter: drop-shadow(5px 5px 20px #FF7262);}
            }
          }
        }
        .skill_description{
          margin-top: 10px;
          @media (max-width: 600px) {
            margin-top: 60px;
          }
          transform: translateY(20%);
          opacity: 0;
          transition: transform 0.5s linear 1.7s, opacity 0.5s linear 1.7s;
          &.active{
            transform: translateY(0);
            opacity: 1;
          }
          >h4{
            margin-bottom: 10px;
            font-size: 50px;
            font-weight: 600;
            &.html{color: #E44F26;}
            &.css{color: #1572B6;}
            &.sass{color: #CC6699;}
            &.javascript{color: #F0DB4F;}
            &.react{color: #61DAFB;}
            &.redux{color: #764ABC;}
            &.typescript{color: #007ACC;}
            &.firebase{color: #EEAB37;}
            &.github{color: #FFFFFF;}
            &.figma{color: #FF7262;}
          }
          >p{
            font-size: 25px;
          }
        }
      }
  }

  /* The typing effect */
  @keyframes typing {
      from { width: 0 }
      to { width: 100% }
  }
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: orange }
  }
`;

export const ProjectContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
  margin: 0 auto;
  padding-top: 200px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width:1275px){
    padding-top: 120px;
  }
  .project_content{
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1632px;
    @media (max-width: 1650px) {
      width: 1400px;
    }
    @media (max-width: 1460px) {
      width: 1250px;
    }
    @media (max-width:1275px) {
      width: 600px;
      flex-direction: column;
      align-items: center;
    }
    @media (max-width:680px){
      width: 250px;
    }
    .project_info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 768px;
      height: 550px;

      @media (max-width:1650px){
          width: 600px;
          height: 470px;
        }
      @media (max-width:1275px){
        width: 450px;
        height: 360px;
        margin-bottom: 30px;
      }
      @media (max-width:680px){
        width: 300px;
        height: 290px;
        margin-bottom: 10px;
      }
        
      &.messenger{
        height: 600px;

        @media (max-width:1275px){
          height: 400px;
        }
        @media (max-width:680px){
          height: 300px;
        }
       }

      .project_video{
        position: relative;
        width: 100%;
        height: 450px;
        background-size: cover !important;
        box-sizing: border-box;
        border-radius: 24px 24px 0 0;
        transform: translateY(-20%);
        opacity: 0;
        transition: transform 0.5s linear 0.5s, opacity 0.5s linear 0.5s;
        &.active{
          transform: translateX(0);
          opacity: 1;
        }
        @media (max-width:1650px){
          height: 360px;
        }
        @media (max-width:1275px){
          height: 270px;
        }
        @media (max-width:680px){
          height: 180px;
          border-radius: 12px 12px 0 0;
        }
        &.messenger{
          width: 288px;
          height: 538px;
          margin-bottom: 20px;

          @media (max-width:1275px){
            width: 175px;
            height: 350px;
          }
          @media (max-width:680px){
            width: 90.09px;
            height: 180px;
          }
       }
      
        .video_box{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 64px;
          width: 100%;
          height: 91.6%;
          background-color: #1098F7;
          border-radius:  0 0 12px 12px;
          overflow: hidden;
          @media (max-width:1650px){
            top: 53px;
          }
          @media (max-width:1275px){
            top: 40px;
          }
          @media (max-width:680px){
            top: 21px;
          }
          &.messenger{
            top: 53px;
            left: 50%;
            transform: translateX(-50.5%);
            width: 82.5%;
            height: 76%;
            border-radius: 0 0 0 0;     
            @media (max-width:1275px){
              top: 34px;
              transform: translateX(-50.5%);
              width: 85.5%;
              height: 75%;
            }
            @media (max-width:680px){
              top: 18px;
              transform: translateX(-50%);
              width: 88.5%;
              height: 75%;
            }
         }
          >video{
            width: 100%;
            height: 100%;
            object-fit: cover;
           }
        }
      }
      .project_Link{
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-weight: 500;
        transform: translateY(100%);
        opacity: 0;
        transition: transform 0.5s linear 1s opacity 0.5s linear 1s;
        &.active{
          transform: translateY(0);
          opacity: 1;
        }

        @media (max-width:680px){
          flex-direction: column;
          height: 90px;
        }
        .sites{
          display: flex;
          justify-content: space-between;
          width: 360px;

          @media (max-width:1275px) {
            width: 280px;
            font-size : 13px;
          }
          @media (max-width:680px){
            width: 100%;
          }
          >div{
            display: flex;
            justify-content: center;
            width: 170px;
            height : 45px;
            align-items: center;
            border-radius: 12px;
            cursor: pointer;

            @media (max-width:1275px){
              width: 130px;
              height : 40px;
            }
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                text-decoration: none;
                color: #fff;
              }
            &.site_link{
              background: #353A9E;
            }
            &.site_github{
              padding-left: 10%;
              box-sizing: border-box;
            }
          }
        }
        .validation{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 170px;
          height: 45px;
          background: #CF8E1F;
          border-radius: 12px;
          cursor: pointer;
          @media (max-width:1275px){
            width: 130px;
            height : 40px;
            font-size : 13px;
          }
        }
      }
    }
    .project_description{
      position: relative;
      width: 750px;
      height: 400px;
      transform: translateX(10%);
      opacity: 0;
      transition: transform 0.5s linear 1.3s, opacity 0.5s linear 1.3s;
      &.active{
        transform: translateX(0);
        opacity: 1;
      }
      
      @media (max-width:1650px) {
        width: 600px;
      }
      @media (max-width:680px) {
        width: 370px;
      }
      .project_foreword{
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media (max-width:1275px){
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        @media (max-width:680px){
          margin-bottom: 10px;
        }
        .project_title{
          font-size: 40px;
          font-weight: 600;

          @media (max-width:1650px) {
            font-size: 25px;
            &.movie{
              font-size: 20px;
            }
          }
          @media (max-width:1275px){
            margin-bottom: 15px;
            font-size: 30px;
            &.movie{
              font-size: 30px;
            }
          }
        }
        .project_used{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 500px;
          font-size: 14px;
          @media (max-width:1275px){
            width: 600px !important;
            }
          @media (max-width:680px){
            width: 370px !important;
          }
          &.samsungcnt{
            width: 550px;

            @media (max-width:1275px){
            width: 600px;
            font-size: 15px;
            }
            @media (max-width:680px){
              font-size: 11px;
              &>p:nth-of-type(4){
                display: none;
              }
            }
          }
          &.movie{
            width: 530px;
            font-size: 13px;

            @media (max-width:1650px) {
              font-size: 11px;
              width: 460px;
            }
            @media (max-width:1275px){
              font-size: 15px;
            }
            @media (max-width:680px){
              font-size: 12px;
              &>p:nth-of-type(3) {display: none;}
            }
          }
          &.messenger{
            width: 400px;
            font-size: 16px;
            @media (max-width:680px){
              font-size: 12px;
            }
          }
          &.cjone{
            width: 550px;
            @media (max-width:1275px){
              font-size: 15px;
            }
            @media (max-width:680px){
              font-size: 11px;
              &>p:nth-of-type(4) {display: none;}
            }
          }
          &.samsungsem{
            width: 500px;
            @media (max-width:1275px){
              font-size: 15px;
            }
            @media (max-width:680px){
              font-size: 11px;
            }
          }
          >p{
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 10px;
            height: 20px;
            border-radius: 12px;
            background: #373743;
          }
        }
      }
    }
    .title_additional{
      margin: 10px 0 10px 0;
      font-size: 15px;
      color: #EE942B;

      @media (max-width:1650px){
        font-size: 14px;
      }
      @media (max-width:1275px){
        position: absolute;
        top: 5px;
        right: 130px;
        font-size: 16px;
        &.movie{
          top: 1px;
          right: 95px;
        }
        &.messenger{
          top: 0;
          right: 110px;
        }
        &.cjone{
          top: 0;
          right: 140px;
        }
      }
      @media (max-width:680px) {
        right: 20px;
        font-size: 14px;
        &.movie{
          top: 1px;
          right: -12px;
        }
        &.messenger{
          top: 0;
          right: 0px;
        }
        &.cjone{
          top: 0;
          right: 30px;
        }
      }
    }
    .project_period{
      font-weight: 600;
      color: #1098F7;
      margin-bottom: 10px;
    }
    .project_explanation{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      font-size: 17px;
      h4{
        font-weight: 600;
        margin-bottom: 5px;
      }
      @media (max-width:1650px){
        font-size: 15px;
      }
      @media (max-width:1275px){
        font-size: 16px;
      }
      @media (max-width:680px){
        font-size: 13px;
      }
      >p{
        margin-bottom: 20px;
        margin-left: 10px;
        @media (max-width:1275px){
          margin-bottom: 5px;
        }
        @media (max-width:680px){
          margin-bottom: 2px;
        }
        >span{
          color: #2BEE56;
        }
      }
    }
  }
`;

export const FooterContainer = styled.div`
 /* border: 1px solid red; */
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 box-sizing: border-box;
 
 .contact_container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(20%);
  opacity: 0;
  transition: transform 0.5s linear 0.5s, opacity 0.5s linear 0.5s;
  &.active{
    transform: translateY(0);
    opacity: 1;
  }
 
 .contact_title{
  margin-bottom: 20px;

  font-size: 80px;
  font-weight: 600;
  color: #1098F7;
  @media (max-width: 600px) {
    font-size: 60px;
  }
 }
 .contact_info{
  font-family: 'Do Hyeon', sans-serif;
  margin-bottom: 50px;
  p{
    font-size: 40px;

    @media (max-width: 600px){
      font-size: 30px;
    }
    &.contact_phonenumber{
      margin-bottom: 20px;
    }
    &.contact_email{
      display: flex;
      align-items: center;
      >span{
        margin-left: 10px;
        font-size: 25px;

        @media (max-width: 600px){
        font-size: 20px;
    }
      }
    }
  }
 }
 .contact_github{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    text-decoration: none;
    color: #fff;
    border-radius: 12px;
    opacity: 0.8;
    &:hover{
      opacity: 1;
    }
    >a{
      display: flex;
      align-items: center;
      margin-left: 65px;
      width: 100%;
      height: 100%;
      text-decoration: none;
      color: #fff;
    }
 }
}
`;