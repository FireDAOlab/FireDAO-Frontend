import styled from "styled-components";
export default   styled.div`
  .panel-box {
    width: 100%;

    .panel-container {
      width: 90%;

      .search-box {
        display: flex;
      }
    }

    .panel-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .fire-list-box-airdrop {
    .col:nth-child(1) {
      width: 50px;
    }

    .col:nth-child(2) {
      width: 50px;
    }

    .col:nth-child(3) {
      width: 100px;
    }

    .col:nth-child(4) {
      width: 50px;
    }

    .col:nth-child(5) {
      width: 300px;
    }

    .col:nth-child(6) {
      width: 100px;
    }
  }

  .del-content {
    max-height: 60vh;
    overflow-y: auto;
  }

  .title {
    text-align: center;
  }

  .check-icon {
    width: 26px;
    height: 26px;
  }

  .remove-btn {
    margin-left: 16px;
  }

  .ant-checkbox-inner {
    border-color: #d46b08 !important;
  }

  .remove-check {
    padding: 0 10px;

    Button {
      margin-left: 10px;
    }
  }

  .fire-list-box {
    margin-top: 20px;
  }

  .fire-list-box-admin {
    .col:nth-child(1) {
      width: 10%;
    }

    .col:nth-child(2) {
      width: 80%;
    }
  }

  .list-item {
    padding: 10px 0;
    display: flex;

    .pid {
      margin-right: 10px;
    }
  }

  .discount-list {
    .list-item {
      padding: 10px 0;
      display: flex;
      align-items: center;

      .end {
        margin: 0 10px;
      }

      .discount {
        margin: 0 10px;
      }
    }
  }

  .content-item {
    margin-top: 2em;
  }

  .current {
    display: flex;
    align-items: center;

    .name {
      font-weight: bold;
      font-size: 18px;
    }

    .value {
      margin-left: 10px;
    }
  }

  .nav-list {

    display: flex;
    background: #3F3535;
    border-radius: 10px;
    border: 1px solid #333333;
    padding: 3px;

    .nav-item {
      cursor: pointer;
      padding: 10px 30px;
      border-radius: 10px;
      margin-right: 10px;
      font-size: 16px;
      font-weight: bold;

      &.active {
        background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
        box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
      }

      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }
`

