import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";
import pass1 from "../../../imgs/pass1.png";
import communityBg from "../../../imgs/communuty_header_bg.png"

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  .commBj{
        float: right;
     background: #373232;
     margin: 0px 13px;
     text-align: center;
     line-height: 28px;
     width: 32px;
     height: 32px;
     border: 1px solid rgba(255, 255, 255, 0.15);
     border-radius: 50%;

}

@media screen and (min-width: 1950px) {
    .header-box11{
        display: none;
    }
  .header-box {
    display: flex;
    justify-content: space-between;

    .btn-box {
      display: flex;
width: 100%;
      .ant-btn {
        margin-left: 10px;
        height: 40px;
        width: 33%;
        font-size: 18px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;

background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
&:first-child{
        margin-left: 0px;
     }       
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
          .valuePro {
            font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #CD9E57;
            
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
    padding: 0px 0;
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
            margin-top: 190px;
          }
       
    }


    .header-icon {
        position: relative;
      padding-left: 38px;

      top: 110px;
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
        margin-top: 60px;
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
width:90px;
text-align:center;
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
    margin: 1.5em 0px;
.list-item:last-child{
border-bottom:none!important;
}
      .flex-box11 {
        padding: 20px 1.8em;
      }
      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:16px;
.logo{
    display: flex;
    .logoPic{
            width:40px;
            height: 40px;
            margin: 5px 0px;
        }
        .mixBox{
                margin-left:10px;
                
                .tit{
                    color:#E48686;
                    font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
                .titleBox{
                    padding: 2px 10px;
                    color: #489BD7;
                    background: rgba(72,155,215,0.1);
border-radius: 51px 51px 51px 51px;
border: 1px solid rgba(72,155,215,0.5);
font-size: 12px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
                }
                p{
                    font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
            }
         }
        &:nth-child(1) {
          width:28%;
          margin-left:2px;
        }

        &:nth-child(2) {
          width: 16%;
          margin-left:2px;
        }

        &:nth-child(3) {
          width: 12%;
          margin-left:2px;
        }

        &:nth-child(4) {
          width: 12%;
          margin-left:2px;
        }
        &:nth-child(5) {
          width: 14%;
          margin-left:2px;
        }

        &:nth-child(6) {
          width: 16%;
          margin-left:2px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:16px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:16px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }

    }

  .delegate-list {
    display: flex;
    flex-flow:wrap;
    justify-content: space-between;
    margin-top: 30px;
    .delegate-item{
      width: 32%;
      background: #1A1414;
      border-radius: 15px 15px 15px 15px;
      border: 1px solid rgba(255,255,255,0.1);
      padding: 23px 15px;
       margin: 5px 0px;
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

  @media screen and (max-width: 1950px) {
    .header-box11{
        display: none;
    }
  .header-box {
    display: flex;
    justify-content: space-between;

    .btn-box {
      display: flex;
width: 100%;
      .ant-btn {
        height: 40px;
        margin-left: 10px;
        width: 33%;
        font-size: 18px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;

background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
&:first-child{
        margin-left: 0px;
     }       
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
          .valuePro {
            font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #CD9E57;
            
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
    padding: 0px 0;
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
            margin-top: 190px;
          }
       
    }


    .header-icon {
      position: relative;
      padding-left: 38px;

      top: 110px;
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
        margin-top: 60px;
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
width:90px;
text-align:center;
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
    margin: 1.5em 0px;
.list-item:last-child{
border-bottom:none!important;
}
      .flex-box11 {
        padding: 20px 1.8em;
      }
      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:16px;
.logo{
    display: flex;
    .logoPic{
            width:40px;
            height: 40px;
            margin: 5px 0px;
        }
        .mixBox{
                margin-left:10px;
                
                .tit{
                    color:#E48686;
                    font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
                .titleBox{
                    padding: 2px 10px;
                    color: #489BD7;
                    background: rgba(72,155,215,0.1);
border-radius: 51px 51px 51px 51px;
border: 1px solid rgba(72,155,215,0.5);
font-size: 12px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
                }
                p{
                    font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
            }
         }
        &:nth-child(1) {
          width:28%;
          margin-left:2px;
        }

        &:nth-child(2) {
          width: 16%;
          margin-left:2px;
        }

        &:nth-child(3) {
          width: 12%;
          margin-left:2px;
        }

        &:nth-child(4) {
          width: 12%;
          margin-left:2px;
        }
        &:nth-child(5) {
          width: 14%;
          margin-left:2px;
        }

        &:nth-child(6) {
          width: 16%;
          margin-left:2px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:16px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:16px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }

    }

  .delegate-list {
    display: flex;
    flex-flow:wrap;
    justify-content: space-between;
    margin-top: 30px;
    .delegate-item{
      width: 32%;
      background: #1A1414;
      border-radius: 15px 15px 15px 15px;
      border: 1px solid rgba(255,255,255,0.1);
      padding: 23px 15px;
      margin: 5px 0px;
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
    .header-box11{
        display: none;
    }
  .panel-title{
    width: 75%;
  }
  .header-box {
    display: flex;
    justify-content: space-between;

    .btn-box {
      display: flex;
      width: 100%;
      .ant-btn {
          height: 35px;
        margin-left: 5px;
        width: 33%;
        font-size: 13px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        color: #FFFFFF;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
     &:first-child{
        margin-left: 0px;
     } 
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
font-size: 14px;
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
          font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
          .name {
            font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
          }

          .value {
            background: rgba(205, 158, 87, 0.1);
            border-radius: 38px 38px 38px 38px;
            padding: 5px 10px;
            opacity: 1;
            font-size: 13px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #CD9E57;
            border: 1px solid rgba(205, 158, 87, 0.5);
          }
          .valuePro {
            font-size: 13px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #CD9E57;
            
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
        font-size: 26px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
      }

      .name {
        margin-top: 10px;
        font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
      }
    }
  }

  .header-content {
    padding: 0px 0;
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
            margin-top:140px;
          }
       
    }


    .header-icon {
        position: relative;
        padding-left: 38px;

      top:95px;
      /* user-select: none; */

      img {
      
        width: 80px;
        height: 80px;
        z-index: 1;
      }
    }
    .community-info {
      padding-left: 140px;

      .title {
        margin-top: 60px;
        font-size: 14px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
      }

      .bio-box {
        margin-top: 10px;
        font-size: 14px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
        color: #8A8080;

        strong {
            font-size: 14px;
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
            width: 26px;
            height: 26px;
            margin-left:5px;
            &:first-child{
                margin-left:0px;
            }
        }
        span{  
border: 1px solid rgba(254,109,70,0.5);
width:80px;
text-align:center;
border-radius: 51px ;
            background: rgba(254,109,70,0.1);
            font-size: 12px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FE6D46;
margin-left:10px;
padding:3px 8px;
        }
      }
    }
  }
.listheadert{
    width: 970px;
}
  .proposal-list {
    margin: 1.5em 0px;
    overflow-x: scroll;
.list-item:last-child{
border-bottom:none!important;
}
      .flex-box11 {
        padding: 20px 1.8em;
      }
      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:14px;
.logo{
    display: flex;
    .logoPic{
            width:40px;
            height: 40px;
            margin: 2px 0px;
        }
        .mixBox{
                margin-left:10px;
                
                .tit{
                    color:#E48686;
                    font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
                .titleBox{
                    padding: 2px 10px;
                    color: #489BD7;
                    background: rgba(72,155,215,0.1);
border-radius: 51px 51px 51px 51px;
border: 1px solid rgba(72,155,215,0.5);
font-size: 12px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
                }
                p{
                    font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
            }
         }
        &:nth-child(1) {
          width:250px;
          margin-left:2px;
        }

        &:nth-child(2) {
          width: 160px;
          margin-left:5px;
        }

        &:nth-child(3) {
          width: 100px;
          margin-left:5px;
        }

        &:nth-child(4) {
          width: 100px;
          margin-left:5px;
        }
        &:nth-child(5) {
          width: 130px;
          margin-left:5px;
        }

        &:nth-child(6) {
          width: 150px;
          margin-left:5px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:14px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:14px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }

    }

  .delegate-list {
    flex-flow:wrap;
    display: flex;
    flex-flow:wrap;
    justify-content: space-between;
    margin-top: 30px;
    .delegate-item{
      width: 33%;
      background: #1A1414;
      border-radius: 15px 15px 15px 15px;
      border: 1px solid rgba(255,255,255,0.1);
      padding: 23px 10px;
       margin: 5px 0px;
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
            margin-left: 8px;
          }
          .headerIcon{
            width: 35px;
            height: 35px;
          }
          .name{
            font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
          }
          .value{
            font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
            color: #8A8080;
          }
        }
        .right{
            width: 80px;
            .ant-btn{
                font-size: 13px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
height: 32px;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
      }
      .delegate-content{
        .intro{
            font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
margin-top:1em;
margin-bottom:4em;
        }
        .twitter{
            font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height:30px;
        .icon{
          width: 23px;
          height: 23px;
        }
    }
    .truste{
        font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
    }

      }
    }
  }
}

@media screen and (max-width: 450px) {
    .header-box11{
        display: block;
.panel-title{
    width: 100%;
      font-size: 18px;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      font-weight: bold;
      color: #FFFFFF;
}
    .btn-box {
      display: flex;
      width: 100%;
      margin: 1.2em 0px;
      .ant-btn {
        padding: 0 5px;
          height: 35px;
        margin-left: 5px;
        width: 33%;
        font-size: 13px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        color: #FFFFFF;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
     &:first-child{
        margin-left: 0px;
     } 
}
    }
    }

    .panel-box {
  padding: 0px 0%;
  border-radius:10px;
  margin:0.5em 0;
  width: 100%;
  .panel-container{
    border: 1px solid rgba(255, 255, 255, 0.1);
    &:first-child{
        width: 100%;
        padding: 0px;
    }
  }
}
  
.header-box{
   display: none;
  }

  .content-box {
    margin-top:1em;
    display: block;
padding: 0;

    .content-item {
        margin: 1em 0;
      width: 100%;
      background: rgb(36, 27, 27);
border:none;

      .header {
         font-weight:500;
font-size: 14px;
        padding: 1em 0em;
        font-family: Roboto-Medium, Roboto;

        color: #8A8080;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .content-list {

        .in-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1em 0em;
          font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
          .name {
            font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
          }

          .value {
            background: rgba(205, 158, 87, 0.1);
            border-radius: 38px 38px 38px 38px;
            padding: 5px 10px;
            opacity: 1;
            font-size: 13px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #CD9E57;
            border: 1px solid rgba(205, 158, 87, 0.5);
          }
          .valuePro {
            font-size: 13px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #CD9E57;
            
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
        font-size: 24px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
      }

      .name {
        margin-top: 10px;
        font-size: 12px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
      }
    }
  }

  .header-content {
    padding: 0px 0;
    position: relative;
    .banner {
        position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      background: url(${pass1});
      background-size: 100%;
        margin:0;
       
          height: 160px;
          background-repeat:no-repeat;
         
      Button{
            margin-top:10px;
          }
       
    }


    .header-icon {
        position: relative;
        padding-left: 38%;
        top:65px;

      img {
        width: 80px;
        height: 80px;
        z-index: 1;
      }
    }
    .community-info {
      padding-left: 0px;
margin:0 auto;
text-align:center;
      .title {
        padding-top: 20px;
        font-size: 18px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
      }

      .bio-box {
        margin-top: 10px;
        font-size: 14px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
        color: #8A8080;

        strong {
            font-size: 14px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
          margin-right: 6px;
        }
      }
      .listPic{
        display: flex;
        margin:1em auto;
       justify-content:center;
        img{
            width: 26px;
            height: 26px;
            margin-left:5px;
            &:first-child{
                margin-left:0px;
            }
        }
        span{  
border: 1px solid rgba(254,109,70,0.5);
width: 65px;
text-align:center;
border-radius: 51px ;
            background: rgba(254,109,70,0.1);
            font-size: 12px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FE6D46;
margin-left:10px;
padding:3px 8px;
        }
      }
    }
  }
.listheadert{
    width: 970px;
}
  .proposal-list {
    margin: 1.5em 0px;
    overflow-x: scroll;
.list-item:last-child{
border-bottom:none!important;
}
      .flex-box11 {
        padding: 20px 1.8em;
      }
      .list-item, .flex-box11{
        justify-content: flex-start;
   

      .col {
        text-align: left;
font-size:14px;
.logo{
    display: flex;
    .logoPic{
            width:40px;
            height: 40px;
            margin: 2px 0px;
        }
        .mixBox{
                margin-left:10px;
                
                .tit{
                    color:#E48686;
                    font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
                .titleBox{
                    padding: 2px 10px;
                    color: #489BD7;
                    background: rgba(72,155,215,0.1);
border-radius: 51px 51px 51px 51px;
border: 1px solid rgba(72,155,215,0.5);
font-size: 12px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
                }
                p{
                    font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
                }
            }
         }
        &:nth-child(1) {
          width:250px;
          margin-left:2px;
          p{
            width: 183px;
          }
        }

        &:nth-child(2) {
          width: 160px;
          margin-left:5px;
        }

        &:nth-child(3) {
          width: 100px;
          margin-left:5px;
        }

        &:nth-child(4) {
          width: 100px;
          margin-left:5px;
        }
        &:nth-child(5) {
          width: 130px;
          margin-left:5px;
        }

        &:nth-child(6) {
          width: 150px;
          margin-left:5px;
        }

       
      }
    }
    
      .list-item {   
        padding:1em 0.5em ;
        font-size:14px;
      
        width: 96%;
        margin: 0 auto;
        border-radius:0px;
        border-bottom:1px solid rgba(255, 255, 255, 0.1);

        .col {
            font-size:14px;
          overflow: hidden;
          padding-left: 0%;

        }
        .no {
          color: #FE6D46;
        }
        .address{
        padding: 2px 5px;
        text-align:center; 
      background: rgba(205,158,87,0.1);
border-radius: 30px 30px 30px 30px;
opacity: 1;
border: 1px solid rgba(205,158,87,0.5);
a{
color:rgba(205, 158, 87, 1)
}
    }
      }

    }

  .delegate-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top:0.8em;
    width: 100%;
    .delegate-item{
      width: 48%;
      background: rgb(36, 27, 27);
      border-radius: 15px 15px 15px 15px;
      border:none;
      padding: 0.8em 10px;
       margin: 5px 0px;
      .header{
       
        display: block;
        align-items: center;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        padding-bottom: 20px;
        .left{
            width: 100%;
          font-family: Roboto-Medium, Roboto;
          display: flex;
          justify-content:center;
          align-items: center;
          .left-content{
            margin-left: 8px;
          }
          .headerIcon{
            width: 40px;
            height: 40px;
          }
          .name{
            font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
          }
          .value{
            font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
            color: #8A8080;
          }
        }
        .right{
            width: 100%;
            margin-top: 1em;
            .ant-btn{
                width: 100%;
                font-size: 14px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
height: 32px;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        }
        }
      }
      .delegate-content{
        .intro{
            font-size: 14px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
margin-top:1em;
margin-bottom:4em;
        }
        .twitter{
            font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height:30px;
        .icon{
          width: 23px;
          height: 23px;
        }
    }
    .truste{
        font-size: 13px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
    }

      }
    }
  }
}
`

