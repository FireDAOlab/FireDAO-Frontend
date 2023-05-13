import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(180deg, #1E0000 0%, #020000 100%);
    color: #fff;
    position: relative;
  }

  .App {
    min-height: calc(100vh - 12em);
    position: relative;
    z-index: 2;
  }

  @media screen and (max-width: 1500px) {
    .App {
      align-items: flex-start;
      overflow-x: auto;
      padding-bottom: 6em;
      &::-webkit-scrollbar {
        width: 20px;
        height: 20px;
      }

      &::-webkit-scrollbar-track,
      &::-webkit-scrollbar-thumb {
        border-radius: 999px;
        border: 5px solid transparent;
      }

      &::-webkit-scrollbar-thumb {
        min-height: 20px;
        background-clip: content-box;
        box-shadow: 0 0 0 10px rgba(0,0,0,.8) inset;
      }

      &::-webkit-scrollbar-corner {
        background: transparent;
      }
    }
  }

  .content {
    position: relative;
    z-index: 1;
    padding-left: 256px;
    left: 0;
  }

  .firebg {
    width: 100vw;
    position: fixed;
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 0;
    object-fit: fill;
  }

  div {
    box-sizing: border-box;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
    font-size: 14px;
  }


  //  common css


  .fire-list-box {
    padding: 1em 0 2em;
    min-width: 800px;
    .col{
      text-align: center;
      flex-shrink: 0;
    }
    .list-header {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      font-weight: bold;
      padding: 0.5em 1em;
      .col {
        display: flex;
        white-space: nowrap;

        .list-icon {
          width: 16px;
          height: 13px;
          cursor: pointer;
          margin-top: 4px;
          margin-left: 6px;
        }
      }
    }

    .list-item {
      padding: 0.5em 1em;
      display: flex;
      justify-content: space-between;
      background: #3F3535;
      border-radius: 10px;
      margin: 0.5em 0;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      align-items: center;

      .col {
        &.link {
          color: #84C0FF;
        }

        &.address {
          color: #FF9260;
        }

        &.id {
          color: #FF5D69;
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .panel-container{
    }
  }
  .panel-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    .panel-container {
      overflow: auto;
      background: #201414;
      padding: 3em 4em;
      margin: 3em auto;
      box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      opacity: 0.95;
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
          color: #999;
          &.active {
            background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
            box-shadow: 0px 3px 6px 0px rgba(128, 4, 149, 0.3);
            color: #fff;
          }

          &:nth-last-child(1) {
            margin-right: 0;
          }
        }
      }
    }

    .panel-title {
      text-align: left;
      width: 100%;
      font-size: 24px;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 29px;
    }
  }

  .flex-box {
    display: flex;
  }

  /* reset button*/
  .ant-btn-primary {
    border-radius: 10px;
  }

  /* reset form*/

  .ant-form {
    width: 100%;

    .ant-form-item {
      margin-bottom: 10px;
    }

    input, textarea {
      font-size: 16px !important;
    }
  }
  .ant-form-item-label > label::after{
    display: none;
  }
  .ant-form-item-row {
    display: block !important;
  }

  .ant-form-item-control-input {
    overflow: hidden;
    background: rgba(255, 255, 255, 0.15) ;
    min-height: 36px;
  }

  .button-box {
    .ant-form-item-control-input {
      background: none !important;
    }
  }

  .ant-input, .ant-form-item-control-input, .ant-select,.ant-select-selector , .ant-input-status-error, .ant-input-affix-wrapper-status-error, .ant-input-affix-wrapper {
    border-radius: 10px;
  }

  /* input */
  .ant-input-number {
    width: 100%;
    border-radius: 10px;
  }
  /* reset  pagination */
  .ant-pagination-item-link,.ant-pagination-item{
    background: #3F3535!important;
    border-radius: 5px;
  }

  
  /* mobile style */
  @media screen and (max-width: 1000px) {
    .firebg{
      display: none;
    }
    .nav-box-box{
      display: none;
    }
    .content {
      padding-left: 0px;
    }
    .firedao-header{
      width: 100%!important;
      .nav-list{
        display: none!important;
      }
    }
  }
  
`
export default GlobalStyle
