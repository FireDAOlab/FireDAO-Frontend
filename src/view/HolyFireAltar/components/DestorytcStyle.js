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

      .close {
        cursor: pointer;
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

    .dialog-name {
      font-size: 24px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      /* margin-top: 1em; */
      line-height: 28px;
    }

    .dialog-info {
      text-align: left;
      margin: 2em 0 1em;
      font-size: 16px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #FFFFFF;
line-height: 24px;

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

  /* mobile style */
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
  }
`

