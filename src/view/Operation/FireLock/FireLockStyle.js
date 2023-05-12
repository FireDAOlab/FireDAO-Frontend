import styled from "styled-components";

export default styled.div`

  .panel-container {


    .header-box {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      position: relative;

      .fresh-icon {
        position: absolute;
        left: 280px;
        top: 40px;
        width: 26px;
        height: 26px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          transform: rotate(180deg);
        }
      }

      .nav-list-box {
        margin: 2em 0;
        display: flex;
        width: 100%;
      }

      .search-container {
        .search-box {
          display: flex;
          align-items: center;
          background: #3F3535;
          border-radius: 10px;
          border: 1px solid #333333;
          padding: 2px;

          .ant-select-selector {
            background: #1F1212;
            border-radius: 8px;
          }
        }
      }
    }
  }

  .search-btn {
    margin-left: 6px;
  }

  .fire-list-box {

    .col {
      width: 8%;
      text-align: left;
      padding: 0 6px;

      &:nth-child(1) {
        width: 30px;
      }

      &:nth-child(2) {
        min-width: 90px;
      }

      &:nth-child(3) {
        min-width: 90px;
      }

      &:nth-child(4) {
        width: 0px;
      }

      &:nth-child(5) {
        width: 120px;
      }

      &:nth-child(7) {
        min-width: 100px;
      }

      &:nth-child(8) {
        min-width: 80px;
      }

      &:nth-child(9) {
        min-width: 110px;
      }

      &:nth-child(10) {
        min-width: 130px;
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

  .pagination {
    text-align: center;
  }

  /* mobile style */
  @media screen and (max-width: 1000px) {
    .panel-container {
      width: 90vw;
      padding: 3em 1em;

      .header-box {
        display: block;

        .fresh-icon {
          top: 15px;
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
    }
  }
  /* mobile style */
  @media screen and (max-width: 1000px) {
    .panel-container {
      width: 90vw;
      padding: 3em 1em;

      .header-box {
        display: block;

        .fresh-icon {
          top: 15px;
        }
      }

      .btn-box {
        margin-top: 1em;
        .search-btn{
          width: 50%;
        }
      }

      .fire-list-box {
        width: 100%;
        overflow-x: scroll;
        min-width: 100%;

        .col {
          &:nth-child(6) {
            min-width: 120px !important;
          }

          &:nth-last-child(1) {
            min-width: 120px;
          }
        }

        .list-item {
          background: none;

        }
      }
    }
  }
`

