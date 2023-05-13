import styled from "styled-components";
export default styled.div`
  .firedao-header {
    position: fixed;
    top: 0;
    z-index: 3;
    width: calc(100% - 256px);
    background: #150D0D;
    padding: 1em 3em;
    display: flex;
    justify-content: space-between;

    .nav-list {
      display: flex;
      flex-grow: 1;
      justify-content: flex-end;
      padding: 0 3em;
      align-items: center;

      .nav-item {
        margin-left: 2em;
        cursor: pointer;

        a {
          color: #fff;
        }
      }
    }

  }

  .passport-icon {
    margin-right: 1em;
    padding: 4px 10px;

    img {
      width: 20px;
    }
  }

  .select-chain {
    margin-right: 1em;

    .ant-select-selector {
      border-radius: 10px;
    }
  }

  .menu {
    width: 40px;
    display: none;

  }

  .select-chain {
    width: 140px;
  }

  .m-nav {
    background: rgba(1, 1, 1, 0.3);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    .m-nav-content {
      position: fixed;
      width: 256px;
      right: 0;
      height: 100%;
      background: #201414;
      z-index: 100;

      .close {
        position: relative;
        left: 10px;
        top: 10px;
        z-index: 100;
        padding: 10px 10px;
      }

      .m-nav-box {
        padding-bottom: 30px;
        right: 0;
        top: 0;
      }
    }
  }

  /* mobile style */
  @media screen and (max-width: 1000px) {
    .firedao-header {
      padding: 1em 0.5em 1em 0;
    }

    .menu {
      display: block;
      flex-shrink: 0 !important;
    }

    .passport-icon {
      display: none;
    }

    .select-chain {
      width: auto;
      max-width: 130px;
    }

  }
`

