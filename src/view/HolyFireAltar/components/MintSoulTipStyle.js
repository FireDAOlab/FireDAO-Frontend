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

        &:nth-child(2) {
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
      line-height: 20px;

      .name {
        font-size: 16px;

      }

      .fid {
        margin: 10px auto;
        line-height: 40px;
        font-size: 18px;
        width: 220px;
        height: 40px;
        background: linear-gradient(320deg, rgba(221, 54, 66, 0.2) 0%, rgba(255,192,44, 0.2) 100%);
        box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
        border-radius: 10px;
        border: 1px solid #DD3642;
      }
      .soulaccount{
        width: 500px;
        height: 40px;
        background: #3F3535;
        border-radius: 10px;
        border: 1px solid #342727;
        line-height: 40px;
        margin-top: 10px;
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

