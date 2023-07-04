import {createGlobalStyle} from "styled-components";
const AntdOverride = createGlobalStyle`
  .ant-btn-primary {
    background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
    border: none;
    transition: 0.5s;
    border-radius: 25px;
    &:hover {
      background: linear-gradient(320deg, #FFC02C 0%, #DD3642 100%);
    }

    &:focus {
      background: linear-gradient(320deg, #FFC02C 0%, #DD3642 100%);
    }

    &:active {
      background: linear-gradient(320deg, #FFC02C 0%, #DD3642 100%);
    }

    ::after {
      display: none;
    }
  }

  .ant-menu.ant-menu-dark, .ant-menu-dark .ant-menu-sub, .ant-menu.ant-menu-dark .ant-menu-sub {
    background: #201414;
  }

  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: #150D0D;
    background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background: #150D0D;
  }

  .ant-message-notice {

    .ant-message-notice-content {
      background: rgba(0, 0, 0, 0.8);
      border-radius: 20px;
      padding: 1em 1.5em;

      .ant-message-custom-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        .anticon {
          font-size: 22px;
        }

        span {
          margin-top: 0.5em;
          font-size: 16px;
        }
      }

    }

    &:nth-child(1) {
      margin-top: 20vh;
    }
  }

  .ant-radio-inner::after {
    background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #FFC02C;
  }

  .ant-switch-checked {
    background: #c29322;;
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
  .ant-pagination{
    margin-top: 20px;
    .ant-pagination-item-active:hover a {
      color: #FF8D4D;
    }
    .ant-pagination-item-active {
      border-color: #FF8D4D;
      a{
        color: #FF8D4D;
      }
    }
    .ant-pagination-item-link {
      color: hsla(0,0%,100%,.3);
      border-color: #434343;
      cursor: not-allowed;
      border-radius: 10px;
    }
  }
  .ant-pagination-item-link,.ant-pagination-item{
    background: #3F3535!important;
    border-radius: 5px;
  }
  
  //ant step
  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: #FF8D4D;
    border-color: #FF8D4D;
    
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: #FF8D4D;
    

    svg {
      fill: #FF8D4D;
    }
  }
  .ant-steps-item-finish>.ant-steps-item-container>.ant-steps-item-tail:after {
    background-color: #FF8D4D;
  }
`
export default AntdOverride
