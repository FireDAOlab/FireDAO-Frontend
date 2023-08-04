import styled from "styled-components";

export default styled.div`
      width: 100%;
      overflow: hidden;
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;

      .ant-form-item-control{
    min-height:40px;
}
.ant-form-item-control-input{
    border-radius:25px;
}
.ant-input-affix-wrapper{
    border-radius:25px;
}



@media screen and (max-width: 1950px) {

    .ant-form .ant-form-item {
    margin-bottom: 12px;
}
        .ant-input{
            line-height:2;
    }
    .ant-form-item-label>label{
    font-size:16px;
    color: rgba(138, 128, 128, 1);
    height: 40px;
}
.ant-input-affix-wrapper{
    font-size:16px;
}
    .panel-box{
        .panel-container{
            width: 100%;
        }
    }
    .ecos{
          font-size:17px;
        }
        .ecoshr{
          width: 25%;
           opacity:  0.15;
           margin-top:10px;
        }
      .content-box {
        display: flex;
        padding: 2em 0;

        .left {
          width: 50%;
          padding-right: 5%;

          .img-box {
        border: 1px solid rgba(255,255,255,0.4);
          border-radius: 5%;
          background: linear-gradient(136deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
          padding: 10px;
          font-family: Squada One-Regular, Squada One;
          font-weight: 600;
          text-align:center;
          p{
            font-size:23px;
            line-height:50px;
        }
          img {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
            display: inline-block;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 20px;
            width: 100%;
            margin: 0 auto;
          }
        }

          .nft-detail {
            font-size: 14px;
            margin-top: 2em;

            .title {
              font-size: 17px;
            }

            .content-item {
              display: flex;
              justify-content: space-between;
              margin: 0.8em 0;
              text-align: right;

              .name {
                color: #999;
                font-size:17px;
                white-space: nowrap;
              }

              .value {
                font-size:17px;
                max-width: 60%;
              }

              .address {
                a {
                  color: #FF9260;
                }
              }
            }
          }

        }

        .right {
          width: 50%;
          display: flex;
         
          .mint-tip {
            font-size:16px;
            padding-top:1.2em;
            height: 65px;
            color: #856465;
            display: flex;
            justify-content: space-between;
            .fee{
                color:white;
                font-weight:600;
                font-size:16px;
            }
           
            .choosePayType{
              .ant-form-item-label{
                display: none;
              }
              
              .ant-form-item-control-input {
                
                background: none!important;
                min-height: 20px!important;

                .ant-form-item-control-input-content{
                }
                .ant-select-selector{
                  border: none;
                }
              }
            }
          }
        }
      }

      .username {
        padding: 0 20px;
        border-radius: 25px;
      }

      .button-box {
        text-align: left;
        border: 25px;
        .subBtn {
          text-align:center;
          border-radius: 25px;
        width: 150px;
        height: 40px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
font-size:15px;
          &.grey-status{
            
          }
        }
      }
    }
    

    @media screen and (max-width: 1500px) {
        .ant-form-item-label>label{
    font-size:13px;
    color: rgba(138, 128, 128, 1);
    height: 20px;
}
.ant-input-affix-wrapper{
    font-size:13px;
}
    .panel-box{
        .panel-container{
            width: 100%;
        }
    }
    .ecos{
          font-size:13px;
        }
        .ecoshr{
          width: 25%;
           opacity:  0.15;
           margin-top:8px;
        }
    .content-box {
        display: flex;
        padding: 2em 0;

        .left {
          width: 50%;
          padding-right: 5%;

          .img-box {
        border: 1px solid rgba(255,255,255,0.4);
          border-radius: 5%;
          background: linear-gradient(136deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
          padding: 10px;
          font-family: Squada One-Regular, Squada One;
          font-weight: 600;
          text-align:center;
          p{
            font-size:18px;
            line-height:45px;
        }
      
          img {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
            display: inline-block;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 20px;
            width: 100%;
            margin: 0 auto;
          }
        }

          .nft-detail {
            font-size: 14px;
            margin-top: 2em;

            .title {
              font-size: 14px;
            }

            .content-item {
              display: flex;
              justify-content: space-between;
              margin: 0.8em 0;
              text-align: right;

              .name {
                color: #999;
                font-size:14px;
                white-space: nowrap;
              }

              .value {
                font-size:14px;
                max-width: 60%;
              }

              .address {
                a {
                  color: #FF9260;
                }
              }
            }
          }

        }

        .right {
          width: 50%;
          display: flex;
         
          .mint-tip {
            font-size:13px;
            color: #856465;
            height: 30px;
            display: flex;
            padding-top: 0em;
            justify-content: space-between;
            .fee{
                font-size:14px;
                height: 30px;
                
            }
           
            .choosePayType{
              .ant-form-item-label{
                display: none;
              }
              
              .ant-form-item-control-input {
                
                background: none!important;
                min-height: 20px!important;

                .ant-form-item-control-input-content{
                }
                .ant-select-selector{
                  border: none;
                }
              }
            }
          }
        }
      }

      .username {
        padding: 0 20px;
        border-radius: 25px;
      }

      .button-box {
        text-align: left;
        border: 25px;
        .subBtn {
          text-align:center;
          border-radius: 25px;
        width: 150px;
        height: 40px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
font-size:13px;
          &.grey-status{
            
          }
        }
      }
      }



      @media screen and (max-width: 450px) {
        
        .ant-form-item-label>label{
    font-size:14px;
    color: rgba(138, 128, 128, 1);
    height: 20px;
}
.ant-input-affix-wrapper{
    font-size:14px;
}
    .panel-box{
        .panel-container{
            width: 100%;
        }
    }
    .ecos{
          font-size:16px;
        }
        .ecoshr{
          width: 20%;
           opacity:  0.15;
           margin-top:10px;
        }
    .content-box {
        display: block;
        padding: 2em 0;

        .left {
          width: 100%;
          padding-right:0%;

          .img-box {
        border: 1px solid rgba(255,255,255,0.4);
          border-radius: 5%;
          background: linear-gradient(136deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
          padding: 10px;
          font-family: Squada One-Regular, Squada One;
          font-weight: 600;
          text-align:center;
          p{
            font-size:20px;
            line-height:45px;
        }
        
          img {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
            display: inline-block;
            border: 1px solid rgba(255,255,255,0.5);
            border-radius: 20px;
            width: 100%;
            margin: 0 auto;
          }
        }

          .nft-detail {
            font-size: 14px;
            margin-top: 2em;

            .title {
              width: 20%;
              margin: 0 auto;
              text-align:center;
              background: rgba(205,158,87,0.1);
border-radius: 30px ;
border: 1px solid rgba(205,158,87,0.5);
line-height:2.5em;
color: rgba(205, 158, 87, 1);
              font-size: 12px;
            }

            .content-item {
              display: none;
              justify-content: space-between;
              margin: 0.8em 0;
              text-align: right;

              .name {
                color: #999;
                font-size:14px;
                white-space: nowrap;
              }

              .value {
                font-size:14px;
                max-width: 60%;
              }

              .address {
                a {
                  color: #FF9260;
                }
              }
            }
          }

        }

        .right {
          width: 100%;
          display: block;
         margin-top:1.5em;
          .mint-tip {
            font-size:13px;
            color: #856465;
            padding-top: 0.5em;
            height: 45px;
            display: flex;
            justify-content: space-between;
            .fee{
                font-size:14px;
                height: 50px;
            }
           
            .choosePayType{
              .ant-form-item-label{
                display: none;
              }
              
              .ant-form-item-control-input {
                
                background: none!important;
                min-height: 20px!important;

                .ant-form-item-control-input-content{
                }
                .ant-select-selector{
                  border: none;
                }
              }
            }
          }
        }
      }

      .username {
        padding: 0 20px;
        border-radius: 25px;
      }

      .button-box {
        text-align: left;
        border: 25px;
        .subBtn {
          text-align:center;
          border-radius: 25px;
        width: 100%;
        height: 40px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
font-size:13px;
          
        }
      }

      }    
      
`
