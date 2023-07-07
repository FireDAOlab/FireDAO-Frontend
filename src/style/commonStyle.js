import {createGlobalStyle} from "styled-components";

const CommonStyle = createGlobalStyle`
  .fire-nav-list {

    margin: 10px 0;
    display: flex;
    height: 60px;
    border-radius: 10px;

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
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.1);
      cursor: pointer;
      color: #8A8080;
      margin-left: 8px;
      &:first-child{
        margin-left: 0;
      }
      &.active {
        font-weight: bold;
        color: #FFFFFF;
        background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
        box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
        border-radius: 10px;

      }
    }
  }
    
`
export default CommonStyle