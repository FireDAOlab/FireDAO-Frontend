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
  .claim-nav{
    margin: 10px 0 0px;
  }
  .fire-list-box-userclaim{
    .col{
      a{
        color: #d46b08;
      }
      &:nth-child(1){
        width: 30px;
      }
      &:nth-child(2){
        width: 30px;
      }
      &:nth-child(3){
        width: 50px;
      }
      &:nth-child(4){
        width: 30px;
      }
      &:nth-child(5){
        width: 150px;
      }
      &:nth-child(6){
        width: 100px;
      }
      
    }
  }
  .pagination{
    display: flex;
    justify-content: center;
  }
  .content-box {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 20px 0 30px;

    .left-part, .right-part {
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 30px 40px;
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

      .bottom-part {
        display: flex;
        margin-top: 10px;

        .info-box {
          margin-right: 50px;
          &:last-child{
            margin-right: 0;
          }
          .name {
            font-size: 13px;
            font-family: Roboto-Medium, Roboto;
            font-weight: 500;
            color: #8A8080;
          }

          .value {
            font-size: 20px;
            font-family: Russo One-Regular, Russo One;
            font-weight: 600;
            background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
    }

    .right-part {
      .info-box {
        display: flex;
        justify-content: space-between;
      }

      .withdrawForm {
        margin-top: 10px;
      }

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
        margin-top: 10px;
        width: 100%;
      }
    }
  }

  .panel-container {
    .nav-box {
      display: flex;
    }

    .fire-nav-list {
      .nav-item {
        width: 180px;
      }
    }
  }

`

