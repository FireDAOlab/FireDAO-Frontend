import styled from "styled-components";
const OGPoolStyle = styled.div`
  .ant-btn{
    margin-right: 20px;
  }
  .assign-row {
    padding: 10px 0;
    border-bottom: 1px solid #666;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .panel-container {
    width: 90%;
    margin: 10px auto;
    padding: 1em;

    .info {
      font-size: 20px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: #AC8989;
      line-height: 34px;
    }
  }

  .part3 {
    .operate-btns {
      width: 100%;

      Button {
        width: 100%;
        height: 40px;
        margin-top: 1em;
      }
    }

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
          background: linear-gradient(90deg, rgba(#dd3642, 0.3) 0%, rgba(#FFC02C, 0.5) 100%);
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
        padding: 0 66px 0 40px;
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

  .og-nav-list {
    margin: 10px auto;
    display: flex;
    width: 90%;
    height: 80px;
    background: #3E2727;
    border-radius: 10px;
    border: 1px solid #333333;
    font-size: 20px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #999999;

    .nav-item {
      width: 33.3%;
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

  .part4 {
    .sum-list {
      .sum-item-box {
        margin-top: 20px;
        padding: 10px 10px;
        box-shadow: #fff1f0 0 0 10px;
        text-align: center;

        .col {
          &:nth-child(1) {
            width: 60px;
          }

          &:nth-child(2) {
            width: 60px;
          }

          &:nth-child(3) {
            width: 60px;
          }

          &:nth-child(4) {
            width: 250px;
          }

          &:nth-child(5) {
            width: 50px;
          }

          &:nth-child(6) {
            width: 30px;
          }

          &:nth-child(7) {
            width: 100px;
          }

        }

        .sum-list-header {
          display: flex;

          .index {
            margin-right: 10px;
            font-weight: bold;
          }
        }

        .sum-item-header {
          border-bottom: 1px solid #eee;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          padding: 10px 0;

          .col:nth-child(4) {
            width: 160px;
            overflow: hidden;
          }
        }

        .sum-list-footer {
          border-top: 1px solid #eee;
          display: flex;
          padding-top: 10px;

          .col {
            margin-right: 10px;

            &:nth-child(1) {
              width: 150px !important;
            }

            &:nth-child(2) {
              width: 120px !important;
            }

            &:nth-child(3) {
              width: 120px !important;
            }
          }
        }

        .sum-item {
          .col:nth-child(4) {
            width: 160px;
            overflow: hidden;
          }

          padding: 5px 0px;
          display: flex;

          justify-content: space-between;
        }
      }

    }
  }
`;
export default OGPoolStyle;
