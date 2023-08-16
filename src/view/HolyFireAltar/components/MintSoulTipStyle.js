import styled from "styled-components";

export default styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

 .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: 0.5;
  }

  .dialog-content {
    position: fixed;
    z-index: 1;
    top: calc(20vh);
    left: calc(50vw - 250px);
    width: 520px;
    background: #241B1B;
    border-radius: 13px;


    border: 1px solid #3E3737;
    padding: 30px;

    .header {
      text-align: right;
display: flex;
justify-content:end;
      .close {
        cursor: pointer;
      }
      .dialog-name {
      font-size: 23px;
      text-align: center;
      margin: 0 auto;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      /* margin-top: 1em; */
      line-height: 29px;
    }

    }

    .sub-btn {
      font-weight: bold;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }

    .btn-box {
      display: flex;
      justify-content: space-between;
      margin: 3em 0 1em;

      .sub-btn {
        font-size: 18px;
        width: 100%;
        height: 50px;

        &:nth-child(2) {
          margin-left: 40px;
        }
      }
    }

    
    .dialog-info {
      text-align: left;
      margin: 2em 0 1em;
      font-size: 17px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      line-height: 20px;

      .name {
        font-size:20px;
        color:rgba(138, 128, 128, 1);
        line-height:23px;
      }

      .fid {
        line-height: 40px;
        font-size: 18px;
        width: 460px;
        height: 40px;
        margin: 20px 0px;
        padding:  0px 20px;
        background: rgba(255,255,255,0.1);
        /* background: linear-gradient(320deg, rgba(221, 54, 66, 0.2) 0%, rgba(255,192,44, 0.2) 100%); */
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
      }
      .soulaccount{
        width:460px;
        line-height: 40px;
        font-size: 18px;
        height: 40px;
        margin: 20px 0px;
        padding:  0px 20px;
        background: rgba(255,255,255,0.1);
        /* background: linear-gradient(320deg, rgba(221, 54, 66, 0.2) 0%, rgba(255,192,44, 0.2) 100%); */
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
      }
    }

    .dialog-address {
      text-align: center;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FF9260;
      line-height: 24px;

      svg {
        margin-left: 6px;
        background: url('../../../imgs/close.png')
      }
    }

  }
  @media screen and (max-width: 1500px) {
    .mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: 0.5;
  }

  .dialog-content {
    position: fixed;
    z-index: 1;
    top: calc(20vh);
    left: calc(50vw - 250px);
    width: 520px;
    background: #241B1B;
    border-radius: 13px;


    border: 1px solid #3E3737;
    padding: 30px;

    .header {
      text-align: right;
display: flex;
justify-content:end;
      .close {
        cursor: pointer;
      }
      .dialog-name {
      font-size: 23px;
      text-align: center;
      margin: 0 auto;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      /* margin-top: 1em; */
      line-height: 29px;
    }

    }

    .sub-btn {
      font-weight: bold;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }

    .btn-box {
      display: flex;
      justify-content: space-between;
      margin: 3em 0 1em;

      .sub-btn {
        font-size: 18px;
        width: 100%;
        height: 50px;

        &:nth-child(2) {
          margin-left: 40px;
        }
      }
    }

    .dialog-info {
      text-align: left;
      margin: 1em 0em;
      font-size: 18px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      line-height: 20px;

      .name {
        font-size:18px;
        color:rgba(138, 128, 128, 1);
        line-height:23px;
      }

      .fid {
        line-height: 40px;
        font-size: 16px;
        width: 460px;
        height: 40px;
        margin: 20px 0px;
        padding:  0px 20px;
        background: rgba(255,255,255,0.1);
        /* background: linear-gradient(320deg, rgba(221, 54, 66, 0.2) 0%, rgba(255,192,44, 0.2) 100%); */
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
      }
      .soulaccount{
        width:460px;
        line-height: 40px;
        font-size: 16px;
        height: 40px;
        margin: 20px 0px;
        padding:  0px 20px;
        background: rgba(255,255,255,0.1);
        /* background: linear-gradient(320deg, rgba(221, 54, 66, 0.2) 0%, rgba(255,192,44, 0.2) 100%); */
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
      }
    }
    
    .dialog-address {
      text-align: center;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FF9260;
      line-height: 24px;

      svg {
        margin-left: 6px;
        background: url('../../../imgs/close.png')
      }
    }
    .btn-box {
      .sub-btn {
        &:nth-child(2) {
          margin-left: 20px !important;
        }
      }
    }
  }
}
@media screen and (max-width: 450px) {
    .mask{
    position: fixed;
    left: 0;
    top: 10px;
    width: 100vw;
    height: 100vh;
    background: #000000;
    opacity: 0.5;
  }
  
    .dialog-content{
      position: fixed;
    z-index: 1;
    top: calc(20vh);
    left: calc(50vw - 45%);
    /* width: 520px; */
    background: #241B1B;
    border-radius: 13px;
width: 90%;

    border: 1px solid #3E3737;
    padding: 20px 15px;

    .header {
      text-align: right;
display: flex;
justify-content:end;
      .close {
        cursor: pointer;
      }
      .dialog-name {
      font-size: 23px;
      text-align: center;
      margin: 0 auto;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      /* margin-top: 1em; */
      line-height: 29px;
    }

    }

    .sub-btn {
      font-weight: bold;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }

    .btn-box {
      display: flex;
      justify-content: space-between;
      margin: 2em 0 1em;

      .sub-btn {
        font-size: 16px;
        width: 100%;
        height:45px;

        &:nth-child(2) {
          margin-left: 40px;
        }
      }
    }

    .dialog-info {
      text-align: left;
      margin: 1em 0em;
      font-size: 16px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      line-height: 15px;

      .name {
        font-size:16px;
        color:rgba(138, 128, 128, 1);
        line-height:15px;
      }

      .fid {
        line-height: 35px;
        font-size: 16px;
        width:100%;
        height: 35px;
        margin: 15px 0px;
        padding:  0px 20px;
        background: rgba(255,255,255,0.1);
        /* background: linear-gradient(320deg, rgba(221, 54, 66, 0.2) 0%, rgba(255,192,44, 0.2) 100%); */
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
      }
      .soulaccount{
        width:100%;
        line-height: 35px;
        font-size: 14px;
        height: 35px;
        margin: 15px 0px;
        padding:  0px 20px;
        background: rgba(255,255,255,0.1);
        /* background: linear-gradient(320deg, rgba(221, 54, 66, 0.2) 0%, rgba(255,192,44, 0.2) 100%); */
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
      }
    }
    
    .dialog-address {
      text-align: center;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FF9260;
      line-height: 15px;

      svg {
        margin-left: 6px;
        background: url('../../../imgs/close.png')
      }
    }
    .btn-box {
      .sub-btn {
        &:nth-child(2) {
          margin-left: 20px !important;
        }
      }
    }
  }
}
 
/* 
  mobile style
  @media screen and (max-width: 1000px) {
    .dialog-content {
      width: 90vw;
      left: calc(5vw);
    }

    .btn-box {
      .sub-btn {
        &:nth-child(2) {
          margin-left: 20px !important;
        }
      }
    }
  } */
`

