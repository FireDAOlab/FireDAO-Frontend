import styled from "styled-components";
export default styled.div`
  .ant-select-selector {
    border: none !important;
  }

  .page-title {
    font-size: 30px;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    margin-left: 5%;
    padding: 0 8%;
  }

  .ant-form{
    position: relative;
    .down-icon {
      width: 40px;
      height: 40px;
      position: absolute;
    top:27%;
      left:45%;
    }

  }
  .pid {
    width: 80px;
    height: 23px;
    background: rgba(254, 109, 70, 0.1);
    border-radius: 38px 38px 38px 38px;
    opacity: 1;
    border: 1px solid rgba(254, 109, 70, 0.5);
    display: flex;
    font-size: 14px;
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #FE6D46;
    justify-content: center;
  }

  .header-nav {
    width: 90%;
    margin-left: 5%;
    display: flex;
    padding: 0 8%;

    .fire-nav-list {
      .nav-item {
        width: 180px;
      }
    }
  }

  .donate-header {
    display: flex;
    justify-content: space-between;
font-size:16px;
    .isW {
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #8A8080;
      display: flex;
      align-items: center;

      .is {
        width: 80px;
        margin-left: 6px;
        height: 30px;
        background: rgba(254, 109, 70, 0.1);
        border-radius: 38px 38px 38px 38px;
        opacity: 1;
        border: 1px solid rgba(254, 109, 70, 0.5);
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #FE6D46;
        justify-content: center;
      }
    }
  }

  .panel-container {
    padding: 2em 8%;
    width: 90%;
    margin: 10px auto;

    .isInW {
      display: flex;
      width: 100%;
      font-size: 16px;
      font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
      padding-bottom: 30px;
      .kk{
        width: 80px;
        color:rgba(254, 109, 70, 1);
height: 30px;
line-height:30px;
background: rgba(254,109,70,0.1);
border-radius: 50px 50px 50px 50px;
opacity: 1;
border: 1px solid rgba(254,109,70,0.5);
margin: 0px 10px;
text-align:center;
      }
    }

    .info {
      font-size: 20px;
      font-family: Roboto-Medium, Roboto;
      font-weight: 500;
      color: #AC8989;
      line-height: 34px;
    }
  }

  .part1 {
    .panel-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .donate-info {
      margin-top: 2em;
      display: flex;
      justify-content: space-between;

      .flex-box {
        justify-content: space-between;
        width: 60%;

        .info-item {
          margin-left: 50px;

          .value {
            line-height: 50px !important;
            font-size: 24px !important;
          }
        }
      }

      .info-item {

        .name {
          font-size: 16px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #8A8080;
          line-height: 30px;
        }

        .value {
          font-size: 24px;
          font-family: Roboto-Bold, Roboto;
          font-weight: bold;
          color: #FFA756;
          line-height: 50px ;
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }


    .donation-box {
      width: 420px;

      margin: 0 auto;
background: rgba(26, 20, 20, 1);
      border-radius: 20px;
      border: 1px solid rgba(255,255,255,0.1);
      padding: 20px;

      .title {
        font-size: 24px;
        font-family: Roboto-Bold, Roboto;
        font-weight: bold;
        padding-bottom: 10px;

      }

      .donate-part {
        background: rgba(255, 255, 255, 0.1);
        padding: 6px 15px 0;
       margin-top: 6px;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);

        .ant-form-item-control-input {
          background: none;
        }

        .balance-box {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          padding-top:8px;
          font-family: Roboto-Bold, Roboto;
p{
 width:61%;
 text-align:left;
 font-size:16px;color:white;
 font-weight: bold;
}
          .name {
            
            font-weight: bold;
            color: #796B6B;
            line-height: 30px;
          }

          .value {
            font-weight: bold;
            color: #796B6B;
            display: flex;
            line-height: 30px;
            margin-left: 10px;
          }
        }

        .input-box {
          position: relative;
          display: flex;
          align-items: center;

          .right-tip {
            display: flex;
            align-items: center;

            font-size: 16px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;

            .coin-icon {
              width: 30px;
              height: 30px;
              margin-right: 6px;
            }
          }

          .exchangeAmount {
            height: 50px;
            display: flex;
            flex-grow: 1;
            align-items: center;
            font-size: 20px;
            padding: 0 10px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;
          }

          .ant-input-number, .ant-select {
            font-size: 20px;
            font-family: Roboto-Black, Roboto;
            font-weight: 900;
            height: 50px;
            width: 100% !important;

            .ant-input-number-input-wrap, .ant-select-selector, input {
              height: 100%;
              width: 100% !important;
              font-size: 20px !important;
              font-family: Roboto-Black, Roboto;
              display: flex;
              align-items: center;

              font-weight: 900;

              &:focus-visible {
                outline: none;
              }
            }

            .ant-select-clear {
              margin-right: 66px;
            }
          }

          .max-btn {
            width: 60px;
            position: absolute;
            right: 10px;
            top: 10px;
          }

        }

      }

      .tip {
        margin-top: 2em;
        font-size: 14px;
        font-family: Roboto-SemiBold, Roboto;
        font-weight: 600;
        color: #8A8080;
      }
    }



    .donate {
      margin-top: 1em;
      width: 100%;
      height: 50px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
      
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
    }

    .ant-btn-primary {
      margin-top: 1em;
      width: 100%;
      height: 50px;
      font-size: 20px;
      font-family: Helvetica-Bold, Helvetica;
      font-weight: bold;
    }


  }

  .part2 {
    .list-top-part {
      .fire-nav-list {
        padding: 3px;
        margin-top: 1em;
        height: 50px;
        width: 380px;
        .nav-item {
          width: 180px;
        }
      }
    }

  }

  .part3 {
    .btns {
      display: flex;
      justify-content: space-between;
    }

    .tip {
      strong {
        color: #d84a1b;
      }
    }

    .icon-box {
      width: 200px;
      display: flex;
      justify-content: space-between;
      margin: 20px auto;

      .icon {
        cursor: pointer;
      }
    }

    .add-btn {
      margin: 1em 0;
    }
  }

  .fire-list-box {
        .list-header {
            padding: 20px 1em;
        }
        .list-item, .list-header {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
          
        }
  
    .col {
      text-align:left;
      padding-left: 0.5%;
      &:nth-child(1) {
        width: 7%;
      }

      &:nth-child(2) {
        width: 10%;
      }

      &:nth-child(3) {
        width: 13%;
      }

      &:nth-child(4) {
        width: 17.5%;
      }

      &:nth-child(5) {
        width: 8%;
        /* padding-right: 5px; */
      }

      &:nth-child(6) {
        width: 9%;
      }

      &:nth-child(7) {
        width: 8%;
      }

      &:nth-child(8) {
        width: 11%;
      }

      &:nth-child(9) {
        width: 16%;

      }

    }
 

    .list-item {
      .col {
        overflow: hidden;
       
      }
      .id{
            color: #FE6D46;
          }
          .pid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            border-radius:25px;
          }
          .address {
            a{
                color: rgba(205, 158, 87, 1);
                
            }
               
            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            border-radius:25px;
            text-align:center;
          }
    }
   }


        .row2-list-item, .list-header2 {
          justify-content: flex-start;
          /* padding: 0.5em 2.5em 0.5em 2em; */
     
    /* .list-header{
      display: flex;
      justify-content: flex-start;
      font-size: 18px;
      font-weight: bold;
      padding: 20px 1.5em;
    }
    .list-item{
      padding: 0.5em 1em;
      display: flex;
      justify-content: flex-start;
      background: #3F3535;
      border-radius: 10px;
      margin: 0.5em 0;
    } */

    padding: 20px 2em;
    font-size: 18px;
    font-weight: bold;
    color: #8A8080;
   

    .col {
      text-align:left;
      padding-left: 3.5em;
      overflow: hidden;
      &:nth-child(1) {
        width: 23%;
      }

      &:nth-child(2) {
        width: 23%;
      }

      &:nth-child(3) {
        width: 23%;
      }

      &:nth-child(4) {
        width: 23%;
      }

      

    }
 }  

    .row2-list-item {
      .col {
        overflow: hidden;
       
      }
      .id{
            color: #FE6D46;
          }
          .pid{
            color: #FE6D46;
            border: 1px solid #FE6D46;
            background: rgba(254, 109, 70, 0.20);
            border-radius:25px;
          }
          .address {
            a{
                color: rgba(205, 158, 87, 1);
                text-align:center;
            }
               
            border: 1px solid rgba(205, 158, 87, 1);
            background: rgba(205, 158, 87, 0.20);
            border-radius:25px;
            
          }
    }
 

  .pagination {
    text-align: center;
  }

  .list-header3, .row3-list-item {
    padding: 6px;

    .col {
      &:nth-child(1) {
        width: 10%;
      }

      &:nth-child(2) {
      }

      &:nth-child(3) {
        width: 16%;
      }

      &:nth-child(4) {
        width: 40%;
      }

      &:nth-child(5) {
        width: 10%;
      }
    }
  }

  /* mobile style */
  @media screen and (max-width: 1000px) {
    .balance-box {
          display: flex;
          justify-content: flex-end;
          font-size: 16px;
          padding-top:8px;
          font-family: Roboto-Bold, Roboto;
p{
 width:75%;
 text-align:left;
 font-size:16px;color:white;
 font-weight: bold;
}
}

    .page-title{
      padding: 0;
    }
    .header-nav {
      width: 90%;
      margin: 0 auto;
      padding: 0;
     .nav-item{
       height: 50px;
     }

      .fire-nav-list {
        width: 100%;
        margin: 0;
      }
    }

    .fire-list-box {
      width: 100%;
      overflow-x: scroll;
      min-width: 100%;

      .list-item {
        background: none;
      }
    }

    .part1 {
      .donate-info {
        display: block;

        .flex-box {
          .info-item {
            margin-left: 0;
          }
        }
      }

      .donation-box {
        padding: 0;
        border: none;
        background: none;
        width: 100%;
      }
    }

    .part2 {
      .list-top-part {
        display: block;

        .fire-nav-list {
          width: 100%;
        }
      }

    }
  }

`

