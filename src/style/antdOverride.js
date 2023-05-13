import {createGlobalStyle} from "styled-components";
const AntdOverride = createGlobalStyle`
  .ant-btn-primary {
    background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
    border: none;
    transition: 0.5s;

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
`
export default AntdOverride
