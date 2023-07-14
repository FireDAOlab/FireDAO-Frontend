import styled from "styled-components";
export default   styled.div`
  .ant-select-selector {
    border: none !important;
  }

  .page-title {
    font-size: 23px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    margin-left: 5%;
    padding: 0 10%;


  }

  .pid {
    width: 80px;
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

  .header-nav {
    width: 90%;
    margin-left: 5%;
    display: flex;
    padding: 0 10%;

    .fire-nav-list {
      .nav-item {
        width: 180px;
      }
    }
  }

  .donate-header {
    display: flex;
    justify-content: space-between;

    .isW {
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #8A8080;
      display: flex;
      align-items: center;

      .is {
        width: 60px;
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
    }
  }

  .panel-container {
    padding: 2em 10%;
    width: 90%;
    margin: 10px auto;

    .isInW {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 18px;
      padding-bottom: 10px;
    }

    .info {
      font-size: 20px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: #AC8989;
      line-height: 34px;
    }
  }

  .part1 {
    .panel-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .donate-info {
      margin-top: 2em;
      display: flex;
      justify-content: space-between;

      .flex-box {
        justify-content: space-between;
        width: 60%;

        .info-item {
          margin-left: 50px;

          .value {
            line-height: 50px !important;
            font-size: 24px !important;
          }
        }
      }

      .info-item {

        .name {
          font-size: 18px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #8A8080;
          line-height: 30px;
        }

        .value {
          font-size: 24px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #FFA756;
          line-height: 50px ;
          background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }


    .donation-box {
      width: 420px;

      margin: 0 auto;
      background: #1E1212;
      border-radius: 10px;
      border: 1px solid #333333;
      padding: 20px;

      .title {
        font-size: 18px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        padding-bottom: 10px;

      }

      .donate-part {
        background: rgba(255, 255, 255, 0.1);
        padding: 6px 15px 0;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);

        .ant-form-item-control-input {
          background: none;
        }

        .balance-box {
          display: flex;
          justify-content: flex-end;
          font-size: 20px;
          font-family: Roboto-Bold, Roboto;

          .name {
            font-weight: bold;
            color: #796B6B;
            line-height: 30px;
          }

          .value {
            font-weight: bold;
            color: #796B6B;
            line-height: 30px;
            margin-left: 10px;
          }
        }

        .input-box {
          position: relative;
          display: flex;
          align-items: center;

          .right-tip {
            display: flex;
            align-items: center;

            font-size: 12px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;

            .coin-icon {
              width: 20px;
              height: 20px;
              margin-right: 6px;
            }
          }

          .exchangeAmount {
            height: 50px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            font-size: 20px;
            padding: 0 10px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;
          }

          .ant-input-number, .ant-select {
            font-size: 20px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;
            height: 50px;
            width: 100% !important;

            .ant-input-number-input-wrap, .ant-select-selector, input {
              height: 100%;
              width: 100% !important;
              font-size: 20px !important;
              font-family: Roboto-Black, Roboto;
              display: flex;
              align-items: center;

              font-weight: 900;

              &:focus-visible {
                outline: none;
              }
            }

            .ant-select-clear {
              margin-right: 66px;
            }
          }

          .max-btn {
            width: 60px;
            position: absolute;
            right: 10px;
            top: 10px;
          }

        }

      }

      .tip {
        margin-top: 2em;
        font-size: 12px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #8A8080;
      }
    }


    .down-icon {
      width: 40px;
      height: 40px;
      margin: 0.5em 0 1em calc(50% - 20px);

    }

    .donate {
      margin-top: 1em;
      width: 100%;
      height: 50px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
    }

    .ant-btn-primary {
      margin-top: 1em;
      width: 100%;
      height: 50px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
    }


  }

  .part2 {
    .list-top-part {
      .fire-nav-list {
        padding: 3px;
        margin-top: 1em;
        height: 50px;
        width: 380px;
        .nav-item {
          width: 180px;
        }
      }
    }

  }

  .part3 {
    .btns {
      display: flex;
      justify-content: space-between;
    }

    .tip {
      strong {
        color: #d84a1b;
      }
    }

    .icon-box {
      width: 200px;
      display: flex;
      justify-content: space-between;
      margin: 20px auto;

      .icon {
        cursor: pointer;
      }
    }

    .add-btn {
      margin: 1em 0;
    }
  }


  .fire-list-box {
    .list-item, .list-header {
      justify-content: space-between;
      text-align: center;

    }

    .list-header3 {
      text-align: center;

      .col {
        text-align: center;

        &:nth-child(1) {
          width: 10% !important;
        }

        &:nth-child(2) {
          width: 16% !important;
        }

        &:nth-child(3) {
          width: 20% !important;
        }

        &:nth-child(4) {
          width: 40% !important;
        }

        &:nth-child(5) {
          width: 10% !important;
        }
      }
    }

    .list-header2 {
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      padding: 20px 0em;

      .col {
        justify-content: center;

        &:nth-child(1) {
          width: 10% !important;
        }

        &:nth-child(2) {
          width: 10% !important;
        }

        &:nth-child(3) {
          width: 20% !important;
        }

        &:nth-child(4) {
          width: 60% !important;
        }
      }

    }

    .row2-list-item {
      padding: 6px 0;

      .col {
        display: flex;
        justify-content: center;


        &:nth-child(1) {
          width: 10% !important;
        }

        &:nth-child(2) {
        }

        &:nth-child(3) {
          width: 20% !important;
        }

        &:nth-child(4) {
          width: 60% !important;
        }

      }
    }

    .col {

      &:nth-child(1) {
        min-width: 30px;
      }

      &:nth-child(2) {
        min-width: 50px;
      }

      &:nth-child(3) {
        width: 80px;
      }

      &:nth-child(4) {
        width: 80px;
      }

      &:nth-child(5) {
        width: 60px;
        padding-right: 5px;
      }

      &:nth-child(6) {
        width: 80px;
      }

      &:nth-child(7) {
        width: 80px;
        text-align: center;
      }

      &:nth-child(8) {
        width: 86px;
      }

      &:nth-child(9) {
        width: 220px;
        text-align: center;

      }

    }

    .list-item {
      .col {
        overflow: hidden;
        padding-left: 0.5%;

      }

      .address {
        a {
          color: #FF9260;
        }
      }
    }
  }


  .pagination {
    text-align: center;
  }

  .list-header3, .row3-list-item {
    padding: 6px;

    .col {
      &:nth-child(1) {
        width: 10%;
      }

      &:nth-child(2) {
      }

      &:nth-child(3) {
        width: 16%;
      }

      &:nth-child(4) {
        width: 40%;
      }

      &:nth-child(5) {
        width: 10%;
      }
    }
  }

  /* mobile style */
  @media screen and (max-width: 1000px) {
    .page-title{
      padding: 0;
    }
    .header-nav {
      width: 90%;
      margin: 0 auto;
      padding: 0;
     .nav-item{
       height: 50px;
     }

      .fire-nav-list {
        width: 100%;
        margin: 0;
      }
    }

    .fire-list-box {
      width: 100%;
      overflow-x: scroll;
      min-width: 100%;

      .list-item {
        background: none;
      }
    }

    .part1 {
      .donate-info {
        display: block;

        .flex-box {
          .info-item {
            margin-left: 0;
          }
        }
      }

      .donation-box {
        padding: 0;
        border: none;
        background: none;
        width: 100%;
      }
    }

    .part2 {
      .list-top-part {
        display: block;

        .fire-nav-list {
          width: 100%;
        }
      }

    }
  }

`

