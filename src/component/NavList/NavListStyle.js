import styled from "styled-components";
export default styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1;
  font-weight: bold;
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected{
     background: linear-gradient(320deg, #F9D423 0%, #FF4E50 100%);
    /*-webkit-background-clip: text; */
    /* background:-webkit-gradient(linear, left top, left bottom, color-stop(0, #fb7f87), color-stop(1, #bc0404));  */
    -webkit-background-clip: text;
    color: transparent;
    
  }
  .ant-menu-submenu-title {
    
    i {
      display: none;
    }
  }

  .ant-menu-sub {
    .ant-menu-title-content {
      padding:0 2.5em;
    }
  }
.ant-menu-item{
 left:-10px;
}
  .ant-menu-root {
    > .ant-menu-item-selected {
      position: relative;
      background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
      
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 2px;
        height: 25px;
        
background: linear-gradient(-92deg, #FF4E50 0%, #F9D423 100%);
      }
    }
  }

  .ant-menu-submenu-selected {
    /* background: radial-gradient(rgba(205, 144, 51, 0.5), rgba(97, 54, 144, 0.4)); */
    position: relative;
    overflow: hidden;
    .ant-menu-submenu-title{
      position: relative;
      :before{
        content: '';
        position: absolute;
        background-image: radial-gradient( rgba(205, 144, 51, 0.4),rgba(97, 54, 144, 0.3));
        width: 160px;
        height: 160px;
        top: -100px;
        left: 50%;
        filter: blur(10px);
        transform: translate( -50%, 0);
        border-radius: 50%;
      }
    }
    /* background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%); */
    .ant-menu-submenu-title {
      position: relative;
      /* background: rgba(47, 35, 35, 0.2);
      border-radius:25px; */
      &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 2px;
        height: 50px;
        /* background: linear-gradient(320deg,  #FF4E50 0%, #F9D423 100%); */
        border-radius:50px;
      }
    }
  }

  .logo-box {
    width: 100%;
    text-align: center;
    /* margin-bottom: 0.5em; */

    .logo {
      width: 55%;
      margin: 1em;
    }
  }

  .nav-box-box {
    height: 100%;

    &::-webkit-scrollbar-thumb {
      width: 3px;
    }

    &::-webkit-scrollbar {
      width: 3px;
    }
  }
  .ant-menu-item-selected{
  .ant-menu-title-content{
    height: 40px;
      border: 1px solid rgba(255, 255, 255, 0.10);
      background: rgba(255, 255, 255, 0.10);
      border-radius:25px;
    }
}

  .navBox {
    background: #201414;
    display: flex;
    padding-bottom: 2em;
    flex-direction: column;

    &::-webkit-scrollbar-thumb {
      width: 3px;
    }

    &::-webkit-scrollbar {
      width: 3px;
    }

    height: 100%;
    overflow-y: scroll;

    .menu {
      flex-grow: 1;
    }

    .lng-choose {
      display: flex;
      align-items: center;
      background: #070000;
      border-radius: 5px;
      border: 1px solid #414141;
      width: 160px;
      height: 40px;
      padding: 0 1em;
      justify-content: space-between;
      margin: 0.5em auto;
      flex-shrink: 0;

      a {
        color: #fff;
        width: 100%;
        height: 100%;
        line-height: 40px;
        text-align: center;
      }

      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }

  .fireIcon {
    width: 26px;
    height: 26px;
  }

  .selectNav {
    position: absolute;
    right: -10em;
    top: calc(0.9em);
    font-size: 18px;
  }
`

