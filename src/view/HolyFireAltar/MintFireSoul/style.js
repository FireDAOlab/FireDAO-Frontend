import styled from "styled-components";

export default styled.div`
      width: 100%;
      overflow: hidden;
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      .ant-form-item-control-input-content{
        flex:none;
      }
      
      .ant-form-item-control-input-content{
        width: 100%;
.ant-input{
    width: 100%;
    border-radius:25px;
}}
.ant-form-item-control-input{
        width: 100%;
.ant-select{
    width: 100%;
.ant-select-selector{
    width: 100%;
    border-radius:25px;
}}
}
      @media screen and (min-width: 1950px) {
        .ant-form-item-label>label{
    font-size:16px;
    color: rgba(138, 128, 128, 1);
    height: 40px;
}
        .subBtn{
        width: 130px;
        
      }
      .pid{
        padding-left: 10px;
      }
      .content-box {
        display: flex;
        padding: 1.5em 0;
      }
      .ecos{
          font-size:17px;
        }
        .ecoshr{
          width: 25%;
           opacity:  0.15;
           margin-top:10px;
        }
      .left-content {
      
        width: 50%;
        padding-right: 5%;
        position: relative;
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
      }

      .right {
        width: 50%;
        display: flex;
        max-width: 500px;
        .form { 
          margin-top: 0em;
          
          .balance{
            padding: 0 1em;
          }
          .subBtn {
            margin-top: 1em;
            padding: 0 0em;
            margin-right:1em;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          }
          .choose-id{
            display: flex;
            justify-content: space-between;
            padding: 0em;
          }
          .flex-box{
            position: relative;;
            align-items: flex-end;
            .ant-form-item-control-input{
    border-radius: 25px;
 }
            .ant-form-item{
              flex-grow: 1;
            }
            .go-btn{
              margin-bottom: 10px;
              margin-left: 10px;
              height: 35px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            }
          }
          .fee{
            width: 100%;
            font-size:16px;
            display: flex;
    justify-content: space-between;
            margin-top: 21px; 
            margin-bottom:10px;
            line-height:21px;   
            .eewz{
              color: rgba(98, 132, 245, 1);
               padding-left: 5px;
          margin-top:5px;
              font-family: Roboto-SemiBold, Roboto;
               font-weight: 600
            } 
            img{
              width: 28px;
             text-align:right;
            }
          }
          .tip{
            text-align:justify;
            margin-top: 2.5em;
          font-size: 15px;
          font-family: PingFangSCSemibold-, PingFangSCSemibold,sans-serif;
          font-weight: normal;
          color: #AC8989;
          line-height: 19px;
          }
        }
      }

      .select-box {
        width: 300px;
        position: absolute;
        top: calc(100% - 10px);
        left: 10px;
        z-index: 3;
        .select-content {
          border: 1px solid #434343;
          padding: 3px 12px;
          color: #999;
          background: none;
        }

        .select-list {
          position: absolute;
          width: 350px;
          max-height: 500px;
          overflow: auto;
          z-index: 1;
        }

        .select-item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 30px;
          border: 1px solid #434343;
          padding: 3px 12px;
          background: #000;

          &:nth-child(n+1) {
            border-top: none;
          }
        }
      }


      }


      @media screen and (max-width: 1950px) {
        .ant-form-item-label>label{
    font-size:16px;
    color: rgba(138, 128, 128, 1);
    height: 40px;
}
        .subBtn{
        width: 130px;
        
      }
      .pid{
        padding-left: 10px;
      }
      .content-box {
        display: flex;
        padding: 1.5em 0;
      }
      .ecos{
          font-size:17px;
        }
        .ecoshr{
          width: 25%;
           opacity:  0.15;
           margin-top:10px;
        }
      .left-content {
      
        width: 50%;
        padding-right: 5%;
        position: relative;
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
      }

      .right {
        width: 50%;
        display: flex;
        max-width: 500px;
        .form { 
          margin-top: 0em;
          
          .balance{
            padding: 0 1em;
          }
          .subBtn {
            margin-top: 1em;
            padding: 0 0em;
            margin-right:1em;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          }
          .choose-id{
            display: flex;
            justify-content: space-between;
            padding: 0em;
          }
          .flex-box{
            position: relative;;
            align-items: flex-end;
            .ant-form-item-control-input{
    border-radius: 25px;
 }
            .ant-form-item{
              flex-grow: 1;
            }
            .go-btn{
              margin-bottom: 10px;
              margin-left: 10px;
              height: 35px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            }
          }
          .fee{
            width: 100%;
            font-size:16px;
            display: flex;
    justify-content: space-between;
            margin-top: 21px; 
            margin-bottom:10px;
            line-height:21px;   
            .eewz{
              color: rgba(98, 132, 245, 1);
               padding-left: 5px;
          margin-top:5px;
              font-family: Roboto-SemiBold, Roboto;
               font-weight: 600
            } 
            img{
              width: 28px;
             text-align:right;
            }
          }
          .tip{
            text-align:justify;
            margin-top: 2.5em;
          font-size: 15px;
          font-family: PingFangSCSemibold-, PingFangSCSemibold,sans-serif;
          font-weight: normal;
          color: #AC8989;
          line-height: 19px;
          }
        }
      }

      .select-box {
        width: 300px;
        position: absolute;
        top: calc(100% - 10px);
        left: 10px;
        z-index: 3;
        .select-content {
          border: 1px solid #434343;
          padding: 3px 12px;
          color: #999;
          background: none;
        }

        .select-list {
          position: absolute;
          width: 350px;
          max-height: 500px;
          overflow: auto;
          z-index: 1;
        }

        .select-item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 30px;
          border: 1px solid #434343;
          padding: 3px 12px;
          background: #000;

          &:nth-child(n+1) {
            border-top: none;
          }
        }
      }


      }



      @media screen and (max-width: 1500px) {
        .ant-form-item{
          line-height:1;
        }
        .ant-form-item-label>label{
            font-size:14px;
    color: rgba(138, 128, 128, 1);
    height: 20px;
}
        .subBtn{
        width: 130px;
        
      }
      .pid{
        padding-left: 10px;
      }
      .content-box {
        display: flex;
        padding: 1.5em 0;
      }
      .ecos{
          font-size:13px;
        }
        .ecoshr{
          width: 25%;
           opacity:  0.15;
           margin-top:8px;
        }

      .left-content {
      
        width: 50%;
        padding-right: 5%;
        position: relative;
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
      }

      .right {
        width: 50%;
        display: flex;
        max-width: 500px;
        .form { 
          margin-top: 0em;
          
          .balance{
            padding: 0 1em;
          }
          .subBtn {
            margin-top: 1em;
            padding: 0 0em;
            margin-right:1em;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          }
          .choose-id{
            display: flex;
            justify-content: space-between;
            padding: 0em;
          }
          .flex-box{
            position: relative;;
            align-items: flex-end;
            .ant-form-item-control-input{
    border-radius: 25px;
 }
            .ant-form-item{
              flex-grow: 1;
            }
            .go-btn{
              margin-bottom: 10px;
              margin-left: 10px;
              height: 35px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            }
          }
          .fee{
            width: 100%;
            font-size:14px;
            margin-top: 5px; 
            display: flex;
    justify-content: space-between;
            margin-bottom:-5px;
            line-height:5px;  
            .eewz{
              color: rgba(98, 132, 245, 1);
               padding-left: 5px;
          margin-top:12px;
              font-family: Roboto-SemiBold, Roboto;
               font-weight: 600
            }   
            img{
                
            }
          }
          .tip{
            text-align:justify;
            margin-top:0.5em;
          font-size: 9px;
          font-family: PingFangSCSemibold-, PingFangSCSemibold,sans-serif;
          font-weight: normal;
          color: #AC8989;
          line-height: 13px;
          p{
            margin-bottom: 0.5em;
          }
          }
        }
      }

      .select-box {
        width: 300px;
        position: absolute;
        top: calc(100% - 10px);
        left: 10px;
        z-index: 3;
        .select-content {
          border: 1px solid #434343;
          padding: 3px 12px;
          color: #999;
          background: none;
        }

        .select-list {
          position: absolute;
          width: 350px;
          max-height: 500px;
          overflow: auto;
          z-index: 1;
        }

        .select-item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 30px;
          border: 1px solid #434343;
          padding: 3px 12px;
          background: #000;

          &:nth-child(n+1) {
            border-top: none;
          }
        }
      }

    }
   

    @media screen and (max-width: 450px) {
        .ant-form-item{
          line-height:1;
        }
        .ant-form-item-control-input-content{
          width: 100%;
        }
        .ant-form-item-label>label{
            font-size:14px;
    color: rgba(138, 128, 128, 1);
    height: 20px;
}
       
      .pid{
        padding-left: 10px;
      }
      .content-box {
        display: block;
        padding: 1.5em 0;
      }
      .ecos{
          font-size:16px;
        }
        .ecoshr{
          width: 20%;
           opacity:  0.15;
           margin-top:10px;
        }
      .left-content {
      
        width: 100%;
        padding-right: 0%;
        position: relative;
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
      }

      .right {
        width: 100%;
        display: block;
        margin-top: 1.5em;
        max-width: 500px;
        .form { 
          margin-top: 0em;
          
          .balance{
            padding: 0 1em;
          }
          .subBtn {
            margin-top: 1em;
            padding: 0 0em;
            margin-right:1em;
            width: 100%;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          }
          .choose-id{
            display: flex;
            justify-content: space-between;
            padding: 0em;
          }
          .flex-box{
            position: relative;;
            align-items: flex-end;
            .ant-form-item-control-input{
    border-radius: 25px;
 }
            .ant-form-item{
              flex-grow: 1;
            }
            .go-btn{
              margin-bottom: 10px;
              margin-left: 10px;
              height: 35px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            }
          }
          .fee{
            width: 100%;
            font-size:14px;
            margin-top: 10px; 
            display: flex;
    justify-content: space-between;
            margin-bottom:5px;
            line-height:5px;    
            img{
            }
          }
          .tip{
            text-align:justify;
            margin-top:1.5em;
          font-size: 14px;
          font-family: PingFangSCSemibold-, PingFangSCSemibold,sans-serif;
          font-weight: normal;
          color: #AC8989;
          line-height: 19px;
          p{
            margin-bottom: 0.5em;
          }
          }
        }
      }

      .select-box {
        width: 300px;
        position: absolute;
        top: calc(100% - 10px);
        left: 10px;
        z-index: 3;
        .select-content {
          border: 1px solid #434343;
          padding: 3px 12px;
          color: #999;
          background: none;
        }

        .select-list {
          position: absolute;
          width: 350px;
          max-height: 500px;
          overflow: auto;
          z-index: 1;
        }

        .select-item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 30px;
          border: 1px solid #434343;
          padding: 3px 12px;
          background: #000;

          &:nth-child(n+1) {
            border-top: none;
          }
        }
      }

    }
    `