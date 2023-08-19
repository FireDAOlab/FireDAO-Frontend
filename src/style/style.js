import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "RoBoto-Medium";
    src: url("./font/RobotoMedium.ttf");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Russo One-Regular";
    src: url("./font/RussoOne-Regular.ttf");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto-Bold";
    src: url("./font/Roboto-Bold.ttf");
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    font-family: Helvetica-Bold,Helvetica,sans-serif;

  }
  .ant-input-affix-wrapper:hover{
    border-color:rgba(255, 255, 255, 0.10);

  }
  .ant-input-affix-wrapper:focus{
    border-color:rgba(255, 255, 255, 0.10);

  }
  .ant-input{
  border-radius:51px;
  border-color:rgba(255, 255, 255, 0.10);

}
.ant-input:focus{
border-color:rgba(255, 255, 255, 0.10);
}
.ant-input:hover{
border-color:rgba(255, 255, 255, 0.10);
}
  input::-webkit-validation-bubble {
    display: none!important;
  }
  input::-webkit-inner-spin-button {
    appearance: none !important;
  }

  input::-webkit-outer-spin-button {
    appearance: none !important;
  }

  /* Firefox */
  
  input:-moz-validation-bubble {
    display: none;
  }

  /* Edge and IE */
  input::-ms-validation-bubble {
    display: none;
  }
  input[type='number'] {
    appearance: textfield;
  }

  input[type='number'] {
    -moz-appearance: textfield;
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
  .flex-container{
    width: 100%;
    padding: 0 10%;
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
    background: #1A1414;
    border-radius: 25px;
    border: 1px solid rgba(255,255,255,0.1);
    padding: 0em 0 0em;
    margin: 0em;
    /* min-width: 800px; */
    .col{
      text-align: center;
      flex-shrink: 0;
    }
    .list-header {
      display: flex;
      justify-content: space-between;
      font-weight: bold;

      border-bottom: 1px solid rgba(255,255,255,0.1);
      color: #8A8080;
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
      padding: 1em 0.5em;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      align-items: center;
      border-bottom:  1px solid rgba(255,255,255,0.1);
      /* &:last-child{
        border-bottom: none;
      } */
      .no{
        color: #E48686;
      }
      
    }
  }

  .panel-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    .panel-container {
      width: 100%;
      overflow: auto;
      border: 1px solid rgba(255,255,255,0.1);
      background: #241B1B;
      padding: 30px 11.7%;
      margin: 0.5em auto;
      box-shadow: 0px 3px 15px 5px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      opacity: 1;
      //scroll
      &::-webkit-scrollbar-corner {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: #535353;
      }

      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background: #ededed;
      }
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
      font-size: 30px;
      font-family: Helvetica-Bold, Helvetica, sans-serif;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 1.6;
    }
  }

  .flex-box {
    display: flex;
  }

  /* reset button*/
  .ant-btn-primary {
    border-radius: 25px;
    text-shadow:none;
  }
  .connect-button{
    border-radius: 25px;
  }
  /* reset form*/

  .ant-form {
    width: 100%;

    .ant-form-item {
      margin-bottom: 10px;
    }

    /* input, textarea {
      font-size: 16px !important;
    } */
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
  textarea{
    padding: 10px;
    &:focus-visible {
      outline: none;
    }
  }
  .logo-box1{
      display: none;
    }

    @media screen and (min-width: 1950px) {
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
    .panel-box{
      .panel-title {
        font-size:30px;
        margin: 0px;
      }
    }
    .fire-list-box {
  
      .col {
        font-size:16px;
    }}
    .fire-list-box {
      .list-header{
        font-size:16px;
      }
    }

  }

  @media screen and (max-width: 1950px) {
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
    .panel-box{
      .panel-title {
        font-size:30px;
        margin: 0px;
      }
    }
    .fire-list-box { 
      .col {
        font-size:16px;
    }}
    .fire-list-box {
      .list-header{
        font-size:16px;
      }
    }

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

    .panel-box{
      .panel-title {
        font-size:21px;
        margin: 0px;
      }
    }
    .fire-list-box { 
      .col {
        font-size:15px;
    }  .list-header{
        font-size:15px;
      }
    }
    
  }



  @media screen and (max-width: 450px) {

.App{
  background:rgba(20, 14, 14, 1);
  padding-bottom: 2em;
}
  .flex-container{
width: 100%;
padding: 0 4%;
.logo{
  width: 40%;
}
}

.firebg{
  display: none;
}
.logo-box1{
  display: block;
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
 
  .member{
    border: 1px solid white;
    width: 100%;
    height: 100%;
    background: #1E0000;
    border-radius:50%;
  }
}
.panel-box {
      .panel-container{
        padding: 20px 6%;
      }}
.panel-box{
      .panel-title {
        font-size:18px;
        margin: 0px;
      }
    }

.fire-list-box {
    border-radius:10px;
  .col {
    font-size:14px;
}}
.fire-list-box {
  .list-header{
    font-size:14px;
  }
}
}


  @media screen and (max-width: 400px) {

    .App{
      background:rgba(20, 14, 14, 1);
      padding-bottom: 2em;
    }
      .flex-container{
    width: 100%;
    padding: 0 4%;
    .logo{
      width: 40%;
    }
  }

    .firebg{
      display: none;
    }
    .logo-box1{
      display: block;
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
     
      .member{
        border: 1px solid white;
        width: 100%;
        height: 100%;
        background: #1E0000;
        border-radius:50%;
      }
    }
    .panel-box{
      .panel-title {
        font-size:18px;
        margin: 0px;
      }
    }
    .panel-box {
      .panel-container{
        padding: 20px 6%;
      }}
    
    .fire-list-box {
        border-radius:10px;
      .col {
        font-size:14px;
    }}
    .fire-list-box {
      .list-header{
        font-size:14px;
      }
    }
  }
  
`
export default GlobalStyle
