import styled from "styled-components";
export default   styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width:100%;
  margin: 0 auto;

@media screen and (max-width: 1950px){
    .ant-form-item{
        margin:1.5em 0px;
    }
    .ant-form-item-label>label{
        font-size:16px;
        color:white;
    }
    
    .ant-form-item-control-input{
        border-radius:50px;
        width: 33%;
    }
    .ant-input{
        font-size:16px;
        border-radius:50px;
    }
    .panel-container {
    width: 100%;
    .panel-title{
        font-size: 20px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 26px;
img{
    width: 40px;
}
    }
    .index-box{
      width: 30px;
      height: 30px;
      background: #FF8D4D;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
      margin-right: 10px;
    }
    .step-box{
      margin-top: 30px;
      .ant-stps-item-title{
        font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 21px;
      }
    }
    .ant-form-item-control-input{
      background: none;
      input,textarea{
        background: rgba(255, 255, 255, 0.15);;
      }
      textarea{
        border-radius: 10px;
      }
    }
    .panel-title{
      display: flex;
      align-items: center;
    }
    .toolTip{
      margin-left: 10px;
    }
    .continue-btn{
      margin-top: 20px;
    }
    .btn-box{
      margin: 20px 0 0;
      .ant-btn {
        width: 160px;
        margin-right: 20px;
        border-radius: 20px
      }
    }
    .action-box{
      padding: 20px 0;
    }
    .action-choose{
      display: flex;
      margin: 20px 0;
      .choose-item{
        width: 248px;
        height: 52px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        background: rgba(255,255,255,0.1);
        border-radius: 38px;
        cursor: pointer;
        border: 1px solid rgba(255,255,255,0.1);
        &:first-child{
          margin-left: 0;
        }
        &.active{
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border: 1px solid #FF4E50;
        }
      }
    }
    .tip-box{
      margin: 20px 0 10px;
      font-size:16px;
     
    }
    .descri{
        .ant-form-item-control-input {
    border-radius: 0px;
    width: 33%;
}
      }

      .tip{
        color: #8A8080;
        font-size:16px;
        span{
            color: white;
            
        font-size:16px;
        }
      }
    .desc-box{
      width: 100%;
      height:100%;
      background: none;
      border: none;
     
    }
  }
}
`

