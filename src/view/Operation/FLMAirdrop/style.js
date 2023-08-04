import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .panel-title.flex-box {
    justify-content: space-between;

    .search-box {
      display: flex;
      .ant-btn{
        margin-left: 6px;
      }
    }
  }
  .select-box{
    width: 160px;
  }
  .add-coin {
    background: rgba(254, 109, 70, 0.1);
    border-radius: 38px 38px 38px 38px;
    color: #FE6D46;
    font-size: 12px;
    border: 1px solid rgba(254, 109, 70, 0.5);
    padding: 3px 10px;
    cursor: pointer;
    white-space: nowrap;
  }

  .address {
    padding: 6px 15px;
    background: rgba(205, 158, 87, 0.1);
    border-radius: 38px 38px 38px 38px;
    border: 1px solid rgba(205, 158, 87, 0.5);
  }

  .fire-list-box-deposit {
    .col:nth-child(1) {
      width: 50px;
    }

    .col:nth-child(2) {
      width: 50px;
    }

    .col:nth-child(3) {
      width: 50px;
    }

    .col:nth-child(4) {
      width: 100px;
    }

    .col:nth-child(5) {
      width: 50px;
    }

    .col:nth-child(6) {
      width: 150px;
    }
  }

  .fire-list-box-airdrop {
    .col:nth-child(1) {
      width: 50px;
    }

    .col:nth-child(2) {
      width: 300px;
    }

    .col:nth-child(3) {
      width: 50px;
    }

    .col:nth-child(4) {
      width: 50px;
    }

    .col:nth-child(5) {
      width: 50px;
    }


  }
  @media screen and (max-width: 1000px) {
    .fire-list-box-airdrop {
 
      .col:nth-child(1) {
        width: 50px;
      }
      .col:nth-child(2) {
        width: 100px;
      }
      .col:nth-child(3) {
        width: 100px;
      }
      .col:nth-child(4) {
        width: 200px;
      }
      .col:nth-child(5) {
        width: 200px;
      }
      .col:nth-child(6) {
        width: 200px;
      }
      .list-header{
        .col{
          text-align: center;
        }
        .col:nth-child(3) {
          padding-left: 30px;
          width: 230px;
        }
      }
    }
    .panel-title.flex-box{
      flex-direction: column;
      .search-box{
        margin-top: 10px;
      }
    }
  }
  .fire-list-box{
    background: none;
    border: 0;
    .list-header{
      border-radius: 20px 20px 0 0px;
      background: #1A1414;
    }
    .list-item{
      background: #1A1414;
      padding: 20px;
      margin: 0;
      border-radius: 0;
      &:last-child{
        border-radius: 0 0 20px 20px;
      }
    }
  }
  .batch-box{
    display: flex;
    font-size: 24px;
    padding: 20px 25px;
    justify-content: space-between;
    background: #241B1B;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #FFFFFF;
  }
  .fire-list-box-airdroplist {
    .list-header{
      .col{
        padding-left: 10px;
      }
    }
    .col {
      width: 50px;
    }

    .col:nth-child(3) {
      width: 100px;
    }
    .col:nth-child(4) {
      width: 150px;
    }
    .col:nth-child(6) {
      width: 130px;
      overflow: hidden;
    }
  }

  .panel-container {
    padding: 3em 8%;
    margin: 1em 5%;
    width: 90%;
  }

  .claim-nav {
    margin: 10px 0 0px;
  }

  .fire-list-box {
    margin-top: 20px;

    a {
      color: #d46b08;
    }
  }

  .fire-list-box-userclaim {
    .col {
      &:nth-child(1) {
        width: 50px;
      }

      &:nth-child(2) {
        width: 50px;
      }

      &:nth-child(3) {
        width: 100px;
      }

      &:nth-child(4) {
        width: 100px;
      }

      &:nth-child(5) {
        width: 100px;
      }


    }
  }

  .can-claim {
    color: #8A8080;

    strong {
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
    }
  }

  .pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    white-space: nowrap;
    .pid {
      width: auto;
      padding: 0 10px;
      margin-left: 6px;
      height: 23px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      align-items: center;
      font-size: 14px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #FE6D46;
      justify-content: center;
    }
    @media screen and (max-width: 1000px) {
      .pid{
        width: 40px;
      }
    }
  }

  .pagination {
    display: flex;
    justify-content: center;
  }

  .content-box {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding: 20px 0 30px;

    .left-part, .right-part {
      width: 45%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 30px 50px;
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
        margin-top: 20px;
        justify-content: space-between;
        flex-wrap: wrap;
        .info-box {
          padding-right: 10px;
          &:last-child {
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
            color: #FFFFFF;
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

  @media screen and (max-width: 1000px) {
    .panel-title {
      font-size: 20px;
    }
    .can-claim {
      font-size: 12px;
    }
    .add-coin {
      font-size: 12px;
    }

    .content-box {
      flex-direction: column;

      .left-part, .right-part {
        width: 100%;
        padding: 2vh 5vw;

        .bottom-part {
          .name{
            font-size: 12px;
          }
          .value {
            font-size: 14px;
          }
        }
      }

      .right-part {
        margin-top: 20px;
      }
    }

    .fire-nav-list {
      width: 70vw;
      height: 50px;
    }
  }
`;

