import {createGlobalStyle} from "styled-components";

const CommonStyle = createGlobalStyle`
  .fire-nav-list {
    margin: 10px auto;
    display: flex;
    width: 90%;
    height: 60px;
    background: #3F3535;
    border-radius: 10px;
    border: 1px solid #333333;
    font-size: 24px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #999999;
    padding: 3px;
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
    
`
export default CommonStyle