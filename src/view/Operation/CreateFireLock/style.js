import styled from "styled-components";
export default styled.div`
  
  h1 {
    width: 90%;
    margin: 0 auto;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
  }
  .tip-content{
    text-align: justify;
    width: 640px;
    margin-top: 2em;
    opacity: 0.7;
  }

  .input-box{
    position: relative;
    .max-btn{
      position: absolute;
      left:240px;
      top: 2px;
    }
    .icon{
      position: absolute;
      left:420px;
      top: 10px;
    }
  }
  .panel-container {
    position: relative;
    margin: 1em auto;
    .back {
      cursor: pointer;
      width: 40px;
      position: absolute;
      left: 30px;
      top: 20px;
    }
  }

  .coin-info {
    width: 635px;
    margin: 0 auto;
  }

  .input-box {
    position: relative;

    .tip {
      position: absolute;
      left: 360px;
      top: 6px;
    }
  }

  .balance-box {
    display: flex;
    justify-content: space-between;
    padding-left: 180px;
    width: 410px;

    .value {
      font-weight: bold;
    }
  }

  .mint-fee {
    width: 200px;
    justify-content: space-between;
    display: flex;
    margin-top: 3em
  }

  .rate-table {
    width: 636px;
    margin-top: 2em;

    .col {
      width: 25%;
      text-align: center;
    }

    .address {
      color: #FF9260;
    }

    .rate-header {
      display: flex;
      justify-content: space-between;
    }

    .row {
      display: flex;
      height: 42px;
      margin-top: 0.5em;
      background: #3F3535;
      border-radius: 8px;
      line-height: 42px;
      padding: 0 10px;
      justify-content: space-between;
    }
  }

  .info-box {
    width: 635px;
    margin-top: 20px;

    .name {
      font-size: 14px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      opacity: 0.6;
      line-height: 22px;
    }

    .value {
      margin-top: 10px;
      font-size: 15px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
    }

    .inputValue {
      margin-top: 10px;
      width: 450px;
      height: 34px;
      background: #3F3535;
      border-radius: 6px;
      border: 1px solid #342727;
      font-size: 10px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 34px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  .input-box {
    position: relative;

    .info {
      font-size: 12px;
      left: 460px;
      top: 6px;
      opacity: 0.5;
      position: absolute;
    }
  }

  .short-input {
    .ant-form-item-control-input {
      background: none;
    }

    .end-time {
      background: rgba(255, 255, 255, 0.15);
      padding: 6px 20px;
      width: 220px;
      text-align: center;
      border-radius: 6px;
    }

    .ant-input {
      width: 220px;
      background: rgba(255, 255, 255, 0.15);
    }

    .ant-form-item-control-input-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }


  }

  .sub-btn {
    width: 200px;
    height: 44px;
    font-size: 18px;
    margin-top: 1em;
    margin-left: calc(50% - 100px);
  }

  .address-list {
    .address-item {
      display: flex;
      align-items: center;

      .ant-form-item-label {
        width: 150px !important;
      }

      .address {
        .ant-form-item-control-input {
          width: 300px;
        }
      }

      .number {
        .ant-form-item-label {
          text-align: center;
          width: 100px !important;
        }

        .ant-form-item-control-input {
          width: 60px;
        }
      }

      cursor: pointer;

      .icon {
        width: 50px;
        line-height: 30px;
        font-size: 26px;
      }
    }
  }

  .contract-address {
    width: 90%;
    margin: 40px auto 0px;
    display: flex;
    align-items: center;

    .name {
      font-size: 14px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      opacity: 0.6;
      line-height: 22px;
    }

    .value {
      width: 450px;
      height: 34px;
      background: #3F3535;
      border-radius: 6px;
      border: 1px solid #342727;
      font-size: 10px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 34px;
      margin-left: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .ant-select {
        width: 100%;
      }
    }
  }

  .no-bg {
    .ant-form-item-control-input {
      background: none !important;
    }
  }

  .ant-form {
    width: auto !important;
  }

  .name {
    opacity: 0.7;
  }

  .ant-radio-inner::after {
    background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
  }

  .ant-radio-checked .ant-radio-inner {
    border: 1px solid #FFC02C;
  }

  .panel-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .ant-row {
      display: flex !important;
      margin-top: 1em;

      .ant-form-item-label {
        font-size: 16px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 22px;
        width: 186px;
        text-align: left;
        opacity: 0.6;
      }

      .ant-form-item-control-input {
        width: 450px;
        border-radius: 6px;
      }
    }

    .sub-title {
      text-align: left;
      width: 623px;
      font-size: 18px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      color: #aaa;
      line-height: 22px;
      margin: 1em 0;
    }

    .info-row {
      display: flex;
      align-items: center;
      margin-top: 1em;

      .name {
        font-size: 14px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 22px;
        width: 166px;
        opacity: 0.6;
      }

      .value {
        width: 450px;
        height: 34px;
        background: #3F3535;
        border-radius: 6px;
        border: 1px solid #342727;
        font-size: 10px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 34px;
        padding: 0 10px;
        margin-left: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }


  /* mobile style */
  @media screen and (max-width: 1000px) {
    .contract-address{
      display: block;
      .value{
        margin: 10px 0;
        width: 100%;
      }
    }
    .panel-container {
      width: 90vw;
      padding: 3em 1em;
      .ant-form{
        margin-top: 1em;
      }
      .info-box,.coin-info,.tip-content ,.sub-title,.inputValue,.rate-table{
        width: 100%;
      }
      .info-row{
        .value{
          width: 100%;
        }
      }
      .ant-form-item-control-input{
        width: 100% !important;
      }
      .balance-box{
        width: 100%;
        padding-left: 0;
      }
      .short-input .ant-input,.short-input .end-time{
        width: 70%;
      }
      .input-box{
        width: 100%;
        overflow: auto;
        .max-btn{
          left: 80%;
        }
        .icon{
          position: absolute;
          left: 60%;
          top: 20px;
        }
        .tip{
          left: 50%;
          top: 60px;
        }
    
        .info {
        left: 0;   
        }
      }
    }
    .address-list{
      .address-item{
        justify-content: space-between;
        .icon {
          margin-top: 30px;
        }
      }
      .address{
        width: 70%;
      }
      .number{
        width: 28%;
        margin-left: 2%;
      }
    }
  }
`

