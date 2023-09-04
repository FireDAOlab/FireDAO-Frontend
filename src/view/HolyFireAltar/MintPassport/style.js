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
    border-color:rgba(255, 255, 255, 0.10);
    width: 100%;
}

.ant-input:hover {
    border-color:rgba(255, 255, 255, 0.10);
}
.button-box {
    text-align: left;
    border-radius: 25px;
    .subBtn {
      
    height: 40px;

      &.grey-status{
        
      }
    }
  }
  .ant-btn-primary{
    height: 40px;
    border-radius: 25px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FFFFFF;
  }
  .list-item:last-child{
    border-bottom:none!important;
}
@media screen and (min-width: 1951px) {
    
  .connect-button{
    border:none;
img{
  display:none ;
}
  }
    .ant-form .ant-form-item {
      margin-bottom: 12px;
    }
    .dx{
    line-height: 50px;
    .ant-form-item-control-input{
      border-radius:10px;
      /* line-height: 50px; */
      span{
        padding-top:10px;
      }
    }

  }
    .ant-input {
      line-height: 2;
    }

    .ant-form-item-label > label {
      font-size: 16px;
      color: rgba(138, 128, 128, 1);
      height: 40px;
    }

    .ant-input-affix-wrapper {
      font-size: 16px;
      height: 100%;
    }

    .panel-box {
      .panel-container {
        width: 100%;
      }
    }

    .ecos {
      font-size: 17px;
    }

    .ecoshr {
      width: 25%;
      opacity: 0.15;
      margin-top: 10px;
    }

    .content-box {
      display: flex;
      padding: 1.5em 0;

      .left {
        width: 50%;
        padding-right: 5%;

        .img-box {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 5%;
          background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
          padding: 10px;
          font-family: Squada One-Regular, Squada One;
          font-weight: 600;
          text-align: center;

          p {
            font-size: 23px;
            line-height: 50px;
          }

          img {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
            display: inline-block;
            border: 1px solid rgba(255, 255, 255, 0.5);
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
.title1{
    display:none
}
          .content-item {
            display: flex;
            justify-content: space-between;
            margin: 0.8em 0;
            text-align: right;

            .name {
              color: #999;
              font-size: 17px;
              white-space: nowrap;
            }

            .value {
              font-size: 17px;
              max-width: 62%;
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
        span{
              font-size:16px;
            }
        .choosePayType{
          .ant-form-item-label{
            display: none;
          }
          
          .ant-form-item-control-input {
            
            background: none!important;
            min-height: 20px!important;

              .ant-form-item-control-input-content {
              }

              .ant-select-selector {
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
    height: 40px;
    border-radius: 25px;
    .subBtn {
      text-align:center;
      border-radius: 25px;
    min-width: 150px;
    max-width: 280px;
    height: 40px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
font-size:16px;
      &.grey-status{
        
      }
    }
  }
}


@media screen and (max-width: 1950px) {
  .connect-button{
    border:none;
img{
  display:none ;
}
  }
    .ant-form .ant-form-item {
      margin-bottom: 12px;
    }
    .dx{
    line-height: 50px;
    .ant-form-item-control-input{
      border-radius:10px;
      span{
        padding-top:10px;
      }
    }

  }
    .ant-input {
      line-height: 2;
    }

    .ant-form-item-label > label {
      font-size: 16px;
      color: rgba(138, 128, 128, 1);
      height: 40px;
    }

    .ant-input-affix-wrapper {
      font-size: 16px;
      height: 100%;
    }
.panel-title{
    /* color: var(--mainColor)!important; */
}
    .panel-box {
      .panel-container {
        width: 100%;
      }
    }

    .ecos {
      font-size: 17px;
    }

    .ecoshr {
      width: 25%;
      opacity: 0.15;
      margin-top: 10px;
    }

    .content-box {
      display: flex;
      padding: 1.5em 0;

      .left {
        width: 50%;
        padding-right: 5%;

        .img-box {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 5%;
          background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
          padding: 10px;
          font-family: Squada One-Regular, Squada One;
          font-weight: 600;
          text-align: center;

          p {
            font-size: 23px;
            line-height: 50px;
          }

          img {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
            display: inline-block;
            border: 1px solid rgba(255, 255, 255, 0.5);
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
          .title1{
    display:none
}
   
          .content-item {
            display: flex;
            justify-content: space-between;
            margin: 0.8em 0;
            text-align: right;

            .name {
              color: #999;
              font-size: 17px;
              white-space: nowrap;
            }

            .value {
              font-size: 17px;
              max-width: 62%;
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
            padding-top:1em;
            height: 60px;
            color: #856465;
            display: flex;
            justify-content: space-between;
            .fee{
                color:white;
                font-weight:600;
                font-size:16px;
                
            }
           span{
              font-size:16px;
            }
            .choosePayType{
              .ant-form-item-label{
                display: none;
              }
              
              .ant-form-item-control-input {
                
                background: none!important;
                min-height: 20px!important;

              .ant-form-item-control-input-content {
              }

              .ant-select-selector {
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
        border-radius: 25px;
        height: 40px;
        .subBtn {
          text-align:center;
          border-radius: 25px;
        min-width: 150px;
    max-width: 280px;
        height: 40px;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        font-size: 16px;

        &.grey-status {

        }
      }
    }
  }


    @media screen and (max-width: 1500px) {
        .ant-form-item-label>label{
    font-size:14px;
    color: rgba(138, 128, 128, 1);
    height: 20px;
}
.connect-button{
    border:none;
img{
  display:none ;
}
  }
.ant-input-affix-wrapper{
    font-size:14px;
}
.dx{
    line-height: 30px;
    .ant-form-item-control-input{
      border-radius:10px;
      span{
        padding-top:10px;
      }
    }

  }
  .ant-form{
 .ant-form-item{
    margin-bottom:6px;
  }
  }
 
    .panel-box{
        .panel-container{
            width: 100%;
        }
    }

    .ecos {
      font-size: 13px;
    }

    .ecoshr {
      width: 25%;
      opacity: 0.15;
      margin-top: 8px;
    }

    .content-box {
      display: flex;
      padding: 1.5em 0;

      .left {
        width: 50%;
        padding-right: 5%;

        .img-box {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 5%;
          background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
          padding: 10px;
          font-family: Squada One-Regular, Squada One;
          font-weight: 600;
          text-align: center;

          p {
            font-size: 18px;
            line-height: 45px;
          }

          img {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
            display: inline-block;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            width: 100%;
            margin: 0 auto;
          }
        }

        .nft-detail {
          font-size: 14px;
          margin-top: 2em;

          .title{
            font-size: 14px;
          }
.title1{
    display:none
}
   
          .content-item {
            display: flex;
            justify-content: space-between;
            margin: 0.8em 0;
            text-align: right;

            .name {
              color: #999;
              font-size: 14px;
              white-space: nowrap;
            }

            .value {
              font-size: 14px;
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
            font-size:14px;
            color: #856465;
            height: 40px;
            display: flex;
            padding-top:0em;
            justify-content: space-between;
            .fee{
                font-size:14px;
                height: 30px;
              
                
            }
             span{
              font-size:14px;
            }
            .choosePayType{
              .ant-form-item-label{
                display: none;
              }
              
              .ant-form-item-control-input {
                
                background: none!important;
                min-height: 20px!important;

              .ant-form-item-control-input-content {
              }

              .ant-select-selector {
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
      border-radius: 25px;

      .subBtn {
        text-align: center;
        border-radius: 25px;
        min-width: 150px;
    max-width: 250px;
        height: 40px;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        font-size: 14px;

        &.grey-status {

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
.dx{
    line-height: 30px;
    .ant-form-item-control-input{
      border-radius:10px;
      span{
        padding-top:10px;
      }
    }

  }
    .panel-box{
        .panel-container{
            width: 100%;
        }
    }

    .ecos {
      font-size: 16px;
    }

    .ecoshr {
      width: 20%;
      opacity: 0.15;
      margin-top: 10px;
    }

    .content-box {
        display: block;
        padding: 1.5em 0;

      .left {
        width: 100%;
        padding-right: 0%;

        .img-box {
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 5%;
          background: linear-gradient(136deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
          padding: 10px;
          font-family: Squada One-Regular, Squada One;
          font-weight: 600;
          text-align: center;

          p {
            font-size: 20px;
            line-height: 45px;
          }

          img {
            box-shadow: 0 0 10px rgba(255, 255, 255, 0), 0 0 5px rgba(0, 0, 0, 1);
            display: inline-block;
            border: 1px solid rgba(255, 255, 255, 0.5);
            border-radius: 20px;
            width: 100%;
            margin: 0 auto;
          }
        }

        .nft-detail {
          font-size: 14px;
          margin-top: 2em;
.title{
    display: none;
}
          .title1 {
            display: block;
            width: 20%;
            margin: 0 auto;
            text-align: center;
            background: rgba(205, 158, 87, 0.1);
            border-radius: 30px;
            border: 1px solid rgba(205, 158, 87, 0.5);
            line-height: 2.5em;
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
              font-size: 14px;
              white-space: nowrap;
            }

            .value {
              font-size: 14px;
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
                span{
              font-size:14px;
            }
            .choosePayType{
              .ant-form-item-label{
                display: none;
              }
              
              .ant-form-item-control-input {
                
                background: none!important;
                min-height: 20px!important;

              .ant-form-item-control-input-content {
              }

              .ant-select-selector {
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
      border-radius: 25px;
width: 100%;
height:40px;
      .subBtn {
        text-align: center;
        border-radius: 25px;
        width: 100%;
        min-width:100%;
        max-width:100%;
        height:40px;
        font-weight:bold;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        font-size: 14px;

      }
    }
.connect-button{
    border:none;
width: 100%;
img{
  display:none ;
}
  }
      }


   
`
