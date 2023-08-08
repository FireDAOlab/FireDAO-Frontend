import {createGlobalStyle} from "styled-components";

const CommonStyle = createGlobalStyle`
  .fire-nav-list {
   
    margin: 10px 0;
    display: flex;
    height: 50px;
    border-radius: 10px;
    user-select: none;
    font-size: 24px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #999999;
    padding: 3px;

    .nav-item {

      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
      padding: 0 10px;
      flex-grow: 1;
      padding: 0 10px;
      border-radius: 38px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      color: #8A8080;
      margin-left: 8px;

      &:first-child {
        margin-left: 0;
      }

      &.active {
        font-weight: bold;
        color: #FFFFFF;
        background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        /* box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3); */

      }
    }
  }

  .admin-icon-box {
    padding: 3px;
    border: 1px solid #fff;
    float: right;
    width: 50px;
    height: 50px;
    margin-right: 6vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    background: rgba(183, 183, 183, 0.3);

    .admin-icon {
      width: 30px;
      height: 30px;
    }
  }


`
export default CommonStyle