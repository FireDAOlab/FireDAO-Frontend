import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";
import communityBg from "../../../imgs/communuty_header_bg.png"

export default   styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  @media screen and (max-width: 1950px) {

  .header-box {
    display: flex;
    justify-content: space-between;

    .btn-box {
      display: flex;
width: 100%;
      .ant-btn {
        height: 40px;
        margin-left: 10px;
        width: 32%;
        font-size: 18px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;

background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
      }
    }
  }

  .content-box {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    .content-item {
      width: 48%;
      border-radius: 15px;
      background: #1A1414;
      /* padding: 15px; */
      opacity: 1;
      border: 1px solid rgba(255, 255, 255, 0.1);

      .header {
         font-weight:500;
font-size: 16px;
        padding: 1em 2.5em;
        font-family: Roboto-Medium, Roboto;

        color: #8A8080;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .content-list {

        .in-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em 2.5em;
          font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
          .name {
            font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
          }

          .value {
            background: rgba(205, 158, 87, 0.1);
            border-radius: 38px 38px 38px 38px;
            padding: 5px 10px;
            opacity: 1;
            font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #CD9E57;
            border: 1px solid rgba(205, 158, 87, 0.5);
          }
        }
      }
    }
  }

  .info-list {
    display: flex;
    justify-content: space-between;

    .info-item {
      text-align: center;

      .value {
        font-size: 30px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
      }

      .name {
        margin-top: 10px;
        font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
      }
    }
  }

  .header-content {
    padding: 24px 0;
    position: relative;
    .banner {
      width: 100%;
      /* height: 120px; */
      background: url(${communityBg});
      background-size: 100%;
margin: 1em 0;
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
         
          background-repeat:no-repeat;
          height: 160px;
          Button{
            margin-top: 200px;
          }
       
    }


    .header-icon {
      position: relative;
      left: 38px;
      top: 90px;
      /* user-select: none; */

      img {
        position: relative;
        width: 120px;
        height: 120px;
        z-index: 1;
      }
    }
    .community-info {
      padding-left: 180px;

      .title {
        padding-top: 6px;
        font-size: 20px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
      }

      .bio-box {
        margin-top: 10px;
        font-size: 16px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
        color: #8A8080;

        strong {
            font-size: 16px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
          margin-right: 6px;
        }
      }
      .listPic{
        display: flex;
        margin:0.5em 0em;
        img{
            width: 30px;
            margin-left:5px;
            &:first-child{
                margin-left:0px;
            }
        }
        span{  
border: 1px solid rgba(254,109,70,0.5);

border-radius: 51px ;
            background: rgba(254,109,70,0.1);
            font-size: 16px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FE6D46;
margin-left:10px;
padding:0 10px;
        }
      }
    }
  }

  .proposal-list {
    margin-top: 30px;
  }

  .delegate-list {
    display: flex;
    margin-top: 30px;
    .delegate-item{
      width: 32%;
      background: #1A1414;
      border-radius: 15px 15px 15px 15px;
      border: 1px solid rgba(255,255,255,0.1);
      padding: 23px 15px;
      .header{
       
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        padding-bottom: 20px;
        .left{
          font-family: Roboto-Medium, Roboto;
          display: flex;
          align-items: center;
          .left-content{
            margin-left: 10px;
          }
          .headerIcon{
            width: 50px;
            height: 50px;
          }
          .name{
            font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
          }
          .value{
            font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
            color: #8A8080;
          }
        }
        .right{
            .ant-btn{
                font-size: 18px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
height: 40px;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
      }
      .delegate-content{
        .intro{
            font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
margin-top:1em;
margin-bottom:4em;
        }
        .twitter{
            font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height:30px;
        .icon{
          width: 30px;
          height: 30px;
        }
    }
    .truste{
        font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
    }

      }
    }
  }
}
  @media screen and (max-width: 1500px) {
    
  }
`

