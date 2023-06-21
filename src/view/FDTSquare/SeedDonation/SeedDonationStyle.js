import styled from "styled-components";
export default   styled.div`
  .panel-container {
    padding: 2em;
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
    .donate-info {
      margin-top: 2em;

      .flex-box {
        justify-content: space-between;

        .info-item {

          .value {
            line-height: 50px !important;
            font-size: 24px !important;
          }
        }
      }

      .info-item {

        .name {
          font-size: 20px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #796B6B;
          line-height: 30px;
        }

        .value {
          font-size: 32px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #FFA756;
          line-height: 70px;
          background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }

    .donate-pid {
      .panel-title { {
        margin-top: 1.5em;
      }
      }

      .flex-box {
        margin: 1.5em 0;
        justify-content: space-between;
        align-items: center;

        .pid {
          padding: 6px 10px;
          border-radius: 10px;

          border: 1px solid #DD3642;
          font-size: 18px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #FFA756;
          background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .value {
          font-size: 18px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #796B6B;
          line-height: 28px;
        }
      }
    }

    .input-box {
      position: relative;

      .exchangeAmount {
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 18px;
        padding: 0 20px;
      }

      .ant-input-number, .ant-select {
        height: 50px;
        padding: 0 90px 0 40px;
        width: 100% !important;

        .ant-input-number-input-wrap, .ant-select-selector, input {
          height: 100%;
          width: 100% !important;

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

      .coin-icon {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 30px;
        height: 30px;
      }

      .coin-name {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
      }
    }

    .balance-box {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-family: Roboto-Bold, Roboto;

      .name {
        font-weight: bold;
        color: #796B6B;
        line-height: 30px;
      }

      .value {
        font-weight: bold;
        color: #FFFFFF;
        line-height: 30px;
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

    .tip {
      margin-top: 2em;
      font-size: 16px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
    }
  }

  .part2 {
    .og-nav-list {
      margin-top: 1em;
      width: 100%;
      height: 50px;
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

  .og-nav-list {
    margin: 10px auto;
    display: flex;
    width: 90%;
    height: 60px;
    background: #3E2727;
    border-radius: 10px;
    border: 1px solid #333333;
    font-size: 24px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #999999;

    .nav-item {
      width: 50%;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      padding: 0 10px;

      &.active {
        font-weight: bold;
        color: #FFFFFF;
        background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
        box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
        border-radius: 10px;
      }
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

      .col {
        width: 33% !important;
        text-align: center;

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

    .col {
      text-align: left;

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
        //text-overflow: ellipsis;

      }

      .address {
        a {
          color: #FF9260;
        }
      }
    }
  }

  /* mobile style */
  @media screen and (max-width: 1000px) {
    .fire-list-box {
      width: 100%;
      overflow-x: scroll;
      min-width: 100%;

      .list-item {
        background: none;
      }
    }
  }

  .row2-list-item {
    padding: 6px 0;

    .col {
      width: 30% !important;
      text-align: center;


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

  .pagination {
    text-align: center;
  }

  .row3-list-item {
    padding: 6px;

    .col {
      &:nth-child(1) {
        width: 10% !important;
      }

      &:nth-child(2) {
        width: 10% !important;
      }

      &:nth-child(3) {
        width: 16% !important;
      }

      &:nth-child(4) {
        width: 40% !important;
      }

      &:nth-child(4) {
        width: 20% !important;
      }
    }
  }

`

