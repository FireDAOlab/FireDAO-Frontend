import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport.png";
export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* pc style */
  @media screen and (min-width: 1000px) {
    .panel-box {
      background: #241B1B;
      margin:1em auto;
      border-radius:20px;
    }
    .userinfo-box {
      width: 90%;
      margin: 0 auto;

      .panel-container {
        width: 100%;
      }

      .user-info {
        position: relative;
        align-items: flex-start;

        .userinfo-header {
          display: flex;
margin-top:50px;
          .header-icon {
            position: relative;

            top: 25px;
            img {
              width: 150px;
              height: 150px;
              position: relative;
              z-index: 1;
            }
p{
  font-size: 20px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
margin-top:20px;
text-align:center;
}
            &::after {
              content: '';
              width: 104px;
              z-index: -1;
              height: 104px;
              background: rgba(223, 66, 66, 0.3);
              filter: blur(19px);
              position: absolute;
              top: 50%;
              left: 20px;
            }
          }

          .right {
            padding: 4em 2em 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .name {
              font-weight: bold;
              font-size: 30px;
              color: #fff;
              display: flex;
              align-items: center;

              .id {
                text-align:center;
                line-height:30px;
                font-size:16px;
                align-items: center;
                display: flex;
                padding: 6px 30px;
                margin-top: 1em;
                color: rgba(138, 128, 128, 1);
                /* background: #3F3535; */
                
                div{
                 background: rgba(254, 109, 70, 0.20);
              margin-left: 1em;
                  width: 80px;
                  height: 30px;
                  border-radius: 50px;
                  border: 1px solid rgba(254, 109, 70, 0.50);
                  color: rgba(254, 109, 70, 1);
                }
              }
              .reputation {
                font-size:16px;
                align-items: center;
                display: flex;
                padding: 6px 30px;
                margin-top: 1em;
                color: rgba(138, 128, 128, 1);

            .reputation-data-box {
              margin-left: 1em;
            

              .reputation-data {
                text-align:center;
                line-height:30px;
                background: rgba(254, 109, 70, 0.20);
                margin-left:20px;
                  width: 80px;
                  height: 30px;
                  border-radius: 50px;
                  border: 1px solid rgba(254, 109, 70, 0.50);
                  color: rgba(254, 109, 70, 1);
              }
            }

          }
            }

            .bio-box {
              margin-left: 1.5em;
              font-size: 20px;
              font-family: Roboto-Bold, Roboto, sans-serif;


              .bio {
                strong{
                  color: #fff;
                  margin-right: 10px;
                }
                color: #999;
                font-family: Roboto-Bold, Roboto;
                font-weight: bold;
              }
            }
          }
        }

        .passport-header-bg {
          position: absolute;
          z-index: 1;
          top: 0;
          left: 0;
          width: 100%;
          background: url(${passportHeaderBg});
          background-repeat:no-repeat;
          background-size: 100%;
          height: 160px;
          
        }


        .recommender {
          display: flex;
          align-items: center;
          margin: 2em 0 0;
          padding:0em 1em;
          justify-content: space-between;
          .recommender-info{
            display: flex;
          }
          .left {
            display: flex;
            align-items: center;
          }

          

          .name {
            font-size: 16px;
            font-family: Helvetica-Bold, Helvetica, sans-serif;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 19px;
          }

          .address {
            margin-left: 1em;
            text-align:center;
                line-height:30px;
                font-size:16px;
                align-items: center;
                display: flex;
                padding: 6px 30px;
                color: rgba(138, 128, 128, 1);
            .address-data {
                text-align:center;
                line-height:30px;
                background: rgba(205, 158, 87, 0.20);
                margin-left:20px;
                  width: 120px;
                  height: 30px;
                  border-radius: 50px;
                  border: 1px solid rgba(205, 158, 87, 0.20);
                  color: rgba(205, 158, 87, 1);
              }
            img {
              cursor: pointer;
              margin-left: 3em;
              width: 16px;
              height: 16px;
            }
          }

          .pid {
            padding: 6px 30px;
            margin-left: 1em;
            text-align:center;
                line-height:30px;
                font-size:16px;
                align-items: center;
                display: flex;
                color: rgba(138, 128, 128, 1);
                .reputation-data {
                text-align:center;
                line-height:30px;
                background: rgba(254, 109, 70, 0.20);
                margin-left:20px;
                  width: 80px;
                  height: 30px;
                  border-radius: 50px;
                  border: 1px solid rgba(254, 109, 70, 0.50);
                  color: rgba(254, 109, 70, 1);
              }
            span {
              margin-left: 0.5em;
            }
          }
        }

        .link-box {
          padding:1em 1em;
          align-items: center;
          display: flex;
          width: 100%;
          .link-item {
            padding-top: 1.5em;
            font-size: 18px;
            display: block;
            align-items: center;

            .name {
              font-size:16px;
              font-weight: bold;
              margin-right: 15px;
              color: #8A8080;
            }

            .value {
              margin-top:10px;
              text-align:center;
              color: #84C0FF;
              margin-right: 15px;
              width: 170px;
              line-height:30px;
height: 30px;
background: rgba(87,141,205,0.1);
border-radius: 50px 50px 50px 50px;
border: 1px solid rgba(87,141,205,0.5);
            }

            a {
              display: flex;
              align-items: center;
            }
          }
        }
      }

    }

    .web3id-box {
      .panel-title {
        font-size: 30px;
      }

      .nft-list {
        justify-content: center;
width: 100%;
margin-top: 3em;
margin-bottom: 1em;
.boxshadow{
  
  margin-top: 3em;
width: 48%;
margin: 0 auto;
background: #140E0E;
border-radius: 20px;
opacity: 1;
border: 1px solid rgba(255,255,255,0.1);

}
        .nft-info-box {
          text-align: center;
          margin-right: 1em;
          width: 93%;
margin: 1em;
          .nft-box {
            background: #3F3535;
            border-radius: 18px;
            border: 1px solid #7F6868;
            padding: 10px;
            img {
              width: 100%;
              height: auto;
            }

            .name {
              font-weight: bold;
              font-size: 26px;
              font-family: Helvetica-Bold, Helvetica, sans-serif;
            }
          }

          .notr {
            
            text-align:left;
            margin: 1em 0;
            font-size: 16px;
font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 40px;
            .destory{
              margin-top:5px;
              font-size:14px;
              margin-left:10px;
              float: right;
              width: 80px;
height: 30px;
border-radius: 50px 50px 50px 50px;
opacity: 1;
background: #140E0E;
border: 1px solid rgba(255,255,255,0.2);
color:#8A8080;
text-align:center;
            }
            .val{
              float: right;
            }
            .id {
              align-item:center;
            text-align:left;
            font-size: 16px;
font-family: Roboto-SemiBold, Roboto;
            font-weight: bold;
            float: right;
            display: flex;
            text-align:center;
            .bor{
              margin-top:5px;
              margin-left:10px;
              width: 80px;
              line-height:30px;
height: 30px;
              background: rgba(254,109,70,0.1);
border-radius: 50px 50px 50px 50px;
border: 1px solid rgba(254,109,70,0.5);
            }
          }
          }

          
        }
      }

    }

    .myFireSeed {
      .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .list-item {
          cursor: pointer;
          padding: 10px;
          min-width: 260px;
          margin-top: 2em;
          margin-right: 2.5%;
          background: #3F3535;
          border-radius: 10px;
          border: 1px solid #7F6868;
          width: 23%;

          &:nth-child(4n) {
            margin-right: 0;
          }

          .img {
            width: 100%;
          }

          .item-info {
            margin-top: 1em;
            display: flex;
            justify-content: space-between;

            .id {
              font-size: 16px;
              font-family: Helvetica-Bold, Helvetica, sans-serif;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 19px;
            }

            .number-box {
              background: rgba(#DD3642, 0.5);

              .number {
                text-align: center;
                width: 60px;
                height: 24px;
                box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
                border-radius: 10px;
                border: 1px solid;
                border-image: linear-gradient(316deg, rgba(221, 54, 66, 1), rgba(255, 192, 44, 1)) 1 1;
              }
            }

          }
        }
      }

      .more-btn {
        width: 300px;
        height: 40px;
        background: #3F3535;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        margin: 2em auto 0;
        cursor: pointer;
      }
    }

    .panel-box {
      width: 90%;
      margin: 0.5em auto;

      .panel-container {
        padding: 0em 5em;
        position: relative;
        width: 100%;

        .change-userInfo {
          cursor: pointer;
          position: absolute;
          right: 2em;
          top: 3em;

          img {
            width: 3em;
            height: 3em;
          }
        }
      }
    }
  }


  /* mobile style */
  @media screen and (max-width: 1000px) {
    .panel-box {
      width: 90vw;
      margin: 0 auto;

      .panel-container {
        padding: 3em 1em;
        position: relative;
        width: 100%;

        .nft-list {
          flex-direction: column;
          width: 100%;
          .nft-info-box {
            margin-top: 2em;
            background: #3F3535;
            border-radius: 18px;
            border: 1px solid #7F6868;
            padding: 1em;
            width: 50%;
            .nft-box {
              img {
                width: 100%;
              }
            }
          }
        }

        .change-userInfo {
          cursor: pointer;
          position: absolute;
          right: 2em;
          top: 3em;

          img {
            width: 3em;
            height: 3em;
          }
        }
      }
    }

    .userinfo-box {
      width: 90vw;
      margin: 0 auto;

      .user-info {
        position: relative;
        align-items: flex-start;

        .change-userInfo {
          cursor: pointer;
          position: absolute;
          right: 2em;
          top: 3em;

          img {
            width: 3em;
            height: 3em;
          }
        }

        .userinfo-header {
margin-top:50px;
          .header-icon {
            position: relative;
            top: 30px;
            img {
              width: 100px;
              height: 100px;
              position: relative;
              
              z-index: 1;
              left: calc(50% - 50px);
            }

            &::after {
              content: '';
              width: 104px;
              z-index: -1;
              height: 104px;
              background: rgba(223, 66, 66, 0.3);
              filter: blur(19px);
              position: absolute;
              top: 50%;
              left: 20px;
            }
          }

          .right {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            .name {
              font-weight: bold;
              font-size: 30px;
              color: #fff;
              text-align: center;
            }

            .bio-box {
              font-size: 16px;
              font-family: Roboto-Bold, Roboto, sans-serif;
              border-bottom: 1px solid rgba(255,255,255,0.2);
              padding-bottom: 20px;
              .bio {
                strong{
                  color: #fff;
                  margin-right: 10px;
                }
                color: #999;
                font-family: Roboto-Bold, Roboto;
                font-weight: bold;
              }
            }
          }
        }

        .passport-header-bg {
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          background: url(${passportHeaderBg});
          background-position: -20%;
          background-size: auto 100%;
          height: 100px;
        }

        .recommender {
          align-items: center;
          margin: 2em 0 0;
          padding: 1em;
          justify-content: space-between;
          .recommender-info{
            display: flex;
          }
          .left {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .address {
              margin-left: 0.5em;
              margin-top: 1em;
            }
          }

          

          .name {
            font-size: 16px;
            font-family: Helvetica-Bold, Helvetica, sans-serif;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 19px;
          }

          .address {
            padding: 6px 10px;
            background: #3F3535;
            border-radius: 10px;
            border: 1px solid #342727;

            img {
              cursor: pointer;
              margin-left: 3em;
              width: 16px;
              height: 16px;
            }
          }

          .pid {
            padding: 6px 30px;
            margin-top: 1em;
            background: #3F3535;
            border-radius: 10px;
            border: 1px solid #342727;

            span {
              margin-left: 0.5em;
            }
          }
        }

        .link-box {
          align-items: center;
          /* display: block; */
          /* flex-wrap: wrap; */
          .flex-box {
            display: block;
            width: 50%;
          }

          .link-item {
            padding-top: 1.5em;
            font-size: 16px;
            
            display: flex;
            justify-content: space-between;
            align-items: center;
            svg{
              flex-shrink: 0;
            }
            .name {
              font-weight: bold;
              margin-left: 0.5em;
              color: #fff;
            }

            .value {
              text-align: right;
              flex-grow: 1;
              color: #84C0FF;
              margin-left: 0.5em;
            }

            a {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }
        }
      }

    }

    .myFireSeed {
      .list {

        .list-item {
          cursor: pointer;
          padding: 10px;
          width: 100%;
          margin-top: 2em;
          margin-right: 2.5%;
          background: #3F3535;
          border-radius: 10px;
          border: 1px solid #7F6868;


          .img {
            width: 100%;
          }

          .item-info {
            margin-top: 1em;
            display: flex;
            justify-content: space-between;

            .id {
              font-size: 16px;
              font-family: Helvetica-Bold, Helvetica, sans-serif;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 19px;
            }

            .number-box {
              background: rgba(#DD3642, 0.5);

              .number {
                text-align: center;
                width: 60px;
                height: 24px;
                box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
                border-radius: 10px;
                border: 1px solid;
                border-image: linear-gradient(316deg, rgba(221, 54, 66, 1), rgba(255, 192, 44, 1)) 1 1;
              }
            }

          }
        }
      }

      .more-btn {
        width: 300px;
        height: 40px;
        background: #3F3535;
        border-radius: 5px;
        line-height: 40px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        margin: 2em auto 0;
        cursor: pointer;
      }
    }
  }
`

