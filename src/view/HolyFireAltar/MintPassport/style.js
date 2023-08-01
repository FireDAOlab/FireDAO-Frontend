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



@media screen and (min-width: 1500px) {

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
            /* padding: 0.6em 0em; */
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
            span {
              color: #fff;
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
      /* mobile style */
      /* @media screen and (max-width: 1000px) {
        .panel-box{
        width: 100%;
        margin: 0em 5em;
    }
        
        .content-box {
          display: block;
          .left,.right{
            width: 100%;
            .mint-tip{
              justify-content: space-between;
            }
            .ant-btn{
              width: 100%;
            }
          }
        }
      } */



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
        span{
            font-size:13px;
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
            justify-content: space-between;
            span {
              color: #fff;
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
      
`
