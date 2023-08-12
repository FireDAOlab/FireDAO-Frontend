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


  .flmz{
    margin-top:16px;
    font-family: Roboto-Medium, Roboto;
font-weight: 500;
display: block;
    .fl{
        font-size:20px;
        color:rgba(138, 128, 128, 1);
        font-weight:bold;
       
    }
    .sz{
        font-size:20px;
    }
  }
  .flex-li{
    display: flex;
    flex-direction:initial;
    justify-content:space-between;
    margin-top:20px;

  }
 
  .select-box{
    width: 160px;
    height: 50px;
    background: rgba(255,255,255,0.1);
border-radius: 51px 51px 51px 51px;
border: 1px solid rgba(255,255,255,0.1);


    .ant-select-selector{
    width: 100%;
    height: 100%;
    border-radius:50px;  
    padding-top:10px;
    font-size:18px;
    padding-left: 25px;

    .ant-select-selection-search-input{
    height: 50px;
    
    border-radius: 51px 51px 51px 51px;
  }
}
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




  @media screen and (max-width: 1950px) {

    .ant-form-item-label>label{
      font-size:18px;
      font-family: Roboto-SemiBold, Roboto;
font-weight: 500;
color: #8A8080;
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
     
        .pid-box {
    font-family: Roboto-SemiBold, Roboto;
    font-weight: 500;
    color: #8A8080;
    display: flex;
    align-items: center;
    white-space: nowrap;
    font-size:20px;
    .pid {
      width: 80px;
      padding: 0 10px;
      margin-left: 6px;
      height: 30px;
      background: rgba(254, 109, 70, 0.1);
      border-radius: 38px 38px 38px 38px;
      opacity: 1;
      border: 1px solid rgba(254, 109, 70, 0.5);
      display: flex;
      align-items: center;
      font-size: 20px;
      font-family: Roboto-SemiBold, Roboto;
      font-weight: 500;
      color: #FE6D46;
      justify-content: center;
    }
 
 
  }
  .can-claim {
    color: #8A8080;
font-size:20px;
font-family: Roboto-Medium, Roboto;
font-weight: 500;
color: #8A8080;
    strong {
      font-family: Roboto-Bold, Roboto;
      font-weight: bold;
      color: #FFFFFF;
    }
  }

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
          line-height: 35px;

        }

        .max-btn {
          width: 80px;
          height: 35px;
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
        height: 45px;
        font-size:16px;
        font-family: Roboto-SemiBold, Roboto;
font-weight: 600;
color: #FFFFFF;
      }


    }
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
   
  .fire-list-box{
    background: #1A1414;
    border: 0; 
     border: 1px solid rgb(255,255,255,0.1);
    .list-header{
      border-radius: 20px 20px 0 0px;
      
    
    }
    .list-item{
      padding: 20px;
      margin: 0;
      border-radius: 0;
      
    }
  } 
  
  .fire-list-box-airdrop {

.leader{
    padding: 20px 2.5em;
}
.leaderl{
    padding: 0.5em;
}
.leaderl,.leader{
    display: flex;
    justify-content: flex-start;
}
.col{
    text-align: left;
    align-items: center;
font-size:16px;
&:nth-child(1) {
width: 18%;
margin-right:10px;
}
&:nth-child(2) {
width: 25%;
margin-right:10px;
}
&:nth-child(3) {
width: 17%;
margin-right:10px;
}
&:nth-child(4) {
width: 18%;
margin-right:10px;
}
&:nth-child(5) {
width: 18%;
margin-right:10px;
}
}


.leaderl {
    padding: 0.5 0em;
    width: 94%;
    margin: 0 auto;
    border-radius:0px;
    border-bottom:1px solid rgba(255, 255, 255, 0.1);

    .col {
      overflow: hidden;
      padding-left: 0%;

    }
    .no {
              color: #FE6D46;
            }
            .address {
            
               color: rgba(205, 158, 87, 1);
             
border: 1px solid rgba(205,158,87,0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            border-radius:25px;
           
          }
}

}

.fire-list-box-userclaim {

.reel,.ree{
    display: flex;
    justify-content: flex-start;
}
    .ree{
        padding: 20px 3em;
    }
      .col{
        text-align:left;
align-items:center;
        font-size:16px;
    &:nth-child(1) {
      width: 13%;
      margin-right:5px;
    }

    &:nth-child(2) {
      width: 15%;
      margin-right:5px;
    }

    &:nth-child(3) {
      width: 15%;
      margin-right:5px;
    }

    &:nth-child(4) {
      width: 18%;
      margin-right:5px;
    }
    &:nth-child(5) {
      width: 15%;
      margin-right:5px;
    }
    
    &:nth-child(6) {
      width: 15%;
      margin-right:5px;
    }
   
} 
.reel{
        padding: 0.5 0em;
            width: 94%;
            margin: 0 auto;
            border-radius:0px;
            border-bottom:1px solid rgba(255, 255, 255, 0.1);
            .col {
              overflow: hidden;
              padding-left: 0%;

            }
}
.no{
        color: rgba(228, 134, 134, 1);
    }
    .address {
            
            color: rgba(205, 158, 87, 1);
          
border: 1px solid rgba(205,158,87,0.5);
         background: rgba(205, 158, 87, 0.20);
         text-align:center;
         border-radius:25px;
        
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
  
    .no{
        color: rgba(228, 134, 134, 1);
    }
    .m {
  color: rgba(205, 158, 87, 1);
border: 1px solid rgba(205,158,87,0.5);
            background: rgba(205, 158, 87, 0.20);
            text-align:center;
            padding: 0px 2px;
            border-radius:15px;
           
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

