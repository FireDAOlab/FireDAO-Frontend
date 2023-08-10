import styled from "styled-components";
import passportHeaderBg from "../../../imgs/passport_header_bg.webp";

export default styled.div`
  display: flex;

  align-items: stretch;
.ant-form-item-control-input {
  border-radius:51px;
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
  .panel-title.flex-box {
    justify-content: space-between;
    margin-bottom:0px;
    .search-box {
      display: flex;
      .ant-btn{
        margin-left: 6px;
      }
    }
  }
  .select-box{
    width: 160px;
  }
  .add-coin {
    background: rgba(254, 109, 70, 0.1);
    border-radius: 38px 38px 38px 38px;
    color: #FE6D46;
    font-size: 12px;
    border: 1px solid rgba(254, 109, 70, 0.5);
    padding: 3px 10px;
    cursor: pointer;
    white-space: nowrap;
  }

  .address {
    padding: 6px 15px;
    background: rgba(205, 158, 87, 0.1);
    border-radius: 38px 38px 38px 38px;
    border: 1px solid rgba(205, 158, 87, 0.5);
  }

  .fire-list-box-userclaim {
    .col:nth-child(1) {
      width: 50px;
    }

    .col:nth-child(2) {
      width: 50px;
    }

    .col:nth-child(3) {
      width: 50px;
    }

    .col:nth-child(4) {
      width: 100px;
    }

    .col:nth-child(5) {
      width: 50px;
    }

    .col:nth-child(6) {
      width: 150px;
    }
  }

  .fire-list-box-airdrop {
    .col:nth-child(1) {
      width: 50px;
    }

    .col:nth-child(2) {
      width: 300px;
    }

    .col:nth-child(3) {
      width: 50px;
    }

    .col:nth-child(4) {
      width: 50px;
    }

    .col:nth-child(5) {
      width: 50px;
    }


  }



  @media screen and (max-width: 1950px) {
    .ant-form-item-label>label{
      font-size:18px;
      font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #8A8080;
    }
    .panel-title {
      
      display: flex;
      flex-direction:initial;
      justify-content:space-between;
      p{
        font-size: 30px;
      }
      .lv{
            width: 25%;
            
            display: flex;
            justify-content:space-between;
            img{
                    width: 18px;
                    height: 18px;
                    margin-right: 5px;
                  
                }
            .lvleft{
                width: 46%;
                height: 40px;
background: rgba(255,255,255,0.15);
                border-radius:50px;
                border: 1px solid rgba(255,255,255,0.15);
                font-size:16px;
line-height:20px;
            }
            .lvright{
                width: 46%;height: 40px;
                background: rgba(255,255,255,0.15);
                border-radius:50px;
                border: 1px solid rgba(255,255,255,0.15);
                margin-left:15px;
                font-size:16px;
line-height:20px;
            }
        }
    }


    .can-claim {
      font-size: 12px;
    }
    .add-coin {
      font-size: 12px;
    }

    .content-box {
      flex-direction: initial;

      .left-part, .right-part {
        width: 100%;
        padding: 2vh 5vw;

        .bottom-part {
          .name{
            font-size: 12px;
          }
          .value {
            font-size: 14px;
          }
        }
      }

      .right-part {
        /* margin-top: 20px; */
      }
    }

    .fire-nav-list {
      width: 70vw;
      height: 50px;
    }
    .fire-list-box-airdrop {
 
 .col:nth-child(1) {
   width: 50px;
 }
 .col:nth-child(2) {
   width: 100px;
 }
 .col:nth-child(3) {
   width: 100px;
 }
 .col:nth-child(4) {
   width: 200px;
 }
 .col:nth-child(5) {
   width: 200px;
 }
 .col:nth-child(6) {
   width: 200px;
 }
 .list-header{
   .col{
     text-align: center;
   }
   .col:nth-child(3) {
     padding-left: 30px;
     width: 230px;
   }
 }
}

.pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size:20px;
    .pid {
      width: 40px;
      padding: 0 10px;
      margin-left: 6px;
      height: 23px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      align-items: center;
      font-size: 20px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 600;
      color: #FE6D46;
      justify-content: center;
    }
 
 
  }
  }




  .fire-list-box{
    background: none;
    border: 0;
    .list-header{
      border-radius: 20px 20px 0 0px;
      background: #1A1414;
    }
    .list-item{
      background: #1A1414;
      padding: 20px;
      margin: 0;
      border-radius: 0;
      &:last-child{
        border-radius: 0 0 20px 20px;
      }
    }
  }
  .batch-box{
    display: flex;
    font-size: 24px;
    padding: 20px 25px;
    justify-content: space-between;
    background: #241B1B;
    font-family: Roboto-Bold, Roboto;
    font-weight: bold;
    color: #FFFFFF;
  }
  .fire-list-box-userclaim {
    .list-header{
      .col{
        padding-left: 10px;
      }
    }
    .col {
      width: 50px;
    }

    .col:nth-child(3) {
      width: 100px;
    }
    .col:nth-child(4) {
      width: 150px;
    }
    
    .col:nth-child(6) {
      width: 130px;
      overflow: hidden;
    }
    .no{
        color: rgba(228, 134, 134, 1);
    }
  }


  .claim-nav {
    margin: 10px 0 0px;
  }

  .fire-list-box {
    margin-top: 20px;

    a {
      color: #d46b08;
    }
  }

  .fire-list-box-airdrop {
    .col {
      &:nth-child(1) {
        width: 50px;
      }

      &:nth-child(2) {
        width: 50px;
      }

      &:nth-child(3) {
        width: 100px;
      }

      &:nth-child(4) {
        width: 100px;
      }

      &:nth-child(5) {
        width: 100px;
      }


    }
    .no{
        color: rgba(228, 134, 134, 1);
    }
  }

  .can-claim {
    color: #8A8080;
font-size:20px;
font-family: Roboto-Medium, Roboto;
font-weight: 600;
color: #8A8080;
    strong {
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
    }
  }

  .pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    white-space: nowrap;
    .pid {
      width: auto;
      padding: 0 10px;
      margin-left: 6px;
      height: 23px;
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



  .content-box {
    display: flex;
    justify-content: space-between;
    padding: 0px 0 30px;

    .left-part, .right-part {
      width: 48%;
      background: #1A1414;
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 30px 3%;
    }

    .left-part {
      .title {
        font-size: 20px;
        font-family: Roboto-Medium, Roboto;
        font-weight: 500;
        color: #8A8080;
      }

      .num-box {
        font-size: 40px;
        font-family: Russo One-Regular, Russo One;
        font-weight: 600;
        margin-top: 20px;
background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .bottom-part {
        display: flex;
        margin-top: 3vwvwvvw0px;
        justify-content: space-between;
        flex-wrap: wrap;
        .info-box {
          padding-right: 10px;
          &:last-child {
            margin-right: 0;
          }

          .name {
            font-size: 20px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
line-height: 26px;
          }

          .value {
            font-size: 20px;
            margin-top: 20px;
line-height: 26px;
font-family: Roboto-Bold, Roboto;
            font-weight: bold;
            color: #FFFFFF;
          }
        }
      }
    }

    .right-part {
      .info-box {
        display: flex;
        justify-content: space-between;
      }

      .withdrawForm {
        margin-top: 20px;
      }

      .input-box {

        position: relative;
        display: flex;
        align-items: center;

        input {
          font-size: 18px;
          font-family: Russo One-Regular, Russo One;
          font-weight: 400;
          line-height: 32px;

        }

        .max-btn {
          width: 80px;
          height: 32px;
          background: linear-gradient(32deg, #FF4E50 0%, #F9D423 100%);
          border-radius: 38px;
          position: absolute;
          right: 0;
          display: flex;
          justify-content: center;
          margin-right:5px;
          align-items: center;
          font-size: 16px;
          font-family: Roboto-SemiBold, Roboto;
          font-weight: 600;
          cursor: pointer;
        }

      }

      .withdraw-btn {
        margin-top: 10px;
        width: 100%;
        height: 42px;
        font-size:16px;
        font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FFFFFF;
      }
    }
  }

  .panel-container {
    .nav-box {
      display: flex;
    }

    .fire-nav-list {
      width: 37%;
      
      .nav-item {
        width: 180px;
        font-size:18px;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .panel-title {
      font-size: 21px;
    }
    .can-claim {
      font-size: 12px;
    }
    .add-coin {
      font-size: 12px;
    }

    .content-box {
      flex-direction: column;

      .left-part, .right-part {
        width: 100%;
        padding: 2vh 5vw;

        .bottom-part {
          .name{
            font-size: 12px;
          }
          .value {
            font-size: 14px;
          }
        }
      }

      .right-part {
        margin-top: 20px;
      }
    }

    .fire-nav-list {
      width: 70vw;
      height: 50px;
    }
    .fire-list-box-airdrop {
 
 .col:nth-child(1) {
   width: 50px;
 }
 .col:nth-child(2) {
   width: 100px;
 }
 .col:nth-child(3) {
   width: 100px;
 }
 .col:nth-child(4) {
   width: 200px;
 }
 .col:nth-child(5) {
   width: 200px;
 }
 .col:nth-child(6) {
   width: 200px;
 }
 .list-header{
   .col{
     text-align: center;
   }
   .col:nth-child(3) {
     padding-left: 30px;
     width: 230px;
   }
 }
}

.pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 600;
    color: #8A8080;
    display: flex;
    align-items: center;
    white-space: nowrap;
    .pid {
      width: 40px;
      padding: 0 10px;
      margin-left: 6px;
      height: 23px;
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
  
  .pagination {
    display: flex;
    justify-content: center;
  }
`;

