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
    width: 550px;
    background: #1D1212;
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
    }

    .btn-box {
      display: flex;
      justify-content: space-between;
      margin: 3em 0 1em;

      .sub-btn {
        font-size: 18px;
        width: 100%;
        height: 50px;
        &:nth-child(2){
          margin-left: 40px;
        }
      }
    }

    .dialog-name {
      font-size: 23px;
      text-align: center;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
      margin-top: 1em;
      line-height: 29px;
    }

    .dialog-info {
      text-align: center;
      margin: 2em 0 1em;
      font-size: 17px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #aaa;
      line-height: 20px;
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
      }
    }

  }

  /* mobile style */
  @media screen and (max-width: 1000px) {
    .dialog-content {
      width: 90vw;
      left: calc(5vw);
    }
    .btn-box{
      .sub-btn {
        &:nth-child(2){
          margin-left: 20px!important;
        }
      }
    }
  }
`

