import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";
export default   styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* pc style */
  .sub-btn{
    margin-top: 20px;
    width: 150px;
  }
  .create-content{
    display: flex;
    .left-part{
      img{
        width: 60%;
        margin-left: 20%;
      }
    }
  }
  .fid-score{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    .name{
      font-size: 16px;
    }
    .value{
      margin-left: 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  @media screen and (min-width: 1000px) {

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

          .header-icon {
            position: relative;

            img {
              width: 150px;
              height: 150px;
              position: relative;
              z-index: 1;
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
                padding: 6px 30px;
                margin-top: 1em;
                background: #3F3535;
                border-radius: 10px;
                border: 1px solid #342727;
                margin-left: 3em;
              }
            }

            .bio-box {
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
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          background: url(${passportHeaderBg});
          background-size: 100%;
          height: 100px;
        }


        .recommender {
          display: flex;
          align-items: center;
          margin: 2em 0 0;
          justify-content: space-between;
          .recommender-info{
            display: flex;
          }
          .left {
            display: flex;
            align-items: center;
          }

          .reputation {
            display: flex;
            align-items: center;

            .reputation-data-box {
              margin-left: 1em;
              border-radius: 10px;
              padding: 1px;
              background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);

              .reputation-data {
                padding: 3px 30px;
                background: linear-gradient(320deg, #483019 0%, #44201b 100%);
                border-radius: 10px;
                font-size: 18px;
                font-family: Helvetica-Bold, Helvetica, sans-serif;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 31px;
              }
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
            margin-left: 1em;
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
            margin-left: 1em;
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
          flex-wrap: wrap;

          .link-item {
            min-width: 36%;
            padding-top: 1.5em;
            margin-right: 3em;
            font-size: 18px;
            display: flex;
            align-items: center;

            .name {
              font-weight: bold;
              margin-left: 0.5em;
              color: #fff;
            }

            .value {
              color: #84C0FF;
              margin-left: 0.5em;
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
        text-align: center;
        font-size: 40px;
      }

      .nft-list {
        justify-content: center;

        .nft-info-box {
          text-align: center;
          margin-top: 3em;
          margin-right: 1em;
          width: 33%;

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
            margin: 0.5em 0;
            font-size: 18px;
            font-family: Helvetica-Bold, Helvetica, sans-serif;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 29px;
          }

          .id {
            font-size: 22px;
            font-weight: bold;
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
      margin: 0 auto;

      .panel-container {
        padding: 3em 5em;
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

          .nft-info-box {
            margin-top: 2em;
            background: #3F3535;
            border-radius: 18px;
            border: 1px solid #7F6868;
            padding: 1em;

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

          .header-icon {
            position: relative;

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

          .reputation {
            margin: 10px 0;

            .reputation-data-box {
              margin-top: 10px;
              border-radius: 10px;
              padding: 1px;
              background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
              width: 60vw;
              .reputation-data {
                text-align: center;
                padding: 3px 30px;
                background: linear-gradient(320deg, #483019 0%, #44201b 100%);
                border-radius: 10px;
                font-size: 18px;
                font-family: Helvetica-Bold, Helvetica, sans-serif;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 31px;
              }
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
          flex-wrap: wrap;
          .flex-box {
            display: block;
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

