import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";
export default   styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .panel-container {
    padding: 5em 8%;
    width: 90%;
  }

  .content-box {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;

    .left-part, .right-part {
      background: #1A1414;
      border-radius: 20px 20px 20px 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 30px 20px;
    }

    .left-part {
      .title {
        font-size: 15px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #8A8080;
      }

      .num-box {
        font-size: 30px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .right-part {
      .input-box {
        position: relative;
        display: flex;
        align-items: center;

        input {
          font-size: 23px;
          font-family: Russo One-Regular, Russo One;
          font-weight: 400;
        }

        .max-btn {
          width: 57px;
          height: 30px;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border-radius: 38px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          cursor: pointer;
        }

      }

      .withdraw-btn {
        width: 100%;
      }
    }
  }

  .panel-container {
    .nav-box{
      display: flex;
    }
    .fire-nav-list {
      .nav-item {
        width: 180px;
      }
    }
  }

`

