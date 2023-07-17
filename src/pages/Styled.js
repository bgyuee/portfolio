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
          border-radius: 100%;
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

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .ProjectGrop{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
    width: 85%;
    height: 85%;
    @media (max-width:1216px) {
      width: 900px;  
    }
    @media (max-width:940px) {
      width: 800px;  
      height: 600px;
    }
    @media (max-width:830px) {
      width: 700px;  
      height: 500px;
    }
    @media (max-width:730px) {
      margin-top: -50px;
      width: 600px;  
      height: 450px;
    }
    @media (max-width:628px) {
      margin-top: -70px;
      width: 500px;  
      height: 400px;
    }
    @media (max-width:528px) {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 458px;  
      height: 350px;
    }
  }
`
export const ProjectPreviewContainer = styled.div`
  position: relative;
  background-position: center center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  cursor: pointer;
  transition: transform 0.2s ease-in-out 0s;
  border: 2px solid #ddd;
  &:hover{
    transform: translateY(-30px);
  }
  div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25%;
    text-indent: -9999px;
    overflow: hidden;
    background-color: #000;
    opacity: 0.7;
  }
  h3{
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 45px;
    font-weight: 700;
    color: #FFF;
    @media (max-width:1820px) {
      font-size: 38px;
    }
    @media (max-width:1555px) {
      font-size: 35px;
    }
    @media (max-width:1442px) {
      font-size: 30px;
    }
    @media (max-width:1255px) {
      font-size: 24px;
    }
    @media (max-width:1065px) {
      font-size: 22px;
    }
    @media (max-width:952px) {
      font-size: 18px;
    }
    @media (max-width:802px) {
      font-size: 14px;
    }
    @media (max-width:726px) {
      font-size: 13px;
    }
    @media (max-width:628px) {
      font-size: 11px;
    }
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
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 1632px;
      button{
        position: absolute;
        top: -110px;
        left: 0px;
        width: 100px;
        height: 100px;
        text-indent: -9999px;
        overflow: hidden;
        background-repeat: no-repeat !important;
        background-position: center center !important;
        background-size: cover !important;
        cursor: pointer;
    }
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
      button{
        top: -80px;
        left: -40px;
      }
    }
    @media (max-width:680px){
      width: 250px;
      button{
        left: -25px;
        width: 70px;
        height: 70px;
      }
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