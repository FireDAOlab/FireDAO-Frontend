import styled from "styled-components";
export default  styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1;
  font-weight: bold;
  .ant-menu-submenu-title{
    i{
      display: none;
    }
  }
  .ant-menu-sub{
    .ant-menu-title-content{
      padding-left: 0.8em;
    }
  }
  .ant-menu-root{
    >.ant-menu-item-selected{
      position: relative;
      &:after{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 2px;
        height: 50px;
        background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
      }
    }
  }

  .ant-menu-submenu-selected{
    background: #070000;
    .ant-menu-submenu-title{
      position: relative;
      &:after{
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: 2px;
        height: 50px;
        background: linear-gradient(320deg, #DD3642 0%, #FFC02C 100%);
      }
    }
  }

  .logo-box{
    width: 100%;
    text-align: center;
    margin-bottom: 1em;
    .logo{
      width: 40%;
      margin:  0.5em;
    }
  }

  .nav-box-box{
    height: 100%;
    &::-webkit-scrollbar-thumb{
      width: 3px;
    }
    &::-webkit-scrollbar{
      width: 3px;
    }
  }
  .navBox{
    background: #201414;
    display: flex;
    padding-bottom: 2em;
    flex-direction: column;
    &::-webkit-scrollbar-thumb{
      width: 3px;
    }
    &::-webkit-scrollbar{
      width: 3px;
    }
    height: 100%;
    overflow-y: scroll;

    .menu{
      flex-grow: 1;
    }
    .lng-choose{
      display: flex;
      align-items: center;
      background: #070000;
      border-radius: 5px;
      border: 1px solid #414141;
      width: 160px;
      height: 40px;
      padding:0 1em;
      justify-content: space-between;
      margin: 0 auto;
      flex-shrink: 0;
      img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }
  .fireIcon{
    width: 26px;
    height: 26px;
  }
  .selectNav{
    position: absolute;
    right: -10em;
    top: calc(0.9em );
    font-size: 18px;
  }
`

