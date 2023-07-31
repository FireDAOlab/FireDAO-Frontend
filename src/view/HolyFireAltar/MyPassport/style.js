import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport.png";
export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  /* pc style */
  @media screen and (min-width: 1500px) {
    .flex-container{
      width: 100%;
    }
    .panel-box {
      background: #241B1B;
      /* margin:1em auto; */
      border-radius:20px;
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
    }
    .userinfo-box {
      width: 90%;
      margin: 0 auto;
border: none;
box-shadow:none;
      .panel-container {
        width: 100%;
      }

      .user-info {
        position: relative;
        align-items: flex-start;

        .userinfo-header {
          width: 100%;
          display: flex;
          margin-top:50px;
          .header-icon {
            position: relative;
            left:50px;
            top: 30px;
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
            padding: 0 3em;
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
                margin-left:10px;
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
          padding:0em;
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
            padding: 6px 10px;
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
          padding:1em 0em ;
          align-items: center;
          display: flex;
          width: 100%;
          /* display: block; */
          /* flex-wrap: wrap; */
          .flex-box {
            
          width: 75%;
          }
          .link-item {
            padding-top: 1.2em;
            font-size: 18px;
            display: block;
            align-items: center;
width: 22%;
margin-right:10px;
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
              margin-right: 10px;
              width: 100%;
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
margin: 1em auto;
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
              
              font-family: Helvetica-Bold, Helvetica, sans-serif;
              p{
            font-size:18px;
            line-height:45px;
        }
        span{
          font-size:10px;
        }
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
      margin: 0.5em auto;

      border: 1px solid rgba(255,255,255,0.1);
      .panel-container {
        padding: 30px 11.7%;
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
  @media screen and (max-width: 1500px) {
    .flex-container{
      width: 100%;
    }
    .panel-box {
      background: #241B1B;
      /* margin:1em auto; */
      border-radius:20px;
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
    }
    .userinfo-box {
      width: 90%;
      margin: 0 auto;
border: none;
box-shadow:none;
      .panel-container {
        width: 100%;
      }

      .user-info {
        position: relative;
        align-items: flex-start;

        .userinfo-header {
          width: 100%;
          display: flex;
          .header-icon {
            position: relative;
            left:50px;
            top: 30px;
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
            padding: 0 3em;
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
                font-size:14px;
                align-items: center;
                display: flex;
                padding: 6px 6px 6px 30px;
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
                font-size:14px;
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
                margin-left:10px;
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
              margin-left: 2.2em;
              font-size: 14px;
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
          padding:0em;
          justify-content: space-between;
          .recommender-info{
            display: flex;
          }
          .left {
            display: flex;
            align-items: center;
          }

          

          .name {
            font-size: 14px;
            font-family: Helvetica-Bold, Helvetica, sans-serif;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 19px;
          }

          .address {
            margin-left: 1em;
            text-align:center;
                line-height:30px;
                font-size:14px;
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
            padding: 6px 10px;
            margin-left: 1em;
            text-align:center;
                line-height:30px;
                font-size:1px;
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
          padding:1em 0em ;
          align-items: center;
          display: flex;
          width: 100%;
          /* display: block; */
          /* flex-wrap: wrap; */
          .flex-box {
            
          width: 95%;
          }
          .link-item {
            padding-top: 1.2em;
            font-size: 18px;
            display: block;
            align-items: center;
width: 24%;
margin-right:10px;
            .name {
              font-size:14px;
              font-weight: bold;
              margin-right: 15px;
              color: #8A8080;
            }

            .value {
              margin-top:10px;
              text-align:center;
              color: #84C0FF;
              margin-right: 10px;
              width: 100%;
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
margin: 1em auto;
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
              
              font-family: Helvetica-Bold, Helvetica, sans-serif;
              p{
            font-size:18px;
            line-height:45px;
        }
        span{
          font-size:10px;
        }
            }
          }

          .notr {
            
            text-align:left;
            margin: 1em 0;
            font-size: 14px;
font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 40px;
            .destory{
              margin-top:5px;
              font-size:12px;
              margin-left:3px;
              float: right;
              width: 60px;
              padding: 0px 2px;
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
            font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
            font-weight: bold;
            float: right;
            display: flex;
            text-align:center;
            .bor{
              margin-top:5px;
              margin-left:3px;
              width: 60px;
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
              font-size: 14px;
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
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        margin: 2em auto 0;
        cursor: pointer;
      }
    }

    .panel-box {
      margin: 0.5em auto;

      border: 1px solid rgba(255,255,255,0.1);
      .panel-container {
        padding: 30px 11.7%;
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
`

