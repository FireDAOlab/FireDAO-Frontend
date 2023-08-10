import styled from "styled-components";
export default  styled.div`
  width: 100%;
  overflow-x: auto;
  position: relative;
  z-index: 1;

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
    box-shadow: 0 0 0 10px rgba(0, 0, 0, .8) inset;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  .footer {
    width: 100%;
    background: rgba(26, 20, 20, 1);
    
   
  }

  @media screen and (min-width: 1950px) {
    .navBox{
      .ant-menu{
        background: rgba(26, 20, 20, 1);
      }
    }
    .footer{
      min-width: 1100px;
    padding: 3% 5%;
    display: flex;
    justify-content: space-between;
      
      .lb{
      display:none;
    }
    }
    
    .logo {
    width: 150px;
  }
  .copyrightphone {
    
    display: none;
  }
  .copyright {
    color: #544545;
    margin-top:1em;
  }

  .link-list {
    display: flex;
    flex-grow: 1;
    margin: 0em;
    
    width: 100%;

    .link-item {
      margin-right: 1em;
      margin-top: 2em;
      cursor: pointer;

      .icon {
        width: 35px;
      }
    }
  }


  .left {
    width: 25%;
  }

  .right {
    width: 65%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    .link-list {
      display: flex;
      width: 100%;
      margin-top: 1em;
      justify-content: flex-end;

      .link {
        width: 90px;
        color: #FFFFFF;
        margin-left: 10px;
        height: 30px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        border: 1px solid #936540;
      }
    }
  }

  .link-box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-family: Helvetica-Bold, Helvetica, sans-serif;

    .link-col {
      opacity: 0.5;

      &:first-child {
        margin-left: 0%;
      }

      .link-row {
        font-weight: bold;
        color: #544545;
        line-height: 26px;
        font-size: 12px;
        cursor: pointer;
        white-space: pre-wrap;
        flex-shrink: 0;
      }

      .link-row.title {
        font-size: 14px;
        line-height: 30px;
        font-weight: bold;
        color: #FFFFFF;
        white-space: pre-wrap;
      }
    }
  }
  }
  @media screen and (max-width: 1950px) {
    .navBox{
      .ant-menu{
        background: rgba(26, 20, 20, 1);
      }
    }
    .footer{
      min-width: 1100px;
    padding: 3% 5%;
    display: flex;
    justify-content: space-between;
      
      .lb{
      display:none;
    }
    }
    
    .logo {
    width: 150px;
  }
  .copyrightphone {
    
    display: none;
  }
  .copyright {
    color: #544545;
    margin-top:1em;
  }

  .link-list {
    display: flex;
    flex-grow: 1;
    margin: 0em;
    
    width: 100%;

    .link-item {
      margin-right: 1em;
      margin-top: 2em;
      cursor: pointer;

      .icon {
        width: 35px;
      }
    }
  }


  .left {
    width: 25%;
  }

  .right {
    width: 65%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    .link-list {
      display: flex;
      width: 100%;
      margin-top: 1em;
      justify-content: flex-end;

      .link {
        width: 90px;
        color: #FFFFFF;
        margin-left: 10px;
        height: 30px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        border: 1px solid #936540;
      }
    }
  }

  .link-box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-family: Helvetica-Bold, Helvetica, sans-serif;

    .link-col {
      opacity: 0.5;

      &:first-child {
        margin-left: 0%;
      }

      .link-row {
        font-weight: bold;
        color: #544545;
        line-height: 26px;
        font-size: 12px;
        cursor: pointer;
        white-space: pre-wrap;
        flex-shrink: 0;
      }

      .link-row.title {
        font-size: 14px;
        line-height: 30px;
        font-weight: bold;
        color: #FFFFFF;
        white-space: pre-wrap;
      }
    }
  }
  }
  @media screen and (max-width: 1500px) {
    .footer{
      min-width: 1100px;
    padding: 3% 5%;
      display: flex;
      justify-content: space-between;
       .lb{
      display:none;
    }
    }
   
    .logo {
    width: 140px;
  }
  .copyrightphone {
    display: none;
  }
  .copyright {
    color: #544545;
  }

  .link-list {
    display: flex;
    flex-grow: 1;
    margin: 0;
    flex-wrap: wrap;
    width:100%;

    .link-item {
      margin-right: 1em;
    margin-top: 1em;
      cursor: pointer;

      .icon {
        width: 35px;
      }
    }
  }


  .left {
    width: 25%;
  }

  .right {
    width: 65%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;

    .link-list {
      display: flex;
      width: 100%;
      margin-top: 2em;
      justify-content: flex-end;

      .link {
        width: 90px;
        color: #FFFFFF;
        margin-left: 10px;
        height: 30px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        border: 1px solid #936540;
      }
    }
  }

  .link-box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-family: Helvetica-Bold, Helvetica, sans-serif;

    .link-col {
      opacity: 0.5;

      &:first-child {
        margin-left: 0%;
      }

      .link-row {
        font-weight: bold;
        color: #544545;
        line-height: 26px;
        font-size: 12px;
        cursor: pointer;
        white-space: pre-wrap;
        flex-shrink: 0;
      }

      .link-row.title {
        font-size: 14px;
        line-height: 30px;
        font-weight: bold;
        color: #FFFFFF;
        white-space: pre-wrap;
      }
    }
  }
  }

  @media screen and (max-width: 450px) {
    
    .footer {
      overflow: hidden;
      padding: 0%;
      width: 100%;
      display: table-footer-group;
      .lb{
        display: block;
        width: 100%;
        .bottom-box-box{
          width: 100%;
          font-size: 18px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: rgba(138, 128, 128, 1);
line-height: 20px;
        }
      }
    
    .right {
      //transform: scale(0.8);
      display: none;
      width: 100%;
      
    }
    .left {
    display: table-footer-group;
    text-align:center;
    margin: 0 20px;
    width: 100%;
  }

  
    .logo {
    width: 140px;
    margin-top: 2.5em;
  }
.link-list{
  justify-content: flex-start;
}
  .copyrightphone {
    display: block;
    color: rgba(138, 128, 128, 1);
    font-size:14px;
    margin-bottom: 20px;
  }

  .link-list {
    display: flex;
    /* justify-content:flex-start; */
    flex-grow: 1;
    flex-wrap: wrap;
    width: 100%;
    margin:1em 0em;
    padding: 0em 4em;
    .link-item {
      margin: 0.5em 0.5em;
      cursor: pointer;

      .icon {
        width: 42px;
      }
    }
  }


  
  

  .link-box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-family: Helvetica-Bold, Helvetica, sans-serif;

    .link-col {
      opacity: 0.5;

      &:first-child {
        margin-left: 0%;
      }

      .link-row {
        font-weight: bold;
        color: #544545;
        line-height: 26px;
        font-size: 12px;
        cursor: pointer;
        white-space: pre-wrap;
        flex-shrink: 0;
      }

      .link-row.title {
        font-size: 14px;
        line-height: 30px;
        font-weight: bold;
        color: #FFFFFF;
        white-space: pre-wrap;
      }
    }
  }
  }

}

  @media screen and (max-width: 400px) {
    
    .footer {
      overflow: hidden;
      padding: 0%;
      width: 100%;
      display: table-footer-group;
      .lb{
        display: block;
        width: 100%;
      
        .bottom-box-box{
          width: 100%;
          font-size: 16px;
font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: rgba(138, 128, 128, 1);
line-height: 20px;
        }
      }
      .right {
      //transform: scale(0.8);
      display: none;
    }
    .left {
    display: table-footer-group;
    text-align:center;
    margin: 0 20px;
    width: 100%;
  }
    
    
    .logo {
    width: 140px;
    margin-top: 2.5em;
  }
.link-list{
  justify-content: flex-start;
}
  .copyrightphone {
    display: block;
    color: rgba(138, 128, 128, 1);
    font-size:14px;
    margin-bottom: 20px;
  }

  .link-list {
    display: flex;
    /* justify-content:flex-start; */
    flex-grow: 1;
    flex-wrap: wrap;
    width: 100%;
    margin:1em 0em;
    padding: 0em 2.5em;
    .link-item {
      margin: 0.5em 0.5em;
      cursor: pointer;

      .icon {
        width: 42px;
      }
    }
  }


  

  

  .link-box {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-family: Helvetica-Bold, Helvetica, sans-serif;

    .link-col {
      opacity: 0.5;

      &:first-child {
        margin-left: 0%;
      }

      .link-row {
        font-weight: bold;
        color: #544545;
        line-height: 26px;
        font-size: 12px;
        cursor: pointer;
        white-space: pre-wrap;
        flex-shrink: 0;
      }

      .link-row.title {
        font-size: 14px;
        line-height: 30px;
        font-weight: bold;
        color: #FFFFFF;
        white-space: pre-wrap;
      }
    }
  }
  }

}

`

