import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport.png";
import pass1 from "../../../imgs/pass1.png";
export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  
  .panel-box{
    .panel-container{
      border:none
    }
  }
  .ant-btn-primary::after{
    background: none;
  }
  @media screen and (min-width: 1950px) {
    .boxhr{
      display: none;
    }
    .soul{
      display: none;
    }
    .flex-container{
      width: 100%;
    }
    .ecos{
        font-weight:600;
        font-family: Helvetica-Bold, Helvetica, sans-serif;
          font-size:17px;
        }
        .ecoshr{
          width: 25%;
           opacity:  0.15;
           margin-top:10px;
        }
    .panel-title11{
      display: none;
     }
    .panel-box {
      background: #241B1B;
      border-radius:20px;
      margin:0.5em 0;
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
    }
    .userinfo-box {
      padding: 30px 11.7%;
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
          margin: 3.5em 0;
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
          .bio-box11{
  display: none;
}
          .right {
            padding: 0 3em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top:9.5em;
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
                padding: 6px 6px 6px 30px;
                margin-top: 1em;
                color: rgba(138, 128, 128, 1);
                /* background: #3F3535; */
                
                div{
              margin-left: 1em;
                  width: 80px;
                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
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
              font-weight: 400;


              .reputation-data {
                text-align:center;
                line-height:30px;
                margin-left:10px;
                  width: 80px;          
                  font-weight: 400;

                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
              }
            }

          }
            }

            .bio-box {
              margin-left: 1.8em;
              font-size: 16px;
              font-family: Roboto-Bold, Roboto, sans-serif;


              .bio {
                font-size:16px;
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
          Button{
            margin-top: 200px;
          }
        }
        .hrrr{
  opacity: 0.2;
   margin-top: 40px;
   display: flex;
   align-items: center;
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
          .lvalue{
            display: none;
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
                font-weight:400;
                line-height:30px;
                margin-left:20px;
                  width: 120px;
                  height: 30px;
                  color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
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
                margin-left:20px;
                  width: 80px;              font-weight: 400;

                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
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
            
          width:75%;
          }
          .link-item {
            padding-top: 1.2em;
            font-size: 18px;
            display: block;
            align-items: center;
width: 24%;
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
      .nft-list {
        justify-content: center;
width: 100%;
margin-top: 2em;
.boxshadow{
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
            background: rgba(255, 255, 255, 0.10);
            border-radius: 18px;
            border: 1px solid #7F6868;
            padding: 10px;
            img {
              width: 100%;
              height: auto;
            }

            .name {  
                font-weight: bold;   
              p{
                font-weight: bold;
            
font-family: Squada One-Regular, Squada One;
            font-size:25px;
            line-height:45px;
        }
     
            }
          }

          .notr {
            
            text-align:left;
            margin: 1em 0;
            font-size: 18px;

            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 40px;
            .destory{
              margin-top:3px;
              font-size:16px;
              margin-left:5px;
              float: right;
              width: 70px;
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
              align-items:center;
            text-align:left;
            font-size: 18px;
font-family: Roboto-SemiBold, Roboto;
            font-weight: bold;
            float: right;
            display: flex;
            text-align:center;
            .bor{
              font-size:16px;
              margin-top:3px;
              margin-left:5px;
              width: 70px;
              line-height:30px;
height: 30px;
color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }
          }
          }

          
        }
      }

    }
.panel-box{
.sbttit{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;

}
}

.myFireSeed {
    margin-top:1em;
   
  .fire-list-box {
    .list-item:last-child{
    border-bottom:none!important;
}
          .flex-box11 {
            padding: 20px 2.5em;
          }
  .sbt1 {
           padding: 0.5em;
          }

          .sbt1, .flex-box11{
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
              width:23%;
             margin-left:80px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:10px;
            }

          }
        }
        
          .sbt1 {   
            padding:1em 0.5em ;
            font-size:16px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:16px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }

    .panel-box{
.wallt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;

}
}
    .myWall {
        margin-top:1em;
       .fire-list-box {
        &:last-child .list-item {
    border-bottom:none!important;
}
          .flex-box11 {
            padding: 20px 2.2em;
          }
          .sbt1 {
            padding: 0em;

}
.ss1{
    padding: 1em 0.5em;
    border-radius:0px;
}
          .sbt1, .flex-box11{
            justify-content: flex-start;
         
          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
              width:23%;
             margin-left:80px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:10px;
            }

          }
        }
    
.rtth{
    width: 35px;
}

          .ss1 {
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:16px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }

    .panel-box{
.fdtt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;
   
}
}

    .myfdt {
        margin-top:1em;
       .fire-list-box {
        .list-item:last-child{
    border-bottom:none!important;
}
          .flex-box22 {
            padding: 20px 1.8em;
          }
          .sbt2{
            padding: 0.5em;
          }
          .sbt2, .flex-box22{
            justify-content: flex-start;
          

          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(2) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(3) {
              width:21%;
             margin-left:10px;
            }
            &:nth-child(4) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(5) {
              width:17%;
             margin-left:10px;
            }

        }
          
    }     
        .sbt2 {
            padding: 1em 0.5em;
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:16px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
    }
}
 
    .fidr{
      display: flex;
      align-items:center;
      p{
       padding-top:12px;
       width: 190px;
        font-size:18px;
      color:rgba(138, 128, 128, 1);
      }
      .fidkk{
        margin-top:-5px;
        width: 150px;
        margin-left:8px;
        height: 35px;
        line-height: 35px;
        font-size:16px;
        text-align:center;
        color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5); 
      }
    }
    .wall{
      display: flex;
      align-items:center;
      p{
        width: 120px;
        padding-top:12px;
        font-size:18px;
      color:rgba(138, 128, 128, 1);
      }
      .wallkk{
        margin-top:-5px;
        margin-left:8px;
        width: 150px;
        height: 35px;
        line-height: 35px;
        font-size:16px;
        text-align:center;
        color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5); 
      }
    }
    .fdt{
      width: 35%;
      display: flex;
      align-items:center;
  
      .fff{
        width: 100%;
        display: flex;
        align-items:center;
        p{
        padding-top:12px;
        font-size:18px;
      color:rgba(138, 128, 128, 1);
      }
  
      .fdtkk{
        margin-top:-6px;
        margin-left:8px;
        width: 70%;
        height: 35px;
        line-height: 35px;
        font-size:16px;
        text-align:center;
        color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);   
      }
      .valuekk{
        margin-top:-6px;
        margin-left:8px;
        width: 70%;
        height: 35px;
        line-height: 35px;
        font-size:16px;
        text-align:center;
        color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);      
      }
    }
    }
  }


  @media screen and (max-width: 1950px) {
    .boxhr{
      display: none;
    }
    .soul{
      display: none;
    }
    .flex-container{
      width: 100%;
    }
    .ecos{
        font-weight:600;
        font-family: Helvetica-Bold, Helvetica, sans-serif;
          font-size:17px;
        }
        .ecoshr{
          width: 25%;
           opacity:  0.15;
           margin-top:10px;
        }
    .panel-title11{
      display: none;
     }
    .panel-box {
      background: #241B1B;
      border-radius:20px;
      margin:0.5em 0;
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
    }
    .userinfo-box {
      padding: 30px 11.7%;
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
          margin: 3.5em 0;
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
          .bio-box11{
  display: none;
}
          .right {
            padding: 0 3em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            margin-top:9.5em;
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
                padding: 6px 6px 6px 30px;
                margin-top: 1em;
                color: rgba(138, 128, 128, 1);
                /* background: #3F3535; */
                
                div{
              margin-left: 1em;
                  width: 80px;
                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
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
              font-weight: 400;


              .reputation-data {
                text-align:center;
                line-height:30px;
                margin-left:10px;
                  width: 80px;          
                  font-weight: 400;

                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
              }
            }

          }
            }

            .bio-box {
              margin-left: 1.8em;
              font-size: 16px;
              font-family: Roboto-Bold, Roboto, sans-serif;


              .bio {
                font-size:16px;
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
          Button{
            margin-top: 200px;
          }
        }
        .hrrr{
  opacity: 0.2;
   margin-top: 40px;
   display: flex;
   align-items: center;
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
          .lvalue{
            display: none;
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
                font-weight:400;
                line-height:30px;
                margin-left:20px;
                  width: 120px;
                  height: 30px;
                  color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
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
                margin-left:20px;
                  width: 80px;              font-weight: 400;

                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
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
            
          width:75%;
          }
          .link-item {
            padding-top: 1.2em;
            font-size: 18px;
            display: block;
            align-items: center;
width: 24%;
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
      .nft-list {
        justify-content: center;
width: 100%;
margin-top: 2em;
.boxshadow{
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
            background: rgba(255, 255, 255, 0.10);
            border-radius: 18px;
            border: 1px solid #7F6868;
            padding: 10px;
            img {
              width: 100%;
              height: auto;
            }

            .name {  
                font-weight: bold;   
              p{
                font-weight: bold;
                font-family: Squada One-Regular, Squada One;

            font-size:25px;
            line-height:45px;
        }
     
            }
          }

          .notr {
            
            text-align:left;
            margin: 1em 0;
            font-size: 18px;

            font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 40px;
            .destory{
              margin-top:3px;
              font-size:16px;
              margin-left:5px;
              float: right;
              width: 70px;
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
              align-items:center;
            text-align:left;
            font-size: 18px;
font-family: Roboto-SemiBold, Roboto;
            font-weight: bold;
            float: right;
            display: flex;
            text-align:center;
            .bor{
              font-size:16px;
              margin-top:3px;
              margin-left:5px;
              width: 70px;
              line-height:30px;
height: 30px;
color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }
          }
          }

          
        }
      }

    }
.panel-box{
.sbttit{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;

}
}

.myFireSeed {
    margin-top:1em;
   
 
    .fire-list-box {
        .list-item:last-child{
    border-bottom:none!important;
}
          .flex-box11 {
            padding: 20px 2.5em;
          }
  .sbt1 {
           padding: 0.5em;
          }

          .sbt1, .flex-box11{
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
              width:23%;
             margin-left:80px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:10px;
            }

          }
        }
        
          .sbt1 {   
            padding:1em 0.5em ;
            font-size:16px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:16px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }

    .panel-box{
.wallt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;

}
}
    .myWall {
        
        margin-top:1em;
             .fire-list-box {
                &:last-child .list-item {
    border-bottom:none!important;
}
          .flex-box11 {
            padding: 20px 2.2em;
          }
          .sbt1 {
            padding: 0em;

}
.ss1{
    padding: 1em 0.5em;
    border-radius:0px;
}
          .sbt1, .flex-box11{
            justify-content: flex-start;
         
          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
              width:23%;
             margin-left:80px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:10px;
            }

          }
        }
    
.rtth{
    width: 35px;
}

          .ss1 {
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:16px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }

    .panel-box{
.fdtt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;
   
}
}

    .myfdt {
        margin-top:1em;
        .fire-list-box {
            .list-item:last-child{
    border-bottom:none!important;
}
          .flex-box22 {
            padding: 20px 1.8em;
          }
          .sbt2{
            padding: 0.5em;
          }
          .sbt2, .flex-box22{
            justify-content: flex-start;
          

          .col {
            text-align: left;
font-size:16px;
            &:nth-child(1) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(2) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(3) {
              width:21%;
             margin-left:10px;
            }
            &:nth-child(4) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(5) {
              width:17%;
             margin-left:10px;
            }

        }
          
    }     
        .sbt2 {
            padding: 1em 0.5em;
            width: 96%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:16px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
    }
}

.fidr{
    display: flex;
    align-items:center;
    p{
     padding-top:12px;
     width: 190px;
      font-size:18px;
    color:rgba(138, 128, 128, 1);
    }
    .fidkk{
      margin-top:-5px;
      width: 150px;
      margin-left:8px;
      height: 35px;
      line-height: 35px;
      font-size:16px;
      text-align:center;
      color: rgb(254, 109, 70);
  background: rgba(254, 109, 70, 0.1);
  border-radius: 30px;
  opacity: 1;
  border: 1px solid rgba(254, 109, 70, 0.5); 
    }
  }
  .wall{
    display: flex;
    align-items:center;
    p{
      width: 120px;
      padding-top:12px;
      font-size:18px;
    color:rgba(138, 128, 128, 1);
    }
    .wallkk{
      margin-top:-5px;
      margin-left:8px;
      width: 150px;
      height: 35px;
      line-height: 35px;
      font-size:16px;
      text-align:center;
      color: rgb(254, 109, 70);
  background: rgba(254, 109, 70, 0.1);
  border-radius: 30px;
  opacity: 1;
  border: 1px solid rgba(254, 109, 70, 0.5); 
    }
  }
  .fdt{
    width: 35%;
    display: flex;
    align-items:center;

    .fff{
      width: 100%;
      display: flex;
      align-items:center;
      p{
      padding-top:12px;
      font-size:18px;
    color:rgba(138, 128, 128, 1);
    }

    .fdtkk{
      margin-top:-6px;
      margin-left:8px;
      width: 70%;
      height: 35px;
      line-height: 35px;
      font-size:16px;
      text-align:center;
      color: rgb(254, 109, 70);
  background: rgba(254, 109, 70, 0.1);
  border-radius: 30px;
  opacity: 1;
  border: 1px solid rgba(254, 109, 70, 0.5);   
    }
    .valuekk{
      margin-top:-6px;
      margin-left:8px;
      width: 70%;
      height: 35px;
      line-height: 35px;
      font-size:16px;
      text-align:center;
      color: rgb(254, 109, 70);
  background: rgba(254, 109, 70, 0.1);
  border-radius: 30px;
  opacity: 1;
  border: 1px solid rgba(254, 109, 70, 0.5);      
    }
  }
  }
}
  @media screen and (max-width: 1500px) {
    .boxhr{
      display: none;
    }
    .soul{
      display: none;
    }
    .flex-container{
      width: 100%;
    }
    .panel-title11{
      display: none;
     }
     .ecos{
          font-size:13px;
        }
        .ecoshr{
          width: 23%;
           opacity:  0.15;
           margin-top:8px;
        }
    .panel-box {
      background: #241B1B;
      margin:0.5em 0;
      border-radius:20px;
      .panel-title{
        display: flex;
        justify-content:space-between;
      }
    }
    .userinfo-box {
      padding: 30px 11.7%;
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
          margin-top:0;
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
  font-size: 16px;
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
          .bio-box11{
  display: none;
}
          .right {
            padding: 0 3em;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
margin-top:0em;
            .name {
              font-weight: bold;
              font-size: 14px;
              color: #fff;
              display: flex;
              align-items: center;
              margin-top: 9em;
              .id {
                text-align:center;
                line-height:30px;
                font-size:14px;
                align-items: center;
                display: flex;
                padding: 6px 30px;
                margin-top: 1em;
                color: rgba(138, 128, 128, 1);
                /* background: #3F3535; */
                
                div{
              margin-left: 1em;
                  width: 80px;
                  height: 30px;
                  border-radius: 50px;
                  border: 1px solid rgba(254, 109, 70, 0.50);
                  color: rgba(254, 109, 70, 1); color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5); 
                }
              }
              .reputation {
                font-size:14px;
                align-items: center;
                display: flex;
                padding: 6px 15px;
                margin-top: 1em;
                color: rgba(138, 128, 128, 1);

            .reputation-data-box {
              margin-left: 1em;
              font-weight: 400;


              .reputation-data {
                text-align:center;              font-weight: 400;

                line-height:30px;
                margin-left:10px;
                  width: 80px;
                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5); 
              }
            }

          }
            }

            .bio-box {
              margin-left: 2.2em;
              font-size: 14px;
              font-family: Roboto-Bold, Roboto, sans-serif;
              margin-top:1em;

              .bio {
                font-size:14px;
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
          Button{
            margin-top: 200px;
          }
        }

        .hrrr{
  opacity: 0.2;
   margin-top: 40px;
   display: flex;
   align-items: center;
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
          .lvalue{
            display: none;
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
                margin-left:20px;
                  width: 120px;
                  height: 30px;
                  font-weight:400;
                  color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
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
                font-size:14px;
                align-items: center;
                display: flex;
                color: rgba(138, 128, 128, 1);
                .reputation-data {
                text-align:center;
                line-height:30px;              
                font-weight: 400;
                margin-left:20px;
                  width: 80px;
                  height: 30px;
                  color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5); 
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
            
          width: 100%;
          }
          .link-item {
            padding-top: 1.2em;
            font-size: 14px;
            display: block;
            align-items: center;
width: 22%;
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

      .nft-list {
        justify-content: center;
width: 100%;
margin-top: 2em;
.boxshadow{
  
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
            background: rgba(255, 255, 255, 0.10);
            border-radius: 18px;
            border: 1px solid #7F6868;
            padding: 10px;
            img {
              width: 100%;
              height: auto;
            }

            .name {
              font-weight: bold;

              p{
                font-family: Squada One-Regular, Squada One;

            font-size:18px;
            line-height:45px;
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
              font-size:14px;
              margin-left:10px;
              float: right;
              width: 65px;
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
              align-items:center;
            text-align:left;
            font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
            font-weight: bold;
            float: right;
            display: flex;
            text-align:center;
            .bor{
              font-size:14px;
              margin-top:3px;
              margin-left:5px;
              width: 65px;
              line-height:30px;
height: 30px;
color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }
          }
          }

          
        }
      }

    }

    .myFireSeed {
    margin-top:1em;
   
    .fire-list-box {
        .list-item:last-child{
    border-bottom:none!important;
}
          .flex-box11 {
            padding: 20px 1.8em;
          }
  .sbt1 {
           padding: 0.5em;
          }

          .sbt1, .flex-box11{
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:23%;
             margin-left:10px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:10px;
            }

          }
        }
        
          .sbt1 {   
            padding:1em 0.5em ;
            font-size:14px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }
    .panel-box{
.wallt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;

}
}
.myWall {
        margin-top:1em;
        .fire-list-box {
            &:last-child .list-item {
    border-bottom:none!important;
}
          .flex-box11 {
            padding: 20px 1.5em;
          }
          .sbt1 {
            padding: 0em;

}
.ss1{
    padding: 1em 0.5em;
    border-radius:0px;
}
          .sbt1, .flex-box11{
            justify-content: flex-start;
         
          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:23%;
             margin-left:10px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:10px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:10px;
            }

          }
        }
    
.rtth{
    width: 35px;
}

          .ss1 {
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }

    .panel-box{
.fdtt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;
   
}
}
.myfdt {
        margin-top:1em;
        .fire-list-box {
            .list-item:last-child{
    border-bottom:none!important;
}
          .flex-box22 {
            padding: 20px 1.6em;
          }
          .sbt2{
            padding: 0.5em;
          }
          .sbt2, .flex-box22{
            justify-content: flex-start;
          

          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(2) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(3) {
              width:21%;
             margin-left:10px;
            }
            &:nth-child(4) {
              width:19%;
             margin-left:10px;
            }
            &:nth-child(5) {
              width:17%;
             margin-left:10px;
            }

        }
          
    }     
        .sbt2 {
            padding: 1em 0.5em;
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
    }
}
.fidr{
    display: flex;
    align-items:center;
    p{
        padding-top:6px;
     width: 190px;
      font-size:16px;
    color:rgba(138, 128, 128, 1);
    }
    .fidkk{
        margin-top:-5px;
      width: 140px;
        margin-left:8px;
        height: 35px;
        line-height: 35px;
        font-size:14px;
        text-align:center;
        color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);   
      }
    }
    .wall{
      width:33%;
      display: flex;
      align-items:center;
      p{
        padding-top:6px;
        font-size:16px;
      color:rgba(138, 128, 128, 1);
      width: 120px;
      }
      .wallkk{
        margin-top:-5px;
        margin-left:8px;
        width: 150px;
        height: 35px;
        line-height: 35px;
        font-size:14px;
        text-align:center;
        color: rgb(254, 109, 70);
        background: rgba(254, 109, 70, 0.1);
        border-radius: 30px;
        opacity: 1;
        border: 1px solid rgba(254, 109, 70, 0.5);   
      }
    }
    .fdt{
      width: 40%;
      display: flex;
      align-items:center;
  
      .fff{
        width: 100%;
        display: flex;
        align-items:center;
        p{
        padding-top:8px;
        font-size:16px;
      color:rgba(138, 128, 128, 1);
      }
  
      .fdtkk{
        margin-top:-8px;
        margin-left:8px;
        width: 70%;
        height: 35px;
        line-height: 35px;
        font-size:14px;
        text-align:center;
        color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
      }
      .valuekk{
        margin-top:-8px;
        margin-left:8px;
        width: 70%;
        height: 35px;
        line-height: 35px;
        font-size:14px;
        text-align:center;
        color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);    
      }
    }
    }
  }

  @media screen and (max-width: 450px) {
    .boxhr{
      display: block;
      opacity: 0.1;
    }
.flex-container{
  width: 100%;
}
  .ecos{
          font-size:16px;
        }
        .ecoshr{
          width: 20%;
           opacity:  0.15;
           margin-top:10px;
        }
.userinfo-box{
  .panel-title{
    display: none;
  
  }
}

.panel-title11{
      display: flex;
      justify-content:space-between;
      font-size:18px;
      font-family: Helvetica-Bold,Helvetica,sans-serif;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 1.6;
     }
.panel-box {
  background: #241B1B;
  padding: 0px 0%;
  border-radius:10px;
  margin:0.5em 0;
  
}
.userinfo-box {
  width: 90%;
  margin: 0px;
border: none;
padding: 0px 0%;
box-shadow:none;
  .panel-container {
    width: 100%;
  }

  .user-info {
    position: relative;
    align-items: flex-start;

    .userinfo-header {
      width: 100%;
      display: block;
      margin: 0;
      text-align: center;
      .header-icon {
        position: relative;
        top:60px;
        left:0px;
        img {
          width: 80px;
          height: 80px;
          z-index: 1;
        }
p{
font-size: 18px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
margin-top:10px;
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
      .bio-box11{
  display: block;
  margin-top:5em;
  font-size: 14px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #999;
line-height: 19px;
.bio {
                font-size:14px;
                strong{
                  color: #fff;
                  margin:0 5px;
                }
              }
              hr{
                opacity: 0.1;
                margin:1.5em auto;
                width: 90%;
              }
}
      .right {
        width: 90%;
        padding: 0;
        display: block;
        margin:0 auto;
        .name {
          font-weight: bold;
          font-size: 14px;
          color: #fff;
          display: block;   
          margin-top: 0em;
          .id {
            text-align:center;
            line-height:10px;
            font-size:14px;
            display: flex;
            justify-content:space-between;
            padding:0px;
            margin-top: 0em;
            color: rgba(138, 128, 128, 1);
            /* background: #3F3535; */
            
            div{
          margin-left: 0em;
              width: 80px;
              height: 30px;
              line-height:30px;
              color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }
          }
          .reputation {
            font-size:14px;
            display: flex;
            justify-content:space-between;
            margin-top:0.5em;
            padding: 0px;
            color: rgba(138, 128, 128, 1);

        .reputation-data-box {
          margin-left: 1em;
          font-weight: 400;


          .reputation-data {
            text-align:center;
            line-height:30px;              
            font-weight: 400;
            margin-left:0px;
              width: 80px;
              height: 30px;
              color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
          }
        }

      }
        }

        .bio-box {
         display: none;
        }
      }
    }

    .passport-header-bg {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      background: url(${pass1});
      background-repeat:no-repeat;
      background-size: 100%;
      height: 160px;
      Button{
            margin:10px;
          }
    }
    .hrrr{
 display: none;
}

    .recommender {
      display: flex;
      align-items: center;
      margin:0;
      padding:0em;
      margin:0 auto;
      width: 90%;
      justify-content: space-between;
      .recommender-info{
        display: block;
      }
      .leftk{
        display: flex;
        justify-content: space-between;
      }
      .left {
        width: 100%;
        display: inline-block;
        justify-content:space-between;

      }
      .lvalue{
        display: block;
            width: 80px;
            text-align:center;
              height: 30px;
              color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
          }
      .name {
        font-size: 14px;
        font-family: Helvetica-Bold, Helvetica, sans-serif;
        font-weight: bold;
        color: rgba(138, 128, 128, 1);
        line-height: 19px;
      }

      .address {
        margin-top: 0.5em;
        display: flex;
        justify-content: space-between;
        margin-left: 0;
        text-align:center;
            line-height:10px;
            font-size:14px;
            padding: 0px;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
            color: rgba(138, 128, 128, 1);
        .address-data {
            text-align:center;
            line-height:30px;
            margin-left:20px;
            font-weight:400;
              width: 120px;
              height: 30px;
              color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);

          }
        img {
          cursor: pointer;
          margin-left: 3em;
          width: 16px;
          height: 16px;
        }
      }

      .pid {
        padding: 0px;
        margin-left: 0em;
        margin-top: 0.5em;
        text-align:center;
            line-height:30px;
            font-size:14px;
            display: flex;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
justify-content: space-between;
color: #8A8080;
            color: rgba(138, 128, 128, 1);
            .reputation-data {
            text-align:center;
            line-height:30px;
            margin-left:0px;
              width: 80px;             
               font-weight: 400;

              height: 30px;
              color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
          }
        span {
          margin-left: 0.5em;
        }
      }
    }

    .link-box {
      padding:0em ;
      display: block;
      margin:0 auto;
      width: 90%;
      .flex-box {
        display: block;
      width: 100%;
      }
      .link-item {
        padding-top: 0em;
        font-size: 14px;
        display: flex;
      justify-content:space-between;
width: 100%;
margin-right:0px;
        .name {
          font-size:14px;
          font-weight: bold;
          margin-right: 0px;
          color: #8A8080;
        }

        .value {
          margin-top:10px;
          text-align:center;
          color: rgba(108, 149, 198, 1);
          margin-right: 0px;
          width: 40%;
          line-height:30px;
          text-align:right;
height: 30px;
border: none;
background: rgba(36, 27, 27, 1);
font-family: Roboto-SemiBold, Roboto;
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

  .nft-list {
    display: block;
    justify-content: center;
width: 100%;
margin-top: 2em;
.boxshadow{

width: 100%;
margin: 0 auto;
background: rgba(36, 27, 27, 1);
border-radius: 20px;
opacity: 1;
border: none;
margin-top:2em;
}
    .nft-info-box {
      text-align: center;
      margin-right: 0em;
      width: 100%;
margin: 0em auto;
      .nft-box {
        background: rgba(255, 255, 255, 0.10);
        border-radius: 18px;
        border: 1px solid #7F6868;
        padding: 10px;
        img {
          width: 100%;
          height: auto;
        }

        .name {
          font-weight: bold;
          p{
            font-family: "Squada One-Regular", "Squada One";
        font-size:20px;
        line-height:45px;
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
          display: none;
          margin-top:5px;
          font-size:14px;
          margin-left:10px;
          float: right;
          width: 65px;
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
          align-items:center;
        text-align:left;
        font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
        font-weight: bold;
        float: right;
        display: flex;
        text-align:center;
        .bor{
          font-size:12px;
          margin-top:3px;
          margin-left:5px;
          width: 65px;
          line-height:30px;
height: 30px;
color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
        }
      }
      }

      
    }
  }

}

.myFireSeed {
    margin-top:1em;
  
    .fire-list-box {
          .flex-box11 {
            padding: 20px 1.3em;
          }
  .sbt1 {
           padding: 0.5em;
          }

          .sbt1, .flex-box11{
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:23%;
             margin-left:5px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:5px;
            }

          }
        }
        
          .sbt1 {   
            padding:1em 0.5em ;
            font-size:14px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }

    .panel-box{
.wallt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;

}
}
.myWall {
        margin-top:1em;
        .fire-list-box {
          .flex-box11 {
            padding: 20px 1.2em;
          }
          .sbt1 {
            padding: 0em;

}
.ss1{
    padding: 1em 0.5em;
    border-radius:0px;
}
          .sbt1, .flex-box11{
            justify-content: flex-start;
         
          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:23%;
             margin-left:5px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:5px;
            }

          }
        }
    
.rtth{
    width: 25px;
}

          .ss1 {
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }
    .listheadert{
    width: 460px;
}
    .myfdt {
        margin-top:1em;
       .fire-list-box {
        overflow:scroll;
        .list-item{
            padding: 0.5em 0;
        }
          .flex-box22 {
            padding: 20px 1.5em;
          }

          .sbt2, .flex-box22{
            justify-content: flex-start;
          
          .col {
            text-align: left;
            align-items: center;
font-size:14px;
            &:nth-child(1) {
              width:50px;
             margin-left:5px;
            }
            &:nth-child(2) {
              width:70px;
             margin-left:5px;
            }
            &:nth-child(3) {
              width:140px;
             margin-left:5px;
            }
            &:nth-child(4) {
              width:65px;
             margin-left:5px;
            }
            &:nth-child(5) {
              width:75px;
             margin-left:5px;
            }

        }
    }
   
        .sbt2 {
            font-size:14px;
            padding: 0.5 0em;
            width: 91%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
    }
}

.panel-box{
.sbttit{
  display:block;
  margin-bottom:0.5em;

}
}


.soul{
  margin-top: 1em;
  width: 100%;
  display: flex;
  justify-content:space-between;
  p{
     margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }
  .soulkk{
    margin-left:8px;
    width: 34%;
    height: 35px;
    line-height:35px;

    text-align:center;
    color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
  }
}
.fidr{
  width: 100%;
  display: flex;
  justify-content:space-between;
  p{
     margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }
  .fidkk{
    margin-left:8px;
    color:rgba(254, 109, 70, 1);
    width: 34%;
    height: 35px;
    line-height:35px;

    text-align:center;
    border: 1px solid rgba(254,109,70,0.5);
    border-radius: 25px;
    background: rgba(254,109,70,0.1);      
  }
}
.panel-box{
.wallt{
  display:block;
  margin-bottom:0.5em;

}
}
.wall{
  width: 100%;
  margin-top:1em;
  display: flex;
  justify-content:space-between;
  p{
    margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }

  .wallkk{
    margin-left:8px;
    color:rgba(254, 109, 70, 1);
    width: 53%;
    height: 35px;
    line-height:35px;
    text-align:right;
    border: none;
    border-radius: 0px;
    background: rgba(36, 27, 27, 1);      
  }
}
.panel-box{
.fdtt{
  display:block;
  margin-bottom:0.5em;
}
}
.fdt{
  width: 100%;
  display: block;
  margin-top: 1em;
  p{
    margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }
  .fff{
    display: flex;
    justify-content: space-between;
  
  .fdtkk{
    margin:0 ;
    color:rgba(254, 109, 70, 1);
    width: 34%;
    height: 35px;
    line-height:35px;

    border: 1px solid rgba(254,109,70,0.5);
    border-radius: 25px;
    text-align:center;
    background: rgba(254,109,70,0.1);      
  }
  .valuekk{
    margin-left:0px;
    color:rgba(254, 109, 70, 1);
    width: 34%;
    text-align:center;
    height: 35px;
    line-height:35px;
    border: 1px solid rgba(254,109,70,0.5);
    border-radius: 25px;
    background: rgba(254,109,70,0.1);      
  }
}
}
}


@media screen and (max-width: 400px) {
    .boxhr{
      display: block;
      opacity: 0.1;
    }
.flex-container{
  width: 100%;
}
  .ecos{
          font-size:16px;
        }
        .ecoshr{
          width: 20%;
           opacity:  0.15;
           margin-top:10px;
        }
.userinfo-box{
  .panel-title{
    display: none;
  
  }
}
.panel-title11{
      display: flex;
      justify-content:space-between;
      font-size:18px;
      font-family: Helvetica-Bold,Helvetica,sans-serif;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 1.6;
     }
.panel-box {
  background: #241B1B;
  padding: 0px 0%;
  border-radius:10px;
  margin:0.5em 0;
  
}
.userinfo-box {
  width: 90%;
  margin: 0px;
border: none;
padding: 0px 0%;
box-shadow:none;
  .panel-container {
    width: 100%;
  }

  .user-info {
    position: relative;
    align-items: flex-start;

    .userinfo-header {
      width: 100%;
      display: block;
      margin: 0;
      text-align: center;
      .header-icon {
        position: relative;
        top:60px;
        left:0px;
        img {
          width: 80px;
          height: 80px;
          z-index: 1;
        }
p{
font-size: 18px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #FFFFFF;
margin-top:10px;
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
      .bio-box11{
  display: block;
  margin-top:5em;
  font-size: 14px;
font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #999;
line-height: 19px;
.bio {
                font-size:14px;
                strong{
                  color: #fff;
                  margin:0 5px;
                }
              }
              hr{
                opacity: 0.1;
                margin:1.5em auto;
                width: 90%;
              }
}
      .right {
        width: 90%;
        padding: 0;
        display: block;
        margin:0 auto;
        .name {
          font-weight: bold;
          font-size: 14px;
          color: #fff;
          display: block;   
          margin-top: 0em;
          .id {
            text-align:center;
            line-height:10px;
            font-size:14px;
            display: flex;
            justify-content:space-between;
            padding:0px;
            margin-top: 0em;
            color: rgba(138, 128, 128, 1);
            /* background: #3F3535; */
            
            div{
           
          margin-left: 0em;
              width: 80px;
              height: 30px;
              line-height:30px;
              color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
            }
          }
          .reputation {
            font-size:14px;
            display: flex;
            justify-content:space-between;
            margin-top:0.5em;
            padding: 0px;
            color: rgba(138, 128, 128, 1);

        .reputation-data-box {
          margin-left: 1em;
          font-weight: 400;


          .reputation-data {
            text-align:center;
            line-height:30px;              
            font-weight: 400;
            margin-left:0px;
              width: 80px;
              height: 30px;color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
          }
        }

      }
        }

        .bio-box {
         display: none;
        }
      }
    }

    .passport-header-bg {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      background: url(${pass1});
      background-repeat:no-repeat;
      background-size: 100%;
      height: 160px;
      Button{
            margin:10px;
          }
    }
    .hrrr{
 display: none;
}

    .recommender {
      display: flex;
      align-items: center;
      margin:0;
      padding:0em;
      margin:0 auto;
      width: 90%;
      justify-content: space-between;
      .recommender-info{
        display: block;
      }
      .leftk{
        display: flex;
        justify-content: space-between;
      }
      .left {
        width: 100%;
        display: inline-block;
        justify-content:space-between;

      }
      .lvalue{
        display: block;
            width: 80px;
            text-align:center;
              height: 30px;
      color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
          }
      .name {
        font-size: 14px;
        font-family: Helvetica-Bold, Helvetica, sans-serif;
        font-weight: bold;
        color: rgba(138, 128, 128, 1);
        line-height: 19px;
      }

      .address {
        margin-top: 0.5em;
        display: flex;
        justify-content: space-between;
        margin-left: 0;
        text-align:center;
            line-height:10px;
            font-size:14px;
            padding: 0px;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
color: #8A8080;
            color: rgba(138, 128, 128, 1);
        .address-data {
            text-align:center;
            line-height:30px;
            margin-left:20px;
            font-weight:400;
              width: 120px;
              height: 30px;
              color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);
          }
        img {
          cursor: pointer;
          margin-left: 3em;
          width: 16px;
          height: 16px;
        }
      }

      .pid {
        padding: 0px;
        margin-left: 0em;
        margin-top: 0.5em;
        text-align:center;
            line-height:30px;
            font-size:14px;
            display: flex;
            font-family: Roboto-Bold, Roboto;
font-weight: bold;
justify-content: space-between;
color: #8A8080;
            color: rgba(138, 128, 128, 1);
            .reputation-data {
            text-align:center;
            line-height:30px;
            margin-left:0px;
              width: 80px;         
              font-weight: 400;

              height: 30px;
              color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
          }
        span {
          margin-left: 0.5em;
        }
      }
    }

    .link-box {
      padding:0em ;
      display: block;
      margin:0 auto;
      width: 90%;
      .flex-box {
        display: block;
      width: 100%;
      }
      .link-item {
        padding-top: 0em;
        font-size: 14px;
        display: flex;
      justify-content:space-between;
width: 100%;
margin-right:0px;
        .name {
          font-size:14px;
          font-weight: bold;
          margin-right: 0px;
          color: #8A8080;
        }

        .value {
          margin-top:10px;
          text-align:center;
          color: rgba(108, 149, 198, 1);
          margin-right: 0px;
          width: 40%;
          line-height:30px;
          text-align:right;
height: 30px;
border: none;
background: rgba(36, 27, 27, 1);
font-family: Roboto-SemiBold, Roboto;
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

  .nft-list {
    display: block;
    justify-content: center;
width: 100%;
margin-top: 2em;
.boxshadow{

width: 100%;
margin: 0 auto;
background: rgba(36, 27, 27, 1);
border-radius: 20px;
opacity: 1;
border: none;
margin-top:2em;
}
    .nft-info-box {
      text-align: center;
      margin-right: 0em;
      width: 100%;
margin: 0em auto;
      .nft-box {
        background: rgba(255, 255, 255, 0.10);
        border-radius: 18px;
        border: 1px solid #7F6868;
        padding: 10px;
        img {
          width: 100%;
          height: auto;
        }

        .name {
          font-weight: bold;
          p{
        font-size:20px;
        font-family: "Squada One-Regular", "Squada One";

        line-height:45px;
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
          display: none;
          margin-top:5px;
          font-size:14px;
          margin-left:10px;
          float: right;
          width: 65px;
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
          align-items:center;
        text-align:left;
        font-size: 14px;
font-family: Roboto-SemiBold, Roboto;
        font-weight: bold;
        float: right;
        display: flex;
        text-align:center;
        .bor{
          font-size:12px;
          margin-top:3px;
          margin-left:5px;
          width: 65px;
          line-height:30px;
height: 30px;
color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
        }
      }
      }

      
    }
  }

}

.myFireSeed {
    margin-top:1em;
    .fire-list-box {
          .flex-box11 {
            padding: 20px 1.3em;
          }
  .sbt1 {
           padding: 0.5em;
          }

          .sbt1, .flex-box11{
            justify-content: flex-start;
       

          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:23%;
             margin-left:5px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:5px;
            }

          }
        }
        
          .sbt1 {   
            padding:1em 0.5em ;
            font-size:14px;
          
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }

    .panel-box{
.wallt{
  display:flex;
  justify-content:space-between;
  margin-bottom:0em;

}
}
.myWall {
        margin-top:1em;
        .fire-list-box {
          .flex-box11 {
            padding: 20px 1.2em;
          }
          .sbt1 {
            padding: 0em;

}
.ss1{
    padding: 1em 0.5em;
    border-radius:0px;
}
          .sbt1, .flex-box11{
            justify-content: flex-start;
         
          .col {
            text-align: left;
font-size:14px;
            &:nth-child(1) {
              width:23%;
             margin-left:5px;
            }

            &:nth-child(2) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(3) {
              width: 23%;
              margin-left:5px;
            }

            &:nth-child(4) {
              width: 23%;
              margin-left:5px;
            }

          }
        }
    
.rtth{
    width: 25px;
}

          .ss1 {
            padding:1em 0.5em;
            width: 94%;
            margin: 0em auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
        }
    }
    .listheadert{
    width: 460px;
}
    .myfdt {
        margin-top:1em;
       .fire-list-box {
        overflow:scroll;
        .list-item{
            padding: 0.5em 0;
        }
          .flex-box22 {
            padding: 20px 1.5em;
          }

          .sbt2, .flex-box22{
            justify-content: flex-start;
          
          .col {
            text-align: left;
            align-items: center;
font-size:14px;
            &:nth-child(1) {
              width:50px;
             margin-left:5px;
            }
            &:nth-child(2) {
              width:70px;
             margin-left:5px;
            }
            &:nth-child(3) {
              width:140px;
             margin-left:5px;
            }
            &:nth-child(4) {
              width:65px;
             margin-left:5px;
            }
            &:nth-child(5) {
              width:75px;
             margin-left:5px;
            }

        }
    }
   
        .sbt2 {
            font-size:14px;
            padding: 0.5 0em;
            width: 91%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);

            .col {
                font-size:14px;
              overflow: hidden;
              padding-left: 0%;

            }
            .id {
              color: #FE6D46;
            }
          }
    }
}
.panel-box{
.sbttit{
  display:block;
  margin-bottom:0.5em;

}
}


.soul{
  margin-top: 1em;
  width: 100%;
  display: flex;
  justify-content:space-between;
  p{
     margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }
  .soulkk{
    margin-left:8px;
    width: 34%;
    height: 35px;
    line-height:35px;

    text-align:center;
    color: rgb(255, 146, 96);
background: rgba(205, 158, 87, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(205, 158, 87, 0.5);

  }
}
.fidr{
  width: 100%;
  display: flex;
  justify-content:space-between;
  p{
     margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }
  .fidkk{
    margin-left:8px;
    width: 34%;
    height: 35px;
    line-height:35px;

    text-align:center;
    color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
  }
}
.panel-box{
.wallt{
  display:block;
  margin-bottom:0.5em;

}
}
.wall{
  width: 100%;
  margin-top:1em;
  display: flex;
  justify-content:space-between;
  p{
    margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }

  .wallkk{
    margin-left:8px;
    width: 53%;
    height: 35px;
    line-height:35px;
    text-align:right;
    color: rgb(254, 109, 70);
    /* border-radius: 30px; */
    opacity: 1;
    border: none;
  }
}
.panel-box{
.fdtt{
  display:block;
  margin-bottom:0.5em;
}
}
.fdt{
  width: 100%;
  display: block;
  margin-top: 1em;
  p{
    margin-top:5px;
    font-size:14px;
  color:rgba(138, 128, 128, 1);
  }
  .fff{
    display: flex;
    justify-content: space-between;
  
  .fdtkk{
    margin:0 ;
    width: 34%;
    height: 35px;
    line-height:35px;
    color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
    text-align:center;
  }
  .valuekk{
    margin-left:0px;
    width: 34%;
    text-align:center;
    height: 35px;
    line-height:35px;
    color: rgb(254, 109, 70);
    background: rgba(254, 109, 70, 0.1);
    border-radius: 30px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5); 
  }
}
}
}



`

