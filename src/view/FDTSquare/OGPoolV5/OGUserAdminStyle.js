import styled from "styled-components";

export default styled.div`

  .signup-dialog {
    .input-title {
      font-size: 20px;
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #8A8080;
    }
  }

  .status-header {
    display: flex;
    justify-content: space-between;

    .signUp-btn {
      width: 160px;
      height: 40px;
      border-radius: 50px;
      opacity: 1;
      border: 1px solid rgba(255, 174, 78, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .status-info {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      .info-item {
        margin-right: 10px;
        flex: 1;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 49px 49px 49px 49px;
        opacity: 1;
        border: 1px solid rgba(255, 255, 255, 0.1);
        width: 160px;
        padding: 0 20px;
        font-size: 16px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #FFFFFF;
        display: flex;
        align-items: center;

        .dot {
          width: 8px;
          height: 8px;
          background: #D8D8D8;
          border-radius: 50%;
          margin-right: 20px;

          &.active {
            background: #60C064;
            border: 2px solid rgba(255, 255, 255, 0.3);
          }
        }
      }

      .my-id {
        float: right;
      }

    }

  }

  .reward-item {
    display: flex;
    align-items: center;
    margin-left: 10px;

    img {
      margin-right: 6px;
    }
  }

  .active-content-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .content-item-box {
      flex-wrap: wrap;
      width: 48%;
      background: #1A1414;
      border-radius: 20px;
      padding: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);

      .name {
        opacity: 0.5;
        margin-bottom: 10px;
      }
      .address{
        padding: 3px 6px;

        color: #CD9E57;
      }
      & {
        &::-webkit-scrollbar {
          display: none;
        }

        scrollbar-width: none;
      }

      .item {
        .address {
          font-size: 12px;
        }
      }
    }

    .flex-box {
      margin-top: 10px;
      align-items: center;

      .name {
        font-size: 16px;
      }

      .value {
        font-size: 18px;
      }
    }

    .content-list {
      justify-content: space-between;
      margin-bottom: 10px;

      .content-item {
        .name {
          font-size: 16px;
        }

        .value {
          font-size: 18px;
        }
      }
    }
  }
  .total-box{
    padding: 20px 0;
    justify-content: space-between;
    .item{
      padding: 20px;
      width: 48%;
      background: #1A1414;
      border-radius: 20px 20px 20px 20px;
      opacity: 1;
      border: 1px solid rgba(255,255,255,0.1);
      strong{
        font-size: 20px;
      }
    }
  }

  .donate-list {
    overflow: auto;
    .list-header{
      padding-left: 50px;
    }
    .col {
      text-align: center;

      overflow: hidden;
      width: 120px;
  
 
      &:nth-child(4) {
        width: 150px;
        .address{
          margin-left: 20px;
        }
      }

    }
  }

  .address {
    a {
      color: rgba(205, 158, 87, 1);
      text-align: center;
    }

    padding: 0 5px;
    width: 100px;
    border: 1px solid rgba(205, 158, 87, 1);
    background: rgba(205, 158, 87, 0.20);
    border-radius: 25px;
    overflow: hidden;

  }

  .search-box {
    display: flex;
    align-items: center;
    background: #3F3535;

    border-radius: 45px;
    border: 1px solid #333333;
    padding: 2px;
    height: 45px;

    .ant-input-affix-wrapper {
      line-height: 2;
    }

    .ant-select-selector {
      background: #1F1212;
      border-radius: 8px;
    }
  }

  .active-list-row {
    .col:nth-child(2) {
      width: 60% !important;
    }
  }


  
  .page-title {
    font-size: 30px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    padding: 0px 11.7%;
  }



  .header-nav {
    padding: 10px 11.7%;
    display: flex;

    .fire-nav-list {
      height: 45px;
      width: auto;

      .nav-item {
        width: auto;
        padding: 0 20px;
        font-size: 18px;
      }
    }
  }





`

